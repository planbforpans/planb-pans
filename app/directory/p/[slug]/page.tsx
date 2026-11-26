import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allProviders, cityLine, displayCredentials, fetchReviews, providerBySlug, stateSlug, STATES } from '@/lib/directory/data'
import Reviews from '../../_components/Reviews'
import s from '../../directory.module.css'

export const dynamicParams = false
export const revalidate = 600

export function generateStaticParams() {
  return allProviders.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = providerBySlug(slug)
  if (!p) return {}
  const where = cityLine(p)
  return {
    title: `${displayCredentials(p)}${where ? ` — ${where}` : ''} | PANS & PANDAS Directory`,
    description: `${displayCredentials(p)}${p.practice ? ` at ${p.practice}` : ''}${where ? ` in ${where}` : ''}. Contact details and reviews from parents of children with PANS and PANDAS.`,
    alternates: { canonical: `/directory/p/${slug}` },
  }
}

const yn = (v: boolean | null) => (v == null ? null : v ? 'Yes' : 'No')

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = providerBySlug(slug)
  if (!p) notFound()
  const { reviews, summary } = await fetchReviews(slug)
  const st = p.address.state && STATES[p.address.state] ? p.address.state : null
  const addr = [p.address.line1, [p.address.city, p.address.state].filter(Boolean).join(', '), p.address.zip].filter(Boolean).join(' · ')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': p.kind === 'clinic' ? 'MedicalClinic' : 'Physician',
    name: displayCredentials(p),
    url: `https://planbforpans.com/directory/p/${p.slug}`,
    ...(p.phone ? { telephone: p.phone } : {}),
    ...(p.website ? { sameAs: [p.website] } : {}),
    ...(p.specialties.length ? { medicalSpecialty: p.specialties } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: p.address.line1 ?? undefined,
      addressLocality: p.address.city ?? undefined,
      addressRegion: p.address.state ?? undefined,
      postalCode: p.address.zip ?? undefined,
    },
  }

  return (
    <main className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${s.hero} graph-paper`}>
        <div className={s.heroIn}>
          <p className={s.crumbs}>
            <a href="/directory">Directory</a> /{' '}
            {st ? <a href={`/directory/${stateSlug(st)}`}>{STATES[st]}</a> : <a href="/directory/international">Outside the US</a>}
          </p>
          <h1 className={s.h1} style={{ fontSize: 'clamp(34px, 5.4vw, 58px)' }}>{displayCredentials(p)}</h1>
          <p className={s.lede}>{[p.practice, cityLine(p)].filter(Boolean).join(' · ')}</p>
        </div>
      </section>

      <div className={s.wrap}>
        <div className={s.detailGrid}>
          <div>
            <div className={s.panel}>
              <dl className={s.dl}>
                {p.specialties.length > 0 && (<><dt>Specialty</dt><dd>{p.specialties.join(', ')}</dd></>)}
                {p.treats.length > 0 && (<><dt>Listed for</dt><dd>{p.treats.join(', ')}</dd></>)}
                {addr && (<><dt>Address</dt><dd>{addr}</dd></>)}
                {p.phone && (<><dt>Phone</dt><dd><a href={`tel:${p.phone.replace(/[^\d+]/g, '')}`}>{p.phone}</a></dd></>)}
                {p.website && (<><dt>Website</dt><dd><a href={p.website} rel="nofollow noopener" target="_blank">{p.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a></dd></>)}
                {yn(p.telehealth) && (<><dt>Telehealth</dt><dd>{yn(p.telehealth)}</dd></>)}
                {p.npi && (<><dt>NPI</dt><dd><a href={`https://npiregistry.cms.hhs.gov/provider-view/${p.npi}`} rel="nofollow noopener" target="_blank">{p.npi}</a></dd></>)}
              </dl>
            </div>

            <Reviews slug={p.slug} providerName={displayCredentials(p)} initialReviews={reviews} initialSummary={summary} />
          </div>

          <aside>
            <div className={s.panel}>
              <p className={s.sectionLabel}>Where this listing comes from</p>
              <ul style={{ margin: 0, paddingInlineStart: 18, fontSize: 14.5, lineHeight: 1.7 }}>
                {p.sources.map((src) => (
                  <li key={src.url}>
                    <a href={src.url} rel="nofollow noopener" target="_blank" style={{ color: 'var(--teal)' }}>{src.name}</a>
                  </li>
                ))}
              </ul>
              <p className={s.muted} style={{ margin: '12px 0 0' }}>Last checked {new Date(p.lastVerified).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <p className={s.notice}>
                Listed automatically from public sources. Not an endorsement, and not vetted by Plan B for PANS. Confirm details
                with the office. Is this you?{' '}
                <a href={`mailto:rachel@planbforpans.com?subject=${encodeURIComponent(`Directory listing: ${p.name} (${p.slug})`)}`}>Claim, correct or remove this listing</a>.
              </p>
            </div>
            <a className={s.cta} href="https://app.planbforpans.com/signup">
              <strong>Bring the whole picture to your first visit.</strong>
              <span>A free Synthesis reads your child&rsquo;s story and labs and lists what&rsquo;s still worth testing. &rarr;</span>
            </a>
          </aside>
        </div>
      </div>
    </main>
  )
}
