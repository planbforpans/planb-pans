import { fetchJson } from '../lib/http.mjs'
import { cleanPersonName, findStateInText, isCredentialToken, stateCode } from '../lib/normalize.mjs'

const API = 'https://clinicaltrials.gov/api/v2/studies'
const QUERY =
  'PANDAS OR PANS OR "Pediatric Acute-onset Neuropsychiatric Syndrome" OR "Pediatric Autoimmune Neuropsychiatric Disorders" OR "Pediatric Autoimmune Neuropsychiatric Disorder"'
const FIELDS = [
  'NCTId', 'BriefTitle', 'OfficialTitle', 'Condition', 'Keyword', 'StudyType', 'OverallStatus',
  'OverallOfficial', 'ResponsibleParty', 'LocationFacility', 'LocationCity', 'LocationState',
  'LocationCountry', 'LocationContact',
].join(',')

const PANS_RE = /\bPANS\b|pediatric acute[- ]onset neuropsychiatric|paediatric acute[- ]onset neuropsychiatric/i
const PANDAS_RE = /\bPANDAS\b|pediatric autoimmune neuropsychiatric|paediatric autoimmune neuropsychiatric/i

function treatsFrom(texts) {
  const joined = texts.join(' | ')
  const t = []
  if (PANS_RE.test(joined)) t.push('PANS')
  if (PANDAS_RE.test(joined)) t.push('PANDAS')
  return t
}

function relevant(study) {
  const p = study.protocolSection
  const title = `${p.identificationModule.briefTitle ?? ''} ${p.identificationModule.officialTitle ?? ''}`
  const conditions = p.conditionsModule?.conditions ?? []
  const keywords = p.conditionsModule?.keywords ?? []
  if (/(pediatric|paediatric) (acute[- ]onset|autoimmune) neuropsychiatric/i.test(title)) return true
  const hits = [...conditions, ...keywords].filter((c) => PANS_RE.test(c) || PANDAS_RE.test(c))
  return hits.length > 0 && conditions.length <= 8
}

function parsePerson(raw) {
  if (!raw) return null
  const s = raw.replace(/\s+/g, ' ').trim()
  if (/coordinator|director|department|study|contact|team|office|clinical trials|recruit|research/i.test(s) && !/,\s*(MD|DO|PhD)/i.test(s)) return null
  const [namePart, ...rest] = s.split(/[,;]\s*/)
  const credTokens = rest.join(' ').split(/\s+/).filter(Boolean)
  const words = namePart.split(/\s+/)
  while (words.length > 2 && isCredentialToken(words[words.length - 1], true)) credTokens.unshift(words.pop())
  const name = cleanPersonName(words.join(' '))
  if (name.split(/\s+/).length < 2) return null
  const creds = credTokens.filter((t) => isCredentialToken(t, true) || /^(M\.?D|Ph\.?D|Professor|Pr)\.?$/i.test(t)).map((t) => t.replace(/[.,]+$/, ''))
  return { name, credentials: creds.filter((c) => !/^(Professor|Pr)$/i.test(c)).join(', ') || null, raw: s }
}

export default async function clinicalTrials() {
  const studies = []
  let pageToken = null
  do {
    const params = new URLSearchParams({ 'query.cond': QUERY, pageSize: '100', fields: FIELDS, format: 'json' })
    if (pageToken) params.set('pageToken', pageToken)
    // Documented public API (robots.txt targets crawlers of the website, not API clients).
    const json = await fetchJson(`${API}?${params}`, { skipRobots: true, delayMs: 500 })
    studies.push(...(json.studies ?? []))
    pageToken = json.nextPageToken ?? null
  } while (pageToken)

  const out = []
  let relevantCount = 0
  for (const study of studies) {
    if (!relevant(study)) continue
    relevantCount++
    const p = study.protocolSection
    const nct = p.identificationModule.nctId
    const url = `https://clinicaltrials.gov/study/${nct}`
    const interventional = p.designModule?.studyType === 'INTERVENTIONAL'
    const treats = interventional
      ? treatsFrom([p.identificationModule.briefTitle ?? '', ...(p.conditionsModule?.conditions ?? [])])
      : []
    const locations = p.contactsLocationsModule?.locations ?? []
    const usLocations = locations.filter((l) => l.country === 'United States')

    const people = []
    for (const o of p.contactsLocationsModule?.overallOfficials ?? []) {
      people.push({ person: parsePerson(o.name), affiliation: o.affiliation ?? null, role: o.role ?? 'OFFICIAL' })
    }
    const rp = p.sponsorCollaboratorsModule?.responsibleParty
    if (rp?.investigatorFullName) {
      people.push({ person: parsePerson(rp.investigatorFullName), affiliation: rp.investigatorAffiliation ?? null, role: 'RESPONSIBLE_PARTY' })
    }
    for (const loc of locations) {
      for (const c of loc.contacts ?? []) {
        if (!/INVESTIGATOR/.test(c.role ?? '')) continue
        people.push({ person: parsePerson(c.name), affiliation: loc.facility ?? null, role: c.role, location: loc })
      }
    }

    for (const { person, affiliation, role, location } of people) {
      if (!person) continue
      let loc = location
      if (!loc && affiliation) {
        loc = locations.find((l) => l.facility && affiliation && (l.facility.includes(affiliation) || affiliation.includes(l.facility)))
      }
      if (!loc && locations.length === 1) loc = locations[0]
      const country = loc?.country ?? (findStateInText(affiliation ?? '') ? 'United States' : null)
      const isUS = country === 'United States' || (!country && usLocations.length > 0 && usLocations.length === locations.length)
      const state = isUS ? stateCode(loc?.state) ?? findStateInText(affiliation ?? '') : null
      out.push({
        name: person.name,
        rawName: person.raw,
        isOrg: false,
        credentials: person.credentials,
        kind: 'researcher',
        specialties: [],
        practice: affiliation,
        address: { line1: null, city: isUS ? loc?.city ?? null : null, state, zip: null },
        country: isUS ? 'US' : country,
        phone: null,
        website: null,
        telehealth: null,
        treats,
        signal: { type: 'clinicaltrials', nct, role, interventional },
        source: { name: `ClinicalTrials.gov ${nct}`, url },
      })
    }
  }
  out.meta = { studiesFetched: studies.length, relevantStudies: relevantCount }
  return out
}
