'use client'

import { useReveal } from '../_components/hooks'

export default function VotePage() {
  const head = useReveal()
  const how = useReveal()
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
            top: -160,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={head}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Led by the community · For the community
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
              maxWidth: 1040,
            }}
          >
            Vote on who&apos;s <em style={{ color: 'var(--teal)' }}>up next.</em>
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
            Every practitioner who volunteers to take on ten case-study clients gets listed
            here. You decide which study runs next. The modality the most families want to see
            tracked wins the slot — and the cohort starts.
          </p>
        </div>
      </section>

      {/* Suggest a modality — parent-led exploration */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Parent-led exploration</p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--ink)',
              margin: '0 0 16px',
            }}
          >
            Heard of something nobody&apos;s tried?{' '}
            <em style={{ color: 'var(--teal)' }}>Suggest it.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 640, margin: '0 auto 28px' }}>
            The best leads come from parents. Suggest a modality and Minta writes up the evidence —
            what it is, who it&apos;s helped, the risks — for the whole community to read and vote on.
            The ones families most want to see become the next cohort study.
          </p>
          <a
            href="mailto:rachel@planbforpans.com?subject=Modality%20suggestion&body=The%20modality%20or%20approach%3A%0A%0AWhere%20I%20heard%20about%20it%3A%0A%0AWhy%20I%20think%20it%20might%20help%3A%0A"
            style={{
              display: 'inline-block',
              padding: '15px 32px',
              background: 'var(--teal)',
              color: 'var(--cream)',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Suggest a modality →
          </a>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 24px 60px', background: 'var(--cream)' }}>
        <div ref={how} className="pb-container reveal" style={{ maxWidth: 1040 }}>
          <p className="eyebrow" style={{ marginBottom: 28, textAlign: 'center' }}>
            How voting works
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
                t: 'Read the list',
                b: 'Each volunteer practitioner, their modality, and the hypothesis their cohort is testing — laid out openly.',
              },
              {
                n: '02',
                t: 'Pick your study',
                b: 'Which modality do you most want to see run on a real, matched cohort of ten kids? One vote per family.',
              },
              {
                n: '03',
                t: 'Top vote starts next',
                b: 'The most-voted study gets the next ten aligned intakes. Six months of documented journey, open findings.',
              },
              {
                n: '04',
                t: 'The rest stay queued',
                b: 'Other practitioners stay on the list as their cohorts are built. Every volunteer eventually runs — parents decide the order.',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--teal)',
                    letterSpacing: '0.22em',
                    marginBottom: 10,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ballot */}
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
              marginBottom: 32,
              flexWrap: 'wrap',
              gap: 16,
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 20,
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
              The ballot
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
              Updated as volunteers come in
            </p>
          </div>

          <div
            style={{
              background: 'var(--paper)',
              border: '1px dashed var(--sand)',
              borderRadius: 4,
              padding: '60px 30px',
              textAlign: 'center',
            }}
          >
            <p
              className="serif"
              style={{
                fontSize: 28,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.3,
                fontWeight: 400,
                marginBottom: 18,
                maxWidth: 640,
                margin: '0 auto 18px',
              }}
            >
              Waiting for the first volunteers.
            </p>
            <p
              style={{
                fontSize: 15,
                color: 'var(--ink-soft)',
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: 560,
                margin: '0 auto 32px',
              }}
            >
              The ballot populates as practitioners raise their hand. Know a PANS/PANDAS
              /autism practitioner whose work deserves to be on here? Send them{' '}
              <a
                href="/practitioners"
                style={{ color: 'var(--teal)', textDecoration: 'underline' }}
              >
                the practitioner page
              </a>
              .
            </p>
            <p
              style={{
                fontSize: 13,
                color: 'var(--sand-dark)',
                marginBottom: 22,
              }}
            >
              When the list starts, we&apos;ll email you to cast the first vote.
            </p>
            <a
              href="mailto:rachel@planbforpans.com?subject=Notify%20me%20when%20voting%20opens"
              className="cta-teal"
              style={{ textDecoration: 'none', fontSize: 11 }}
            >
              Notify me when voting opens →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 720 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Before you vote
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(30px, 5vw, 46px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 22,
              color: 'var(--ink)',
            }}
          >
            Complete your <em style={{ color: 'var(--teal)' }}>intake first.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.85,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              marginBottom: 36,
              maxWidth: 580,
              margin: '0 auto 36px',
            }}
          >
            Voting is one vote per family, tied to your Plan B profile. Kids only get placed
            in a cohort when their intake matches the study. Get your intake in and you&apos;re
            ready for both the ballot and the cohort match.
          </p>
          <a
            href="https://app.planbforpans.com/signup"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Start your intake →
          </a>
        </div>
      </section>
    </main>
  )
}
