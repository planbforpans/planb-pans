import { ImageResponse } from 'next/og'

// File-convention OG image: Next auto-wires this as og:image (and twitter:image)
// for every route that doesn't override it, with correct width/height meta.
// Rendered to PNG at build time — no external asset or tooling needed.
export const runtime = 'nodejs'
export const alt = 'Plan B for PANS & PANDAS — A path out of the fire'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const cream = '#F6F1E7'
const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: cream,
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgba(31,107,107,0.16) 0%, rgba(31,107,107,0) 55%)',
          padding: '72px 84px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: teal,
            fontWeight: 600,
          }}
        >
          Non-profit · Free for families
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: ink,
              fontWeight: 500,
            }}
          >
            Plan B{' '}
            <span style={{ color: teal, fontStyle: 'italic', marginLeft: 22 }}>for PANS</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              fontSize: 40,
              lineHeight: 1.25,
              color: soft,
              maxWidth: 900,
            }}
          >
            A path out of the fire — for PANS, PANDAS, autism &amp; severe dysregulation.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 26,
            color: soft,
          }}
        >
          <div style={{ display: 'flex', width: 56, height: 4, background: teal }} />
          planbforpans.com
        </div>
      </div>
    ),
    { ...size }
  )
}
