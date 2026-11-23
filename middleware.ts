import { NextRequest, NextResponse } from 'next/server'

// Password-gate the private "classes Minta should take" page.
// HTTP Basic Auth: the browser shows its native password prompt and the page
// content is only served after a correct password. Username can be anything.
// Override the default by setting MINTA_CLASSES_PASSWORD in the environment.
const TREE_HOSTS = new Set(['unheardtrees.org', 'www.unheardtrees.org', 'unheardtrees.com', 'www.unheardtrees.com', 'theunheardtreesproject.com', 'www.theunheardtreesproject.com'])

const AUTISM_HOSTS = new Set(['planbforautism.com', 'www.planbforautism.com', 'planbforautism.org', 'www.planbforautism.org'])

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
