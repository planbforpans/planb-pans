#!/usr/bin/env node
// Fills data/translations/<lang>.json for the server-translated pages (app/[locale]).
//
//   npm run build && npm run start          # in one terminal (or any running copy of the site)
//   npm run translations                    # in another
//
// Options:
//   --base http://localhost:3000   where to read the English pages from
//   --langs es,fr                  only these languages (default: all nine)
//   --prune                        drop phrases no page shows any more
//   --dry-run                      list what would be translated, translate nothing
//
// How it works: every page in lib/locales.ts LOCALIZED_PATHS is fetched in English
// and split into phrases exactly the way the site renders them (one React text
// child = one phrase, plus title/alt/placeholder/aria-label and the page's title
// and description). data/translations/pages.json records which phrases each page
// shows. Only phrases missing from a language's file are sent to the translation
// service the in-page picker already uses (app.planbforpans.com/api/translate:
// Claude, with Rachel's do-not-translate rules and the app's hand-checked
// overrides). So re-running after an edit costs only the new or changed
// sentences. Hand corrections go in data/translations/overrides/<lang>.json,
// which always win and are never overwritten. Commit the JSON files; the site
// reads them at build time and never translates while a page is being served.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const DIR = path.join(ROOT, 'data/translations')
const API = 'https://app.planbforpans.com/api/translate'
const ALL = ['es', 'fr', 'de', 'pt', 'it', 'zh-Hans', 'zh-Hant', 'ja', 'ar']

const args = process.argv.slice(2)
const opt = (k, d) => {
  const i = args.indexOf(`--${k}`)
  return i >= 0 ? args[i + 1] : d
}
const BASE = opt('base', 'http://localhost:3000').replace(/\/$/, '')
const LANGS = (opt('langs', '') || ALL.join(',')).split(',').filter(Boolean)
const DRY = args.includes('--dry-run')
const PRUNE = args.includes('--prune')

// The page list lives in lib/locales.ts; read it from there so it is never duplicated.
const localesTs = fs.readFileSync(path.join(ROOT, 'lib/locales.ts'), 'utf8')
const PATHS = [...localesTs.match(/LOCALIZED_PATHS = \[([\s\S]*?)\]/)[1].matchAll(/'([^']+)'/g)].map((m) => m[1])

// Same rules as lib/i18n/lookup.ts.
const worth = (s) => {
  const t = s.trim()
  return t.length > 1 && /[A-Za-z]{2}/.test(t) && !/^https?:\/\//.test(t) && !/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(t)
}
const SKIP = new Set(['script', 'style', 'noscript', 'textarea', 'option', 'title', 'code', 'pre', 'iframe', 'template', 'math'])
const ATTRS = ['title', 'alt', 'placeholder', 'aria-label']

function phrases(html) {
  const $ = cheerio.load(html)
  const out = new Set()
  const add = (s) => s && worth(s) && s.trim().length <= 2000 && out.add(s.trim())
  add($('head > title').first().text())
  for (const sel of ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="twitter:title"]', 'meta[name="twitter:description"]']) add($(sel).attr('content') || '')
  const walk = (node) => {
    for (const c of node.children || []) {
      if (c.type === 'text') add(c.data)
      else if (c.type === 'tag') {
        const name = c.name.toLowerCase()
        if (SKIP.has(name) || c.attribs.translate === 'no' || 'data-no-translate' in c.attribs) continue
        for (const a of ATTRS) if (c.attribs[a]) add(c.attribs[a])
        walk(c)
      }
    }
  }
  walk($('body')[0])
  return [...out]
}

const readJson = (f, d = {}) => {
  try {
    return JSON.parse(fs.readFileSync(f, 'utf8'))
  } catch {
    return d
  }
}
const writeJson = (f, obj) => {
  const sorted = Object.fromEntries(Object.entries(obj).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)))
  fs.writeFileSync(f, JSON.stringify(sorted, null, 2) + '\n')
}

async function translate(lang, texts) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const r = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'planb-pans-translations-build' },
        body: JSON.stringify({ target: lang, texts }),
      })
      if (r.status === 429) throw new Error('rate limited')
      const j = await r.json()
      const tr = j.translations
      if (!Array.isArray(tr) || tr.length !== texts.length) throw new Error('bad response')
      // The service answers with the English when the model call failed; a batch
      // that came back entirely unchanged is retried rather than saved.
      if (texts.length > 2 && tr.every((t, i) => t === texts[i])) throw new Error('untranslated batch')
      return tr
    } catch (e) {
      if (attempt === 3) {
        console.warn(`  ${lang}: giving up on a batch of ${texts.length} (${e.message})`)
        return null
      }
      await new Promise((res) => setTimeout(res, 2000 * (attempt + 1)))
    }
  }
}

async function main() {
  const pages = {}
  for (const p of PATHS) {
    const r = await fetch(BASE + p, { redirect: 'manual', headers: { 'User-Agent': 'planb-pans-translations-build' } })
    if (r.status !== 200) throw new Error(`${BASE}${p} answered ${r.status}`)
    pages[p] = phrases(await r.text()).sort()
    console.log(`${p}: ${pages[p].length} phrases`)
  }
  writeJson(path.join(DIR, 'pages.json'), pages)
  const all = [...new Set(Object.values(pages).flat())]
  const chars = all.reduce((n, s) => n + s.length, 0)
  console.log(`${all.length} distinct phrases, ${chars} characters`)

  for (const lang of LANGS) {
    const file = path.join(DIR, `${lang}.json`)
    const dict = readJson(file)
    const overrides = readJson(path.join(DIR, 'overrides', `${lang}.json`))
    const missing = all.filter((s) => !(s in dict) && !(s in overrides))
    console.log(`${lang}: ${missing.length} to translate`)
    if (DRY || !missing.length) {
      if (PRUNE && !DRY) writeJson(file, Object.fromEntries(Object.entries(dict).filter(([k]) => all.includes(k))))
      continue
    }
    const batches = []
    for (let i = 0; i < missing.length; i += 20) batches.push(missing.slice(i, i + 20))
    let done = 0
    for (let i = 0; i < batches.length; i += 4) {
      await Promise.all(
        batches.slice(i, i + 4).map(async (b) => {
          const tr = await translate(lang, b)
          if (tr) b.forEach((s, k) => typeof tr[k] === 'string' && tr[k].trim() && (dict[s] = tr[k].trim()))
          done += b.length
        }),
      )
      process.stdout.write(`\r  ${lang}: ${done}/${missing.length}`)
      writeJson(file, dict)
    }
    process.stdout.write('\n')
    const kept = PRUNE ? Object.fromEntries(Object.entries(dict).filter(([k]) => all.includes(k))) : dict
    writeJson(file, kept)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
