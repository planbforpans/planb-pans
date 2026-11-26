'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { getLang } from './AutoTranslate'
import { caseReviewLanguageNote, type Lang } from '@/lib/languages'

// Rachel, 2026-11-26: "Let people know I speak English for the case studies.
// But I'm sure we can use an app to translate on the fly." Shown next to the
// Case Review offer and booking links, only when the family's language isn't
// English. Written in English; the page translation shows it in their language.
// Same note as the app (planb-app src/components/CaseReviewLanguageNote.tsx).
export default function CaseReviewLanguageNote({ style }: { style?: CSSProperties }) {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => {
    const read = () => setLang(getLang())
    read()
    window.addEventListener('pb-lang', read)
    return () => window.removeEventListener('pb-lang', read)
  }, [])
  if (lang === 'en') return null
  return (
    <p
      data-case-review-language-note=""
      style={{ margin: '14px 0 0', padding: '10px 12px', borderRadius: 8, fontSize: 14, lineHeight: 1.55, background: '#EEF5F4', border: '1px solid #CFDCDA', color: '#24403F', textAlign: 'start', ...style }}
    >
      {caseReviewLanguageNote()}
    </p>
  )
}
