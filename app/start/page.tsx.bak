import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Here — Plan B for PANS',
  description:
    'Just found out it’s PANS, or you suspect it? Take a breath. Here are your first moves — and you don’t have to do them alone.',
}

const ink = 'var(--ink)'
const teal = 'var(--teal)'
const soft = 'var(--sand-dark)'
const sand = 'var(--sand)'

const STEPS = [
  {
    title: 'Treat first',
    body: 'Start a targeted antibiotic and an anti-inflammatory — high-dose fish oil and an NSAID. You can begin today, before any lab comes back.',
    cta: 'See the starter protocol',
    href: '/deconstructing-pans.html#protocol',
  },
  {
    title: 'Test for the driver',
    body: 'Run a small, focused panel to find what’s behind it — with three easy ways to order it: yourself, through your doctor, or a telehealth doctor.',
    cta: 'See what to run',
    href: '/deconstructing-pans.html#protocol',
  },
  {
    title: 'Give it time',
    body: 'Treat for a few weeks and watch closely. Many children turn the corner right here.',
    cta: 'Track the response',
    href: '/tracker',
  },
  {
    title: 'Then look ahead',
    body: 'Learn the protocol as you go. And if your child isn’t all the way better, you’re not out of options — that’s where the Field Guide begins.',
    cta: 'Open the Field Guide',
    href: '/learn',
  },
]

export default function StartHere() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ padding: 'clamp(60px,10vw,116px) 24px clamp(32px,6vw,52px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 18px' }}>Start here</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px,7vw,62px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Just found out it’s PANS?<br />
            <em style={{ color: teal, fontStyle: 'italic' }}>Take a breath.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            You’re in the right place. There’s a lot to learn — but you only need the <em>next</em> step. Here are the first moves.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px clamp(40px,7vw,72px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {STEPS.map((s, i) => (
            <a key={s.title} href={s.href} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', textDecoration: 'none', background: '#fffdf7', border: `1px solid ${sand}`, borderRadius: 16, padding: 'clamp(22px,4vw,30px)' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 36, color: teal, fontWeight: 400, lineHeight: 1, flexShrink: 0 }}>{i + 1}</span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 26, color: ink, margin: '0 0 6px', lineHeight: 1.1 }}>{s.title}</span>
                <span style={{ display: 'block', fontSize: 16, color: soft, lineHeight: 1.6, margin: '0 0 10px' }}>{s.body}</span>
                <span style={{ fontSize: 13.5, color: teal, fontWeight: 700, letterSpacing: '0.03em' }}>{s.cta} →</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 24px clamp(64px,10vw,110px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(22px,3.8vw,32px)', color: ink, lineHeight: 1.3, margin: 0 }}>
            You don’t have to do all of this today. One step at a time — and if the protocol doesn’t get your child all the way better, you are <em style={{ color: teal, fontStyle: 'italic' }}>not stuck.</em> That’s what the Field Guide is for.
          </p>
        </div>
      </section>
    </main>
  )
}
