'use client'

import { useEffect, useState } from 'react'
import { useReveal } from '../_components/hooks'

type Candidate = {
  id: string
  slug: string
  name: string
  modality: string
  funding_type: 'practitioner_funded' | 'donation' | 'undecided'
  funding_goal_cents: number
  funding_raised_cents: number
  est_cost_labs_cents: number
  est_cost_practitioner_cents: number
  est_cost_medication_cents: number
  est_cost_travel_cents: number
  est_cost_hotel_cents: number
}

export default function DonatePage() {
  const head = useReveal()
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://app.planbforpans.com/api/vote')
      .then((r) => r.json())
      .then((d) => setCandidates(d.candidates || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const donationStudies = candidates.filter((c) => c.funding_type === 'donation')
  const totalRaised = candidates.reduce(
    (sum, c) => sum + (c.funding_raised_cents || 0),
    0,
  )
  const totalGoal = candidates.reduce(
    (sum, c) => sum + (c.funding_goal_cents || 0),
    0,
  )

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 80px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={head}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Donate · Public &amp; ongoing
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 9vw, 108px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.96,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1080,
            }}
          >
            Fund the <em style={{ color: 'var(--teal)' }}>way out.</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Parents in this battle for years are choosing between eating and the next
            treatment. Every dollar here goes to running cohort studies — labs, supplements,
            practitioner time when the practitioner needs to charge — so families can
            participate without paying for the research.
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(19px, 2.2vw, 24px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: 24,
              maxWidth: 720,
            }}
          >
            Everything raised is public. Everything spent is public. Always.
          </p>
        </div>
      </section>

      {/* Running total — GoFundMe-style */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--ink)',
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Total raised · All studies
            </p>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(64px, 12vw, 132px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              ${(totalRaised / 100).toLocaleString()}
            </p>
            {totalGoal > 0 && (
              <p
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--sand-dark)',
                  marginTop: 20,
                }}
              >
                of ${(totalGoal / 100).toLocaleString()} combined goal
              </p>
            )}
            <div style={{ marginTop: 32 }}>
              <a
                href="mailto:rachel@planbforpans.com?subject=I%20want%20to%20donate"
                className="cta-teal"
                style={{ textDecoration: 'none' }}
              >
                Donate to Plan B →
              </a>
              <p
                style={{
                  fontSize: 12,
                  color: 'var(--sand-dark)',
                  marginTop: 16,
                }}
              >
                501(c)(3) application pending · email for current options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Per-study breakdown */}
      <section
        style={{
          padding: '60px 24px 100px',
          background: 'var(--cream)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1000 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              paddingBottom: 18,
              borderBottom: '1px solid var(--ink)',
              marginBottom: 24,
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Studies needing donations
            </h2>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
              }}
            >
              Live · Updated as dollars come in
            </p>
          </div>

          {loading ? (
            <p style={{ color: 'var(--sand-dark)' }}>Loading studies…</p>
          ) : donationStudies.length === 0 ? (
            <div
              style={{
                padding: '60px 30px',
                textAlign: 'center',
                border: '1px dashed var(--sand)',
                borderRadius: 4,
              }}
            >
              <p
                className="serif"
                style={{
                  fontSize: 26,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.4,
                  marginBottom: 16,
                  maxWidth: 620,
                  margin: '0 auto 16px',
                }}
              >
                No donation-funded studies on the board yet.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.75,
                  maxWidth: 560,
                  margin: '0 auto 20px',
                }}
              >
                Most of our early cohort studies are practitioner-funded via the 10-free-clients
                pledge. When a study needs donations to run (labs, supplements, travel
                accommodations for families), it will appear here with a goal and a running
                tally.
              </p>
              <a
                href="/vote"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                }}
              >
                See the ballot →
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {donationStudies.map((s) => {
                const pct = s.funding_goal_cents > 0
                  ? Math.min(100, Math.round((s.funding_raised_cents / s.funding_goal_cents) * 100))
                  : 0
                return (
                  <article
                    key={s.id}
                    style={{
                      background: 'var(--paper)',
                      border: '1px solid var(--sand)',
                      borderRadius: 4,
                      padding: '22px 24px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      <div>
                        <p
                          className="serif"
                          style={{
                            fontSize: 24,
                            fontWeight: 400,
                            letterSpacing: '-0.01em',
                            color: 'var(--ink)',
                            marginBottom: 4,
                          }}
                        >
                          {s.name}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: 'var(--teal)',
                            fontStyle: 'italic',
                          }}
                        >
                          {s.modality}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p
                          className="serif"
                          style={{
                            fontSize: 28,
                            fontWeight: 400,
                            color: 'var(--ink)',
                            lineHeight: 1,
                          }}
                        >
                          ${(s.funding_raised_cents / 100).toLocaleString()}
                        </p>
                        <p
                          className="mono"
                          style={{
                            fontSize: 10,
                            letterSpacing: '0.15em',
                            color: 'var(--sand-dark)',
                            marginTop: 4,
                          }}
                        >
                          of ${(s.funding_goal_cents / 100).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        height: 6,
                        background: '#f2ecd9',
                        borderRadius: 3,
                        overflow: 'hidden',
                        marginBottom: 12,
                      }}
                    >
                      <div
                        style={{
                          width: `${pct}%`,
                          height: '100%',
                          background: 'var(--teal)',
                          transition: 'width 400ms ease',
                        }}
                      />
                    </div>

                    <a
                      href={`mailto:rachel@planbforpans.com?subject=Donate%20to%20${encodeURIComponent(s.name)}%20study`}
                      style={{
                        display: 'inline-block',
                        fontSize: 11,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: 'var(--teal)',
                        textDecoration: 'none',
                        borderBottom: '1px solid currentColor',
                      }}
                    >
                      Donate to this study →
                    </a>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* What the money buys */}
      <section
        style={{
          padding: '100px 24px',
          background: '#141414',
          color: 'var(--cream)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 960 }}>
          <p
            className="eyebrow"
            style={{ color: 'var(--teal-light)', marginBottom: 22 }}
          >
            § Where the money goes
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 5.6vw, 58px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--cream)',
              marginBottom: 36,
              maxWidth: 760,
            }}
          >
            Nothing vague. <em style={{ color: 'var(--teal-light)' }}>Every line item.</em>
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                t: 'Labs and testing',
                b: 'Stool panels, organic acids, SNP sequencing, mycotoxin, Lyme panels — whatever the study protocol requires, when insurance won&apos;t cover it.',
              },
              {
                t: 'Medications &amp; supplements',
                b: 'Six months of the protocol-specific supplements and medications the study calls for.',
              },
              {
                t: 'Practitioner fees',
                b: 'Only when the practitioner cannot offer the 10-free-clients pledge. Their invoice is public.',
              },
              {
                t: 'Travel &amp; lodging',
                b: 'Some modalities require in-person visits to a specific clinic. We cover travel costs for families in the cohort.',
              },
              {
                t: 'Plan B infrastructure',
                b: 'A small percentage (&lt;15%) covers hosting, AI API costs, and running the tracker itself. Published quarterly.',
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.2)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--cream)',
                    marginBottom: 10,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.t }}
                />
                <p
                  style={{
                    fontSize: 13,
                    color: '#bbb3a2',
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream-light)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 22,
              color: 'var(--ink)',
            }}
          >
            Every dollar pulls a family{' '}
            <em style={{ color: 'var(--teal)' }}>closer to out.</em>
          </h2>
          <a
            href="mailto:rachel@planbforpans.com?subject=I%20want%20to%20donate"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Donate to Plan B →
          </a>
        </div>
      </section>
    </main>
  )
}
