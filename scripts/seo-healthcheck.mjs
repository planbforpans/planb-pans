#!/usr/bin/env node
/**
 * seo-healthcheck.mjs — weekly SEO smoke test for the Plan B marketing site.
 *
 * Scans the repo's routes + static pages and prints a PASS/FAIL digest that
 * flags the SEO problems that silently creep back in:
 *   - pages missing a <title> or meta description
 *   - DUPLICATE titles or descriptions across pages (the #1 regression here)
 *   - the sitemap: reachable (when a live URL is given) + URL count sanity
 *
 * Self-contained — Node built-ins only. Run it with:
 *     node scripts/seo-healthcheck.mjs
 *   Optionally check the LIVE sitemap too (reachability + real URL count):
 *     node scripts/seo-healthcheck.mjs https://planbforpans.com
 *
 * Exit code is 1 if any FAIL fires, so a scheduler can alert on it.
 *
 * ── Scheduling ────────────────────────────────────────────────────────────
 * Run weekly, e.g. via a GitHub Action (.github/workflows/seo-healthcheck.yml):
 *     on:
 *       schedule: [{ cron: '0 13 * * 1' }]   # Mondays 13:00 UTC
 *     jobs:
 *       seo:
 *         runs-on: ubuntu-latest
 *         steps:
 *           - uses: actions/checkout@v4
 *           - run: node scripts/seo-healthcheck.mjs https://planbforpans.com
 * Or as a Vercel Cron hitting a tiny route that shells out to this file.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const APP = path.join(ROOT, 'app')
const PUB = path.join(ROOT, 'public')
const LIVE = process.argv[2] // optional base URL, e.g. https://planbforpans.com

const results = [] // { level: 'PASS'|'WARN'|'FAIL', msg }
const pass = (m) => results.push({ level: 'PASS', msg: m })
const warn = (m) => results.push({ level: 'WARN', msg: m })
const fail = (m) => results.push({ level: 'FAIL', msg: m })

// ── Extract a JS string literal that follows `key:` (respects \-escapes). ──
function stringAfter(key, text) {
  const at = text.search(new RegExp(`\\b${key}\\s*:`))
  if (at === -1) return null
  let i = text.indexOf(':', at) + 1
  while (i < text.length && /\s/.test(text[i])) i++
  const quote = text[i]
  if (quote !== '"' && quote !== "'" && quote !== '`') return null
  i++
  let out = ''
  while (i < text.length) {
    const c = text[i]
    if (c === '\\') {
      out += text[i + 1]
      i += 2
      continue
    }
    if (c === quote) break
    out += c
    i++
  }
  return out.trim()
}

// ── Collect React App Router pages that ship metadata. ──
function walkPages(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '_components' || entry.name.startsWith('.')) continue
      walkPages(full, acc)
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      acc.push(full)
    }
  }
  return acc
}

const pages = [] // { route, title, description, source }

for (const file of walkPages(APP)) {
  const src = fs.readFileSync(file, 'utf8')
  const route =
    '/' + path.relative(APP, path.dirname(file)).split(path.sep).join('/')
  const routeClean = route === '/.' ? '/' : route

  // Redirect stubs and auth-gated pages legitimately carry no metadata.
  if (/\bredirect\s*\(/.test(src) && !/export const metadata/.test(src)) {
    pass(`${routeClean} — redirect stub (no metadata expected)`)
    continue
  }
  if (routeClean === '/dashboard') {
    pass(`/dashboard — auth-gated (skipped)`)
    continue
  }

  if (!/export const metadata/.test(src)) {
    warn(`${routeClean} — no metadata export (page shows the site default title)`)
    continue
  }
  // noindex pages (e.g. password-gated) don't need a description and shouldn't
  // count toward duplicate/indexable checks.
  if (/index\s*:\s*false/.test(src)) {
    pass(`${routeClean} — noindex (excluded from indexable checks)`)
    continue
  }
  const title = stringAfter('title', src)
  const description = stringAfter('description', src)
  if (!title) fail(`${routeClean} — metadata present but no title found`)
  if (!description) fail(`${routeClean} — metadata present but no description found`)
  pages.push({ route: routeClean, title, description, source: 'react' })
}

// ── Collect static Field Guide HTML pages. ──
const NOINDEX_STUBS = new Set(['methylation-web.html', 'mitochondria.html'])
for (const f of fs.readdirSync(PUB).filter((f) => f.endsWith('.html'))) {
  if (NOINDEX_STUBS.has(f)) continue
  const src = fs.readFileSync(path.join(PUB, f), 'utf8')
  const title = (src.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '')
    .replace(/\s+/g, ' ')
    .trim()
  const description =
    src.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] ??
    ''
  if (!title) fail(`/${f} — missing <title>`)
  if (!description) warn(`/${f} — missing meta description`)
  pages.push({ route: `/${f}`, title, description, source: 'html' })
}

// ── Duplicate detection across everything. ──
function findDupes(field, label) {
  const map = new Map()
  for (const p of pages) {
    const v = (p[field] || '').trim()
    if (!v) continue
    if (!map.has(v)) map.set(v, [])
    map.get(v).push(p.route)
  }
  let dupes = 0
  for (const [v, routes] of map) {
    if (routes.length > 1) {
      dupes++
      fail(`Duplicate ${label} on ${routes.length} pages (${routes.join(', ')}): "${v.slice(0, 70)}…"`)
    }
  }
  if (dupes === 0) pass(`No duplicate ${label}s across ${pages.length} scanned pages`)
}
findDupes('title', 'title')
findDupes('description', 'description')

// ── Sitemap sanity. ──
// Expected count from source: routes listed in app/sitemap.ts + public *.html
// (minus the 2 noindex stubs the sitemap deliberately excludes).
let expected = null
try {
  const sm = fs.readFileSync(path.join(APP, 'sitemap.ts'), 'utf8')
  const routeCount = (sm.match(/\bpath:\s*['"`]/g) || []).length
  const htmlCount = fs
    .readdirSync(PUB)
    .filter((f) => f.endsWith('.html') && !NOINDEX_STUBS.has(f)).length
  expected = routeCount + htmlCount
  pass(`Sitemap (from source) should emit ~${expected} URLs (${routeCount} routes + ${htmlCount} field-guide pages)`)
} catch {
  warn('Could not read app/sitemap.ts to compute expected URL count')
}

async function checkLiveSitemap() {
  if (!LIVE) {
    warn('No live URL passed — skipped sitemap reachability check. Pass e.g. https://planbforpans.com')
    return
  }
  const url = `${LIVE.replace(/\/$/, '')}/sitemap.xml`
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), 10000)
    const res = await fetch(url, { signal: ctrl.signal })
    clearTimeout(t)
    if (!res.ok) {
      fail(`Sitemap not reachable — ${url} returned HTTP ${res.status}`)
      return
    }
    const xml = await res.text()
    const count = (xml.match(/<loc>/g) || []).length
    pass(`Sitemap reachable at ${url} — ${count} URLs`)
    if (expected != null && Math.abs(count - expected) > 2) {
      warn(`Live sitemap URL count (${count}) differs from source estimate (${expected})`)
    }
  } catch (e) {
    fail(`Sitemap not reachable — ${url} (${e.name === 'AbortError' ? 'timeout' : e.message})`)
  }
}

// ── Print digest. ──
await checkLiveSitemap()

const icon = { PASS: '✓', WARN: '•', FAIL: '✗' }
const counts = { PASS: 0, WARN: 0, FAIL: 0 }
console.log('\n── Plan B SEO health check ' + '─'.repeat(40) + '\n')
for (const r of results) {
  counts[r.level]++
  console.log(`  ${icon[r.level]} [${r.level}] ${r.msg}`)
}
console.log('\n' + '─'.repeat(66))
console.log(`  ${counts.PASS} pass · ${counts.WARN} warn · ${counts.FAIL} fail · ${pages.length} pages scanned`)
console.log(counts.FAIL === 0 ? '  RESULT: PASS\n' : '  RESULT: FAIL\n')

process.exit(counts.FAIL === 0 ? 0 : 1)
