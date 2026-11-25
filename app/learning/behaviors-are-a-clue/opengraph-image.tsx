import { ImageResponse } from 'next/og'

// Share card for Clue 01 — the image Facebook shows for the series
// "Behavior is a symptom. Track it."
export const runtime = 'nodejs'
export const alt = 'Behaviors are a clue — What we’re learning, Plan B for PANS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const ink = '#1F2424'
const teal = '#2E6E70'
const tealLight = '#9CC7C3'
const signal = '#A3242F'
const soft = '#505858'

const MONTH = [3, 2, 3, 2, 2, 3, 2, 3, 4, 3, 2, 3, 7, 9, 8, 9, 8, 7, 6, 5, 4, 4, 3, 3, 2, 3, 2, 2, 3, 2]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          padding: '64px 80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 22, letterSpacing: '0.24em', textTransform: 'uppercase', color: teal }}>
          <div style={{ display: 'flex', border: `2px solid ${teal}`, padding: '6px 14px' }}>Clue 01</div>
          What we&rsquo;re learning
        </div>
        <div style={{ display: 'flex', fontSize: 112, lineHeight: 1, letterSpacing: '-0.02em', color: ink }}>
          Behaviors are
          <span style={{ color: teal, fontStyle: 'italic', marginLeft: 28 }}>a clue.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 110 }}>
          {MONTH.map((h, i) => (
            <div
              key={i}
              style={{ display: 'flex', width: 28, height: h * 11, background: i === 10 || i === 17 ? teal : h >= 7 ? signal : tealLight }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: soft }}>
          <span>Behavior is a symptom. Track it.</span>
          <span>planbforpans.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
