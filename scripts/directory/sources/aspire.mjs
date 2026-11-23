import { fetchText } from '../lib/http.mjs'

// ASPIRE's "Find a Provider" page does not publish its list; families must email to
// request a state list. This source only verifies that and returns no records.
const PAGE = 'https://aspire.care/treating-pans/find-a-provider/'

export default async function aspire() {
  const html = await fetchText(PAGE)
  const emailOnly = /email us at[\s\S]{0,80}with the state you live in/i.test(html.replace(/<[^>]+>/g, ' '))
  const out = []
  out.meta = {
    note: emailOnly
      ? 'ASPIRE provider list is distributed by email on request only; nothing public to scrape.'
      : 'ASPIRE page changed — no longer email-only; parser needs updating.',
  }
  return out
}
