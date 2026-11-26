import { LANGS, type Lang } from './languages'

// Server-rendered translations (2026-11-26). Each language in lib/languages.ts
// gets a URL prefix (/es, /fr, ... /zh-hans, /ar) for the pages below, so Google,
// Google Ads and a parent's first paint all see the translated page in the HTML.
// Every other page keeps the in-browser translation (AutoTranslate) as before.

export type Locale = Exclude<Lang, 'en'>

export const LOCALES: Locale[] = LANGS.map((l) => l.code).filter((c): c is Locale => c !== 'en')

// URL segment for a language: lower case (zh-Hans -> zh-hans).
export const localeSlug = (l: Locale) => l.toLowerCase()
export const LOCALE_SLUGS = LOCALES.map(localeSlug)

export function localeFromSlug(slug: string | undefined | null): Locale | null {
  if (!slug) return null
  return LOCALES.find((l) => localeSlug(l) === slug.toLowerCase()) || null
}

// English pages that have a translated version at /{locale}{path}. Adding a page:
// add it here, add app/[locale]/<path>/page.tsx (copy app/[locale]/for-ocd), then
// run `npm run translations` so its text is in data/translations.
export const LOCALIZED_PATHS = [
  '/',
  '/for-autism',
  '/for-ocd',
  '/for-arfid',
  '/for-adhd',
  '/for-constipation',
  '/learning/behaviors-are-a-clue',
  '/research',
] as const

export function isLocalizedPath(path: string): boolean {
  const p = path.length > 1 ? path.replace(/\/+$/, '') : path
  return (LOCALIZED_PATHS as readonly string[]).includes(p)
}

// '/es/for-ocd' -> { locale: 'es', path: '/for-ocd' }; '/for-ocd' -> { locale: null, path: '/for-ocd' }.
export function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const m = pathname.match(/^\/([^/]+)(\/.*)?$/)
  const locale = localeFromSlug(m?.[1])
  if (!locale) return { locale: null, path: pathname || '/' }
  return { locale, path: m?.[2] || '/' }
}

export function localePath(lang: Lang, path: string): string {
  if (lang === 'en') return path
  return `/${localeSlug(lang)}${path === '/' ? '' : path}`
}

// Rewrites a link to a page that has a translated version so it stays in the
// reader's language. Leaves every other link alone.
const SITE = /^https:\/\/(?:www\.)?planbforpans\.com(?=\/|$|[?#])/
export function localizeHref(href: string, lang: Lang): string {
  if (lang === 'en' || typeof href !== 'string') return href
  const abs = href.match(SITE)
  const rest = abs ? href.slice(abs[0].length) || '/' : href
  if (!rest.startsWith('/') || rest.startsWith('//')) return href
  const m = rest.match(/^([^?#]*)(.*)$/)
  const path = m?.[1] || '/'
  if (splitLocale(path).locale || !isLocalizedPath(path)) return href
  const out = localePath(lang, path.length > 1 ? path.replace(/\/+$/, '') : path) + (m?.[2] || '')
  return abs ? `https://planbforpans.com${out}` : out
}

// <link rel="alternate" hreflang> map for one page: every language + x-default (English).
export function languageAlternates(path: string, base = 'https://planbforpans.com'): Record<string, string> {
  const out: Record<string, string> = { en: base + path }
  for (const l of LOCALES) out[l] = base + localePath(l, path)
  out['x-default'] = base + path
  return out
}

// Open Graph locale names.
export const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES', fr: 'fr_FR', de: 'de_DE', pt: 'pt_BR', it: 'it_IT', 'zh-Hans': 'zh_CN', 'zh-Hant': 'zh_TW', ja: 'ja_JP', ar: 'ar_AR',
}
