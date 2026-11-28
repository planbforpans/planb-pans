'use client'

import { useEffect, useRef, useState } from 'react'

// "We need to let people know the importance of tracking." (Rachel, 2026-11-28.)
// Behavior is the clue; tracking it is the unlock to finding what moves symptoms.
// Shown on the homepage, every condition page and /for-autism. The chart is an
// illustration, never a real child. The app shows the same three points
// (planb-app WhyTracking).

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.planbforpans.com'

const css = `
section.wt{padding:clamp(56px,7vw,96px) 24px clamp(56px,7vw,96px);background:var(--cream,#fff)}
.wt-in{max-width:1200px;margin:0 auto;border-top:1px solid var(--ink);padding-top:20px}
.wt-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:baseline;margin:0 0 18px}
.wt-fig{font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--teal);margin:0}
.wt-by{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--sand-dark);margin:0}
.wt h2.wt-title{font-family:var(--font-display);font-weight:400;font-size:clamp(34px,5vw,62px);line-height:1.02;letter-spacing:-.02em;margin:0 0 16px;max-width:860px;color:var(--ink)}

.wt-lede{font-family:var(--font-display);font-size:clamp(19px,2.4vw,24px);line-height:1.4;color:var(--ink-soft);margin:0 0 clamp(26px,4vw,40px);max-width:720px}
.wt-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(24px,4vw,56px);align-items:start}
.wt-pts{list-style:none;margin:0;padding:0}
.wt-pt{display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:18px 0;border-top:1px solid var(--sand);opacity:0;transform:translateY(12px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
.wt-pt:last-child{border-bottom:1px solid var(--sand)}
.wt.on .wt-pt{opacity:1;transform:none}
.wt.on .wt-pt:nth-child(2){transition-delay:.15s}.wt.on .wt-pt:nth-child(3){transition-delay:.3s}
.wt-ic{width:44px;height:44px;border:1px solid var(--teal);border-radius:50%;display:grid;place-items:center;color:var(--teal)}
.wt-ic svg{width:22px;height:22px;display:block}
.wt-n{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--sand-dark);margin:2px 0 4px}
.wt-pt h3{font-family:var(--font-display);font-weight:500;font-size:clamp(22px,2.4vw,27px);line-height:1.15;margin:0 0 6px;color:var(--ink)}
.wt-pt p.wt-d{font-size:15.5px;line-height:1.6;color:var(--ink-soft);margin:0}
.wt-pt p.wt-d b{color:var(--ink)}
.wt-plate{border:1px solid var(--sand);background:var(--cream,#fff);padding:14px 14px 10px;position:relative}
.wt-plate-h{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:0 0 6px}
.wt-ill{font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--signal);border:1px solid var(--signal);padding:3px 7px;border-radius:2px}
.wt-k{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--sand-dark)}
.wt-plate svg{width:100%;height:auto;display:block}
.wt-tag{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;fill:var(--sand-dark)}
.wt-line{fill:none;stroke:var(--ink);stroke-width:2.4;stroke-linejoin:round;stroke-linecap:round;stroke-dasharray:640;stroke-dashoffset:640}
.wt.on .wt-line{animation:wtDraw 2.4s .35s cubic-bezier(.4,.1,.2,1) forwards}
.wt-mark{opacity:0;transition:opacity .6s ease}
.wt.on .wt-mark{opacity:1}
.wt.on .wt-mark.m1{transition-delay:.9s}.wt.on .wt-mark.m2{transition-delay:1.7s}.wt.on .wt-mark.m3{transition-delay:2.4s}
.wt-cap{font-size:13px;line-height:1.55;color:var(--sand-dark);font-style:italic;margin:10px 0 0}
.wt-cta{display:flex;flex-wrap:wrap;gap:12px 22px;align-items:center;margin-top:clamp(26px,4vw,38px)}
.wt-cta span{font-size:14.5px;color:var(--ink-soft)}
@keyframes wtDraw{to{stroke-dashoffset:0}}
@media (max-width:760px){section.wt{padding-left:16px;padding-right:16px}.wt-grid{grid-template-columns:1fr}.wt-pt{grid-template-columns:38px minmax(0,1fr);gap:12px}.wt-ic{width:38px;height:38px}.wt-cta .cta-teal{width:100%;text-align:center}}
@media (prefers-reduced-motion:reduce){.wt-pt,.wt-mark{opacity:1;transform:none;transition:none}.wt-line{animation:none!important;stroke-dashoffset:0}}
`

function IconClue() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" />
      <path d="M15 15 L21 21" />
      <path d="M6 11 L8.2 11 L9.4 8 L10.8 12.6 L12 10 L14 10" />
    </svg>
  )
}

function IconWorking() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 5 L8 9 L12 8 L16 14 L21 17" />
      <path d="M3 21 H21" />
      <path d="M14 3.5 L16 5.5 L20 1.5" transform="translate(0 1)" />
    </svg>
  )
}

function IconFamilies() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M10.8 7.1 L6.2 15.9 M13.2 7.1 L17.8 15.9 M7.4 18 H16.6" />
    </svg>
  )
}

export default function WhyTracking({ fig = 'Fig. 04', from }: { fig?: string; from?: string }) {
  const ref = useRef<HTMLElement | null>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const signup = `${APP}/signup?${from ? `from=${from}&` : ''}next=/tracker`

  return (
    <section ref={ref} className={`wt${on ? ' on' : ''}`} id="why-tracking" aria-labelledby="wt-title">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wt-in">
        <div className="wt-head"><p className="wt-fig">{fig} &middot; Why tracking matters</p><p className="wt-by">We are the research</p></div>
        <h2 className="wt-title" id="wt-title">Why tracking behavior matters.</h2>
        <p className="wt-lede">It is the unlock to finding what moves your child&rsquo;s symptoms, and every family benefits.</p>

        <div className="wt-grid">
          <ol className="wt-pts">
            <li className="wt-pt">
              <span className="wt-ic"><IconClue /></span>
              <div>
                <p className="wt-n">01</p>
                <h3>Behavior is the clue.</h3>
                <p className="wt-d">It can show what sets off a flare and what calms it, often before labs do.</p>
              </div>
            </li>
            <li className="wt-pt">
              <span className="wt-ic"><IconWorking /></span>
              <div>
                <p className="wt-n">02</p>
                <h3>It shows what&rsquo;s working.</h3>
                <p className="wt-d">Night by night, you can see which treatments are actually helping your child, and which aren&rsquo;t.</p>
              </div>
            </li>
            <li className="wt-pt">
              <span className="wt-ic"><IconFamilies /></span>
              <div>
                <p className="wt-n">03</p>
                <h3>It helps every family.</h3>
                <p className="wt-d">Every family who tracks helps every other family. <b>We are the research. The patterns are the unlock.</b></p>
              </div>
            </li>
          </ol>

          <figure className="wt-plate" style={{ margin: 0 }}>
            <div className="wt-plate-h"><span className="wt-k">Symptoms, night by night</span><span className="wt-ill">Illustration</span></div>
            <svg viewBox="0 0 400 220" direction="ltr" style={{ direction: 'ltr' }} role="img" aria-label="Illustration: a symptom line stays low, rises into a flare after a cold, then eases after a change.">
              <defs>
                <pattern id="wt-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0 H0 V20" fill="none" stroke="var(--sand-light)" strokeWidth="1" /></pattern>
              </defs>
              <rect width="400" height="220" fill="url(#wt-grid)" />
              <line x1="30" y1="178" x2="392" y2="178" stroke="var(--sand-dark)" strokeWidth="1" />
              <line x1="30" y1="24" x2="30" y2="178" stroke="var(--sand-dark)" strokeWidth="1" />
              <text x="36" y="34" className="wt-tag">Symptoms ↑</text>
              <text x="392" y="200" textAnchor="end" className="wt-tag">Nights →</text>

              <g className="wt-mark m1">
                <line x1="112" y1="100" x2="112" y2="178" stroke="var(--signal)" strokeWidth="1.2" strokeDasharray="4 4" />
                <circle cx="112" cy="178" r="5" fill="var(--signal)" />
                <text x="104" y="118" textAnchor="end" className="wt-tag" style={{ fill: 'var(--signal)' }}>A cold</text>
              </g>
              <g className="wt-mark m2">
                <text x="196" y="52" textAnchor="middle" className="wt-tag" style={{ fill: 'var(--ink)' }}>Flare</text>
              </g>
              <g className="wt-mark m3">
                <line x1="244" y1="32" x2="244" y2="178" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="4 4" />
                <circle cx="244" cy="178" r="5" fill="var(--teal)" />
                <text x="250" y="36" className="wt-tag" style={{ fill: 'var(--teal)' }}>A change</text>
                <text x="388" y="134" textAnchor="end" className="wt-tag" style={{ fill: 'var(--teal)' }}>Easing</text>
              </g>

              <path className="wt-line" d="M30 156 L52 154 L74 157 L96 155 L112 156 L128 148 L146 128 L164 104 L182 82 L200 66 L216 62 L232 68 L244 72 L262 90 L282 110 L302 126 L322 138 L344 146 L366 150 L392 152" />
            </svg>
            <figcaption className="wt-cap">An illustration, not a real child. A flare can come on fast or creep in over weeks; thirty seconds a night is how either one shows up.</figcaption>
          </figure>
        </div>

        <div className="wt-cta">
          <a href={signup} rel="noopener" className="cta-teal">Start tracking tonight &mdash; free</a>
          <span>Thirty seconds a night, on your phone.</span>
        </div>
      </div>
    </section>
  )
}
