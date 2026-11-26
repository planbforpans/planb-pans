'use client'

import { useEffect, useRef, useState } from 'react'
import { LANGS, fromBrowser, isLang, langInfo, type Lang } from '@/lib/languages'

// The language picker, on every page. English and Español first (2026-11-21);
// French, German, Portuguese, Italian, Chinese, Japanese and Arabic (right to
// left) added 2026-11-26 — see src/lib/languages.ts.
//
// Rachel, 2026-11-21: "We have a heavy Spanish speaking group joining. Can we
// make everything in Spanish if parents want it? They can switch languages?"
// and "just launch now and she can correct tomorrow."
//
// When a parent picks a language, the page's visible text is translated in place
// through /api/translate (Claude, with hand-checked overrides that always win)
// and cached in the browser, so each phrase is fetched once. Only text-node
// values and a few attributes are changed — never the DOM structure — so React
// keeps working. Anything inside [translate="no"] or [data-no-translate] is
// left alone. Switching from any translated language reloads the page, so the
// translation always starts from the English.

const LANG_KEY = 'pb_lang'
const cacheKey = (l: Lang) => `pb_${l}_cache_v1`
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'CODE', 'PRE', 'SVG', 'IFRAME'])
const ATTRS = ['placeholder', 'title', 'aria-label', 'alt']

// The choice is shared across planbforpans.com and app.planbforpans.com through a
// cookie on the parent domain, so a parent picks a language once. On a first
// visit with nothing chosen, the browser's language decides. A link with
// ?lang=ar (or any code) picks the language for whoever opens it.
export function getLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (isLang(q)) {
      setLangChoice(q)
      return q
    }
    const c = document.cookie.match(/(?:^|; )pb_lang=([A-Za-z-]+)/)
    if (c && isLang(c[1])) return c[1]
    const s = window.localStorage.getItem(LANG_KEY)
    if (isLang(s)) return s
    return fromBrowser(navigator.languages?.length ? navigator.languages : [navigator.language || 'en'])
  } catch {
    return 'en'
  }
}

export function setLangChoice(l: Lang) {
  try {
    window.localStorage.setItem(LANG_KEY, l)
    const domain = /(^|\.)planbforpans\.com$/.test(window.location.hostname) ? '; domain=.planbforpans.com' : ''
    document.cookie = `${LANG_KEY}=${l}; path=/; max-age=31536000; samesite=lax${domain}`
  } catch {}
}

function loadCache(l: Lang): Record<string, string> {
  try {
    return JSON.parse(window.localStorage.getItem(cacheKey(l)) || '{}')
  } catch {
    return {}
  }
}

const ARABIC_FONT = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap'

function worthTranslating(s: string): boolean {
  const t = s.trim()
  return t.length > 1 && /[A-Za-z]{2}/.test(t) && !/^https?:\/\//.test(t) && !/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(t)
}

function skipped(el: Element | null): boolean {
  for (let e = el; e; e = e.parentElement) {
    if (SKIP.has(e.tagName)) return true
    if (e.getAttribute('translate') === 'no' || e.hasAttribute('data-no-translate') || (e as HTMLElement).isContentEditable) return true
  }
  return false
}

export default function AutoTranslate() {
  const [busy, setBusy] = useState(false)
  const [lang, setLang] = useState<Lang>('en')
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  useEffect(() => {
    setLang(getLang())
  }, [])

  useEffect(() => {
    if (lang === 'en') return
    const info = langInfo(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = info.dir
    if (lang === 'ar' && !document.getElementById('pb-arabic-font')) {
      const link = document.createElement('link')
      link.id = 'pb-arabic-font'
      link.rel = 'stylesheet'
      link.href = ARABIC_FONT
      document.head.appendChild(link)
    }
    const cache = loadCache(lang)
    const mine = new WeakMap<Node, string>() // node -> Spanish we wrote
    const attrMine = new WeakMap<Element, Record<string, string>>()
    let timer: ReturnType<typeof setTimeout> | null = null
    let running = false

    const persist = () => {
      try {
        const keys = Object.keys(cache)
        if (keys.length > 4000) keys.slice(0, keys.length - 4000).forEach((k) => delete cache[k])
        window.localStorage.setItem(cacheKey(lang), JSON.stringify(cache))
      } catch {
        // Storage full: drop the other languages' caches and try once more.
        try {
          LANGS.forEach((l) => l.code !== lang && window.localStorage.removeItem(cacheKey(l.code)))
          window.localStorage.setItem(cacheKey(lang), JSON.stringify(cache))
        } catch {}
      }
    }

    const fetchMissing = async (strings: string[], onBatch: () => void) => {
      const missing = Array.from(new Set(strings.filter((s) => !(s in cache))))
      const chunks: string[][] = []
      for (let i = 0; i < missing.length; i += 8) chunks.push(missing.slice(i, i + 8))
      // Small batches, 10 at a time, applied as each lands: the top of the page is translated in a second or two.
      for (let i = 0; i < chunks.length; i += 10) {
        await Promise.all(
          chunks.slice(i, i + 10).map(async (chunk) => {
            try {
              const r = await fetch('https://app.planbforpans.com/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ target: lang, texts: chunk }),
              })
              const j = await r.json()
              if (Array.isArray(j.translations)) chunk.forEach((s, k) => (cache[s] = j.translations[k] || s))
              onBatch()
            } catch {}
          }),
        )
      }
      if (missing.length) persist()
    }

    const run = async () => {
      if (running) return
      running = true
      try {
        const nodes: Text[] = []
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          const t = n as Text
          const v = t.nodeValue || ''
          if (mine.get(t) === v || !worthTranslating(v) || skipped(t.parentElement)) continue
          nodes.push(t)
        }
        const els = Array.from(document.body.querySelectorAll<HTMLElement>(ATTRS.map((a) => `[${a}]`).join(','))).filter((e) => e.getAttribute('translate') !== 'no' && !e.hasAttribute('data-no-translate') && !skipped(e.parentElement))
        const wanted = nodes.map((t) => (t.nodeValue || '').trim())
        els.forEach((e) => ATTRS.forEach((a) => {
          const v = e.getAttribute(a)
          if (v && worthTranslating(v) && attrMine.get(e)?.[a] !== v) wanted.push(v.trim())
        }))
        if (!wanted.length) return
        const apply = () => {
        nodes.forEach((t) => {
          const v = t.nodeValue || ''
          const es = cache[v.trim()]
          if (!es || es === v.trim()) return
          const lead = v.match(/^\s*/)?.[0] || ''
          const trail = v.match(/\s*$/)?.[0] || ''
          const next = lead + es + trail
          mine.set(t, next)
          t.nodeValue = next
        })
        els.forEach((e) => ATTRS.forEach((a) => {
          const v = e.getAttribute(a)
          if (!v) return
          const es = cache[v.trim()]
          if (es && es !== v) {
            const rec = attrMine.get(e) || {}
            rec[a] = es
            attrMine.set(e, rec)
            e.setAttribute(a, es)
          }
        }))
        }
        apply()
        if (wanted.some((w) => !(w in cache))) {
          setBusy(true)
          await fetchMissing(wanted, apply)
          apply()
        }
      } finally {
        running = false
        setBusy(false)
      }
    }

    const schedule = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(run, 200)
    }
    const obs = new MutationObserver(schedule)
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS })
    run()
    return () => {
      obs.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [lang])

  const choose = (l: Lang) => {
    if (l === lang) return
    setLangChoice(l)
    setOpen(false)
    // From English, translate in place; from any other language, start again from the English.
    if (lang === 'en') { setLang(l); window.dispatchEvent(new Event('pb-lang')) }
    else window.location.reload()
  }

  const info = langInfo(lang)
  return (
    <div
      ref={box}
      translate="no"
      data-no-translate
      dir="ltr"
      style={{
        position: 'fixed',
        left: 6,
        bottom: 'calc(6px + env(safe-area-inset-bottom))',
        opacity: 0.97,
        zIndex: 2147482000,
        maxWidth: 'calc(100vw - 12px)',
      }}
    >
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          style={{
            listStyle: 'none',
            margin: '0 0 6px',
            padding: 4,
            background: '#fff',
            border: '1px solid #CFDCDA',
            borderRadius: 14,
            boxShadow: '0 4px 18px rgba(0,0,0,.16)',
            width: 170,
          }}
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang === l.code}
                lang={l.code}
                dir={l.dir}
                onClick={() => choose(l.code)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'start',
                  border: 0,
                  background: lang === l.code ? '#2E6E70' : 'transparent',
                  color: lang === l.code ? '#fff' : '#1F2424',
                  fontSize: 14,
                  fontWeight: lang === l.code ? 700 : 500,
                  padding: '8px 12px',
                  borderRadius: 10,
                  cursor: 'pointer',
                }}
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          background: '#fff',
          border: '1px solid #CFDCDA',
          borderRadius: 18,
          padding: 2,
          boxShadow: '0 2px 10px rgba(0,0,0,.12)',
        }}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Language: ${info.name}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: 0,
            background: 'transparent',
            color: '#2E6E70',
            fontSize: 13,
            fontWeight: 700,
            padding: '6px 11px 6px 8px',
            borderRadius: 14,
            cursor: 'pointer',
          }}
        >
          <span aria-hidden style={{ fontSize: 15 }}>🌐</span>
          <span lang={lang} dir={info.dir}>{busy ? info.translating : info.name}</span>
          <span aria-hidden style={{ fontSize: 10 }}>▾</span>
        </button>
        {lang !== 'en' && (
          <span lang={lang} dir={info.dir} style={{ fontSize: 10, lineHeight: 1.3, color: '#5B6766', padding: '0 10px 5px', maxWidth: 200 }}>
            {info.note}
          </span>
        )}
      </div>
    </div>
  )
}
