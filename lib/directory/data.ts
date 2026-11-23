import providersJson from '@/data/directory/providers.json'
import type { Provider } from './types'

export const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.planbforpans.com'

export const STATES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
  CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas',
  KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts',
  MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana',
  NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico',
  NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma',
  OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  PR: 'Puerto Rico',
}

export const stateSlug = (code: string) => STATES[code].toLowerCase().replace(/\s+/g, '-')

export function stateFromSlug(slug: string): string | null {
  return Object.keys(STATES).find((c) => stateSlug(c) === slug) ?? null
}

export const allProviders: Provider[] = (providersJson as Provider[])
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))

export function providersInState(code: string): Provider[] {
  return allProviders.filter((p) => p.address.state === code)
}

export function providerBySlug(slug: string): Provider | undefined {
  return allProviders.find((p) => p.slug === slug)
}

export function statesWithProviders(): { code: string; name: string; slug: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const p of allProviders) {
    const s = p.address.state
    if (s && STATES[s]) counts.set(s, (counts.get(s) ?? 0) + 1)
  }
  return [...counts.entries()]
    .map(([code, count]) => ({ code, name: STATES[code], slug: stateSlug(code), count }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export const outsideUS = () => allProviders.filter((p) => !p.address.state || !STATES[p.address.state])

export type Facts = {
  acceptingNew: boolean | null
  telehealth: boolean | null
  takesInsurance: boolean | null
  waitWeeks: number | null
}

export type Review = {
  id: string
  providerSlug: string
  displayName: string
  rating: number
  body: string
  facts: Facts
  createdAt: string
  updatedAt: string
}

export type Summary = { count: number; avg: number | null }

// Reviews live in the app's database (app.planbforpans.com). Fetched on the
// server with ISR so Google indexes them; the client component refreshes them
// with the viewer's own cookie to know if they're signed in.
export async function fetchReviews(slug: string): Promise<{ reviews: Review[]; summary: Summary }> {
  try {
    const res = await fetch(`${APP_ORIGIN}/api/directory/reviews?provider=${encodeURIComponent(slug)}`, {
      next: { revalidate: 600, tags: [`reviews:${slug}`] },
    })
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    return { reviews: data.reviews ?? [], summary: data.summary ?? { count: 0, avg: null } }
  } catch {
    return { reviews: [], summary: { count: 0, avg: null } }
  }
}

export async function fetchSummaries(): Promise<Record<string, Summary>> {
  try {
    const res = await fetch(`${APP_ORIGIN}/api/directory/reviews?summary=1`, {
      next: { revalidate: 600, tags: ['reviews:summary'] },
    })
    if (!res.ok) throw new Error(String(res.status))
    return (await res.json()).summaries ?? {}
  } catch {
    return {}
  }
}

export function displayCredentials(p: Provider) {
  return p.credentials ? `${p.name}, ${p.credentials}` : p.name
}

export function cityLine(p: Provider) {
  return [p.address.city, p.address.state].filter(Boolean).join(', ')
}
