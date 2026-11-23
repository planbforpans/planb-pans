'use client'

import { TalkToRachel } from './TalkToRachel'

// "What Minta does · What Rachel does · Why you need both" — the core value
// split. Minta = breadth/speed/memory/always-on. Rachel = depth/judgment/
// accountability/lived-experience. Together = foundation + daily companion.

const APP = 'https://app.planbforpans.com'

const card: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid var(--rule)',
  borderRadius: 8,
  padding: 'clamp(26px, 3.2vw, 38px)',
  display: 'flex',
  flexDirection: 'column',
}

const eyebrowMono: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  fontWeight: 600,
  margin: '0 0 6px',
}

const item: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: 'var(--ink-soft)',
  fontWeight: 300,
  paddingLeft: 20,
  position: 'relative',
}

function Col({
  who, role, color, lead, points, cant,
}: {
  who: string; role: string; color: string; lead: string; points: string[]; cant?: string
}) {
  return (
    <div style={card}>
      <p className="mono" style={{ ...eyebrowMono, color }}>{role}</p>
      <h3 className="serif" style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
        {who}
      </h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink)', fontWeight: 400, margin: '0 0 20px' }}>{lead}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, flex: 1 }}>
        {points.map((pt) => (
          <li key={pt} style={item}>
            <span style={{ position: 'absolute', left: 0, top: 0, color }}>›</span>
            <span dangerouslySetInnerHTML={{ __html: pt }} />
          </li>
        ))}
      </ul>
      {cant && (
        <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--sand-dark)', fontStyle: 'italic', margin: '20px 0 0', paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
          {cant}
        </p>
      )}
    </div>
  )
}

export default function WhyBoth() {
  return (
    <section style={{ padding: 'clamp(72px, 9vw, 120px) 24px', background: 'var(--cream)' }}>
      <div className="pb-container" style={{ maxWidth: 1080 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>Why buy the synthesis</p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 5.4vw, 64px)',
            fontWeight: 300,
            letterSpacing: '-0.024em',
            lineHeight: 1.0,
            color: 'var(--ink)',
            margin: '0 0 18px',
            maxWidth: 880,
          }}
        >
          You don&apos;t need another opinion.{' '}
          <em style={{ color: 'var(--teal)' }}>You need every piece connected.</em>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 700, margin: '0 0 52px' }}>
          Most PANS parents are handed a half-baked protocol — one that treats a single issue at a
          time and never integrates the whole. Plan B for PANS does the opposite: it brings every healing
          modality and every issue your child faces into one compact healing journey, and it knows
          things your doctor doesn&apos;t.{' '}
          <strong style={{ color: 'var(--teal)', fontWeight: 600 }}>
            When you&apos;re stalled, Minta has your Plan B for PANS
          </strong>{' '}
          — a real idea of <em>why</em>, and many new things to try. Doing that takes two things
          working together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          <Col
            who="The Synthesis"
            role="What you actually get · free"
            color="var(--teal)"
            lead="Every piece, in one place."
            points={[
              'Every lab, symptom, prior treatment and practitioner letter — read <strong>together</strong>, not in slices.',
              'Every healing modality your child&apos;s picture calls for — methylation, infections, gut, immune, detox — woven into <strong>one sequenced plan.</strong>',
              '<strong>What&apos;s been missed, and what hasn&apos;t been tried</strong> — the drivers no single specialist connected.',
              'A compact, week-by-week healing journey you can actually follow — with a practitioner letter to bring to each visit.',
            ]}
            cant="Then ask Minta anything to troubleshoot — pay-as-you-go, no subscription. Fed new studies and learning across every family, she evolves daily."
          />
          <Col
            who="Rachel"
            role="Why trust it — and why “not a doctor” is the point"
            color="var(--ink)"
            lead="The doctors are who failed you."
            points={[
              'Every family here has already been failed by doctors — the “wait and see,” the specialist who read only their slice. You&apos;re not missing a doctor. <strong>You&apos;re missing the integration.</strong>',
              'No one doctor has the hours or the cross-training to connect Walsh, Shoemaker, Buhner, methylation, immune and gut against your child&apos;s labs. That&apos;s the work — and it isn&apos;t a prescription.',
              '<strong>We never prescribe.</strong> Every recommendation is a question to bring to your practitioner, plus the test or driver they overlooked — leverage, not a competing opinion.',
              'Built by a <strong>mom of three recovered PANS kids</strong> who did this homework for years — and every number checked against the source.',
            ]}
            cant="Not a doctor — and the doctors are exactly why you&apos;re here."
          />
        </div>

        {/* Why you need both */}
        <div
          style={{
            marginTop: 28,
            background: 'var(--cream-light)',
            border: '1px solid var(--rule)',
            borderLeft: '3px solid var(--teal)',
            borderRadius: 8,
            padding: 'clamp(26px, 3.4vw, 40px)',
          }}
        >
          <p className="mono" style={{ ...eyebrowMono, color: 'var(--teal)' }}>Why it works</p>
          <p className="serif" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--ink)', margin: '6px 0 14px', maxWidth: 820 }}>
            You don&apos;t need another doctor&apos;s opinion. You need someone to connect every
            piece — and tell you exactly what to ask for next.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 760, margin: 0 }}>
            That&apos;s the synthesis. The receipts are on the{' '}
            <a href="/stories" style={{ color: 'var(--teal)', fontWeight: 500 }}>stories page</a>: in one
            case it surfaced an immune deficiency, a tickborne infection, and a methylation block
            that five specialists had missed over three years.
          </p>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href={`${APP}/intake`}
            style={{
              display: 'inline-block', padding: '16px 32px', background: 'var(--teal)', color: 'var(--cream)',
              borderRadius: 6, textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}
          >
            Start free — upload your labs →
          </a>
          <a
            href="https://app.planbforpans.com/signup"
            rel="noopener"
            style={{
              display: 'inline-block', padding: '16px 30px', background: 'transparent', color: 'var(--teal)',
              border: '1px solid var(--rule)', borderRadius: 6, textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}
          >
            Or get your free Synthesis →
          </a>
          <TalkToRachel />
        </div>
      </div>
    </section>
  )
}
