'use client'

import { useEffect, useState } from 'react'
import { useReveal } from './hooks'

type StepKey = 0 | 1 | 2 | 3

function MethodVisual({ step }: { step: StepKey }) {
  if (step === 0) {
    return (
      <div style={{ padding: 24 }}>
        <p
          className="eyebrow"
          style={{ color: 'var(--teal-light)', marginBottom: 18 }}
        >
          01 — Intake form
        </p>
        {[
          'Date of onset',
          'Triggering event',
          'Current meds',
          'Baseline symptoms',
          'Family history',
        ].map((f, i) => (
          <div
            key={f}
            style={{
              padding: '14px 16px',
              border: '1px solid rgba(246,241,231,0.15)',
              marginBottom: 8,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: i === 3 ? 'rgba(31,107,107,0.15)' : 'transparent',
            }}
          >
            <span style={{ fontSize: 13, color: '#ddd' }}>{f}</span>
            <span
              className="mono"
              style={{ fontSize: 10, color: i === 3 ? 'var(--teal-light)' : '#666' }}
            >
              {i < 3 ? '✓ saved' : i === 3 ? '~typing' : '— —'}
            </span>
          </div>
        ))}
      </div>
    )
  }
  if (step === 1) {
    return (
      <div style={{ padding: 24 }}>
        <p
          className="eyebrow"
          style={{ color: 'var(--teal-light)', marginBottom: 18 }}
        >
          02 — Weekly rating
        </p>
        {[
          { n: 'Obsessive thoughts', v: 7 },
          { n: 'Irritability', v: 4 },
          { n: 'Sleep disturbance', v: 6 },
          { n: 'Tics / urges', v: 3 },
        ].map((s) => (
          <div key={s.n} style={{ marginBottom: 14 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 12, color: '#ddd' }}>{s.n}</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: 'var(--teal-light)' }}
              >
                {s.v}/10
              </span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: 3,
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: 8,
                    background: i < s.v ? 'var(--teal)' : 'rgba(246,241,231,0.08)',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (step === 2) {
    return (
      <div style={{ padding: 24 }}>
        <p
          className="eyebrow"
          style={{ color: 'var(--teal-light)', marginBottom: 18 }}
        >
          03 — Daily log (today)
        </p>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            { t: '07:12', k: 'Dose', v: 'Guanfacine 1mg', c: '#4f8f8f' },
            { t: '08:30', k: 'Symptom', v: 'Irritability ↑↑', c: '#c76a4a' },
            { t: '12:45', k: 'Food', v: 'Gluten-free lunch', c: '#7C8585' },
            { t: '15:10', k: 'Note', v: 'New tic — throat clear', c: '#d4a24a' },
            { t: '19:00', k: 'Dose', v: 'Binder, 1/2 scoop', c: '#4f8f8f' },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 70px 1fr',
                gap: 12,
                alignItems: 'center',
                padding: '8px 10px',
                border: '1px solid rgba(246,241,231,0.08)',
              }}
            >
              <span className="mono" style={{ fontSize: 10, color: '#888' }}>
                {r.t}
              </span>
              <span
                className="mono"
                style={{ fontSize: 10, color: r.c, letterSpacing: '0.12em' }}
              >
                {r.k.toUpperCase()}
              </span>
              <span style={{ fontSize: 12, color: '#ddd' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div style={{ padding: 24 }}>
      <p className="eyebrow" style={{ color: 'var(--teal-light)', marginBottom: 18 }}>
        04 — Minta&apos;s read
      </p>
      <div
        style={{
          border: '1px solid rgba(31,107,107,0.5)',
          padding: 16,
          marginBottom: 12,
        }}
      >
        <p
          className="mono"
          style={{
            fontSize: 9,
            color: 'var(--teal-light)',
            letterSpacing: '0.15em',
            margin: 0,
            marginBottom: 10,
          }}
        >
          LIKELY CORRELATION · HIGH CONFIDENCE
        </p>
        <p
          className="serif"
          style={{
            fontSize: 20,
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.3,
            fontStyle: 'italic',
          }}
        >
          Rage dropped 72% the week
          <br />
          you paused guanfacine.
        </p>
      </div>
      <div
        style={{
          border: '1px solid rgba(246,241,231,0.15)',
          padding: 16,
          marginBottom: 12,
        }}
      >
        <p
          className="mono"
          style={{
            fontSize: 9,
            color: '#d4a24a',
            letterSpacing: '0.15em',
            margin: 0,
            marginBottom: 8,
          }}
        >
          WATCH · MEDIUM CONFIDENCE
        </p>
        <p style={{ fontSize: 12, color: '#ccc', margin: 0, lineHeight: 1.6 }}>
          Tics ticked up the same week — may be unrelated, may be rebound.
        </p>
      </div>
      <div style={{ border: '1px solid rgba(246,241,231,0.15)', padding: 16 }}>
        <p
          className="mono"
          style={{
            fontSize: 9,
            color: 'var(--teal-light)',
            letterSpacing: '0.15em',
            margin: 0,
            marginBottom: 8,
          }}
        >
          WORTH TRYING NEXT
        </p>
        <p style={{ fontSize: 12, color: '#ccc', margin: 0, lineHeight: 1.6 }}>
          Reintroduce guanfacine at half-dose, hold other variables steady for 10 days.
        </p>
      </div>
    </div>
  )
}

export default function MethodSection() {
  const [active, setActive] = useState<StepKey>(0)
  const ref = useReveal()

  useEffect(() => {
    const id = setInterval(() => setActive((a) => ((a + 1) % 4) as StepKey), 4800)
    return () => clearInterval(id)
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Intake',
      body:
        "Log your kid's baseline — symptoms, meds, onset, history, and everything already tried. Takes about fifteen minutes, or an unhurried conversation with Minta.",
    },
    {
      num: '02',
      title: 'Weekly',
      body:
        'Rate each symptom on a 0–10 scale, week by week. Add new symptoms as they surface, flag the returning ones.',
    },
    {
      num: '03',
      title: 'Daily',
      body:
        'When titrating meds or starting a protocol, track changes in real time and flag new symptoms as they appear.',
    },
    {
      num: '04',
      title: 'Analysis',
      body:
        "Minta reads your full timeline and flags likely correlations, possible reactions, and the one thing most worth pausing — or trying next.",
    },
  ]

  return (
    <section
      id="method"
      style={{
        background: '#1F2424',
        color: '#FFFFFF',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        position: 'relative',
      }}
    >
      <div
        ref={ref}
        className="pb-container reveal"
        style={{ padding: '120px 24px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 56,
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              className="eyebrow"
              style={{ color: 'var(--teal-light)', marginBottom: 22 }}
            >
              § 02 · The method
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(42px, 6.2vw, 82px)',
                lineHeight: 0.98,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                margin: 0,
                color: '#FFFFFF',
                maxWidth: 900,
              }}
            >
              Four pieces.{' '}
              <span style={{ color: 'var(--teal-light)', fontStyle: 'italic' }}>
                One picture.
              </span>
            </h2>
          </div>
          <p className="mono" style={{ fontSize: 10, color: 'var(--mute)' }}>
            PP. 12 — 19
          </p>
        </div>
        <div
          className="method-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            {steps.map((s, i) => (
              <div
                key={s.num}
                onMouseEnter={() => setActive(i as StepKey)}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.2)',
                  paddingTop: 24,
                  paddingBottom: 18,
                  transition: 'all 400ms ease',
                  cursor: 'pointer',
                  opacity: active === i ? 1 : 0.5,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 14,
                  }}
                >
                  <p
                    className="serif"
                    style={{
                      fontSize: 54,
                      lineHeight: 0.9,
                      color: active === i ? 'var(--teal-light)' : 'var(--mute)',
                      margin: 0,
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      transition: 'color 400ms ease',
                    }}
                  >
                    {s.num}
                  </p>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: active === i ? 'var(--teal-light)' : 'var(--mute)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {active === i ? '● ACTIVE' : '○'}
                  </span>
                </div>
                <p
                  className="serif"
                  style={{
                    fontSize: 28,
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                    margin: 0,
                    marginBottom: 12,
                    fontWeight: 400,
                  }}
                >
                  {s.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                    maxWidth: 340,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div style={{ position: 'sticky', top: 100 }}>
            <div
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(246,241,231,0.15)',
                minHeight: 480,
                position: 'relative',
              }}
            >
              <MethodVisual step={active} />
            </div>
            <p
              style={{
                marginTop: 12,
                fontSize: 10,
                fontFamily: 'var(--mono)',
                color: 'var(--mute)',
                textAlign: 'end',
                letterSpacing: '0.15em',
              }}
            >
              ← {steps[active].title.toUpperCase()} · LIVE VIEW
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
