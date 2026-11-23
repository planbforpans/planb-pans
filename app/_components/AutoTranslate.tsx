'use client'

import { useEffect, useState } from 'react'

// The English | Español switch, on every page.
//
// Rachel, 2026-11-21: "We have a heavy Spanish speaking group joining. Can we
// make everything in Spanish if parents want it? They can switch languages?"
// and "just launch now and she can correct tomorrow."
//
// When a parent picks Español, the page's visible text is translated in place
// through /api/translate (Claude, with hand-checked overrides that always win)
// and cached in the browser, so each phrase is fetched once. Only text-node
// values and a few attributes are changed — never the DOM structure — so React
// keeps working. Anything inside [translate="no"] or [data-no-translate] is
// left alone. Switching back to English reloads the page.

const LANG_KEY = 'pb_lang'
const CACHE_KEY = 'pb_es_cache_v1'
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'CODE', 'PRE', 'SVG', 'IFRAME'])
const ATTRS = ['placeholder', 'title', 'aria-label', 'alt']

// The choice is shared across planbforpans.com and app.planbforpans.com through a
// cookie on the parent domain, so a parent picks Español once.
export function getLang(): 'en' | 'es' {
  try {
    const c = document.cookie.match(/(?:^|; )pb_lang=(en|es)/)
    if (c) return c[1] as 'en' | 'es'
    return window.localStorage.getItem(LANG_KEY) === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

function loadCache(): Record<string, string> {
  try {
    return JSON.parse(window.localStorage.getItem(CACHE_KEY) || '{}')
  } catch {
    return {}
  }
}

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
  const [lang, setLang] = useState<'en' | 'es'>('en')

  useEffect(() => {
    setLang(getLang())
  }, [])

  useEffect(() => {
    if (lang !== 'es') return
    document.documentElement.lang = 'es'
    const cache = loadCache()
    const mine = new WeakMap<Node, string>() // node -> Spanish we wrote
    const attrMine = new WeakMap<Element, Record<string, string>>()
    let timer: ReturnType<typeof setTimeout> | null = null
    let running = false

    const persist = () => {
      try {
        const keys = Object.keys(cache)
        if (keys.length > 4000) keys.slice(0, keys.length - 4000).forEach((k) => delete cache[k])
        window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
      } catch {}
    }

    const fetchMissing = async (strings: string[]) => {
      const missing = Array.from(new Set(strings.filter((s) => !(s in cache))))
      const chunks: string[][] = []
      for (let i = 0; i < missing.length; i += 25) chunks.push(missing.slice(i, i + 25))
      // Up to 6 batches at once, so a long page fills in within seconds.
      for (let i = 0; i < chunks.length; i += 6) {
        await Promise.all(
          chunks.slice(i, i + 6).map(async (chunk) => {
            try {
              const r = await fetch('https://app.planbforpans.com/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ target: 'es', texts: chunk }),
              })
              const j = await r.json()
              if (Array.isArray(j.translations)) chunk.forEach((s, k) => (cache[s] = j.translations[k] || s))
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
        await fetchMissing(wanted)
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
      } finally {
        running = false
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

  const choose = (l: 'en' | 'es') => {
    if (l === lang) return
    try {
      window.localStorage.setItem(LANG_KEY, l)
      const domain = /(^|\.)planbforpans\.com$/.test(window.location.hostname) ? '; domain=.planbforpans.com' : ''
      document.cookie = `${LANG_KEY}=${l}; path=/; max-age=31536000; samesite=lax${domain}`
    } catch {}
    if (l === 'en') window.location.reload()
    else setLang('es')
  }

  const pill = (l: 'en' | 'es', label: string) => (
    <button
      type="button"
      onClick={() => choose(l)}
      aria-pressed={lang === l}
      style={{
        border: 0,
        background: lang === l ? '#2E6E70' : 'transparent',
        color: lang === l ? '#fff' : '#2E6E70',
        fontSize: 13,
        fontWeight: 700,
        padding: '6px 11px',
        borderRadius: 14,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )

  return (
    <div
      translate="no"
      data-no-translate
      style={{
        position: 'fixed',
        left: 6,
        bottom: 'calc(6px + env(safe-area-inset-bottom))',
        opacity: 0.97,
        zIndex: 2147482000,
        display: 'flex',
        gap: 2,
        background: '#fff',
        border: '1px solid #CFDCDA',
        borderRadius: 18,
        padding: 2,
        boxShadow: '0 2px 10px rgba(0,0,0,.12)',
      }}
    >
      <span aria-hidden style={{ alignSelf: 'center', padding: '0 4px 0 6px', fontSize: 15 }}>🌐</span>
      {pill('en', 'English')}
      {pill('es', 'Español')}
    </div>
  )
}
