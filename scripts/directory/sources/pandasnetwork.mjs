import * as cheerio from 'cheerio'
import { fetchText } from '../lib/http.mjs'
import { classifyKind, cleanPersonName, isCredentialToken, normalizeUrl } from '../lib/normalize.mjs'

// PANDAS Network's US "Find Help Nearby" page links out to the PPN directory; its own
// provider list covers international providers only.
const PAGE = 'https://pandasnetwork.org/international-providers/'
const SOURCE_NAME = 'PANDAS Network International Providers'

const PERSON_START = /^(Dr\.?|Prof\.?)\s|^[A-Z][a-z]+\s+[A-Z][a-z]+.*\b(BSc|MD|ND|PhD|NP)\b/
const SPECIALTY_RE = /(olog|iatr|Medicine|Naturopath|Pediatric|Disorders|Consultant|Specialist|Nutrition|Therap)/i
const PHONE_RE = /^\+?[\d\s().-]{7,}$/
const EMAIL_RE = /\b[\w.+-]+@[\w-]+(\.[\w-]+)+\b/
const DOMAIN_RE = /^(?:https?:\/\/)?(?:www\.)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i

function linesOf($, el) {
  const html = $(el).html() ?? ''
  return html
    .split(/<br\s*\/?>|<\/p>/i)
    .map((chunk) => {
      const $c = cheerio.load(`<div>${chunk}</div>`)
      return { text: $c('div').text().replace(/\s+/g, ' ').trim(), hrefs: $c('a[href]').map((_, a) => $c(a).attr('href')).get() }
    })
    .filter((l) => l.text)
}

function finalize(entry, country) {
  const [first, ...rest] = entry.lines
  const nameLine = first.text
  const [namePart, ...credParts] = nameLine.split(',').map((s) => s.trim())
  const credTokens = credParts.join(' ').split(/\s+/).filter(Boolean)
  const nameWords = namePart.replace(/\([^)]*\)/g, ' ').trim().split(/\s+/)
  while (nameWords.length > 2 && isCredentialToken(nameWords[nameWords.length - 1], true)) credTokens.unshift(nameWords.pop())
  const credentials = credTokens.length ? credTokens.join(', ') : null
  const specialties = []
  let practice = null
  let phone = null
  let website = null
  let city = null
  const addressLines = []
  for (const l of rest) {
    const t = l.text
    if (EMAIL_RE.test(t)) {
      const leftover = t.replace(EMAIL_RE, '').trim()
      if (leftover && !/^email:?$/i.test(leftover)) specialties.push(leftover)
      continue
    }
    if (PHONE_RE.test(t)) {
      phone ??= t
      continue
    }
    const href = l.hrefs.find((h) => /^https?:/i.test(h))
    if (/^website$/i.test(t)) {
      website ??= normalizeUrl(href)
      continue
    }
    if (DOMAIN_RE.test(t.split(/\s+/)[0])) {
      website ??= normalizeUrl(href ?? t.split(/\s+/)[0])
      continue
    }
    if (href && !practice) {
      practice = t
      website ??= normalizeUrl(href)
      continue
    }
    if (/\d/.test(t) || /,\s*(Italy|México|Mexico|BC|ON|NSW)\b/.test(t)) {
      const m = t.match(/([A-Za-zÀ-ÿ .'-]+),\s*(?:BC|ON|Italy|NSW|Guanajuato|Rajasthan\w*)\b/)
      if (m && !city) {
        city = m[1].replace(/^.*\d\s*/, '').trim()
        const street = city.match(/\b(?:Line|Road|Rd|St|Street|Ave|Avenue)\s+(.+)$/i)
        if (street) city = street[1]
      }
      continue
    }
    if (/hospital|university|clinic|team/i.test(t) && !practice) {
      practice = t
      continue
    }
    if (SPECIALTY_RE.test(t)) {
      specialties.push(t.replace(/\s+(BSc|mBANT|CNHC)\b/g, '').trim())
      continue
    }
    addressLines.push(t.replace(/,$/, ''))
  }
  if (!city && addressLines.length) {
    const last = addressLines[addressLines.length - 1]
    city = last.split(',')[0].replace(/\s*\d+.*$/, '').trim() || null
  }
  const name = cleanPersonName(nameWords.join(' '))
  return {
    name,
    rawName: namePart,
    isOrg: false,
    credentials,
    kind: classifyKind({ name: namePart, credentials: credentials ?? '', descriptor: specialties.join(' ') }),
    specialties: specialties.filter((s) => s.length < 100),
    practice,
    address: { line1: null, city, state: null, zip: null },
    country,
    phone,
    website,
    telehealth: null,
    treats: ['PANS', 'PANDAS'],
    source: { name: SOURCE_NAME, url: PAGE, section: country },
  }
}

export default async function pandasNetwork() {
  const html = await fetchText(PAGE)
  const $ = cheerio.load(html)
  const out = []
  $('.accordion').each((_, acc) => {
    const country = $(acc).find('.accordion-title').first().text().replace(/\s+/g, ' ').trim()
    const info = $(acc).find('.accordion-info').first()
    const lines = linesOf($, info)
    let current = null
    for (const line of lines) {
      if (PERSON_START.test(line.text) && !EMAIL_RE.test(line.text)) {
        if (current) out.push(finalize(current, country))
        current = { lines: [line] }
      } else if (current) {
        if (/support group|non-profit|charity/i.test(line.text)) {
          out.push(finalize(current, country))
          current = null
        } else current.lines.push(line)
      }
    }
    if (current) out.push(finalize(current, country))
  })
  return out
}
