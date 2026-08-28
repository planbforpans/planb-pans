'use client'

import { useReveal } from '../_components/hooks'

export default function PractitionersPage() {
  const head = useReveal()
  const ask = useReveal()
  const get = useReveal()
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
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,106,74,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={head}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            For practitioners
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
            Help us get out <em style={{ color: 'var(--teal)' }}>of the fire.</em>
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 760,
              marginTop: 28,
            }}
          >
            Parents are blindly choosing and hoping their kids somehow get better. We need to{' '}
            <em>see</em> — your success rates, how you treat these kids, where your modality
            fits in the larger picture, and where to go next when things get stuck.
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
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            Parents in this battle for years are choosing between eating and the next
            treatment. There has to be a better, faster way out.
          </p>
        </div>
      </section>

      {/* Manifesto line */}
      <section
        aria-label="Manifesto"
        style={{
          padding: '72px 24px',
          background: 'var(--cream)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 900 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 18, color: 'var(--sand-dark)' }}
          >
            One family
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.6vw, 44px)',
              fontWeight: 300,
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Practitioners, parents, and kids —
            <br />
            <em style={{ color: 'var(--teal)' }}>we are a family.</em>
            <br />
            We get out by working together.
          </p>
        </div>
      </section>

      {/* We know you have a practice to run */}
      <section
        style={{
          padding: '60px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div
          className="pb-container"
          style={{
            maxWidth: 820,
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="serif"
            style={{
              fontSize: 'clamp(20px, 2.4vw, 26px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.45,
              fontWeight: 400,
              margin: 0,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            We know you have a practice to run. The 10-free-clients pledge is an optional
            research contribution — the ballot and referral network work whether you take the
            pledge or not. This isn&apos;t a subsidy request. It&apos;s an invitation.
          </p>
        </div>
      </section>

      {/* THE ASK — the 10 free clients pledge */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
        }}
      >
        <div
          ref={ask}
          className="pb-container reveal"
          style={{ maxWidth: 1080 }}
        >
          <div
            style={{
              background: '#141414',
              color: 'var(--cream)',
              padding: 'clamp(40px, 6vw, 72px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 280,
                height: 280,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(31,107,107,0.3) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <p
              className="eyebrow"
              style={{ color: 'var(--teal-light)', marginBottom: 22, position: 'relative' }}
            >
              The ask
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(36px, 6vw, 68px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 0.98,
                margin: 0,
                marginBottom: 32,
                color: 'var(--cream)',
                position: 'relative',
                maxWidth: 880,
              }}
            >
              Offer your service{' '}
              <em style={{ color: 'var(--teal-light)' }}>free to 10 clients.</em>
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: '#d4cbb6',
                fontWeight: 300,
                maxWidth: 720,
                marginBottom: 20,
                position: 'relative',
              }}
            >
              Sign up to take on ten PANS/PANDAS/autism/dysregulated kids pro-bono, matched by
              Plan B&apos;s read of their profile. Work with them the way you normally would.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: '#d4cbb6',
                fontWeight: 300,
                maxWidth: 720,
                position: 'relative',
              }}
            >
              We document the full journey — weekly, with consent, de-identified. What shifted,
              what stalled, what ordered well with what. Your ten kids become a real cohort study
              that every parent and practitioner in the network can learn from.
            </p>
            <div
              style={{
                marginTop: 36,
                padding: '24px 28px',
                background: 'rgba(31,107,107,0.18)',
                borderLeft: '3px solid var(--teal-light)',
                position: 'relative',
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  color: 'var(--teal-light)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                How matching works
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#d4cbb6',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Every volunteer family completes the full Plan B intake before placement.
                We only send you the ten kids whose profiles align with each other <em>and</em>{' '}
                with what your modality actually addresses. No mismatched cohorts. No wasted
                sessions. Real signal, first try.
              </p>
            </div>

            <div
              style={{
                marginTop: 32,
                paddingTop: 28,
                borderTop: '1px solid rgba(246,241,231,0.2)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 24,
                position: 'relative',
              }}
            >
              {[
                { k: '10', v: 'matched clients' },
                { k: '6 mo', v: 'documented journey' },
                { k: 'Open', v: 'findings published' },
                { k: 'No cost', v: 'to participate' },
              ].map((s) => (
                <div key={s.v}>
                  <p
                    className="serif"
                    style={{
                      fontSize: 44,
                      fontWeight: 300,
                      color: 'var(--teal-light)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {s.k}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: '#bbb3a2',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginTop: 10,
                    }}
                  >
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Public-facing + parents vote */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1040 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: 56,
              alignItems: 'start',
            }}
            className="practitioner-grid"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                How it runs
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 5.4vw, 58px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                Public-facing.
                <br />
                <em style={{ color: 'var(--teal)' }}>Parents choose who&apos;s next.</em>
              </h2>
            </div>
            <div>
              <ol
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                }}
              >
                {[
                  {
                    n: '01',
                    t: 'You sign up',
                    b: 'Practice name, modality focus, what you&apos;d take on. Your listing goes public.',
                  },
                  {
                    n: '02',
                    t: 'Parents see you',
                    b: 'Every practitioner who has volunteered is listed, along with the modality and the hypothesis they&apos;re running — not hidden behind ad buys.',
                  },
                  {
                    n: '03',
                    t: 'Parents vote',
                    b: 'The community decides which study runs next. Which modality do the most families want to see tracked? That one goes first.',
                  },
                  {
                    n: '04',
                    t: 'Plan B matches the ten',
                    b: 'Top-voted practitioner gets the ten aligned intakes, matched by profile. The six-month journey starts, documented openly.',
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr',
                      gap: 20,
                      alignItems: 'start',
                      borderTop: '1px solid var(--sand)',
                      paddingTop: 18,
                    }}
                  >
                    <p
                      className="serif"
                      style={{
                        fontSize: 40,
                        lineHeight: 0.95,
                        color: 'var(--teal)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      {s.n}
                    </p>
                    <div>
                      <p
                        className="serif"
                        style={{
                          fontSize: 22,
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                          color: 'var(--ink)',
                          marginBottom: 8,
                        }}
                      >
                        {s.t}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          lineHeight: 1.75,
                          color: 'var(--ink-soft)',
                          fontWeight: 300,
                        }}
                        dangerouslySetInnerHTML={{ __html: s.b }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
              <p
                className="serif"
                style={{
                  fontSize: 20,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  margin: '28px 0 0',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  borderLeft: '3px solid var(--teal)',
                  paddingLeft: 20,
                }}
              >
                Transparency is the point. The practitioners who show up get seen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What this gives families */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 960 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: 56,
              alignItems: 'start',
            }}
            className="practitioner-grid"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                Why this matters
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 5.4vw, 58px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                We need to <em style={{ color: 'var(--teal)' }}>see.</em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Right now parents are choosing practitioners blind — reading reviews, asking
                Facebook groups, gambling thousands of dollars on someone who may or may not
                be right for their kid. We need to show actual success rates. We need to know
                how your &ldquo;trick&rdquo; works in the larger picture. We need to know where
                to go next when a modality stalls out.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  marginTop: 18,
                }}
              >
                The ten-client pledge is how we make that visible. Families finally get to see
                before they choose. You finally get to prove what you already know. Every
                parent and every practitioner learns from what your cohort revealed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section
        style={{ padding: '100px 24px', background: 'var(--cream)' }}
      >
        <div ref={get} className="pb-container reveal" style={{ maxWidth: 1000 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            What you get
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 5.4vw, 58px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--ink)',
              margin: 0,
              marginBottom: 40,
              maxWidth: 780,
            }}
          >
            If your modality works, <em style={{ color: 'var(--teal)' }}>Plan B will know.</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                t: 'Documented outcomes',
                b: 'A published six-month cohort study of your ten-client cohort. Clean data. Real journey. Your work visible in a way consumer reviews can never match.',
              },
              {
                t: 'Targeted referrals',
                b: 'Plan B routes families to practitioners whose work fits their kid&apos;s profile. Your track record decides where they land — not ad spend.',
              },
              {
                t: 'Your place in the network',
                b: 'Where does your modality sequence well? Which colleague\u2019s work does it set up or complete? Plan B sees it across cohorts and tells you.',
              },
              {
                t: 'Peer visibility',
                b: 'When the silos stop being silos, the practitioners doing real work find each other. Join the practitioners who show up instead of marketing.',
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  padding: 24,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--ink-soft)',
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

      {/* Opt-out / consent */}
      <section
        style={{
          padding: '60px 24px',
          background: 'var(--cream)',
          borderTop: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <p
            className="eyebrow"
            style={{ color: 'var(--sand-dark)', marginBottom: 14 }}
          >
            On consent
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.85,
              color: 'var(--ink-soft)',
              fontWeight: 300,
            }}
          >
            Practitioners whose public teachings we&apos;ve studied appear on{' '}
            <a
              href="https://app.planbforpans.com/vote"
              rel="noopener"
              style={{ color: 'var(--teal)', textDecoration: 'underline' }}
            >
              the ballot
            </a>{' '}
            as &ldquo;community-nominated.&rdquo; That&apos;s an invitation — not a claim of
            partnership. If you&apos;re listed and would rather not be, email{' '}
            <a
              href="mailto:rachel@planbforpans.com?subject=Please%20remove%20my%20listing"
              style={{ color: 'var(--teal)', textDecoration: 'underline' }}
            >
              rachel@planbforpans.com
            </a>
            . We take your listing down the same day. No friction, no awkwardness.
          </p>
        </div>
      </section>

      {/* Application */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 740 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Apply to take 10
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 50px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
              marginBottom: 24,
              color: 'var(--ink)',
            }}
          >
            The families can&apos;t wait.{' '}
            <em style={{ color: 'var(--teal)' }}>Neither can we.</em>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              marginBottom: 36,
              maxWidth: 600,
              margin: '0 auto 36px',
            }}
          >
            Email us with your practice name, modality focus, typical PANS/PANDAS/autism case
            volume, and the date you could start taking the ten. We respond within a week.
          </p>
          <a
            href="mailto:rachel@planbforpans.com?subject=Practitioner%20partnership%20%E2%80%94%20I'll%20take%2010"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Email rachel@planbforpans.com →
          </a>
        </div>
      </section>
    </main>
  )
}
