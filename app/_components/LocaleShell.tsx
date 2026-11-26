'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { langInfo, type Lang } from '@/lib/languages'
import { splitLocale } from '@/lib/locales'
import { getLang } from './AutoTranslate'

// <html lang dir> from the URL, so /es/... is served as Spanish and /ar/... as
// right-to-left Arabic in the HTML itself. On English URLs a language picked in
// the browser (in-page translation) still sets it once the page is running.
export function HtmlShell({ className, children }: { className?: string; children: ReactNode }) {
  const { locale } = splitLocale(usePathname() || '/')
  const [picked, setPicked] = useState<Lang>('en')
  useEffect(() => {
    const read = () => setPicked(getLang())
    read()
    window.addEventListener('pb-lang', read)
    return () => window.removeEventListener('pb-lang', read)
  }, [])
  const lang: Lang = locale || picked
  return (
    <html lang={lang} dir={langInfo(lang).dir} className={className} suppressHydrationWarning>
      {children}
    </html>
  )
}

// The English header and footer from the layout. Translated pages render their
// own (app/[locale]/localized.tsx), so the layout's copy steps aside there.
export function ChromeGate({ children }: { children: ReactNode }) {
  const { locale } = splitLocale(usePathname() || '/')
  return locale ? null : <>{children}</>
}
