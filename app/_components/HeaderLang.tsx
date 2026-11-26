'use client'

import { useEffect, useState } from 'react'
import { getLang, setLangChoice } from './AutoTranslate'
import { LANGS, isLang, type Lang } from '@/lib/languages'

// Rachel, 2026-11-23: "I dont see the spanish option on the website." The
// corner pill was easy to miss, so the menu carries the switch too.
// 2026-11-26: a compact dropdown of every language, each in its own name.
export default function HeaderLang() {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => {
    const read = () => setLang(getLang())
    read()
    window.addEventListener('pb-lang', read)
    return () => window.removeEventListener('pb-lang', read)
  }, [])
  const go = (next: string) => {
    if (!isLang(next) || next === lang) return
    setLangChoice(next)
    window.location.reload()
  }
  return (
    <label translate="no" data-no-translate className="nav-lang">
      <span aria-hidden>🌐</span>
      <select value={lang} onChange={(e) => go(e.target.value)} aria-label="Language">
        {LANGS.map((l) => (
          <option key={l.code} value={l.code} lang={l.code} dir={l.dir}>
            {l.name}
          </option>
        ))}
      </select>
      <span aria-hidden className="nav-lang-caret">▾</span>
    </label>
  )
}
