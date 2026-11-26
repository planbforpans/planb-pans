import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Plan B for ADHD: look at the body too'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#1B2A6B', backgroundImage: 'radial-gradient(circle at 85% 20%, #2C3F92 0%, #1B2A6B 58%, #111B4A 100%)', padding: '72px 84px', fontFamily: 'Georgia, serif', color: '#F2F3F7' }}>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C6CEF0' }}>When focus changes suddenly · free · a nonprofit</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 112, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            Plan B<span style={{ color: '#F2D35B', fontStyle: 'italic', marginLeft: 26 }}>for ADHD</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 26, maxWidth: 980, lineHeight: 1.25, opacity: 0.92 }}>Focus fell apart after an illness? Look at the body too, alongside your child’s ADHD care.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: '#C6CEF0' }}>planbforadhd.com</div>
      </div>
    ),
    { ...size },
  )
}
