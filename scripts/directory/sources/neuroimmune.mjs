import { isAllowed } from '../lib/http.mjs'

// Neuroimmune Foundation's clinician directory is explicitly disallowed in robots.txt.
const PAGE = 'https://neuroimmune.org/patient-and-family-resources/clinician-directory/'

export default async function neuroimmune() {
  const allowed = await isAllowed(PAGE)
  const out = []
  out.meta = {
    note: allowed
      ? 'robots.txt now allows the clinician directory — a parser could be added.'
      : 'Skipped: robots.txt disallows /patient-and-family-resources/clinician-directory/.',
  }
  return out
}
