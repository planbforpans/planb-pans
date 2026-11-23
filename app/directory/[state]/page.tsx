import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchSummaries, outsideUS, providersInState, stateFromSlug, statesWithProviders, STATES } from '@/lib/directory/data'
import ProviderCard from '../_components/ProviderCard'
import s from '../directory.module.css'

export const dynamicParams = false
export const revalidate = 600

export function generateStaticParams() {
  const params = statesWithProviders().map((st) => ({ state: st.slug }))
  if (outsideUS().length) params.push({ state: 'international' })
  return params
}

function resolve(slug: string) {
  if (slug === 'international') return { name: 'outside the US', providers: outsideUS() }
  const code = stateFromSlug(slug)
  if (!code) return null
  return { name: STATES[code], providers: providersInState(code) }
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const r = resolve(state)
  if (!r) return {}
  const n = r.providers.length
  return {
    title: `PANS & PANDAS Doctors in ${r.name} (${n}) — Plan B for PANS`,
    description: `${n} doctor${n === 1 ? '' : 's'} and practitioner${n === 1 ? '' : 's'} who treat PANS and PANDAS ${r.name === 'outside the US' ? 'outside the US' : `in ${r.name}`}, with contact details and reviews from other PANS parents.`,
    alternates: { canonical: `/directory/${state}` },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const r = resolve(state)
  if (!r || r.providers.length === 0) notFound()
  const summaries = await fetchSummaries()
  const where = r.name === 'outside the US' ? 'outside the US' : `in ${r.name}`

  return (
    <main className={s.page}>
      <section className={`${s.hero} graph-paper`}>
        <div className={s.heroIn}>
          <p className={s.crumbs}>
            <a href="/directory">Directory</a> / {r.name}
          </p>
          <h1 className={s.h1}>
            PANS &amp; PANDAS doctors <em>{where}</em>
          </h1>
          <p className={s.lede}>
            {r.providers.length} provider{r.providers.length === 1 ? '' : 's'} {where} who treat PANS or PANDAS, from public
            provider lists, clinical trials and published research. Many also see families by telehealth, so it&rsquo;s worth
            checking neighboring states too.
          </p>
        </div>
      </section>

      <div className={s.wrap}>
        <div className={s.cards}>
          {r.providers.map((p, i) => (
            <ProviderCard key={p.slug} p={p} summary={summaries[p.slug]} delay={Math.min(i * 40, 600)} />
          ))}
        </div>

        <div className={s.notice} style={{ marginTop: 32 }}>
          Listing is not an endorsement, and we haven&rsquo;t vetted each provider. Confirm details with the office before you
          book. Know someone we&rsquo;re missing?{' '}
          <a href="mailto:rachel@planbforpans.com?subject=Directory%20suggestion">Tell us</a>.
        </div>

        <a className={s.cta} href="https://app.planbforpans.com/signup">
          <strong>Found someone? Walk in with the whole picture.</strong>
          <span>Get a free Synthesis of your child&rsquo;s story and labs to bring to the first appointment. &rarr;</span>
        </a>
      </div>
    </main>
  )
}
