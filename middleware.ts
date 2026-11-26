import { NextRequest, NextResponse } from 'next/server'

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

export function middleware(req: NextRequest) {
  // The Unheard Trees (2026-11-19): its own site, served from this app.
  const host = (req.headers.get('host') || '').toLowerCase()
  if (TREE_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/unheard-trees', req.url))
    return NextResponse.next()
  }
  if (AUTISM_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-autism', req.url))
    return NextResponse.next()
  }
  if (OCD_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-ocd', req.url))
    return NextResponse.next()
  }
  if (ARFID_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-arfid', req.url))
    return NextResponse.next()
  }
  if (ADHD_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-adhd', req.url))
    return NextResponse.next()
  }
  if (CONSTIPATION_HOSTS.has(host)) {
    if (req.nextUrl.pathname === '/') return NextResponse.rewrite(new URL('/for-constipation', req.url))
    return NextResponse.next()
  }
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

export const config = { matcher: ['/', '/minta-classes', '/minta-classes/:path*'] }
