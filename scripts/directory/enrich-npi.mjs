import { fetchJson } from './lib/http.mjs'
import { normalizePhone, splitFirstLast, stripAccents, titleCaseCity } from './lib/normalize.mjs'

const API = 'https://npiregistry.cms.hhs.gov/api/'

const norm = (s) => stripAccents(String(s ?? '')).toLowerCase().replace(/[^a-z]/g, '')

export async function searchNpi({ first, last, state }) {
  const params = new URLSearchParams({
    version: '2.1',
    enumeration_type: 'NPI-1',
    first_name: first,
    last_name: last,
    state,
    limit: '50',
  })
  // Documented public CMS API; no robots.txt is published for it.
  const json = await fetchJson(`${API}?${params}`, { skipRobots: true, delayMs: 350, ttlDays: 30 })
  return json.results ?? []
}

function credentialCompatible(sourceCreds, npiCred, taxonomies) {
  if (!sourceCreds) return true
  const src = sourceCreds.toUpperCase().replace(/\./g, '')
  const npi = String(npiCred ?? '').toUpperCase().replace(/\./g, '')
  const tax = taxonomies.map((t) => t.desc ?? '').join(' ')
  const srcPhysician = /\b(MD|DO)\b/.test(src) && !/MD\(H\)/.test(src)
  const srcNp = /\b(C?NP|FNP|PNP|CPNP|PMHNP|APRN|ARNP|DNP)\b/.test(src)
  if (!npi && !tax) return true
  if (srcPhysician) return /\b(MD|DO|MBBS)\b/.test(npi) || (!npi && !/Nurse|Counselor|Social Worker|Psycholog|Chiropract|Naturopath/i.test(tax))
  if (srcNp) return /NP|APRN|ARNP|DNP|NURSE/.test(npi) || /Nurse Practitioner|Clinical Nurse/i.test(tax)
  return true
}

function locationAddress(result) {
  return (result.addresses ?? []).find((a) => a.address_purpose === 'LOCATION') ?? result.addresses?.[0] ?? null
}

/**
 * Look up a person in NPPES. Returns { npi, ... } only when exactly one individual
 * provider in `state` matches first + last name (city is used only as a tiebreaker).
 */
export async function matchNpi({ name, state, city, credentials }) {
  if (!state) return { status: 'no-state' }
  const parts = splitFirstLast(name)
  if (!parts) return { status: 'bad-name' }
  let results
  try {
    results = await searchNpi({ first: parts.first, last: parts.last, state })
  } catch (err) {
    return { status: 'error', error: String(err.message ?? err) }
  }
  let candidates = results.filter((r) => {
    const b = r.basic ?? {}
    if (norm(b.last_name) !== norm(parts.last)) return false
    if (norm(b.first_name) !== norm(parts.first)) return false
    const srcMiddle = parts.middle ? norm(parts.middle)[0] : null
    const npiMiddle = b.middle_name ? norm(b.middle_name)[0] : null
    if (srcMiddle && npiMiddle && srcMiddle !== npiMiddle) return false
    const loc = locationAddress(r)
    return loc?.state === state || (r.taxonomies ?? []).some((t) => t.state === state)
  })
  candidates = candidates.filter((r) => credentialCompatible(credentials, r.basic?.credential, r.taxonomies ?? []))
  let method = 'name+state'
  if (candidates.length > 1 && city) {
    const byCity = candidates.filter((r) => norm(locationAddress(r)?.city) === norm(city))
    if (byCity.length === 1) {
      candidates = byCity
      method = 'name+state+city'
    }
  }
  if (candidates.length === 0) return { status: 'no-match' }
  if (candidates.length > 1) return { status: 'ambiguous', count: candidates.length }
  const r = candidates[0]
  const loc = locationAddress(r)
  const taxonomies = [...(r.taxonomies ?? [])].sort((a, b) => Number(b.primary) - Number(a.primary))
  const zip = loc?.postal_code ? String(loc.postal_code).slice(0, 5) : null
  return {
    status: 'matched',
    method,
    npi: String(r.number),
    credential: r.basic?.credential?.trim() || null,
    taxonomies: [...new Set(taxonomies.map((t) => t.desc).filter(Boolean))],
    address: loc
      ? {
          line1:
            [loc.address_1, loc.address_2]
              .filter((part, i) => part && !(i === 1 && /\d+/.test(part) && String(loc.address_1).includes(part.match(/\d+\w*/)[0])))
              .join(', ') || null,
          city: titleCaseCity(loc.city),
          state: loc.state ?? null,
          zip,
        }
      : null,
    phone: normalizePhone(loc?.telephone_number),
    url: `https://npiregistry.cms.hhs.gov/provider-view/${r.number}`,
  }
}

/** Enrich an array of merged person records in place. */
export async function enrichWithNpi(records, { log = () => {} } = {}) {
  const stats = { attempted: 0, matched: 0, ambiguous: 0, noMatch: 0, skipped: 0, errors: 0 }
  for (const rec of records) {
    if (rec.isOrg || rec.country !== 'US' || !rec.address.state) {
      stats.skipped++
      continue
    }
    stats.attempted++
    const m = await matchNpi({ name: rec.name, state: rec.address.state, city: rec.address.city, credentials: rec.credentials })
    rec.npiMatch = m
    if (m.status === 'matched') stats.matched++
    else if (m.status === 'ambiguous') stats.ambiguous++
    else if (m.status === 'error') stats.errors++
    else stats.noMatch++
    if (stats.attempted % 50 === 0) log(`  NPI: ${stats.attempted} looked up, ${stats.matched} matched`)
  }
  return stats
}
