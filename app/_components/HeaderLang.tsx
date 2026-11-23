'use client'

import { useEffect, useState } from 'react'
import { getLang } from './AutoTranslate'

// Rachel, 2026-11-23: "I dont see the spanish option on the website." The
// corner pill was easy to miss, so the menu carries the switch too.
export default function HeaderLang() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  useEffect(() => {
    const read = () => setLang(getLang())
    read()
    window.addEventListener('pb-lang', read)
    return () => window.removeEventListener('pb-lang', read)
  }, [])
  const next = lang === 'es' ? 'en' : 'es'
  const go = () => {
    try {
      window.localStorage.setItem('pb_lang', next)
      const domain = /(^|\.)planbforpans\.com$/.test(window.location.hostname) ? '; domain=.planbforpans.com' : ''
      document.cookie = `pb_lang=${next}; path=/; max-age=31536000; samesite=lax${domain}`
    } catch {}
    window.location.reload()
  }
  return (
    <button type="button" onClick={go} translate="no" data-no-translate className="nav-lang" aria-label={next === 'es' ? 'Ver en español' : 'View in English'}>
      🌐 {next === 'es' ? 'Español' : 'English'}
    </button>
  )
}
