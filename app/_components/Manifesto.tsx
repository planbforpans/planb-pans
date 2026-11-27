'use client'

import { useEffect, useState } from 'react'

// "We are the research." (Rachel, 2026-11-26.) Closing statement after the
// care path on the homepage, and the opening of /research. The counter is
// aggregate only (families tracking in the last 30 days, nights logged), read
// from the app's public endpoint; it stays hidden until there is a real number.

type Counter = { families_tracking: number; nights_logged: number } | null

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.planbforpans.com'

const css = `
.mf{position:relative;padding:clamp(64px,10vw,120px) 16px;background-color:var(--paper,#fff);background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px),linear-gradient(var(--grid-major) 1px,transparent 1px),linear-gradient(90deg,var(--grid-major) 1px,transparent 1px);background-size:16px 16px,16px 16px,80px 80px,80px 80px;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);overflow:hidden}
.mf-in{max-width:980px;margin:0 auto}
.mf-fig{display:flex;justify-content:space-between;gap:12px;font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin:0 0 26px;padding-bottom:10px;border-bottom:1px solid var(--rule)}
.mf-fig span:last-child{color:var(--mute)}
.mf h2{font-family:var(--serif);font-weight:400;font-size:clamp(52px,12vw,124px);line-height:.9;letter-spacing:-.035em;margin:0;color:var(--ink)}
.mf h2 em{color:var(--teal)}
.mf-lines{margin:clamp(22px,4vw,36px) 0 0;max-width:780px}
.mf-lines p{font-family:var(--serif);font-size:clamp(20px,3.6vw,30px);line-height:1.3;color:var(--ink);margin:0 0 14px;opacity:0;transform:translateY(12px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.mf.in .mf-lines p{opacity:1;transform:none}
.mf.in .mf-lines p:nth-child(2){transition-delay:.15s}.mf.in .mf-lines p:nth-child(3){transition-delay:.3s}.mf.in .mf-lines p:nth-child(4){transition-delay:.45s}
.mf-lines p.mf-close{font-style:italic;color:var(--teal);margin-top:22px}
.mf-count{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 26px;margin:clamp(26px,4vw,40px) 0 0;padding:14px 0;border-top:1px solid var(--ink);border-bottom:1px solid var(--rule);font-family:var(--font-mono);font-size:12.5px;color:var(--ink-soft)}
.mf-count b{font-family:var(--serif);font-weight:500;font-size:clamp(26px,5vw,34px);color:var(--ink);margin-right:8px}
.mf-count i{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--signal,#A3242F);margin-right:8px;animation:mfPulse 2s ease-in-out infinite}
.mf-cta{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:center;margin-top:24px}
@keyframes mfPulse{0%,100%{opacity:1}50%{opacity:.25}}
@media (prefers-reduced-motion:reduce){.mf-lines p{opacity:1;transform:none;transition:none}.mf-count i{animation:none}}
`

export default function Manifesto({ fig = 'Fig. 05', as = 'h2', showLinks = true }: { fig?: string; as?: 'h1' | 'h2'; showLinks?: boolean }) {
  const [counter, setCounter] = useState<Counter>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    fetch(`${APP}/api/public/findings?limit=1`)
      .then((r) => r.json())
      .then((d) => { if (d?.counter && typeof d.counter.families_tracking === 'number') setCounter(d.counter) })
      .catch(() => {})
  }, [])
  useEffect(() => {
    const el = document.getElementById('we-are-the-research')
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Heading = as
  return (
    <section className={`mf${inView ? ' in' : ''}`} id="we-are-the-research" aria-labelledby="mf-title">
      <style>{css}</style>
      <div className="mf-in">
        <p className="mf-fig"><span>{fig} &middot; The research</span><span>Anonymous &middot; Public &middot; Shared</span></p>
        <Heading className="mf-h" id="mf-title" style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(52px, 12vw, 124px)', lineHeight: 0.9, letterSpacing: '-0.035em', margin: 0, color: 'var(--ink)' }}>
          We are the <em style={{ color: 'var(--teal)' }}>research.</em>
        </Heading>
        <div className="mf-lines">
          <p>Every family&apos;s data stays anonymous. Every finding is public. Every child&apos;s win becomes every child&apos;s win.</p>
          <p>We&apos;re done waiting for science to catch up with our kids.</p>
          <p>The patterns are the unlock &mdash; and the more families who track, the faster we all get out.</p>
          <p className="mf-close">Together, we get them out.</p>
        </div>
        {counter && (
          <div className="mf-count" aria-label="Live tracking count">
            <span><i aria-hidden="true" /><b>{counter.families_tracking.toLocaleString('en-US')}</b>families tracking</span>
            <span><b>{counter.nights_logged.toLocaleString('en-US')}</b>nights logged</span>
          </div>
        )}
        <div className="mf-cta">
          <a href={`${APP}/signup`} rel="noopener" className="cta-teal">Start tracking free &rarr;</a>
          {showLinks && <a href="/research" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>See what we&apos;re learning &rarr;</a>}
        </div>
      </div>
    </section>
  )
}
