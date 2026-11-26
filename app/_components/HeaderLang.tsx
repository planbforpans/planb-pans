'use client'

import { LangButton } from './AutoTranslate'

// Rachel, 2026-11-23: "I dont see the spanish option on the website." The
// corner pill was easy to miss, so the menu carries the switch too.
// 2026-11-26: "a parent needs to be able to click the correct language" -
// a compact "🌐 Español" button that opens the one-tap language chooser.
export default function HeaderLang() {
  return <LangButton className="nav-lang" />
}
