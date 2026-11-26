import { NextRequest, NextResponse } from 'next/server'
import { isLocalizedPath, localeFromSlug, localePath, splitLocale } from './lib/locales'

// Password-gate the private "classes Minta should take" page.
// HTTP Basic Auth: the browser shows its native password prompt and the page
// content is only served after a correct password. Username can be anything.
// Override the default by setting MINTA_CLASSES_PASSWORD in the environment.
const TREE_HOSTS = new Set(['unheardtrees.org', 'www.unheardtrees.org', 'unheardtrees.com', 'www.unheardtrees.com', 'theunheardtreesproject.com', 'www.theunheardtreesproject.com'])

const AUTISM_HOSTS = new Set(['planbforautism.com', 'www.planbforautism.com', 'planbforautism.org', 'www.planbforautism.org'])

const OCD_HOSTS = new Set(['planbforocd.com', 'www.planbforocd.com', 'planbforocd.org', 'www.planbforocd.org'])

const ARFID_HOSTS = new Set(['planbforarfid.com', 'www.planbforarfid.com', 'planbforarfid.org', 'www.planbforarfid.org'])

const ADHD_HOSTS = new Set(['planbforadhd.com', 'www.planbforadhd.com', 'planbforadhd.org', 'www.planbforadhd.org'])

// planbforconstipation.com bought and attached to the Vercel project 2026-11-26 (apex + www). No .org yet.
const CONSTIPATION_HOSTS = new Set(['planbforconstipation.com', 'www.planbforconstipation.com'])

// Translated pages (2026-11-26). /es, /fr, ... /ar serve the page already in that
// language (app/[locale]). An old ?lang=xx link to one of those pages moves to
// its address (308, other query parameters such as gclid and utm_* kept), and a
// parent who picked a language before lands on that language's page. Pages
// without a translated version keep ?lang and the in-page translation.
// `home` is the page a condition domain serves at its root
// (planbforautism.com/es -> /es/for-autism).
function localeRouting(req: NextRequest, home = '/'): NextResponse | null {
  const url = req.nextUrl
  const { locale, path } = splitLocale(url.pathname)
  const target = path === '/' ? home : path
  if (!isLocalizedPath(target)) return null
  const asked = url.searchParams.get('lang')
  if (asked !== null) {
    const want = asked.toLowerCase() === 'en' ? 'en' : localeFromSlug(asked)
    if (want) {
      const to = url.clone()
      to.searchParams.delete('lang')
      to.pathname = localePath(want, path)
      const res = to.pathname !== url.pathname || to.search !== url.search ? NextResponse.redirect(to, 308) : null
      // Remember the choice like the picker does (shared with app.planbforpans.com),
      // so ?lang=en is not undone by an earlier choice.
      const host = (req.headers.get('host') || '').toLowerCase().split(':')[0]
      const domain = /(^|\.)planbforpans\.com$/.test(host) ? '.planbforpans.com' : undefined
      res?.cookies.set('pb_lang', want, { path: '/', maxAge: 31536000, sameSite: 'lax', domain })
      if (res) return res
      if (want === 'en') return null
    }
  }
  if (!locale && asked === null) {
    const saved = localeFromSlug(req.cookies.get('pb_lang')?.value)
    if (saved) {
      const to = url.clone()
      to.pathname = localePath(saved, path)
      return NextResponse.redirect(to, 307)
    }
  }
  if (home !== '/' && path === '/') return NextResponse.rewrite(new URL(localePath(locale || 'en', home) + url.search, req.url))
  return null
}

export function middleware(req: NextRequest) {
  // The Unheard Trees (2026-11-19): its own site, served from this app.
  const host = (req.headers.get('host') || '').toLowerCase()
  if (TREE_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/unheard-trees', req.url))
    return NextResponse.next()
  }
  if (AUTISM_HOSTS.has(host)) {
    const routed = localeRouting(req, '/for-autism')
    if (routed) return routed
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-autism', req.url))
    return NextResponse.next()
  }
  if (OCD_HOSTS.has(host)) {
    const routed = localeRouting(req, '/for-ocd')
    if (routed) return routed
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-ocd', req.url))
    return NextResponse.next()
  }
  if (ARFID_HOSTS.has(host)) {
    const routed = localeRouting(req, '/for-arfid')
    if (routed) return routed
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-arfid', req.url))
    return NextResponse.next()
  }
  if (ADHD_HOSTS.has(host)) {
    const routed = localeRouting(req, '/for-adhd')
    if (routed) return routed
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-adhd', req.url))
    return NextResponse.next()
  }
  if (CONSTIPATION_HOSTS.has(host)) {
    const routed = localeRouting(req, '/for-constipation')
    if (routed) return routed
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-constipation', req.url))
    return NextResponse.next()
  }
  const routed = localeRouting(req)
  if (routed) return routed
  if (!req.nextUrl.pathname.startsWith('/minta-classes')) return NextResponse.next()
  const expected = process.env.MINTA_CLASSES_PASSWORD || 'MintaLearns26'
  const auth = req.headers.get('authorization')
  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = atob(encoded)
        const pass = decoded.slice(decoded.indexOf(':') + 1)
        if (pass === expected) return NextResponse.next()
      } catch {
        // fall through to 401
      }
    }
  }
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Plan B — private", charset="UTF-8"' },
  })
}

export const config = {
  matcher: [
    '/',
    '/minta-classes',
    '/minta-classes/:path*',
    // Pages with a translated version (lib/locales.ts LOCALIZED_PATHS), plus
    // condition pages that may join them, and every /{locale} address.
    '/for-autism',
    '/for-ocd',
    '/for-arfid',
    '/for-adhd',
    '/for-constipation',
    '/research',
    '/learning/behaviors-are-a-clue',
    '/:locale(es|fr|de|pt|it|zh-hans|zh-hant|ja|ar)',
    '/:locale(es|fr|de|pt|it|zh-hans|zh-hant|ja|ar)/:path*',
  ],
}
