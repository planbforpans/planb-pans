import * as cheerio from 'cheerio'
import { fetchText } from '../lib/http.mjs'
import { findStateInText, normalizePhone, normalizeUrl, stateCode } from '../lib/normalize.mjs'
import { parseListingLine } from '../lib/parse-listing.mjs'

// The PPN practitioner directory (https://www.pandasppn.org/practitioners/) embeds two
// public Jotform "search" forms whose conditional text blocks hold the full listing.
const DIRECTORY_PAGE = 'https://www.pandasppn.org/practitioners/'
const US_FORM = 'https://form.jotform.com/231304321773144'
const INTL_FORM = 'https://form.jotform.com/231375474456159'
const CLINICS_PAGE = 'https://www.pandasppn.org/clinics/'

const SOURCE_NAME = 'PANDAS Physicians Network Practitioner Directory'
const TREATS = ['PANS', 'PANDAS']

function discoverForms(html) {
  const ids = [...html.matchAll(/form\.jotform\.com\/jsform\/(\d+)/g)].map((m) => m[1])
  return [...new Set(ids)].map((id) => `https://form.jotform.com/${id}`)
}

function parseForm(html, { us, formUrl }) {
  const $ = cheerio.load(html)
  const out = []
  $('div.form-html').each((_, block) => {
    const $block = $(block)
    const heading = $block.find('strong').first().text().replace(/\s+/g, ' ').trim()
    if (!heading || /^(UNITED STATES)$/i.test(heading)) return
    const sectionState = us ? stateCode(heading) : null
    const country = us ? 'US' : heading.replace(/\b\w+/g, (w) => w[0] + w.slice(1).toLowerCase())
    if (us && !sectionState) return
    if (/we do not have practitioners listed/i.test($block.text())) return
    $block.find('li').each((__, li) => {
      const $li = $(li)
      const text = $li.text()
      if (!text.trim() || /we do not have practitioners listed/i.test(text)) return
      const links = $li
        .find('a[href]')
        .map((___, a) => $(a).attr('href'))
        .get()
        .filter((h) => !/^mailto:/i.test(h))
      const rec = parseListingLine(text, { links, us, sectionState, country })
      if (!rec || /pandasppn\.org/i.test(rec.website ?? '')) return
      out.push({
        ...rec,
        treats: TREATS,
        source: { name: SOURCE_NAME, url: DIRECTORY_PAGE, via: formUrl, section: heading },
      })
    })
  })
  return out
}

function parseClinics(html) {
  const $ = cheerio.load(html)
  const out = []
  $('p[style*="text-align: center"]').each((_, p) => {
    const $p = $(p)
    const text = $p.text().replace(/\s+/g, ' ').trim()
    if (!text || /Copyright|Home \|/.test(text)) return
    const a = $p.find('a[href]').first()
    const nameRaw = (a.length ? a.text() : $p.find('strong').first().text()).replace(/\s+/g, ' ').trim()
    if (!nameRaw) return
    const note = nameRaw.match(/\(([^)]*availability[^)]*)\)/i)?.[1] ?? null
    const name = nameRaw.replace(/\s*\([^)]*availability[^)]*\)/i, '').replace(/\s*[–—-]\s*/g, ' – ').trim()
    const phoneMatch = text.match(/\d{3}[\s.-]\d{3}[\s.-]\d{4}/)
    out.push({
      name,
      rawName: name,
      isOrg: true,
      credentials: null,
      kind: 'clinic',
      specialties: ['Multi-disciplinary PANS/PANDAS care'],
      practice: name,
      address: { line1: null, city: null, state: findStateInText(name), zip: null },
      country: 'US',
      phone: phoneMatch ? normalizePhone(phoneMatch[0]) : null,
      website: normalizeUrl(a.attr('href')),
      telehealth: null,
      treats: TREATS,
      note,
      source: { name: 'PANDAS Physicians Network Multi-Disciplinary Care Clinics', url: CLINICS_PAGE },
    })
  })
  return out
}

export default async function ppn() {
  const page = await fetchText(DIRECTORY_PAGE)
  const forms = discoverForms(page)
  const usForm = forms.find((f) => f.endsWith('231304321773144')) ?? forms[0] ?? US_FORM
  const intlForm = forms.find((f) => f.endsWith('231375474456159')) ?? forms[1] ?? INTL_FORM

  const records = []
  records.push(...parseForm(await fetchText(usForm), { us: true, formUrl: usForm }))
  records.push(...parseForm(await fetchText(intlForm), { us: false, formUrl: intlForm }))
  records.push(...parseClinics(await fetchText(CLINICS_PAGE)))
  return records
}
