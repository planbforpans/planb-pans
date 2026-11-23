import { fetchJson, fetchText } from '../lib/http.mjs'
import { findStateInText, nameKey } from '../lib/normalize.mjs'

const EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils'
const TOOL = 'planb-directory-builder'
const TERM =
  '("pediatric acute-onset neuropsychiatric syndrome"[tiab] OR "paediatric acute-onset neuropsychiatric syndrome"[tiab] OR "pediatric autoimmune neuropsychiatric"[tiab] OR "paediatric autoimmune neuropsychiatric"[tiab] OR ((PANDAS[tiab] OR PANS[tiab]) AND (streptococc*[tiab] OR neuropsychiatric[tiab] OR obsessive*[tiab]))) AND ("2010/01/01"[dp] : "3000"[dp])'
const MIN_PAPERS = Number(process.env.DIRECTORY_PUBMED_MIN_PAPERS ?? 2)

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .trim()

const US_RE = /\b(USA|U\.S\.A\.|United States)\b/

function parseArticles(xml) {
  const out = []
  for (const art of xml.split('<PubmedArticle>').slice(1)) {
    const pmid = art.match(/<PMID[^>]*>(\d+)<\/PMID>/)?.[1]
    const title = decode(art.match(/<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/)?.[1] ?? '')
    const types = [...art.matchAll(/<PublicationType[^>]*>([^<]+)<\/PublicationType>/g)].map((m) => m[1])
    const authorBlocks = [...art.matchAll(/<Author\b[^>]*>([\s\S]*?)<\/Author>/g)].map((m) => m[1])
    const authors = authorBlocks
      .map((b, i) => ({
        last: decode(b.match(/<LastName>([\s\S]*?)<\/LastName>/)?.[1] ?? ''),
        fore: decode(b.match(/<ForeName>([\s\S]*?)<\/ForeName>/)?.[1] ?? ''),
        affiliations: [...b.matchAll(/<Affiliation>([\s\S]*?)<\/Affiliation>/g)].map((m) => decode(m[1])),
        position: i,
      }))
      .filter((a) => a.last && a.fore)
    out.push({ pmid, title, types, authors, authorCount: authors.length })
  }
  return out
}

function institutionOf(aff) {
  const segs = aff.split(/[,;]/).map((s) => s.trim()).filter(Boolean)
  return (
    segs.find((s) => /hospital|medical center|children's|clinic|health/i.test(s)) ??
    segs.find((s) => /universit|institute|college|school of medicine|research cent/i.test(s)) ??
    segs[0] ??
    null
  )
}

export default async function pubmed() {
  const search = await fetchJson(
    `${EUTILS}/esearch.fcgi?${new URLSearchParams({ db: 'pubmed', term: TERM, retmax: '5000', retmode: 'json', tool: TOOL })}`,
    { skipRobots: true, delayMs: 400 },
  )
  const ids = search.esearchresult?.idlist ?? []
  const articles = []
  for (let i = 0; i < ids.length; i += 200) {
    const batch = ids.slice(i, i + 200)
    // Documented NCBI E-utilities API (robots.txt targets crawlers, not API clients); <3 req/s.
    const xml = await fetchText(
      `${EUTILS}/efetch.fcgi?${new URLSearchParams({ db: 'pubmed', id: batch.join(','), retmode: 'xml', tool: TOOL })}`,
      { skipRobots: true, delayMs: 400 },
    )
    articles.push(...parseArticles(xml))
  }

  const byPerson = new Map()
  for (const art of articles) {
    for (const a of art.authors) {
      const usAff = a.affiliations.find((aff) => US_RE.test(aff) || findStateInText(aff))
      if (!usAff) continue
      const state = findStateInText(usAff)
      if (!state) continue
      const foreParts = a.fore.split(/\s+/)
      const first = foreParts[0].replace(/\.$/, '')
      if (first.length < 2) continue
      const name = `${a.fore} ${a.last}`.replace(/\s+/g, ' ')
      const key = `${nameKey(name)}|${state}`
      const entry = byPerson.get(key) ?? { name, state, affiliations: new Set(), pmids: new Set(), keyRole: false }
      entry.affiliations.add(usAff)
      entry.pmids.add(art.pmid)
      if (a.position === 0 || a.position === art.authorCount - 1) entry.keyRole = true
      byPerson.set(key, entry)
    }
  }

  const out = []
  for (const e of byPerson.values()) {
    if (e.pmids.size < MIN_PAPERS) continue
    const pmids = [...e.pmids].sort()
    const aff = [...e.affiliations][0]
    out.push({
      name: e.name,
      rawName: e.name,
      isOrg: false,
      credentials: null,
      kind: 'researcher',
      specialties: [],
      practice: institutionOf(aff),
      address: { line1: null, city: null, state: e.state, zip: null },
      country: 'US',
      phone: null,
      website: null,
      telehealth: null,
      treats: [],
      requireNpi: true,
      signal: { type: 'pubmed', pmids, paperCount: pmids.length, affiliations: [...e.affiliations] },
      source: {
        name: `PubMed (${pmids.length} PANS/PANDAS papers)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/?term=${pmids.join('+')}`,
      },
    })
  }
  out.meta = { articles: articles.length, usAuthorCandidates: byPerson.size, keptCandidates: out.length }
  return out
}
