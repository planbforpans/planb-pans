'use client'

import { useReveal } from '../_components/hooks'

type Status = 'recruiting' | 'active' | 'early-signal' | 'queued'

const moreStudies: {
  name: string
  frame: string
  cohort: string
  status: Status
}[] = [
  {
    name: 'Phage therapy for strep-triggered PANS',
    frame: 'Targeted bacterial phages for recurrent strep carriers',
    cohort: '5 kids',
    status: 'recruiting',
  },
  {
    name: 'Craniosacral + SSP paired',
    frame: 'Nervous-system-first approach before any pharma titration',
    cohort: '8 kids',
    status: 'active',
  },
  {
    name: 'Mold remediation + binder protocols',
    frame: 'Does a clean home change the protocol, or obviate it?',
    cohort: '12 kids',
    status: 'early-signal',
  },
  {
    name: 'Peptides in pediatric PANS',
    frame: 'BPC-157, KPV, TB-500 — sequencing, dosing, what responds',
    cohort: '6 kids',
    status: 'active',
  },
  {
    name: 'DNRS / limbic retraining in dysregulated kids',
    frame: 'Can nonverbal/severe kids do the work? Where does it land?',
    cohort: '7 kids',
    status: 'active',
  },
  {
    name: 'Joan Randall protocol — biomagnetism for Lyme',
    frame: 'Lyme-specific biomagnetic pairings, session-by-session shifts, sustained change',
    cohort: '10 kids',
    status: 'active',
  },
  {
    name: 'Homeopathy (constitutional, classical)',
    frame: 'Where does individualized remedy-matching land for PANS/autism?',
    cohort: '6 kids',
    status: 'recruiting',
  },
  {
    name: 'Low-dose naltrexone in pediatric PANS',
    frame: 'Mixed anecdotal reports — what does a real cohort show?',
    cohort: '5 kids',
    status: 'queued',
  },
  {
    name: 'HBOT for cognitive rebound',
    frame: 'Does 40-session hyperbaric move the regression window?',
    cohort: 'intake open',
    status: 'queued',
  },
]

const statusMeta: Record<Status, { label: string; color: string; dot: string }> = {
  recruiting: {
    label: 'Recruiting',
    color: '#1F6B6B',
    dot: '#1F6B6B',
  },
  active: {
    label: 'Active — tracking',
    color: '#1F6B6B',
    dot: '#1F6B6B',
  },
  'early-signal': {
    label: 'Early signal',
    color: '#c76a4a',
    dot: '#c76a4a',
  },
  queued: {
    label: 'Queued',
    color: '#8a8373',
    dot: 'transparent',
  },
}

export default function CaseStudies() {
  const ref = useReveal()
  const gridRef = useReveal()
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
            background:
              'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="pb-container"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Cohort studies · Fringe modalities in real time
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1000,
            }}
          >
            What actually <em style={{ color: 'var(--teal)' }}>moves</em> the needle?
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
            Every cohort study here is a single modality, tracked across 5–12 real kids in real
            time. We follow each child through the full arc — what shifts, what stalls,
            what&apos;s worth 12 weeks and what&apos;s noise. Published as the signal emerges.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              marginTop: 56,
            }}
          >
            {[
              {
                n: '01',
                q: 'What does healing look like?',
                s: 'Not a straight line. Which signals appear first, which follow, and which never come back?',
              },
              {
                n: '02',
                q: 'What does stalling out look like?',
                s: 'When a modality runs out of room. Before the parent has sunk twelve more weeks into it.',
              },
              {
                n: '03',
                q: 'How do we order these modalities?',
                s: 'Sequence matters. Which come before which? Where does the bottleneck actually live?',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  padding: 24,
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--teal)',
                    letterSpacing: '0.22em',
                    marginBottom: 14,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontStyle: 'italic',
                    color: 'var(--ink)',
                    lineHeight: 1.3,
                    fontWeight: 400,
                    marginBottom: 12,
                  }}
                >
                  {c.q}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {c.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured cohort study — Yasko */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
        }}
      >
        <div ref={ref} className="pb-container reveal" style={{ maxWidth: 1100 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 28,
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <p
              className="mono"
              style={{
                fontSize: 10,
                color: 'var(--sand-dark)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              Featured · Study № 01
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#c76a4a',
                }}
              />
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  color: '#c76a4a',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Active · Recruiting
              </span>
            </div>
          </div>

          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--ink)',
              padding: 'clamp(32px, 5vw, 56px)',
              position: 'relative',
            }}
          >
            <p
              className="eyebrow"
              style={{ color: 'var(--teal)', marginBottom: 18 }}
            >
              The modality
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 60px)',
                fontWeight: 300,
                letterSpacing: '-0.022em',
                lineHeight: 1.02,
                margin: 0,
                marginBottom: 20,
                color: 'var(--ink)',
              }}
            >
              The Amy Yasko protocol,
              <br />
              <em style={{ color: 'var(--teal)' }}>
                synthesized through AI.
              </em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 760,
                marginBottom: 40,
              }}
            >
              Yasko&apos;s holistic methylation work is extensive, technical, and almost
              impossible for a parent to work through alone. Plan B reads each kid&apos;s full
              SNP panel, symptom history, and current treatments — and maps them to the Yasko
              framework in language the parent can actually use. This study follows ten kids
              for six months as the AI-synthesized protocol runs alongside their existing care.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 20,
                marginBottom: 48,
                paddingBottom: 40,
                borderBottom: '1px solid var(--sand-light)',
              }}
            >
              {[
                { k: '10', v: 'kids tracked', u: 'n' },
                { k: '6 mo', v: 'observation window', u: 't' },
                { k: 'SNP-matched', v: 'personalization', u: 'x' },
                { k: 'Open', v: 'journal — posted weekly', u: '→' },
              ].map((s) => (
                <div key={s.v} style={{ borderTop: '1px solid var(--ink)', paddingTop: 14 }}>
                  <p
                    className="serif"
                    style={{
                      fontSize: 34,
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                      margin: 0,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.k}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 9,
                      color: 'var(--sand-dark)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginTop: 8,
                    }}
                  >
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="eyebrow"
              style={{ marginBottom: 22 }}
            >
              Questions the study answers
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 20,
              }}
            >
              {[
                {
                  q: 'What percentage moved the needle?',
                  s: 'Measurable change in rage, OCD, sleep, cognitive load, or regression markers — within 90 days.',
                },
                {
                  q: 'What worked?',
                  s: 'Which specific protocol components, in which sequence, showed clean signal across multiple kids.',
                },
                {
                  q: 'What didn\u2019t?',
                  s: 'What was tried, held, or escalated — and produced nothing, or made things worse. Those matter too.',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--cream-light)',
                    border: '1px solid var(--sand-light)',
                    borderRadius: 4,
                    padding: 22,
                  }}
                >
                  <p
                    className="serif"
                    style={{
                      fontSize: 20,
                      fontStyle: 'italic',
                      color: 'var(--ink)',
                      lineHeight: 1.3,
                      fontWeight: 400,
                      marginBottom: 10,
                    }}
                  >
                    {c.q}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {c.s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More studies */}
      <section
        style={{
          padding: '40px 24px 100px',
          background: 'var(--cream)',
        }}
      >
        <div
          ref={gridRef}
          className="pb-container reveal"
          style={{ maxWidth: 1080 }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 28,
              flexWrap: 'wrap',
              gap: 16,
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 20,
              marginTop: 40,
            }}
          >
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              More studies in progress
            </h2>
            <div
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {(['recruiting', 'active', 'early-signal', 'queued'] as Status[]).map((k) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 10,
                    color: 'var(--sand-dark)',
                    fontFamily: 'var(--font-inter)',
                    letterSpacing: '0.08em',
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: statusMeta[k].dot,
                      border: k === 'queued' ? '1px solid var(--sand-dark)' : 'none',
                    }}
                  />
                  {statusMeta[k].label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 14,
            }}
          >
            {moreStudies.map((s) => {
              const meta = statusMeta[s.status]
              return (
                <article
                  key={s.name}
                  className="card-hover"
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--sand)',
                    borderRadius: 4,
                    padding: '22px 22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 190,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: meta.dot,
                        border: s.status === 'queued' ? '1px solid var(--sand-dark)' : 'none',
                      }}
                    />
                    <span
                      className="mono"
                      style={{
                        fontSize: 9,
                        color: meta.color,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {meta.label}
                    </span>
                    <span style={{ flex: 1 }} />
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: 'var(--sand-dark)',
                        letterSpacing: '0.14em',
                      }}
                    >
                      {s.cohort}
                    </span>
                  </div>
                  <h3
                    className="serif"
                    style={{
                      fontSize: 22,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      marginBottom: 10,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      fontStyle: 'italic',
                      marginTop: 'auto',
                    }}
                  >
                    {s.frame}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* How we order */}
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
            § How we order
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 5.6vw, 62px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--cream)',
              marginBottom: 28,
            }}
          >
            Sequence is a modality.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.85,
              color: '#bbb3a2',
              fontWeight: 300,
              maxWidth: 720,
              marginBottom: 44,
            }}
          >
            Trying everything at once is how parents burn out and miss the signal. Plan B&apos;s
            read of your kid suggests an order — what to try first, what to hold, what to rule
            out before investing twelve weeks in something blocked behind an earlier bottleneck.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                n: '01',
                t: 'Remove the biggest inhibitor first',
                b: 'Mold, active infection, ongoing exposure. The body can’t heal while the bucket is still filling.',
              },
              {
                n: '02',
                t: 'Stabilize the nervous system',
                b: 'Dysregulated kids need a regulated ground state before any protocol shows a clean signal.',
              },
              {
                n: '03',
                t: 'One variable at a time, two weeks minimum',
                b: 'Unless the modality is designed to run in parallel. Stacking hides what worked and what didn’t.',
              },
              {
                n: '04',
                t: 'Trust the stall, not just the gain',
                b: 'A modality that stops working after initial gains is telling you something about the next bottleneck.',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.15)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 48,
                    lineHeight: 0.9,
                    color: 'var(--teal-light)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--cream)',
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section style={{ padding: '120px 24px', background: 'var(--cream-light)' }}>
        <div
          className="pb-container"
          style={{ maxWidth: 760, textAlign: 'center' }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Join us
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(38px, 6vw, 62px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: 24,
              color: 'var(--ink)',
            }}
          >
            Your kid&apos;s pattern is <em style={{ color: 'var(--teal)' }}>someone else&apos;s map.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.85,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 640,
              margin: '0 auto 28px',
            }}
          >
            These cohort studies get built from your Tuesday log, not a paper. Track with Plan B —
            consent-based, de-identified — and your family&apos;s signal helps the next family
            skip the dead ends.
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: 'var(--sand-dark)',
              fontWeight: 300,
              maxWidth: 600,
              margin: '0 auto 36px',
            }}
          >
            Want your kid in a cohort study? Complete the full Plan B intake. Cohorts are matched
            on profile — we place kids where the modality actually fits their kid, so every
            study starts from aligned data.
          </p>
          <a
            href="https://app.planbforpans.com/signup"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none', fontSize: 12 }}
          >
            Complete the intake →
          </a>
        </div>
      </section>
    </main>
  )
}
