import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Plan B for ARFID: when eating suddenly narrows'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#3A1F35', backgroundImage: 'radial-gradient(circle at 85% 20%, #5A2F4F 0%, #3A1F35 58%, #26121F 100%)', padding: '72px 84px', fontFamily: 'Georgia, serif', color: '#F8F1EC' }}>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#E9B9A0' }}>When eating suddenly narrows · free · a nonprofit</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 112, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            Plan B<span style={{ color: '#EE8A5A', fontStyle: 'italic', marginLeft: 26 }}>for ARFID</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 26, maxWidth: 980, lineHeight: 1.25, opacity: 0.92 }}>Safe foods suddenly off the table? Look at the body. What to track, which tests, what to bring the doctor.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#E9B9A0' }}>planbforarfid.com</div>
      </div>
    ),
    { ...size },
  )
}
