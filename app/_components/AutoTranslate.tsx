'use client'

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { LANGS, REQUEST_COPY, fromBrowser, isLang, langInfo, shouldOfferChooser, type Lang } from '@/lib/languages'

// The language chooser, on every page. English and Español first (2026-11-21);
// French, German, Portuguese, Italian, Chinese (Simplified and Traditional),
// Japanese and Arabic (right to left) added 2026-11-26 — see src/lib/languages.ts.
//
// Rachel, 2026-11-21: "We have a heavy Spanish speaking group joining. Can we
// make everything in Spanish if parents want it? They can switch languages?"
// and "just launch now and she can correct tomorrow."
// Rachel, 2026-11-26: "a parent needs to be able to click the correct
// language" and "phone vital": one tap, big buttons, a bottom sheet on phones.
//
// When a parent picks a language, the page's visible text is translated in place
// through /api/translate (Claude, with hand-checked overrides that always win)
// and cached in the browser, so each phrase is fetched once. Only text-node
// values and a few attributes are changed — never the DOM structure — so React
// keeps working. Anything inside [translate="no"] or [data-no-translate] is
// left alone. Switching from any translated language reloads the page, so the
// translation always starts from the English.

const LANG_KEY = 'pb_lang'
const DISMISSED_KEY = 'pb_lang_dismissed'
const cacheKey = (l: Lang) => `pb_${l}_cache_v1`
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'CODE', 'PRE', 'SVG', 'IFRAME'])
const ATTRS = ['placeholder', 'title', 'aria-label', 'alt']
const TEAL = '#2E6E70'

function savedLang(): Lang | null {
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
  } catch {}
  return null
}

// The choice is shared across planbforpans.com and app.planbforpans.com through a
// cookie on the parent domain, so a parent picks a language once. A link with
// ?lang=ar (or any code) picks the language for whoever opens it. Nothing is
// translated until a language is chosen; a first visit outside US English gets
// the chooser instead.
export function getLang(): Lang {
  return savedLang() || 'en'
}

export function setLangChoice(l: Lang) {
  try {
    window.localStorage.setItem(LANG_KEY, l)
    const domain = /(^|\.)planbforpans\.com$/.test(window.location.hostname) ? '; domain=.planbforpans.com' : ''
    document.cookie = `${LANG_KEY}=${l}; path=/; max-age=31536000; samesite=lax${domain}`
  } catch {}
}

export function openLanguageChooser() {
  window.dispatchEvent(new Event('pb-lang-open'))
}

function browserLangs(): string[] {
  try {
    return navigator.languages?.length ? [...navigator.languages] : [navigator.language || 'en']
  } catch {
    return ['en']
  }
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

// "🌐 Español": the compact button that opens the chooser. Used in page
// headers (sign-in, intake, family hub, the website) and as the corner button
// on every other page. While a header button is on the page the corner one hides.
export function LangButton({ className, style, corner }: { className?: string; style?: CSSProperties; corner?: boolean }) {
  const [lang, setLang] = useState<Lang>('en')
  const [busy, setBusy] = useState(false)
  useEffect(() => {
    const read = () => setLang(getLang())
    const onBusy = (e: Event) => setBusy(!!(e as CustomEvent<boolean>).detail)
    read()
    window.addEventListener('pb-lang', read)
    window.addEventListener('pb-lang-busy', onBusy)
    const root = document.documentElement
    if (!corner) root.dataset.pbLangHeader = String(Number(root.dataset.pbLangHeader || 0) + 1)
    return () => {
      window.removeEventListener('pb-lang', read)
      window.removeEventListener('pb-lang-busy', onBusy)
      if (!corner) {
        const n = Number(root.dataset.pbLangHeader || 1) - 1
        if (n > 0) root.dataset.pbLangHeader = String(n)
        else delete root.dataset.pbLangHeader
      }
    }
  }, [corner])
  const info = langInfo(lang)
  return (
    <button
      type="button"
      translate="no"
      data-no-translate
      data-pb-lang-corner={corner ? '' : undefined}
      className={className}
      onClick={openLanguageChooser}
      aria-haspopup="dialog"
      aria-label={`Language: ${info.name}. Change language`}
      title={info.note || undefined}
      style={className ? style : {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        minHeight: 44,
        padding: '0 14px 0 11px',
        border: '1px solid #CFDCDA',
        borderRadius: 999,
        background: '#fff',
        color: TEAL,
        fontSize: 14,
        fontWeight: 700,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span aria-hidden style={{ fontSize: 16, lineHeight: 1 }}>🌐</span>
      <span lang={lang} dir={info.dir}>{busy ? info.translating : info.name}</span>
    </button>
  )
}

const SHEET_CSS = `
.pbl-backdrop{position:fixed;inset:0;z-index:2147482600;background:rgba(18,32,32,.46);display:flex;align-items:flex-end;justify-content:center;animation:pbl-fade .18s ease-out}
.pbl-sheet{box-sizing:border-box;width:100%;max-width:480px;max-height:88vh;max-height:88dvh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;background:#fff;color:#1F2424;border-radius:22px 22px 0 0;padding:10px 16px calc(16px + env(safe-area-inset-bottom));box-shadow:0 -8px 30px rgba(0,0,0,.18);animation:pbl-up .22s cubic-bezier(.2,.8,.2,1)}
.pbl-grab{width:40px;height:5px;border-radius:3px;background:#D5DEDC;margin:0 auto 10px}
.pbl-top{display:flex;align-items:flex-start;gap:8px}
.pbl-title{flex:1;margin:4px 0 0;font-size:22px;line-height:1.25;font-weight:700}
.pbl-x{flex:none;width:44px;height:44px;border:0;border-radius:22px;background:#F1F5F4;color:#1F2424;font-size:20px;cursor:pointer}
.pbl-also{display:flex;flex-wrap:wrap;gap:2px 12px;margin:6px 0 14px;font-size:13px;line-height:1.6;color:#5B6766}
.pbl-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pbl-opt{box-sizing:border-box;min-height:56px;width:100%;padding:8px 10px;border:1.5px solid #CFDCDA;border-radius:14px;background:#fff;color:#1F2424;font-size:17px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;text-align:center;line-height:1.2}
.pbl-opt[aria-pressed="true"]{background:${TEAL};border-color:${TEAL};color:#fff}
.pbl-opt.pbl-sugg{border-color:${TEAL};border-width:2.5px}
.pbl-opt:focus-visible,.pbl-x:focus-visible,.pbl-keep:focus-visible{outline:3px solid #F2B04A;outline-offset:2px}
.pbl-keep{margin-top:12px;width:100%;min-height:52px;border:0;border-radius:14px;background:#F1F5F4;color:#1F2424;font-size:16px;font-weight:600;cursor:pointer}
.pbl-note{margin:12px 2px 0;font-size:12px;color:#5B6766;text-align:center}
.pbl-ask{display:block;margin:14px auto 0;min-height:44px;padding:8px 12px;border:0;background:none;color:${TEAL};font-size:15px;font-weight:600;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.pbl-form{display:grid;gap:12px;margin-top:6px}
.pbl-form label{display:grid;gap:5px;font-size:14px;font-weight:600;color:#3A4545}
.pbl-form input,.pbl-form textarea{box-sizing:border-box;width:100%;min-height:48px;padding:10px 12px;border:1.5px solid #CFDCDA;border-radius:12px;background:#fff;color:#1F2424;font:inherit;font-size:16px;font-weight:400}
.pbl-form textarea{min-height:76px;resize:vertical}
.pbl-form input:focus,.pbl-form textarea:focus{outline:3px solid #F2B04A;outline-offset:1px;border-color:${TEAL}}
.pbl-send{min-height:52px;border:0;border-radius:14px;background:${TEAL};color:#fff;font-size:17px;font-weight:700;cursor:pointer}
.pbl-send[disabled]{opacity:.6;cursor:default}
.pbl-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.pbl-thanks{margin:18px 4px 6px;font-size:18px;line-height:1.45;font-weight:600;text-align:center;color:${TEAL}}
.pbl-err{margin:0;font-size:14px;color:#8A2D1F}
.pbl-ask:focus-visible,.pbl-send:focus-visible{outline:3px solid #F2B04A;outline-offset:2px}
@media (min-width:640px){.pbl-backdrop{align-items:center;padding:24px}.pbl-sheet{border-radius:22px;padding:18px 22px 22px}.pbl-grab{display:none}}
@media (max-width:340px){.pbl-opt{font-size:15px}}
@keyframes pbl-up{from{transform:translateY(24px);opacity:.6}to{transform:none;opacity:1}}
@keyframes pbl-fade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.pbl-backdrop,.pbl-sheet{animation:none}}
`

// "Don't see your language? Ask for it": straight to Rachel. The app's
// /api/language-requests emails her and logs it for app /admin/languages; it
// only accepts planbforpans.com, so the link shows only there (and on localhost).
// Nobody is emailed back automatically.
const REQUEST_URL = 'https://app.planbforpans.com/api/language-requests'
const canAsk = () => /(^|\.)planbforpans\.com$|^localhost$/.test(window.location.hostname)
function LanguageRequestForm({ ui, onBack }: { ui: Lang; onBack: () => void }) {
  const t = REQUEST_COPY[ui]
  const opened = useRef(0)
  const first = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  useEffect(() => {
    opened.current = Date.now()
    first.current?.focus()
  }, [])
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) || '').trim()
    if (!get('language')) return
    setState('sending')
    try {
      const r = await fetch(REQUEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: get('language'), email: get('email'), country: get('country'), note: get('note'), website: get('website'), ui_lang: ui, page: window.location.pathname, ms: Date.now() - opened.current }),
      })
      setState(r.ok ? 'sent' : 'error')
    } catch {
      setState('error')
    }
  }
  if (state === 'sent') {
    return (
      <>
        <p className="pbl-thanks" role="status">{t.thanks}</p>
        <button type="button" className="pbl-keep" onClick={onBack}>{t.back}</button>
      </>
    )
  }
  return (
    <form className="pbl-form" onSubmit={submit} noValidate>
      <label>
        {t.language}
        <input ref={first} name="language" required maxLength={60} autoComplete="off" />
      </label>
      <label>
        {t.email}
        <input name="email" type="email" inputMode="email" maxLength={200} autoComplete="email" dir="ltr" />
      </label>
      <label>
        {t.country}
        <input name="country" maxLength={80} autoComplete="country-name" />
      </label>
      <label>
        {t.note}
        <textarea name="note" maxLength={1000} rows={2} />
      </label>
      <div className="pbl-hp" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state === 'error' && <p className="pbl-err" role="alert">{t.error}</p>}
      <button type="submit" className="pbl-send" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.send}</button>
      <button type="button" className="pbl-keep" style={{ marginTop: 0 }} onClick={onBack}>{t.back}</button>
    </form>
  )
}

function Chooser({ current, suggested, first, onPick, onClose }: { current: Lang; suggested: Lang; first: boolean; onPick: (l: Lang) => void; onClose: () => void }) {
  const sheet = useRef<HTMLDivElement>(null)
  const close = useRef(onClose)
  useEffect(() => {
    close.current = onClose
  })
  const head = langInfo(first ? suggested : current)
  const [asking, setAsking] = useState(false)
  useEffect(() => {
    const before = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const q = (sel: string) => sheet.current?.querySelector<HTMLElement>(sel)
    const target = q('.pbl-sugg') || q('[aria-pressed="true"]') || q('.pbl-opt')
    target?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close.current()
      } else if (e.key === 'Tab' && sheet.current) {
        const f = Array.from(sheet.current.querySelectorAll<HTMLElement>('button, input:not([tabindex="-1"]), textarea'))
        if (!f.length) return
        const i = f.indexOf(document.activeElement as HTMLElement)
        if (e.shiftKey && i <= 0) {
          e.preventDefault()
          f[f.length - 1].focus()
        } else if (!e.shiftKey && i === f.length - 1) {
          e.preventDefault()
          f[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      before?.focus?.()
    }
  }, [])
  return (
    <div className="pbl-backdrop" translate="no" data-no-translate onClick={onClose}>
      <style>{SHEET_CSS}</style>
      <div
        ref={sheet}
        className="pbl-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pbl-title"
        lang={head.code}
        dir={head.dir}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pbl-grab" aria-hidden />
        <div className="pbl-top">
          <h2 id="pbl-title" className="pbl-title">{asking ? REQUEST_COPY[head.code].title : head.choose}</h2>
          <button type="button" className="pbl-x" onClick={onClose} aria-label="Close">✕</button>
        </div>
        {asking ? (
          <LanguageRequestForm ui={head.code} onBack={() => setAsking(false)} />
        ) : (
        <>
        <p className="pbl-also">
          {LANGS.filter((l) => l.code !== head.code).map((l) => (
            <span key={l.code} lang={l.code} dir={l.dir}>{l.choose}</span>
          ))}
        </p>
        <div className="pbl-grid" role="group" aria-labelledby="pbl-title">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`pbl-opt${first && l.code === suggested && l.code !== current ? ' pbl-sugg' : ''}`}
              aria-pressed={l.code === current}
              lang={l.code}
              dir={l.dir}
              onClick={() => onPick(l.code)}
            >
              {l.code === current && <span aria-hidden>✓</span>}
              {l.name}
            </button>
          ))}
        </div>
        {first && (
          <button type="button" className="pbl-keep" lang="en" dir="ltr" onClick={() => onPick('en')}>
            Keep English
          </button>
        )}
        {head.note && <p className="pbl-note">{head.note}</p>}
        {canAsk() && (
          <button type="button" className="pbl-ask" onClick={() => setAsking(true)}>
            {REQUEST_COPY[head.code].ask}
          </button>
        )}
        </>
        )}
      </div>
    </div>
  )
}

export default function AutoTranslate() {
  const [busy, setBusy] = useState(false)
  const [lang, setLang] = useState<Lang>('en')
  const [chooser, setChooser] = useState<null | { first: boolean; suggested: Lang }>(null)

  useEffect(() => {
    const saved = savedLang()
    setLang(saved || 'en')
    let dismissed = false
    try {
      dismissed = window.sessionStorage.getItem(DISMISSED_KEY) === '1'
    } catch {}
    let tz = ''
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    } catch {}
    if (!saved && !dismissed && shouldOfferChooser(browserLangs(), tz)) setChooser({ first: true, suggested: fromBrowser(browserLangs()) })
    const open = () => setChooser({ first: false, suggested: getLang() })
    window.addEventListener('pb-lang-open', open)
    return () => window.removeEventListener('pb-lang-open', open)
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('pb-lang-busy', { detail: busy }))
  }, [busy])

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
    setLangChoice(l)
    setChooser(null)
    if (l === lang) return
    // From English, translate in place; from any other language, start again from the English.
    if (lang === 'en') {
      setLang(l)
      window.dispatchEvent(new Event('pb-lang'))
    } else window.location.reload()
  }

  const dismiss = () => {
    if (chooser?.first) {
      try {
        window.sessionStorage.setItem(DISMISSED_KEY, '1')
      } catch {}
    }
    setChooser(null)
  }

  const info = langInfo(lang)
  return (
    <>
      <div
        translate="no"
        data-no-translate
        data-pb-lang-corner=""
        dir="ltr"
        style={{
          position: 'fixed',
          left: 6,
          bottom: 'calc(6px + env(safe-area-inset-bottom))',
          zIndex: 2147482000,
          maxWidth: 'calc(100vw - 12px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
        }}
      >
        <LangButton corner style={{ boxShadow: '0 2px 10px rgba(0,0,0,.12)', opacity: 0.97 }} />
        {lang !== 'en' && (
          <span lang={lang} dir={info.dir} style={{ fontSize: 10, lineHeight: 1.3, color: '#5B6766', background: 'rgba(255,255,255,.92)', borderRadius: 6, padding: '2px 6px', maxWidth: 220 }}>
            {info.note}
          </span>
        )}
      </div>
      {chooser && <Chooser current={lang} suggested={chooser.suggested} first={chooser.first} onPick={choose} onClose={dismiss} />}
    </>
  )
}
