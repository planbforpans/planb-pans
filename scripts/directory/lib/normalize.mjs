export const STATES = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
  CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky',
  LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
  NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota',
  OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia',
  WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', PR: 'Puerto Rico',
  VI: 'Virgin Islands', GU: 'Guam',
}

const NAME_TO_CODE = Object.fromEntries(Object.entries(STATES).map(([k, v]) => [v.toLowerCase(), k]))

export function stateCode(input) {
  if (!input) return null
  const s = String(input).trim().replace(/\.$/, '')
  if (/^[A-Za-z]{2}$/.test(s) && STATES[s.toUpperCase()]) return s.toUpperCase()
  return NAME_TO_CODE[s.toLowerCase()] ?? null
}

const STATE_NAME_RE = new RegExp(
  `\\b(${Object.values(STATES).sort((a, b) => b.length - a.length).map((s) => s.replace(/ /g, '\\s+')).join('|')})\\b`,
  'i',
)

export function findStateInText(text) {
  if (!text) return null
  const zip = text.match(/\b([A-Z]{2})\s+\d{5}(?:-\d{4})?\b/)
  if (zip && STATES[zip[1]]) return zip[1]
  const named = text.match(STATE_NAME_RE)
  if (named) return stateCode(named[1].replace(/\s+/g, ' '))
  const abbr = text.match(/,\s*([A-Z]{2})\s*(?:,|\.|$|\s+USA|\s+United States)/)
  if (abbr && STATES[abbr[1]]) return abbr[1]
  return null
}

export function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function slugify(...parts) {
  return stripAccents(parts.filter(Boolean).join(' '))
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const CRED_TOKEN = new RegExp(
  '^(' +
    [
      'M\\.?D\\.?(\\(H\\))?', 'D\\.?O\\.?', 'Ph\\.?D\\.?', 'Psy\\.?D\\.?', 'Ed\\.?D\\.?', 'N\\.?D\\.?', 'NMD', 'DC', 'D\\.C\\.',
      'DNP', 'DOM', 'AP', 'MPH', 'MSN', 'MS', 'M\\.S\\.', 'MA', 'M\\.A\\.', 'MBA', 'E-MBA\\.?', 'MOT', 'OTR/L', 'RN', 'BSN(-RN)?',
      'NP(-C)?', 'FNP(-[A-Z]+)?', 'PNP', 'CPNP(-[A-Z]+)?', 'PMHNP(-BC)?', 'APRN', 'ARNP', 'NP-PHC', 'PA', 'PA-C', 'PAC',
      'LCSW', 'LMFT', 'LMHC', 'LPC', 'LPCC', 'LP', 'NCC', 'NCSP', 'BCBA', 'BCN', 'CTMH', 'BC-TMH', 'PMH-C', 'PLLC',
      'FAAP', 'FACOP', 'BCIM', 'BCIP', 'IFMCP', 'ABIHM', 'ABoIM', 'ABoIHM', 'FMAPS', 'FACR', 'FACP', 'ABPP', 'ABN',
      'DipABLM', 'ACLM', 'FIAMA', 'MT\\(ASCP\\)', 'EMT-P', 'MPH', 'MBBS', 'MB\\s?ChB', 'MRCP', 'FRCPCH', 'MRCGP',
      'FRACP', 'FRACGP', 'FACNEM', 'IBCLC', 'DTMH', 'BSc', 'BA', 'RSW', 'PHN', 'RD', 'RDN', 'LICSW', 'LMSW', 'CCC-SLP',
      'MSW', 'FAPA', 'DABPN', 'CNHC', 'mBANT', 'FRSM', 'OTD', 'OT', 'DPT', 'PT', 'BCB', 'CNS', 'LAc', 'L\\.Ac\\.',
    ].join('|') +
    ')$',
  'i',
)

const MIXED_CREDS = /^(PhD|PsyD|EdD|DSc|MSc|BSc|MEd|MHSc|MSEd|CHt|LAc|MPAS|DrPH|MMSc|PharmD|AuD|OTD)\.?$/

export function isCredentialToken(tok, generic = false) {
  const t = tok.replace(/[,;]+$/, '').trim()
  if (CRED_TOKEN.test(t) || MIXED_CREDS.test(t)) return true
  return generic && /^[A-Z][A-Z.\-\/()]{1,12}$/.test(t) && /[A-Z]{2}|[A-Z]\.[A-Z]/.test(t)
}

const PHYSICIAN_RE = /\b(M\.?D\.?|D\.?O\.?|MBBS|MB\s?ChB|physician|psychiatrist|pediatrician|neurologist|immunologist|rheumatologist)\b/i
const NP_RE = /\b(C?NP(-C)?|FNP(-[A-Z]+)?|PNP|CPNP(-[A-Z]+)?|PMHNP(-BC)?|APRN|ARNP|DNP|NP-PHC|nurse practitioner)\b/i
const NATURO_RE = /\b(N\.?D\.?|NMD)\b|naturopath/i

export function classifyKind({ name = '', credentials: rawCreds = '', descriptor = '', isOrg = false }) {
  if (isOrg) return 'clinic'
  const credentials = rawCreds.replace(/\.(?=[A-Za-z-])/g, '').replace(/\.(?=,|$|\s)/g, '')
  const text = `${credentials} ${descriptor}`
  if (/\bMD\(H\)/i.test(credentials) && !/\bM\.?D\.?(?!\()/i.test(credentials.replace(/MD\(H\)/i, ''))) return 'practitioner'
  if (NATURO_RE.test(text) && !/\b(M\.?D\.?|D\.?O\.?)\b/.test(credentials)) return 'practitioner'
  if (/\bD\.?C\.?\b/.test(credentials) && !/\bM\.?D\.?\b/.test(credentials)) {
    if (NP_RE.test(text)) return 'nurse-practitioner'
    return 'practitioner'
  }
  if (/physician assistant|\bPA(-C)?\b|\bPAC\b/i.test(text) && !/\b(M\.?D\.?|D\.?O\.?)\b/.test(credentials)) return 'practitioner'
  if (PHYSICIAN_RE.test(text) && !/Doctor of Psychology/i.test(text)) return 'physician'
  if (/^(dr|lek|prof\.?\s+dr)\.?\s/i.test(name) && !/psycholog|naturopath|nutrition|counsel/i.test(text)) return 'physician'
  if (NP_RE.test(text)) return 'nurse-practitioner'
  return 'practitioner'
}

const ORG_RE = /\b(university|hospital|clinic|center|centre|centers|institute|program|programme|health system|children's|foundation|unidad|fundaci[oó]n|associates|group)\b/i

export function looksLikeOrg(name, credentials) {
  if (credentials) return false
  return ORG_RE.test(name)
}

function titleCaseIfShouting(name) {
  if (name !== name.toUpperCase()) return name
  return name.toLowerCase().replace(/(^|[\s\-'(])([a-z])/g, (_, p, c) => p + c.toUpperCase())
}

export function cleanPersonName(raw) {
  let n = raw.replace(/\s+/g, ' ').trim()
  n = n.replace(/^(Dr\.?|Dra\.?|Prof\.?(\s+Dr\.?)?|Lek\.|Dr\. med\.|Prof\. Dr\. med\.|Doctor)\s+/i, '')
  n = n.replace(/^(med\.)\s+/i, '')
  n = n.replace(/[.,;:\s]+$/, '')
  return titleCaseIfShouting(n)
}

export function nameKey(name) {
  const cleaned = stripAccents(cleanPersonName(name))
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/["“”]/g, ' ')
    .replace(/\b(jr|sr|ii|iii|iv)\.?$/g, '')
    .replace(/[^a-z\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
  if (cleaned.length === 0) return ''
  if (cleaned.length === 1) return cleaned[0]
  return `${cleaned[0]} ${cleaned[cleaned.length - 1]}`
}

export function splitFirstLast(name) {
  const parts = stripAccents(cleanPersonName(name))
    .replace(/\([^)]*\)/g, ' ')
    .replace(/["“”]/g, ' ')
    .replace(/,?\s+\b(Jr|Sr|II|III|IV)\.?$/i, '')
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length < 2) return null
  return { first: parts[0].replace(/\.$/, ''), last: parts[parts.length - 1], middle: parts.slice(1, -1).join(' ') || null }
}

export function normalizePhone(raw) {
  if (!raw) return null
  const digits = String(raw).replace(/\D/g, '')
  const d = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
  return String(raw).trim()
}

export function normalizeUrl(raw) {
  if (!raw) return null
  let u = String(raw).trim().replace(/[),.;]+$/, '')
  if (!/^https?:\/\//i.test(u)) {
    if (!/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(u)) return null
    u = `https://${u}`
  }
  try {
    return new URL(u).toString()
  } catch {
    return null
  }
}

export function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}

export function titleCaseCity(city) {
  if (!city) return null
  const c = city.replace(/\s+/g, ' ').trim()
  return c === c.toUpperCase() || c === c.toLowerCase() ? c.toLowerCase().replace(/(^|[\s-])(\p{L})/gu, (_, p, ch) => p + ch.toUpperCase()) : c
}
