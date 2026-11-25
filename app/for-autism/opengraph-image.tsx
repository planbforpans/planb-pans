import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Plan B for Autism: autism and the body'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#2F3E63', backgroundImage: 'radial-gradient(circle at 80% 25%, #43568A 0%, #2F3E63 45%, #1F2946 100%)', padding: '72px 84px', fontFamily: 'Georgia, serif', color: '#F6F4F9' }}>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9C3E6' }}>Autism and the body · free · a nonprofit</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 112, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            Plan B<span style={{ color: '#F2C9A9', fontStyle: 'italic', marginLeft: 26 }}>for Autism</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 26, maxWidth: 980, lineHeight: 1.25, opacity: 0.92 }}>We follow children night by night: infections, the immune system, food, sleep and treatments.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#C9C3E6' }}>planbforautism.com</div>
      </div>
    ),
    { ...size },
  )
}
