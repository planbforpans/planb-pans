import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Plan B for Constipation: when it won’t go away'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF', borderBottom: '14px solid #2E6E70', padding: '72px 84px', fontFamily: 'Georgia, serif', color: '#1F2424' }}>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#2E6E70' }}>When constipation won’t go away · free · a nonprofit</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 100, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            Plan B<span style={{ color: '#2E6E70', fontStyle: 'italic', marginLeft: 24 }}>for Constipation</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 26, maxWidth: 980, lineHeight: 1.25, opacity: 0.92 }}>Constipation no one can explain? It may be a clue. What to track, which tests, what to bring the doctor.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#2E6E70' }}>planbforconstipation.com</div>
      </div>
    ),
    { ...size },
  )
}
