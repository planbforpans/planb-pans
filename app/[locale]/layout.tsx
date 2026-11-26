import type { ReactNode } from 'react'
import { LOCALE_SLUGS } from '@/lib/locales'

// /es, /fr, /de, /pt, /it, /zh-hans, /zh-hant, /ja, /ar: built ahead of time;
// any other first segment falls through to a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return LOCALE_SLUGS.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return children
}
