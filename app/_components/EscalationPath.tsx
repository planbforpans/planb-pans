'use client'

import { useReveal } from './hooks'

type Stage = {
  num: string
  serial: string
  tag: string
  title: string
  href?: string
  blurb: string
  note: string
  accent: string
  accentSoft: string
  chips?: string[]
  dark?: boolean
}

const STAGES: Stage[] = [
  {
    num: '1',
    serial: '§ 01',
    tag: 'Conventional · First line',
    title: 'The Protocol',
    href: '/protocol',
    blurb:
      'Find the trigger, then the right antibiotic. Scheduled anti-inflammatories. IVIG or plasma exchange when it’s severe.',
    note: 'Where most kids caught early get better.',
    accent: 'var(--teal)',
    accentSoft: 'rgba(31,107,107,0.10)',
  },
  {
    num: '2',
    serial: '§ 02',
    tag: 'Functional medicine · Go deeper',
    title: 'Find the root drivers',
    blurb:
      'Go deeper than infection — to the roots conventional medicine doesn’t look for. Test them, treat them, one by one.',
    note: 'The drivers no single specialist owns.',
    accent: '#6b3fa0',
    accentSoft: 'rgba(107,63,160,0.10)',
    chips: [
      'Lyme & tick-borne — Bartonella · Babesia · Mycoplasma',
      'Mold / CIRS',
      'Gut & microbiome',
      'Methylation & detox',
      'MCAS / histamine',
      'Mineral & immune dysregulation',
    ],
  },
  {
    num: '3',
    serial: '§ 03',
    tag: 'Deepest tier · Refractory',
    title: 'Homeopathy & what hasn’t been tried',
    blurb:
      'For the kids still not all the way there. Homeopathy, plus the full menu — biomagnetism, phage therapy, peptides, and more.',
    note: 'Nothing left on the table.',
    accent: '#c98a3c',
    accentSoft: 'rgba(201,138,60,0.16)',
    chips: ['Homeopathy', 'Biomagnetism', 'Phage therapy', 'Peptides', '& more'],
    dark: true,
  },
]

function StationNode({ stage, last }: { stage: Stage; last: boolean }) {
  const dark = stage.dark
  return (
    <div style={{ position: 'relative', paddingLeft: 'clamp(0px, 5vw, 24px)' }}>
      {/* Station card */}
      <div
        className="card-hover"
        style={{
          position: 'relative',
          borderRadius: 18,
          padding: 'clamp(26px, 4vw, 40px)',
          background: dark
            ? 'linear-gradient(150deg, #1a1a1a 0%, #111 100%)'
            : 'linear-gradient(150deg, var(--cream-light) 0%, var(--paper) 100%)',
          border: `1px solid ${dark ? 'rgba(246,241,231,0.14)' : 'var(--sand-light)'}`,
          boxShadow: dark
            ? '0 30px 70px -34px rgba(0,0,0,0.55)'
            : '0 26px 60px -32px rgba(31,107,107,0.28)',
          overflow: 'hidden',
        }}
      >
        {/* Accent spine down the left edge of the card */}
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 4,
            background: `linear-gradient(180deg, ${stage.accent}, ${stage.accent}00)`,
          }}
        />
        {/* Soft accent bloom in the corner */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: -90,
            right: -70,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${stage.accentSoft} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(18px, 3vw, 30px)',
            position: 'relative',
          }}
        >
          {/* Big numeral */}
          <div style={{ flexShrink: 0 }}>
            <span
              className="serif"
              style={{
                display: 'block',
                fontSize: 'clamp(58px, 9vw, 92px)',
                fontWeight: 300,
                lineHeight: 0.82,
                letterSpacing: '-0.03em',
                color: stage.accent,
              }}
            >
              {stage.num}
            </span>
            <span
              className="serial"
              style={{ display: 'block', marginTop: 6, color: dark ? 'var(--mute)' : undefined }}
            >
              {stage.serial}
            </span>
          </div>

          {/* Body */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: stage.accent,
                margin: '6px 0 10px',
              }}
            >
              {stage.tag}
            </p>
            <h3
              className="serif"
              style={{
                fontSize: 'clamp(28px, 4.4vw, 44px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.02,
                margin: '0 0 14px',
                color: dark ? '#F6F1E7' : 'var(--ink)',
              }}
            >
              {stage.title}
            </h3>
            <p
              style={{
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                lineHeight: 1.7,
                fontWeight: 300,
                color: dark ? '#c9c2b3' : 'var(--ink-soft)',
                margin: '0 0 16px',
                maxWidth: 560,
              }}
            >
              {stage.blurb}
            </p>

            {stage.chips && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  margin: '0 0 18px',
                }}
              >
                {stage.chips.map(c => (
                  <span
                    key={c}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      lineHeight: 1.3,
                      padding: '7px 13px',
                      borderRadius: 999,
                      color: dark ? '#e8e0c9' : 'var(--ink-soft)',
                      background: dark ? 'rgba(246,241,231,0.06)' : stage.accentSoft,
                      border: `1px solid ${dark ? 'rgba(246,241,231,0.16)' : stage.accentSoft}`,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                flexWrap: 'wrap',
                paddingTop: 14,
                borderTop: `1px solid ${dark ? 'rgba(246,241,231,0.12)' : 'var(--sand-light)'}`,
              }}
            >
              <span
                className="serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(16px, 1.8vw, 19px)',
                  fontWeight: 400,
                  color: dark ? '#F6F1E7' : stage.accent,
                }}
              >
                {stage.note}
              </span>
              {stage.href && (
                <a
                  href={stage.href}
                  className="link-sweep"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: stage.accent,
                    marginLeft: 'auto',
                  }}
                >
                  See the protocol →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Transition: "Still not all better? ↓" */}
      {!last && (
        <div
          style={{
            textAlign: 'center',
            padding: 'clamp(20px, 3vw, 32px) 0 clamp(6px, 1vw, 12px)',
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--sand-dark)',
              fontStyle: 'italic',
            }}
          >
            Still not all better?
          </span>
          <span
            aria-hidden
            style={{
              display: 'block',
              fontSize: 22,
              lineHeight: 1,
              color: 'var(--teal)',
              marginTop: 8,
              animation: 'floatslow 3.2s ease-in-out infinite',
            }}
          >
            ↓
          </span>
        </div>
      )}
    </div>
  )
}

export default function EscalationPath() {
  const ref = useReveal()

  return (
    <section
      aria-label="The escalation path"
      className="graph-paper"
      style={{
        position: 'relative',
        background:
          'linear-gradient(180deg, var(--cream) 0%, var(--cream-soft) 50%, var(--cream) 100%)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blooms */}
      <div
        className="bloom-float"
        aria-hidden
        style={{
          position: 'absolute',
          top: -160,
          left: -160,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,107,107,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="bloom-float-alt"
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -200,
          right: -180,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,138,60,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        className="pb-container reveal"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 980,
          padding: 'clamp(80px, 11vw, 140px) 24px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          <p className="eyebrow caret" style={{ marginBottom: 22 }}>
            The path forward
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(38px, 6.5vw, 78px)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.0,
              margin: '0 auto 22px',
              maxWidth: 820,
              color: 'var(--ink)',
            }}
          >
            Exploring{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>
              options with your care team
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 1.9vw, 19px)',
              lineHeight: 1.7,
              fontWeight: 300,
              color: 'var(--ink-soft)',
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            Different approaches may be relevant at different times. Use this overview to prepare
            questions for your licensed practitioners; no approach guarantees recovery.
          </p>
        </div>

        {/* The path — vertical journey */}
        <div
          className="reveal-stagger"
          style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
        >
          {/* Connecting spine line behind the stations */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: 'clamp(-2px, 2.5vw, 12px)',
              top: 40,
              bottom: 40,
              width: 2,
              background:
                'repeating-linear-gradient(180deg, var(--teal) 0 8px, transparent 8px 16px)',
              opacity: 0.35,
              pointerEvents: 'none',
            }}
          />
          {STAGES.map((s, i) => (
            <StationNode key={s.num} stage={s} last={i === STAGES.length - 1} />
          ))}
        </div>

        {/* Closing line */}
        <div
          style={{
            marginTop: 'clamp(48px, 6vw, 72px)',
            textAlign: 'center',
            maxWidth: 760,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="rule-ticks" style={{ width: 80, margin: '0 auto 32px' }} />
          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: '-0.012em',
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            This is <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Plan B</span>. The
            name reflects our purpose: helping you explore questions with your care team.
            We support informed decisions about{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>options with your care team.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
