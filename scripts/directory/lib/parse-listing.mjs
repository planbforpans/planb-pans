import {
  classifyKind,
  cleanPersonName,
  findStateInText,
  isCredentialToken,
  looksLikeOrg,
  normalizePhone,
  normalizeUrl,
  stateCode,
  STATES,
  titleCaseCity,
} from './normalize.mjs'

const URL_RE = /\bhttps?:\/\/\S+|\bwww\.\S+|\b[\w-]+\.(?:com|org|net|edu|us|ca|co\.uk|uk|com\.au|au|de|it|cz|lt|lv|ro|pl|cl|pe|in|ke|my|nz|br|ar|gob\.pe)(?:\/\S*)?/gi
const EMAIL_RE = /\b[\w.+-]+@[\w-]+(\.[\w-]+)+\b/g
const US_PHONE_RE = /(?:\+?1[\s.-]?)?\(?\b\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/
const TELE_RE = /\b(virtual|telehealth|tele-health|telemedicine|online|zoom)\b/i
const NOT_LOCATION_PAREN = /^(H|Hons|[A-Z]{2,6})$/

function pickLocationParen(text, us) {
  const parens = []
  const re = /\(([^()]*)(\)|$)/g
  let m
  while ((m = re.exec(text))) parens.push({ inner: m[1].trim(), index: m.index, end: m.index + m[0].length })
  for (let i = parens.length - 1; i >= 0; i--) {
    const p = parens[i]
    if (!p.inner) continue
    if (TELE_RE.test(p.inner) || /multiple locations/i.test(p.inner)) return p
    if (p.inner.includes(',')) return p
    const last = p.inner.split(/\s+/).pop()
    if (stateCode(last) && p.inner.split(/\s+/).length > 1) return p
    if (/^Telefono/i.test(p.inner)) continue
    if (!us && !NOT_LOCATION_PAREN.test(p.inner) && /^[A-ZÀ-Ý][\p{L}\s.'-]+$/u.test(p.inner) && i === parens.length - 1 && p.index > 0) {
      return p
    }
  }
  return null
}

function parseLocation(inner, { us }) {
  const out = { city: null, state: null, telehealth: null, region: null }
  if (TELE_RE.test(inner)) out.telehealth = true
  if (/multiple locations/i.test(inner)) return out
  if (out.telehealth) {
    if (us) out.state = findStateInText(inner)
    return out
  }
  const cleaned = inner.replace(/\s+/g, ' ').trim()
  let city
  let region
  if (cleaned.includes(',')) {
    const idx = cleaned.lastIndexOf(',')
    city = cleaned.slice(0, idx).trim()
    region = cleaned.slice(idx + 1).trim()
  } else {
    const words = cleaned.split(' ')
    const last = words[words.length - 1]
    if (words.length > 1 && stateCode(last)) {
      region = last
      city = words.slice(0, -1).join(' ')
    } else {
      city = cleaned
    }
  }
  if (us) {
    out.state = stateCode(region) ?? stateCode(city)
    if (stateCode(city) && !region) city = null
  } else {
    out.region = region ?? null
  }
  out.city = titleCaseCity(city?.replace(/\s*(USA|Italy)$/i, '').replace(/[\s,.;]+$/, '').trim() || null)
  return out
}

function splitNameAndCreds(nameCred) {
  const credentials = []
  const descriptors = []
  const segments = nameCred.split(',').map((s) => s.trim()).filter(Boolean)
  let nameSeg = segments.shift() ?? ''
  const dotSplit = nameSeg.match(/^(\S+(?:\s+\S+)*?\s+\S{2,})\.\s+(.+)$/)
  if (dotSplit && dotSplit[1].split(/\s+/).length >= 2) {
    nameSeg = dotSplit[1]
    const restToks = dotSplit[2].split(/\s+/)
    const lead = []
    while (restToks.length && isCredentialToken(restToks[0], true)) lead.push(restToks.shift())
    credentials.push(...lead)
    if (restToks.length) descriptors.push(restToks.join(' '))
  }
  const shouting = nameSeg === nameSeg.toUpperCase()
  const nameWords = nameSeg.split(/\s+/)
  while (nameWords.length > 2 && isCredentialToken(nameWords[nameWords.length - 1], !shouting)) {
    credentials.unshift(nameWords.pop())
  }
  nameSeg = nameWords.join(' ')
  for (const seg of segments) {
    const toks = seg.split(/\s+/)
    if (toks.every((t) => isCredentialToken(t, true))) {
      credentials.push(...toks)
      continue
    }
    const leading = []
    while (toks.length && isCredentialToken(toks[0], true)) leading.push(toks.shift())
    credentials.push(...leading)
    if (toks.length) descriptors.push(toks.join(' '))
  }
  return { name: nameSeg, credentials, descriptors }
}

const SKIP_DESCRIPTORS = /^(old|link|website|virtual consultation|virtual|telehealth)$/i

/**
 * Parse one free-text directory line of the form
 *   "Name, Creds - Descriptor (City, ST) https://site"
 * into a raw provider record. `links` are hrefs from the line's anchors.
 */
export function parseListingLine(text, { links = [], us = true, sectionState = null, country = null }) {
  let t = text.replace(/\s+/g, ' ').trim()
  if (!t) return null

  if (t.includes('|')) {
    t = t
      .replace(/\|\s*([A-Z][\w .'-]+,\s*[A-Z]{2})\s*(?=\||$)/, ' ($1) ')
      .replace(/\s*\|\s*/g, ' - ')
      .replace(/^\s*-\s*/, '')
  }
  let telehealth = TELE_RE.test(t) ? true : null
  const urls = (t.match(URL_RE) ?? []).filter((u) => !u.includes('@'))
  const website =
    normalizeUrl(links.find((l) => /^https?:/i.test(l) && !/^mailto:/i.test(l))) ??
    normalizeUrl(urls.find((u) => !EMAIL_RE.test(u)))
  t = t.replace(EMAIL_RE, ' ').replace(URL_RE, ' ')

  let phone = null
  if (us) {
    const m = t.match(US_PHONE_RE)
    if (m) {
      phone = normalizePhone(m[0])
      t = t.replace(m[0], ' ')
    }
  } else {
    const m = t.match(/\(?\s*(?:Telefono|Tel|Phone)(?=[\s:.+\d])\.?\s*:?\s*([+\d][\d\s().-]{6,}?)\s*\)?\s*$/i) ?? t.match(/(\+\d[\d\s().-]{7,}\d)/)
    if (m) {
      phone = m[1].trim()
      t = t.replace(m[0], ' ')
    }
  }

  t = t
    .replace(/\b(Phone|Email|Tel|Telefono)\b\.?\s*:?/gi, ' ')
    .replace(/\b(LINK|WEBSITE)\b/g, ' ')
    .replace(/([a-z])(MD|DO)\b/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .replace(/[\s.,-]+$/, '')
    .trim()

  const loc = pickLocationParen(t, us)
  let city = null
  let state = null
  let region = null
  let before = t
  let after = ''
  if (loc) {
    const parsed = parseLocation(loc.inner, { us })
    city = parsed.city
    state = parsed.state
    region = parsed.region
    if (parsed.telehealth) telehealth = true
    before = t.slice(0, loc.index).trim()
    after = t.slice(loc.end).trim()
  }
  if (us && !state && !telehealth) {
    state = findStateInText(loc?.inner ?? '') ?? sectionState
  }

  let practice = null
  const descriptors = []
  const afterClean = after.replace(/^[-–—:\s]+/, '').trim()
  if (afterClean) {
    if (looksLikeOrg(afterClean, '')) practice = afterClean
    else descriptors.push(afterClean)
  }

  const dash = before.split(/\s+[-–—]\s+/)
  const nameCred = dash.shift().replace(/[,\s]+$/, '')
  descriptors.push(...dash)

  const rawNameCred = nameCred
  const firstSentence = nameCred.split(/\.\s+(?=(?:Prof|Dr|Lcda|Dra)\.?\s)/)[0]
  const prefixMatch = firstSentence.match(/^((?:Prof\.?\s+)?(?:Dr\.?|Dra\.?|Lek\.)(?:\s+med\.)?\s+|Prof\.\s+)/i)
  const honorific = prefixMatch ? prefixMatch[0].trim() : ''
  const parts = splitNameAndCreds(firstSentence.slice(prefixMatch ? prefixMatch[0].length : 0))
  const orgLike = !honorific && /^(Unidad|Fundaci|Centro|Cl[ií]nica|Instituto|Hospital)\b/i.test(firstSentence)
  if (!orgLike) descriptors.push(...parts.descriptors)

  let rawName = parts.name
  const nameForKind = honorific ? `${honorific} ${rawName}` : rawName
  const credentials = orgLike ? [] : parts.credentials.map((c) => c.replace(/[;,]+$/, '')).filter(Boolean)
  for (let i = descriptors.length - 1; i >= 0; i--) {
    const toks = descriptors[i].replace(/[()|]/g, ' ').split(/\s+/).filter(Boolean)
    const credCount = toks.filter((tk) => isCredentialToken(tk, true) || /^(Hons|MB|ChB)$/i.test(tk)).length
    if (toks.length && credCount / toks.length >= 0.6) {
      credentials.push(...toks.filter((tk) => !/^Hons$/i.test(tk)))
      descriptors.splice(i, 1)
    }
  }
  const isOrg = orgLike || (!honorific && looksLikeOrg(rawName, credentials.join(' ')))
  if (isOrg) rawName = firstSentence.replace(/\.\s*$/, '').trim()

  const specialties = [...new Set(descriptors.map((d) => {
      let x = d.replace(/^[-–—\s]+|[-–—\s.]+$/g, '').trim()
      if (x.endsWith(')') && !x.includes('(')) x = x.slice(0, -1).trim()
      return x
    }))].filter(
    (d) => d && !SKIP_DESCRIPTORS.test(d) && d.length < 120,
  )
  const KEEP = new Set(['PA', 'MD', 'DC', 'ND', 'MS', 'MA', 'DE'])
  for (let i = credentials.length - 1; i >= 0; i--) {
    if (/^[A-Z]{2}$/.test(credentials[i]) && STATES[credentials[i]] && !KEEP.has(credentials[i])) credentials.splice(i, 1)
  }
  const credStr = credentials.length ? credentials.join(', ') : null
  const name = isOrg ? rawName : cleanPersonName(rawName)
  if (!name || name.length < 3) return null

  return {
    name,
    rawName,
    isOrg,
    credentials: credStr,
    kind: classifyKind({ name: nameForKind, credentials: credStr ?? '', descriptor: specialties.join(' '), isOrg }),
    specialties,
    practice,
    address: { line1: null, city, state: us ? state : null, zip: null },
    country: us ? 'US' : country,
    region,
    phone,
    website,
    telehealth,
    rawText: rawNameCred,
  }
}
