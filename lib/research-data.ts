import { APP_ORIGIN } from './directory/data'

// Research hub data, fetched from the app's public endpoints (ISR). Every
// fetch fails soft: the page renders its fallback instead of breaking.

export type Finding = { id: string; title: string; headline: string; body: string; n: number; unit?: string }
export type FindingsWeek = { week_start: string; findings: Finding[] }
export type Counter = { families_tracking: number; nights_logged: number } | null
export type Study = { slug: string; title: string; kicker: string; status: string; question: string; who: string; how: string; href: string; join: string }
export type Trial = { nct: string; title: string; status: string; phase: string; location: string; ages: string; topics: string[]; url: string; pinned?: boolean }

async function get<T>(path: string, revalidate: number): Promise<T | null> {
  try {
    const res = await fetch(`${APP_ORIGIN}${path}`, { next: { revalidate } })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

export async function fetchFindings(): Promise<{ weeks: FindingsWeek[]; counter: Counter }> {
  const d = await get<{ weeks?: FindingsWeek[]; counter?: Counter }>('/api/public/findings?limit=3', 600)
  return { weeks: d?.weeks ?? [], counter: d?.counter ?? null }
}

export async function fetchStudies(): Promise<Study[] | null> {
  const d = await get<{ studies?: Study[] }>('/api/public/studies', 3600)
  return d?.studies?.length ? d.studies : null
}

export async function fetchTrials(): Promise<{ trials: Trial[]; topics: Record<string, string>; updated_at: string | null } | null> {
  const d = await get<{ trials?: Trial[]; topics?: Array<{ id: string; label: string }>; updated_at?: string | null }>('/api/public/trials', 3600)
  if (!d?.trials?.length) return null
  return { trials: d.trials, topics: Object.fromEntries((d.topics ?? []).map((t) => [t.id, t.label])), updated_at: d.updated_at ?? null }
}
