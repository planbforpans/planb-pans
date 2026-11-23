'use client'

import { useReveal } from './hooks'

// FIG. 01 — total load, drawn as a technical plate (Oct 2026). Rachel: "the
// cup feels cool but it's too cartoony… keep it feeling like science". Hairline
// glass, hatched liquid, the overflow as fine lines. What fills it are the
// triggers; what spills over the rim are the symptoms parents see.
function BucketFill() {
  const ink = 'var(--ink)'
  const toxins = ['Stress', 'Viruses', 'Metals', 'Lyme', 'Strep', 'Mold']
  const spill = [
    { x: 2, y: 330, t: 'rage', a: 'start' as const },
    { x: 2, y: 356, t: 'tics', a: 'start' as const },
    { x: 258, y: 330, t: 'OCD', a: 'end' as const },
    { x: 258, y: 356, t: 'food fear', a: 'end' as const },
    { x: 130, y: 382, t: 'no sleep', a: 'middle' as const },
  ]
  return (
    <svg viewBox="0 0 260 400" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} role="img" aria-label="Technical drawing of a beaker filled to the brim with mold, strep, Lyme, metals, viruses and stress, overflowing; what spills over is rage, tics, OCD, food fear and no sleep.">
      <defs>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--teal)" strokeWidth="0.8" opacity="0.55" />
        </pattern>
        <clipPath id="beaker-clip"><path d="M 60 78 L 60 300 Q 60 312 72 312 L 188 312 Q 200 312 200 300 L 200 78 Z" /></clipPath>
      </defs>

      <text x="130" y="22" textAnchor="middle" fontFamily="var(--mono)" fontSize="8.5" fill="var(--sand-dark)" letterSpacing="2.4">FIG. 01 — TOTAL LOAD</text>
      <line x1="70" x2="190" y1="32" y2="32" stroke="var(--sand)" strokeWidth="0.6" />

      {/* liquid at the brim */}
      <g clipPath="url(#beaker-clip)">
        <rect x="50" y="80" width="170" height="240" fill="url(#hatch)" />
        <rect x="50" y="80" width="170" height="240" fill="var(--teal)" opacity="0.05" />
      </g>
      <path d="M 60 80 Q 130 74 200 80" fill="none" stroke="var(--teal)" strokeWidth="0.9" />

      {/* glass */}
      <path d="M 52 72 L 60 78 L 60 300 Q 60 312 72 312 L 188 312 Q 200 312 200 300 L 200 78 L 208 72" fill="none" stroke={ink} strokeWidth="1.1" />
      {Array.from({ length: 10 }, (_, i) => (
        <line key={i} x1="200" x2={i % 2 ? 194 : 188} y1={296 - i * 22} y2={296 - i * 22} stroke={ink} strokeWidth="0.6" />
      ))}
      {[0, 2, 4, 6, 8].map((i) => (
        <text key={i} x="184" y={298.5 - i * 22} textAnchor="end" fontFamily="var(--mono)" fontSize="6.5" fill={ink} opacity="0.55">{i * 50}</text>
      ))}

      {/* contents — label column with leader ticks */}
      {toxins.map((t, i) => (
        <g key={t}>
          <line x1="68" x2="76" y1={110 + i * 34} y2={110 + i * 34} stroke={ink} strokeWidth="0.6" />
          <text x="80" y={113 + i * 34} fontFamily="var(--mono)" fontSize="8.5" letterSpacing="1.6" fill={ink}>{t.toUpperCase()}</text>
        </g>
      ))}

      {/* overflow — fine lines down the glass, a drop forming at each end */}
      <path d="M 54 74 C 44 82 42 130 44 190 C 45 240 40 280 36 302" fill="none" stroke="var(--teal)" strokeWidth="0.9" />
      <path d="M 57 75 C 49 84 48 140 49 200 C 50 236 47 262 45 276" fill="none" stroke="var(--teal)" strokeWidth="0.5" opacity="0.6" />
      <path d="M 206 74 C 216 84 218 140 216 200 C 215 246 220 280 224 300" fill="none" stroke="var(--teal)" strokeWidth="0.9" />
      <path className="drip" d="M 36 306 q -3 6 0 9 q 3 -3 0 -9 Z" fill="var(--signal)" />
      <path className="drip drip-2" d="M 224 304 q -3 6 0 9 q 3 -3 0 -9 Z" fill="var(--signal)" />
      <line x1="10" x2="250" y1="318" y2="318" stroke={ink} strokeWidth="0.6" />

      {/* what spills over */}
      {spill.map((l) => (
        <text key={l.t} x={l.x} y={l.y} textAnchor={l.a} fontFamily="var(--font-display)" fontStyle="italic" fontSize="15" fill="var(--signal)">{l.t}</text>
      ))}
      <text x="130" y="398" textAnchor="middle" fontFamily="var(--mono)" fontSize="7.5" fill="var(--sand-dark)" letterSpacing="1.6">WHAT FILLS IT · WHAT SPILLS OVER</text>
    </svg>
  )
}

export default function BucketSection() {
  const ref = useReveal()
  return (
    <section
      id="problem"
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        background: 'var(--cream)',
        position: 'relative',
      }}
    >
      <div ref={ref} className="pb-container reveal" style={{ padding: '120px 24px' }}>
        <div
          className="bucket-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: 72,
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: 320, justifySelf: 'center', width: '100%' }}>
            <BucketFill />
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              § 01 · The problem
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(36px, 5.4vw, 68px)',
                lineHeight: 1.02,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              35 symptoms. 12 supplements.
              <br />
              Three new meds this month.
              <br />
              <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>
                What is actually working?
              </span>
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: 'var(--ink-soft)',
                marginTop: 30,
                maxWidth: 520,
              }}
            >
              Nightly tracking shows what&apos;s filling your child&apos;s cup, and what makes it spill.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
