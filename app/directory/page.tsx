import type { Metadata } from 'next'
import { allProviders, cityLine, displayCredentials, outsideUS, statesWithProviders } from '@/lib/directory/data'
import DirectorySearch from './_components/DirectorySearch'
import s from './directory.module.css'

export const metadata: Metadata = {
  title: 'PANS & PANDAS Doctor Directory: Find a Provider Near You — Plan B for PANS',
  description:
    'Find doctors and practitioners who treat PANS and PANDAS, by state. Contact details, where each listing comes from, and honest reviews from other PANS parents.',
  alternates: { canonical: '/directory' },
}

export default function DirectoryHub() {
  const states = statesWithProviders()
  const intl = outsideUS()
  const entries = allProviders.map((p) => ({
    slug: p.slug,
    name: displayCredentials(p),
    where: cityLine(p),
    haystack: [p.name, p.practice, p.address.city, p.address.state, ...p.specialties].filter(Boolean).join(' ').toLowerCase(),
  }))

  return (
    <main className={s.page}>
      <section className={`${s.hero} graph-paper`}>
        <div className={s.heroIn}>
          <p className={s.kicker}>
            <span>The PANS &amp; PANDAS Directory</span>
            <span>{allProviders.length} providers</span>
            <span>{states.length} states</span>
          </p>
          <h1 className={s.h1}>
            Find a doctor who <em>takes PANS seriously.</em>
          </h1>
          <p className={s.lede}>
            Every provider we can find who treats PANS and PANDAS, gathered from public provider lists, clinical trials and the
            published research, then checked against the national provider registry. Parents who&rsquo;ve been seen leave reviews,
            so the next family knows what to expect.
          </p>
        </div>
      </section>

      <div className={s.wrap}>
        <p className={s.sectionLabel}>Search</p>
        <DirectorySearch entries={entries} />

        <p className={s.sectionLabel} style={{ marginTop: 48 }}>Browse by state</p>
        {states.length === 0 ? (
          <p className={s.muted}>The directory is being built. Check back soon.</p>
        ) : (
          <div className={s.atlas}>
            {states.map((st, i) => (
              <a key={st.code} href={`/directory/${st.slug}`} className={s.stateLink} style={{ animationDelay: `${Math.min(i * 18, 600)}ms` }}>
                <span className={s.stateName}>{st.name}</span>
                <span className={s.count}>{st.count}</span>
              </a>
            ))}
            {intl.length > 0 && (
              <a href="/directory/international" className={s.stateLink}>
                <span className={s.stateName}>Outside the US</span>
                <span className={s.count}>{intl.length}</span>
              </a>
            )}
          </div>
        )}

        <div className={s.notice} style={{ marginTop: 40 }}>
          <strong>How this directory works.</strong> Listings are gathered automatically from public sources, and each one shows
          where it came from. Being listed is not an endorsement by Plan B for PANS, and we haven&rsquo;t vetted each provider.
          Always confirm details directly with the office. Reviews are written by parents and reflect their own experience.{' '}
          <a href="/directory/review-policy">Review policy</a> · Are you a provider?{' '}
          <a href="mailto:rachel@planbforpans.com?subject=Directory%20listing">Add, correct or remove your listing</a>.
        </div>

        <a className={s.cta} href="https://app.planbforpans.com/signup">
          <strong>Before the first appointment, bring the whole picture.</strong>
          <span>A free Synthesis reads your child&rsquo;s whole story and labs, and lists the tests still worth ordering, ready to hand to whichever doctor you find here. &rarr;</span>
        </a>
      </div>
    </main>
  )
}
