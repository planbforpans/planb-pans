#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { enrichWithNpi } from './enrich-npi.mjs'
import { domainOf, nameKey, slugify, stripAccents } from './lib/normalize.mjs'
import aspire from './sources/aspire.mjs'
import clinicalTrials from './sources/clinicaltrials.mjs'
import neuroimmune from './sources/neuroimmune.mjs'
import pandasNetwork from './sources/pandasnetwork.mjs'
import ppn from './sources/ppn.mjs'
import pubmed from './sources/pubmed.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT_DIR = join(ROOT, 'data', 'directory')
const RUN_DATE = new Date().toISOString().slice(0, 10)

// Order = field precedence when merging (directories first, then discovery signals).
const SOURCES = [
  { id: 'ppn', label: 'PANDAS Physicians Network directory (pandasppn.org)', run: ppn, directory: true },
  { id: 'pandasnetwork', label: 'PANDAS Network international providers (pandasnetwork.org)', run: pandasNetwork, directory: true },
  { id: 'aspire', label: 'ASPIRE find-a-provider (aspire.care)', run: aspire, directory: true },
  { id: 'neuroimmune', label: 'Neuroimmune Foundation clinician directory', run: neuroimmune, directory: true },
  { id: 'clinicaltrials', label: 'ClinicalTrials.gov API v2', run: clinicalTrials, directory: false },
  { id: 'pubmed', label: 'PubMed E-utilities', run: pubmed, directory: false },
]

const log = (...a) => console.log(...a)

function websiteKey(url) {
  if (!url) return null
  try {
    const u = new URL(url)
    return `${u.hostname.replace(/^www\./, '')}${u.pathname.replace(/\/+$/, '')}`.toLowerCase()
  } catch {
    return null
  }
}

function clusterRecords(records) {
  // Records with no known country (e.g. a trial's responsible party) adopt the country of
  // the same-named person from another record, when that is unambiguous.
  const countriesByName = new Map()
  for (const r of records) {
    if (r.isOrg || !r.country) continue
    const k = nameKey(r.name)
    if (!countriesByName.has(k)) countriesByName.set(k, new Set())
    countriesByName.get(k).add(r.country)
  }
  for (const r of records) {
    if (r.isOrg || r.country) continue
    const set = countriesByName.get(nameKey(r.name))
    if (set?.size === 1) r.country = [...set][0]
  }
  const clusters = []
  const orgIndex = new Map()
  const personGroups = new Map()

  for (const r of records) {
    if (r.isOrg) {
      const key = [websiteKey(r.website) ?? slugify(r.name), r.address.state ?? r.country ?? '', (r.address.city ?? '').toLowerCase()].join('|')
      const loose = [websiteKey(r.website) ?? slugify(r.name), r.address.state ?? r.country ?? ''].join('|')
      let c = orgIndex.get(key) ?? (r.address.city ? null : orgIndex.get(`loose:${loose}`))
      if (!c) {
        c = { isOrg: true, records: [] }
        clusters.push(c)
        orgIndex.set(key, c)
        if (!orgIndex.has(`loose:${loose}`)) orgIndex.set(`loose:${loose}`, c)
      }
      c.records.push(r)
      continue
    }
    const nk = nameKey(r.name)
    if (!nk.includes(' ')) continue
    const gk = `${nk}|${r.country ?? ''}`
    if (!personGroups.has(gk)) personGroups.set(gk, [])
    personGroups.get(gk).push(r)
  }

  // A location-less org listing (e.g. PPN clinics page) folds into the single located
  // listing with the same website.
  for (const c of [...clusters]) {
    if (!c.isOrg || c.records.some((r) => r.address.state)) continue
    const wk = websiteKey(c.records[0].website)
    if (!wk) continue
    const targets = clusters.filter((o) => o !== c && o.isOrg && o.records.some((r) => websiteKey(r.website) === wk))
    if (targets.length === 1) {
      targets[0].records.push(...c.records)
      clusters.splice(clusters.indexOf(c), 1)
    }
  }

  for (const group of personGroups.values()) {
    const byState = new Map()
    const stateless = []
    for (const r of group) {
      const st = r.country === 'US' ? r.address.state : null
      if (st) {
        if (!byState.has(st)) byState.set(st, [])
        byState.get(st).push(r)
      } else stateless.push(r)
    }
    const stateClusters = [...byState.values()].map((recs) => ({ isOrg: false, records: recs }))
    const nullCluster = { isOrg: false, records: [] }
    for (const r of stateless) {
      const dom = domainOf(r.website)
      const matches = stateClusters.filter((c) => dom && c.records.some((x) => domainOf(x.website) === dom))
      if (matches.length === 1) matches[0].records.push(r)
      else if (r.country !== 'US' || stateClusters.length === 0) nullCluster.records.push(r)
      else if (stateClusters.length === 1 && !dom) stateClusters[0].records.push(r)
      else nullCluster.records.push(r)
    }
    clusters.push(...stateClusters)
    if (nullCluster.records.length) clusters.push(nullCluster)
  }
  return clusters
}

function first(records, fn) {
  for (const r of records) {
    const v = fn(r)
    if (v != null && v !== '') return v
  }
  return null
}

function titleCaseAddress(s) {
  if (!s) return s
  return s
    .split(/(\s+)/)
    .map((w) => {
      if (/\d/.test(w) || /^(NE|NW|SE|SW|PO|N|S|E|W)$/i.test(w.replace(/[.,]/g, ''))) return w.toUpperCase()
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    })
    .join('')
}

const TAG_RULES = [
  ['Lyme', /\blyme\b/i],
  ['autism', /\bautis(m|tic)\b|\bASD\b/i],
  ['OCD', /\bOCD\b|obsessive[- ]compulsive/i],
  ['tics', /\btics?\b|tourette/i],
  ['autoimmune encephalitis', /autoimmune encephal/i],
]
const TREAT_ORDER = ['PANS', 'PANDAS', 'Lyme', 'autism', 'OCD', 'tics', 'autoimmune encephalitis']

function buildProvider(cluster) {
  const recs = cluster.records
  const dirRecs = recs.filter((r) => r.sourceDirectory)
  const primary = dirRecs[0] ?? recs[0]
  const npi = cluster.npiMatch?.status === 'matched' ? cluster.npiMatch : null

  const specialties = []
  const seen = new Set()
  for (const s of [...recs.flatMap((r) => r.specialties ?? []), ...(npi?.taxonomies ?? [])]) {
    if (NON_CLINICAL_TAXONOMY.test(s) || /^\*|not curren/i.test(s)) continue
    const k = s.toLowerCase()
    if (!seen.has(k)) {
      seen.add(k)
      specialties.push(s)
    }
  }

  const city = first(dirRecs, (r) => r.address.city) ?? first(recs, (r) => r.address.city)
  const state = primary.country === 'US' ? first(dirRecs, (r) => r.address.state) ?? first(recs, (r) => r.address.state) : null
  const useNpiAddress =
    npi?.address && npi.address.state === state && (!city || stripAccents(city).toLowerCase().replace(/[^a-z]/g, '').replace(/^saint/, 'st') === stripAccents(npi.address.city ?? '').toLowerCase().replace(/[^a-z]/g, '').replace(/^saint/, 'st'))

  const address = {
    line1: useNpiAddress ? titleCaseAddress(npi.address.line1) : null,
    city: city ?? (useNpiAddress ? npi.address.city : null),
    state,
    zip: useNpiAddress ? npi.address.zip : null,
  }
  if (!address.city && npi?.address && npi.address.state === state) {
    address.line1 = titleCaseAddress(npi.address.line1)
    address.city = npi.address.city
    address.zip = npi.address.zip
  }

  const treats = new Set(recs.flatMap((r) => r.treats ?? []))
  for (const r of dirRecs) {
    const text = [r.rawText, ...(r.specialties ?? [])].filter(Boolean).join(' ')
    for (const [tag, re] of TAG_RULES) if (re.test(text)) treats.add(tag)
  }

  const sources = []
  const seenSrc = new Set()
  for (const r of recs) {
    const k = `${r.source.name}|${r.source.url}`
    if (seenSrc.has(k)) continue
    seenSrc.add(k)
    sources.push({ name: r.source.name, url: r.source.url, retrievedAt: RUN_DATE })
  }
  if (npi) sources.push({ name: 'NPPES NPI Registry', url: npi.url, retrievedAt: RUN_DATE })

  const telehealth = recs.some((r) => r.telehealth === true) ? true : null
  const credentials = first(dirRecs, (r) => r.credentials) ?? first(recs, (r) => r.credentials) ?? npi?.credential ?? null

  return {
    slug: '',
    name: primary.name,
    credentials,
    npi: npi?.npi ?? null,
    kind: dirRecs.length ? primary.kind : cluster.isOrg ? 'clinic' : 'researcher',
    specialties,
    practice: first(dirRecs, (r) => r.practice) ?? first(recs, (r) => r.practice),
    address,
    phone: first(dirRecs, (r) => r.phone) ?? (useNpiAddress || !city ? npi?.phone ?? null : null),
    website: first(dirRecs, (r) => r.website) ?? first(recs, (r) => r.website),
    telehealth,
    treats: [...treats].sort((a, b) => TREAT_ORDER.indexOf(a) - TREAT_ORDER.indexOf(b)),
    sources,
    lastVerified: RUN_DATE,
    _country: primary.country ?? null,
  }
}

const squash = (s) => stripAccents(String(s ?? '')).toLowerCase().replace(/\bsaint\b/g, 'st').replace(/[^a-z]/g, '')

const NON_CLINICAL_TAXONOMY = /^(Student in an Organized Health Care Education|Specialist$|Technician|Researcher)/i

async function main() {
  log(`PANS/PANDAS directory build — ${RUN_DATE}`)
  const raw = []
  const sourceStats = {}
  for (const src of SOURCES) {
    try {
      const recs = await src.run()
      for (const r of recs) {
        r.sourceId = src.id
        r.sourceDirectory = src.directory
      }
      raw.push(...recs)
      sourceStats[src.id] = { label: src.label, status: 'ok', records: recs.length, ...(recs.meta ?? {}) }
      log(`✓ ${src.id}: ${recs.length} raw records${recs.meta?.note ? ` — ${recs.meta.note}` : ''}`)
    } catch (err) {
      sourceStats[src.id] = { label: src.label, status: 'failed', records: 0, error: String(err?.message ?? err) }
      log(`✗ ${src.id}: ${err?.message ?? err}`)
    }
  }

  const clusters = clusterRecords(raw)
  log(`Clustered ${raw.length} raw records into ${clusters.length} candidates`)

  const people = clusters.filter((c) => !c.isOrg)
  const proxies = people.map((c) => {
    const p = c.records.find((r) => r.sourceDirectory) ?? c.records[0]
    return {
      cluster: c,
      isOrg: false,
      name: p.name,
      country: p.country,
      credentials: c.records.find((r) => r.credentials)?.credentials ?? null,
      address: { state: c.records.find((r) => r.address.state)?.address.state ?? null, city: c.records.find((r) => r.address.city)?.address.city ?? null },
    }
  })
  log('Enriching US clinicians via NPPES NPI Registry…')
  const npiStats = await enrichWithNpi(proxies, { log })
  for (const p of proxies) p.cluster.npiMatch = p.npiMatch ?? null
  log(`NPI: ${JSON.stringify(npiStats)}`)

  // Merge clusters that resolved to the same NPI.
  const byNpi = new Map()
  const merged = []
  for (const c of clusters) {
    const n = c.npiMatch?.status === 'matched' ? c.npiMatch.npi : null
    if (n && byNpi.has(n)) {
      byNpi.get(n).records.push(...c.records)
      continue
    }
    if (n) byNpi.set(n, c)
    merged.push(c)
  }

  const dropped = { signalWithoutNpi: 0, nonClinicalNpi: 0, npiCityNotInAffiliation: 0 }
  const npiCityInContext = (c) => {
    const npiCity = squash(c.npiMatch.address?.city)
    const context = squash(
      c.records.flatMap((r) => [r.practice, r.address.city, ...(r.signal?.affiliations ?? [])]).filter(Boolean).join(' '),
    )
    return Boolean(npiCity) && context.includes(npiCity)
  }
  const kept = merged.filter((c) => {
    const hasDirectory = c.records.some((r) => r.sourceDirectory)
    const signalOnly = c.records.every((r) => r.requireNpi)
    if (signalOnly && c.npiMatch?.status !== 'matched') {
      dropped.signalWithoutNpi++
      return false
    }
    if (!hasDirectory && c.npiMatch?.status === 'matched') {
      if (c.npiMatch.taxonomies.length && c.npiMatch.taxonomies.every((t) => NON_CLINICAL_TAXONOMY.test(t))) {
        if (signalOnly) {
          dropped.nonClinicalNpi++
          return false
        }
        c.npiMatch = { status: 'detached-non-clinical' }
      } else if (!npiCityInContext(c)) {
        // Guard against same-name namesakes: for discovery-only records the NPI practice
        // city must appear in the publication/trial affiliation text.
        if (signalOnly) {
          dropped.npiCityNotInAffiliation++
          return false
        }
        c.npiMatch = { status: 'detached-city-mismatch' }
      }
    }
    return true
  })

  const providers = kept.map(buildProvider)

  providers.sort((a, b) => {
    const ka = `${a.address.state ?? 'ZZ'}|${a._country ?? ''}|${a.name}|${a.address.city ?? ''}`
    const kb = `${b.address.state ?? 'ZZ'}|${b._country ?? ''}|${b.name}|${b.address.city ?? ''}`
    return ka.localeCompare(kb)
  })
  const used = new Map()
  for (const p of providers) {
    const region = p.address.state ?? (p._country && p._country !== 'US' ? p._country : null)
    const base = slugify(p.name, p.address.city, region) || 'provider'
    const n = (used.get(base) ?? 0) + 1
    used.set(base, n)
    p.slug = n === 1 ? base : `${base}-${n}`
    delete p._country
  }

  await mkdir(OUT_DIR, { recursive: true })
  await writeFile(join(OUT_DIR, 'providers.json'), JSON.stringify(providers, null, 2) + '\n')

  const byState = {}
  for (const p of providers) {
    const k = p.address.state ?? 'non-US/unknown'
    byState[k] = (byState[k] ?? 0) + 1
  }
  const byKind = {}
  for (const p of providers) byKind[p.kind] = (byKind[p.kind] ?? 0) + 1
  const multiSource = providers.filter((p) => new Set(p.sources.filter((s) => s.name !== 'NPPES NPI Registry').map((s) => s.name.split(' ')[0])).size > 1).length

  const summary = {
    runDate: RUN_DATE,
    totalProviders: providers.length,
    withNpi: providers.filter((p) => p.npi).length,
    multiSourceProviders: multiSource,
    byKind,
    byState: Object.fromEntries(Object.entries(byState).sort((a, b) => b[1] - a[1])),
    sources: sourceStats,
    npi: npiStats,
    dropped,
  }
  await writeFile(join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2) + '\n')

  log(`\nWrote ${providers.length} providers → data/directory/providers.json`)
  log(`  with NPI: ${summary.withNpi}; found in >1 source: ${multiSource}`)
  log(`  by kind: ${JSON.stringify(byKind)}`)
  log(`  top states: ${Object.entries(summary.byState).slice(0, 10).map(([k, v]) => `${k} ${v}`).join(', ')}`)
  log(`  dropped discovery-only candidates: ${JSON.stringify(dropped)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
