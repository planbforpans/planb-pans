'use client'

import { useMemo, useState } from 'react'
import { useReveal, useTick } from './hooks'

function rand(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function Constellation() {
  const t = useTick()
  const [hovered, setHovered] = useState<number | null>(null)

  const data = useMemo(() => {
    const clusters = [
      { cx: 0.22, cy: 0.35, label: 'Methylation-first', color: '#2E6E70' },
      { cx: 0.65, cy: 0.28, label: 'Mold + binders', color: '#c76a4a' },
      { cx: 0.78, cy: 0.68, label: 'IVIG responders', color: '#d4a24a' },
      { cx: 0.32, cy: 0.72, label: 'Strep-triggered', color: '#4f8f8f' },
    ]
    const nodes: {
      x: number
      y: number
      cluster: number
      color: string
      label: string
    }[] = []
    clusters.forEach((c, ci) => {
      for (let i = 0; i < 12; i++) {
        const a = rand(ci * 37 + i) * Math.PI * 2
        const r = 0.05 + rand(ci * 11 + i * 3) * 0.11
        nodes.push({
          x: c.cx + Math.cos(a) * r,
          y: c.cy + Math.sin(a) * r * 0.7,
          cluster: ci,
          color: c.color,
          label: c.label,
        })
      }
    })
    return { nodes, clusters }
  }, [])

  const W = 900
  const H = 520

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: `${W} / ${H}` }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <g opacity="0.08">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={(i * W) / 10}
              y1="0"
              x2={(i * W) / 10}
              y2={H}
              stroke="#1F2424"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={(i * H) / 6}
              x2={W}
              y2={(i * H) / 6}
              stroke="#1F2424"
              strokeWidth="0.5"
            />
          ))}
        </g>
        {data.clusters.map((c, ci) => {
          const cn = data.nodes.filter((n) => n.cluster === ci)
          const active = hovered === null || hovered === ci
          return (
            <g
              key={ci}
              opacity={active ? 0.55 : 0.12}
              style={{ transition: 'opacity 400ms ease' }}
            >
              {cn.map((n, i) => {
                const next = cn[(i + 1) % cn.length]
                return (
                  <line
                    key={i}
                    x1={n.x * W}
                    y1={n.y * H}
                    x2={next.x * W}
                    y2={next.y * H}
                    stroke={c.color}
                    strokeWidth="0.6"
                  />
                )
              })}
            </g>
          )
        })}
        {data.nodes.map((n, i) => {
          const pulse = 0.8 + 0.3 * Math.sin(t * 1.4 + i * 0.3)
          const active = hovered === null || hovered === n.cluster
          return (
            <g
              key={i}
              onMouseEnter={() => setHovered(n.cluster)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={n.x * W}
                cy={n.y * H}
                r={active ? 4.5 * pulse : 2.5}
                fill={n.color}
                opacity={active ? 0.85 : 0.25}
                style={{ transition: 'opacity 400ms ease' }}
              />
              {active && (
                <circle
                  cx={n.x * W}
                  cy={n.y * H}
                  r={10 * pulse}
                  fill="none"
                  stroke={n.color}
                  strokeWidth="0.5"
                  opacity="0.25"
                />
              )}
            </g>
          )
        })}
        {data.clusters.map((c, ci) => {
          const on = hovered === ci
          return (
            <g
              key={`l${ci}`}
              opacity={on ? 1 : 0.65}
              style={{ transition: 'opacity 300ms ease' }}
            >
              <line
                x1={c.cx * W}
                y1={c.cy * H - 40}
                x2={c.cx * W}
                y2={c.cy * H - 18}
                stroke={c.color}
                strokeWidth="0.8"
                opacity="0.6"
              />
              <text
                x={c.cx * W}
                y={c.cy * H - 48}
                textAnchor="middle"
                fontFamily="var(--serif)"
                fontSize={on ? 20 : 16}
                fontStyle="italic"
                fill="#1F2424"
                style={{ transition: 'font-size 300ms ease' }}
              >
                {c.label}
              </text>
              <text
                x={c.cx * W}
                y={c.cy * H + 32}
                textAnchor="middle"
                fontFamily="var(--mono)"
                fontSize="9"
                fill="#7C8585"
                letterSpacing="2"
              >
                n = {12 + ci * 3}
              </text>
            </g>
          )
        })}
      </svg>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--mute)',
          letterSpacing: '0.08em',
        }}
      >
        FIG. 02 — Emerging cohort clusters (de-identified, live)
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--mute)',
          letterSpacing: '0.08em',
        }}
      >
        {hovered !== null ? `▸ ${data.clusters[hovered].label}` : 'hover a cluster ↑'}
      </div>
    </div>
  )
}

export default function ResearchSection() {
  const ref = useReveal()
  return (
    <section
      id="research"
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        background: 'var(--cream-light)',
        position: 'relative',
      }}
    >
      <div
        ref={ref}
        className="pb-container reveal"
        style={{ padding: '120px 24px' }}
      >
        <div
          className="research-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 56,
            alignItems: 'start',
            marginBottom: 64,
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              § 03 · The research
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(38px, 5.4vw, 70px)',
                lineHeight: 1,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Every kid is a puzzle.
              <br />
              <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>
                Together, they tell a story.
              </span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Every family who uses Plan B for PANS contributes — with consent, de-identified — to a
              growing pattern library. What combinations show up in the overloaded-bucket kids?
              What interventions correlate with regression versus recovery? Which modalities
              actually move the needle, and which ones just add noise?
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 20,
              }}
            >
              As the dataset grows, the analysis sharpens. The 100th family&apos;s read benefits
              from what the first 99 contributed. Once patterns are clear enough to publish,
              they will be — openly, for every parent, practitioner, and researcher trying to
              piece this together.
            </p>
            <p
              className="serif"
              style={{
                fontSize: 26,
                fontStyle: 'italic',
                color: 'var(--ink)',
                margin: '28px 0 0',
                fontWeight: 400,
                lineHeight: 1.3,
                borderLeft: '3px solid var(--teal)',
                paddingLeft: 20,
              }}
            >
              Private data.{' '}
              <span style={{ color: 'var(--teal)' }}>Public insights.</span>
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--ink)', paddingTop: 32 }}>
          <Constellation />
        </div>
      </div>
    </section>
  )
}
