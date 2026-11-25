import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Plan B for OCD: when OCD comes on suddenly'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#1E3A2F', backgroundImage: 'radial-gradient(circle at 85% 20%, #2C5141 0%, #1E3A2F 60%, #14291F 100%)', padding: '72px 84px', fontFamily: 'Georgia, serif', color: '#F3F0E6' }}>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A9C7B2' }}>When OCD comes on suddenly · free · a nonprofit</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 112, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            Plan B<span style={{ color: '#E3A93C', fontStyle: 'italic', marginLeft: 26 }}>for OCD</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 26, maxWidth: 980, lineHeight: 1.25, opacity: 0.92 }}>Sudden OCD after a sore throat? Think strep. What to track, which tests, what to bring the doctor.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#A9C7B2' }}>planbforocd.com</div>
      </div>
    ),
    { ...size },
  )
}
