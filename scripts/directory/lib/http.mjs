import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const USER_AGENT = 'PlanBDirectoryBot/1.0 (+https://planbforpans.com)'
const ROBOTS_AGENT = 'planbdirectorybot'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..')
export const CACHE_DIR = join(ROOT, 'data', 'directory', 'cache')

const DEFAULT_TTL_DAYS = Number(process.env.DIRECTORY_CACHE_TTL_DAYS ?? 7)
const DEFAULT_DELAY_MS = 1500

const lastHit = new Map()
const robotsCache = new Map()

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function cachePath(url, ext) {
  const u = new URL(url)
  const hash = createHash('sha1').update(url).digest('hex').slice(0, 16)
  return join(CACHE_DIR, u.hostname, `${hash}.${ext}`)
}

async function readCache(path, ttlDays) {
  try {
    const s = await stat(path)
    if (ttlDays >= 0 && Date.now() - s.mtimeMs > ttlDays * 86400_000) return null
    return await readFile(path, 'utf8')
  } catch {
    return null
  }
}

async function writeCache(path, body) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, body)
}

async function politeWait(host, delayMs) {
  const prev = lastHit.get(host) ?? 0
  const wait = prev + delayMs - Date.now()
  if (wait > 0) await sleep(wait)
  lastHit.set(host, Date.now())
}

async function rawFetch(url, { delayMs = DEFAULT_DELAY_MS, retries = 4, accept } = {}) {
  const host = new URL(url).hostname
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    await politeWait(host, delayMs)
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT, ...(accept ? { Accept: accept } : {}) },
        redirect: 'follow',
        signal: AbortSignal.timeout(45_000),
      })
      if (res.status === 429 || res.status >= 500) {
        lastErr = new Error(`HTTP ${res.status} for ${url}`)
        await sleep(2000 * 2 ** attempt)
        continue
      }
      return { status: res.status, body: await res.text() }
    } catch (err) {
      lastErr = err
      await sleep(2000 * 2 ** attempt)
    }
  }
  throw lastErr
}

function parseRobots(text) {
  const groups = []
  let current = null
  let lastWasAgent = false
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, '').trim()
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/)
    if (!m) continue
    const key = m[1].toLowerCase()
    const value = m[2].trim()
    if (key === 'user-agent') {
      if (!lastWasAgent || !current) {
        current = { agents: [], rules: [], crawlDelay: null }
        groups.push(current)
      }
      current.agents.push(value.toLowerCase())
      lastWasAgent = true
      continue
    }
    lastWasAgent = false
    if (!current) continue
    if (key === 'allow' || key === 'disallow') current.rules.push({ allow: key === 'allow', path: value })
    if (key === 'crawl-delay') current.crawlDelay = Number(value) || null
  }
  const specific = groups.find((g) => g.agents.some((a) => a !== '*' && ROBOTS_AGENT.includes(a)))
  return specific ?? groups.find((g) => g.agents.includes('*')) ?? { rules: [], crawlDelay: null }
}

function ruleMatches(pattern, path) {
  if (!pattern) return false
  const anchored = pattern.endsWith('$')
  const body = anchored ? pattern.slice(0, -1) : pattern
  const re = new RegExp('^' + body.split('*').map((s) => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + (anchored ? '$' : ''))
  return re.test(path)
}

export async function robotsFor(origin) {
  if (robotsCache.has(origin)) return robotsCache.get(origin)
  const url = `${origin}/robots.txt`
  let group = { rules: [], crawlDelay: null }
  let status = null
  const cached = await readCache(cachePath(url, 'txt'), 1)
  if (cached != null) {
    group = parseRobots(cached)
    status = 200
  } else {
    try {
      const res = await rawFetch(url, { retries: 3 })
      status = res.status
      if (res.status >= 200 && res.status < 300) {
        await writeCache(cachePath(url, 'txt'), res.body)
        group = parseRobots(res.body)
      }
    } catch {
      status = 'unreachable'
      group = { rules: [{ allow: false, path: '/' }], crawlDelay: null }
    }
  }
  const info = { ...group, status }
  robotsCache.set(origin, info)
  return info
}

export async function isAllowed(url) {
  const u = new URL(url)
  const robots = await robotsFor(u.origin)
  const path = u.pathname + u.search
  let best = null
  for (const r of robots.rules) {
    if (r.path === '' && !r.allow) continue
    if (ruleMatches(r.path, path)) {
      if (!best || r.path.length > best.path.length || (r.path.length === best.path.length && r.allow)) best = r
    }
  }
  return !best || best.allow
}

export class RobotsDisallowed extends Error {}

export async function fetchText(url, { ttlDays = DEFAULT_TTL_DAYS, skipRobots = false, delayMs, accept } = {}) {
  const path = cachePath(url, 'txt')
  const cached = await readCache(path, ttlDays)
  if (cached != null) return cached
  const u = new URL(url)
  let wait = delayMs ?? DEFAULT_DELAY_MS
  if (!skipRobots) {
    if (!(await isAllowed(url))) throw new RobotsDisallowed(`robots.txt disallows ${url}`)
    const robots = await robotsFor(u.origin)
    if (robots.crawlDelay) wait = Math.max(wait, robots.crawlDelay * 1000)
  }
  const res = await rawFetch(url, { delayMs: wait, accept })
  if (res.status >= 400) throw new Error(`HTTP ${res.status} for ${url}`)
  await writeCache(path, res.body)
  return res.body
}

export async function fetchJson(url, opts = {}) {
  const text = await fetchText(url, { accept: 'application/json', ...opts })
  return JSON.parse(text)
}
