'use client'

import { useState } from 'react'
import { useReveal } from '../_components/hooks'

// Meet Minta (Rachel, 2026-10-28): Minta is part of Plan B for PANS but her
// own, very important thing. Show her working before describing her: try
// her, see her, hear from a parent, then the details.

const STAR = 'M0,-27 C2,-27 3,-26 4,-24 L9.8,-10.4 L24.5,-9 C27.6,-8.7 28.4,-5.6 26.2,-3.6 L15,6.2 L18.4,20.6 C19.1,23.6 16.4,25.4 13.8,23.9 L0,15.8 L-13.8,23.9 C-16.4,25.4 -19.1,23.6 -18.4,20.6 L-15,6.2 L-26.2,-3.6 C-28.4,-5.6 -27.6,-8.7 -24.5,-9 L-9.8,-10.4 L-4,-24 C-3,-26 -2,-27 0,-27Z'

function Star({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" aria-hidden style={{ flex: '0 0 auto', display: 'block' }}>
      <circle r="50" fill="#2E6E70" />
      <path d={STAR} fill="#FFFFFF" transform="translate(0 2) scale(1.05)" />
    </svg>
  )
}

// Verbatim, from app/_components/voices.ts.
const VOICES = [
  { quote: 'minta is amazing, and i love the insights and patterns it picks up…', who: 'Parent, beta feedback' },
  { quote: 'Minta is an awesome tool and also gave me lots of good food for thought.', who: 'Samantha, PANS parent' },
  { quote: 'Minta’s synthesis was very helpful and I’ve saved it into my daughter’s files.', who: 'Sheila, PANS parent' },
]

const DOES = [
  ['Connects the dots', 'Years of labs, symptoms and nights in one view, so patterns one doctor’s visit can’t see come forward.'],
  ['Explains it in plain words', 'Any number, any test, any term. Ask as many times as you need.'],
  ['Gets you ready for the doctor', 'The questions to ask, the tests to request, and what to bring.'],
  ['Does the paperwork', 'Records requests written for you, opening in your own email, ready to send.'],
]

export default function MintaClient() {
  const [q, setQ] = useState('')
  const a = useReveal()
  const b = useReveal()
  const c = useReveal()
  const d = useReveal()
  const ask = (e: React.FormEvent) => {
    e.preventDefault()
    const url = 'https://app.planbforpans.com/try' + (q.trim() ? `?q=${encodeURIComponent(q.trim())}` : '')
    window.location.href = url
  }

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* 1 · Try her */}
      <section style={{ padding: 'clamp(96px, 12vw, 140px) 24px clamp(64px, 8vw, 96px)', background: 'var(--cream-light)', borderBottom: '1px solid var(--rule)' }}>
        <div className="pb-container" style={{ maxWidth: 780, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}><Star size={52} /></div>
          <p className="eyebrow" style={{ marginBottom: 18 }}>Meet Minta · Plan B for PANS</p>
          <h1 className="serif" style={{ fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 300, letterSpacing: '-0.022em', lineHeight: 1.02, margin: '0 0 22px', color: 'var(--ink)' }}>
            The one who&rsquo;s read <em style={{ color: 'var(--teal)' }}>everything.</em>
          </h1>
          <p style={{ fontSize: 'clamp(17px, 1.9vw, 20px)', lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 620, margin: '0 auto 36px' }}>
            Minta reads your child&rsquo;s whole story &mdash; every lab, every record, every night in the tracker &mdash; and helps you make sense of it, any time of day.
          </p>
          <form onSubmit={ask} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 10px 10px 16px', background: '#FFFFFF', border: '1.5px solid var(--teal)', borderRadius: 999, boxShadow: '0 10px 30px rgba(31,107,107,0.16)', maxWidth: 640, margin: '0 auto' }}>
            <Star size={28} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask Minta anything about your child…"
              aria-label="Ask Minta"
              style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', fontSize: 16, padding: '10px 0', background: 'transparent', color: 'var(--ink)', fontFamily: 'inherit' }}
            />
            <button type="submit" style={{ flex: '0 0 auto', background: 'var(--teal)', color: '#FFFFFF', border: 0, borderRadius: 999, padding: '12px 20px', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>Ask</button>
          </form>
          <p style={{ marginTop: 14, fontSize: 13, color: 'var(--sand-dark)' }}>Free to try. No sign-up.</p>
          <p style={{ marginTop: 6, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>To have Minta answer about <em>your</em> child, sign in and add their labs and behaviors. Then she knows your child.</p>
        </div>
      </section>

      {/* 2 · See her */}
      <section style={{ padding: 'clamp(72px, 10vw, 112px) 24px', borderBottom: '1px solid var(--rule)' }}>
        <div ref={a} className="pb-container reveal" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>What it looks like</p>
          <h2 className="serif" style={{ fontSize: 'clamp(34px, 4.6vw, 52px)', fontWeight: 300, lineHeight: 1.08, margin: '0 0 10px', color: 'var(--ink)' }}>
            2:14 a.m., in the middle of a flare.
          </h2>
          <p style={{ fontSize: 13, color: 'var(--sand-dark)', margin: '0 0 30px', fontStyle: 'italic' }}>An example, with a made-up child. Minta answers from your own child&rsquo;s file.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'flex-start', marginBottom: 34 }}>
            <video src="/minta-demo.mp4" poster="/minta-demo-poster.jpg" controls playsInline muted preload="metadata" style={{ width: 260, maxWidth: '100%', borderRadius: 22, border: '1px solid var(--rule)', boxShadow: '0 14px 36px rgba(31,36,36,0.16)', background: '#000' }} />
            <div style={{ flex: '1 1 240px', minWidth: 0 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Watch · 25 seconds</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>Sign in, and Minta is right there. Ask in your own words, and she answers from your child&rsquo;s labs, notes and nights in the tracker &mdash; with the exact questions and test codes to bring to the doctor.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, background: '#FBFAF6', border: '1px solid var(--rule)', borderRadius: 18, padding: 'clamp(16px, 3vw, 28px)' }}>
            <div style={{ alignSelf: 'flex-end', maxWidth: '84%', background: 'var(--teal)', color: '#FFFFFF', padding: '12px 15px', borderRadius: '16px 16px 4px 16px', fontSize: 15, lineHeight: 1.55 }}>
              She&rsquo;s been raging for three days and barely eating. She was doing so well. What is going on?
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, maxWidth: '94%' }}>
              <Star size={30} />
              <div style={{ minWidth: 0, background: '#FFFFFF', border: '1px solid #E4DED0', padding: '14px 16px', borderRadius: '16px 16px 16px 4px', fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>
                <p style={{ margin: '0 0 10px' }}>I&rsquo;m sorry. Three days of this is exhausting. Here&rsquo;s what I see in Maya&rsquo;s file:</p>
                <ul style={{ margin: '0 0 10px', paddingInlineStart: 18 }}>
                  <li>Her strep swab on Sept 30 was positive, and she finished amoxicillin on Oct 10.</li>
                  <li>Her nights in the tracker were getting better until Oct 21. Then her rage scores went from 2 to 7.</li>
                  <li>You logged her sister home sick with a sore throat on Oct 19.</li>
                </ul>
                <p style={{ margin: '0 0 10px' }}>That pattern can mean strep came back, possibly from someone at home. Worth asking her doctor tomorrow:</p>
                <ol style={{ margin: '0 0 10px', paddingInlineStart: 18 }}>
                  <li>A strep swab (throat and bottom) for Maya <em>and</em> her sister.</li>
                  <li>Her ferritin was 14 in August. Low iron can make rage and sleep worse. Has it been rechecked?</li>
                </ol>
                <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 13.5 }}>I&rsquo;m not a doctor. Want me to write this up as a note to bring her?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Hear from parents */}
      <section style={{ padding: 'clamp(64px, 9vw, 100px) 24px', background: 'var(--ink)', color: 'var(--cream)' }}>
        <div ref={b} className="pb-container reveal" style={{ maxWidth: 1000 }}>
          <p className="eyebrow" style={{ color: 'var(--teal-light)', marginBottom: 26 }}>From parents</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {VOICES.map((v) => (
              <figure key={v.who} style={{ margin: 0, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 18 }}>
                <blockquote className="serif" style={{ margin: 0, fontSize: 'clamp(20px, 2.2vw, 24px)', fontWeight: 300, lineHeight: 1.35, fontStyle: 'italic' }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <figcaption style={{ marginTop: 12, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal-light)' }}>{v.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · The details */}
      <section style={{ padding: 'clamp(72px, 10vw, 112px) 24px', borderBottom: '1px solid var(--rule)' }}>
        <div ref={c} className="pb-container reveal" style={{ maxWidth: 1000 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>What Minta does for you</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {DOES.map(([t, d]) => (
              <div key={t} style={{ padding: '22px 22px 22px 0', borderBottom: '1px solid var(--rule)' }}>
                <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: '0 0 8px', color: 'var(--ink)' }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', fontWeight: 300 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 36, marginTop: 48 }}>
            <div>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, margin: '0 0 8px' }}>What Minta isn&rsquo;t</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>Minta isn&rsquo;t a doctor. She doesn&rsquo;t diagnose or prescribe. Everything she gives you is made to take to yours.</p>
            </div>
            <div>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, margin: '0 0 8px' }}>Why &ldquo;Minta&rdquo;</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>She&rsquo;s named for Araminta Ross, Harriet Tubman&rsquo;s birth name. Tubman found her way by the North Star and led others through the dark. Minta&rsquo;s star is a small nod to her.</p>
            </div>
            <div>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, margin: '0 0 8px' }}>Your child&rsquo;s privacy</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>Your child&rsquo;s file is used only to help your family. We never sell it. <a href="/privacy" style={{ color: 'var(--teal)' }}>Privacy policy</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Close */}
      <section style={{ padding: 'clamp(64px, 9vw, 100px) 24px', background: 'var(--cream-light)', textAlign: 'center' }}>
        <div ref={d} className="pb-container reveal" style={{ maxWidth: 680 }}>
          <h2 className="serif" style={{ fontSize: 'clamp(34px, 4.6vw, 52px)', fontWeight: 300, lineHeight: 1.08, margin: '0 0 26px', color: 'var(--ink)' }}>
            Give Minta your child&rsquo;s story.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: '-10px auto 26px', maxWidth: 560 }}>Sign in, add your child&rsquo;s labs and behaviors, and Minta has your child&rsquo;s whole picture, any time you need her.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://app.planbforpans.com/signup" rel="noopener" className="cta-teal" style={{ textDecoration: 'none', display: 'inline-block' }}>Start free &rarr;</a>
            <a href="https://app.planbforpans.com/minta" rel="noopener" style={{ display: 'inline-block', padding: '16px 24px', border: '1px solid var(--ink)', color: 'var(--ink)', textDecoration: 'none', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>I have a file &mdash; open Minta</a>
          </div>
        </div>
      </section>
    </main>
  )
}
