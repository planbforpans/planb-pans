'use client'

// The homepage's layout and visual system for each condition page (Rachel, 2026-11-26: "Use the same format
// as planbforpans, just swap out the PANS stuff." / "All websites should be the same color as Plan B for PANS.")
// Same order as app/page.tsx: cover, monitor, Case Review voices, then the condition figures, how it works +
// care path, tracker, the research band, Minta, voices. The site header and footer come from the layout.
import { useEffect, Fragment } from 'react'
import { VOICES } from './voices'
import CaseReviewVoices, { CaseReviewLong } from './CaseReviewVoices'
import CarePath from './CarePath'
import { CONDITIONS, type ConditionKey } from './conditions'
import { FiguresStyle, StrepConnection, EarlySigns, BugPersonalities } from './ConditionFigures'
import { DepthStyle, SelfCheck, Compare, Mechanism, DoctorReplies, Research, Faq } from './ConditionDepth'

const APP = 'https://app.planbforpans.com'

const STREP_ON: Record<ConditionKey, string[]> = {
  ocd: ['Worries that won’t let go', 'Tics'],
  arfid: ['Food refusal'],
  adhd: ['Focus falling apart'],
  constipation: ['Constipation'],
}

const CSS = `
.tx { width: 100%; border-collapse: collapse; margin-top: 8px; }
.tx td { border-top: 1px solid var(--sand); padding: 16px 14px 16px 0; vertical-align: top; font-size: 15.5px; line-height: 1.6; color: var(--ink-soft); }
.tx td:first-child { width: 38%; color: var(--ink); font-family: var(--font-display); font-size: 19px; line-height: 1.3; }
.tx code { display: block; font-family: var(--font-mono); font-size: 11px; color: var(--sand-dark); margin-top: 4px; }
.cx-note { border-inline-start: 3px solid var(--teal); padding: 6px 0 6px 16px; margin: 22px 0 0; font-size: 15.5px; color: var(--ink-soft); max-width: 780px; }
.cx-warn { border: 1px solid var(--ink); background: var(--cream-light); padding: 14px 18px; margin: 18px 0 0; font-size: 15px; color: var(--ink); max-width: 780px; }
.cx-reads { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
.cx-reads a { display: block; border: 1px solid var(--sand); background: var(--cream-light); padding: 18px; text-decoration: none; color: var(--ink); transition: border-color .2s; }
.cx-reads a:hover { border-color: var(--teal); }
.cx-reads b { display: block; font-family: var(--font-display); font-weight: 500; font-size: 21px; line-height: 1.2; margin: 6px 0; }
.cx-reads span { font-size: 14.5px; color: var(--ink-soft); }
@media (max-width: 760px) { .tx td { display: block; width: auto !important; padding: 4px 0; } .tx td:first-child { padding-top: 16px; } .tx td + td { border-top: 0; padding-bottom: 16px; } }
`

export default function ConditionHome({ k }: { k: ConditionKey }) {
  const c = CONDITIONS[k]
  const from = `?from=${k}`

  useEffect(() => {
    if (typeof window === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.14, rootMargin: '-40px 0px' },
    )
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main style={{ background: 'var(--cream)' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <FiguresStyle />
      <DepthStyle />

      <section className="cover">
        <div className="cover-top">
          <span>{c.issue}</span>
          <span className="cover-top-mid">A non-profit research lab</span>
          <span>No. 01 &middot; Free for families</span>
        </div>
        <div className="cover-stage">
          <div className="cover-field" aria-hidden="true" />
          <p className="cover-mast" aria-hidden="true">Plan B<span className="mast-for">for {c.name}</span></p>
          <div className="cover-kid fade delay-2">
            <img src={c.kid.src} alt={c.kid.alt} width={c.kid.w} height={c.kid.h} fetchPriority="high" />
            <span className="scan" aria-hidden="true" />
            {c.pins.map((p, i) => (
              <span key={p.t} className="datapoint" style={{ top: p.top, left: p.left, animationDelay: `${1.6 + i * 0.5}s` }}><i />{p.t}</span>
            ))}
          </div>
          <svg className="trace" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50 L300 50 L330 50 L345 18 L360 72 L372 40 L385 50 L620 50 L640 50 L652 30 L664 64 L676 50 L1200 50" />
          </svg>
          <div className="cover-lines cover-left rise delay-3">
            <p className="cl-kicker">Fig. 01</p>
            <p className="cl-big"><em>See the whole picture.</em></p>
            <p className="cl-small">One integrated read of every lab, every doctor&apos;s note, every year of the story.</p>
          </div>
        </div>

        <div className="cover-promise">
          <h1 className="rise delay-3">{c.h1[0]}<em>{c.h1[1]}</em>{c.h1[2]}<em>{c.h1[3]}</em>{c.h1[4]}</h1>
          <p className="cover-dek rise delay-4">{c.dek} <strong>Often it&rsquo;s the same pattern as PANS, just quieter.</strong></p>
          <div className="rise delay-5" style={{ display: 'flex', gap: 26, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <a href={`${APP}/signup${from}`} rel="noopener" className="cta-teal">Start your free Synthesis</a>
            <a href="#how" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>How it works &darr;</a>
          </div>
          <p className="rise delay-5 cover-creds">We&apos;re not doctors. Everything we give you is made to take to yours.</p>
        </div>
      </section>

      <div className="monitor" aria-hidden="true">
        <span className="monitor-live"><i />Live</span>
        <div className="monitor-track">
          <div className="marquee-track monitor-run">
            {[0, 1].map((n) => (
              <Fragment key={n}>
                {c.monitor.map((t) => <span key={t + n} className="mon-item">{t}</span>)}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <CaseReviewVoices dark />

      <StrepConnection fig="Fig. 02" signs={STREP_ON[k]} />
      <SelfCheck fig="Fig. 03" c={c} />
      <EarlySigns fig="Fig. 04" current={c.signs} />
      <Compare fig="Fig. 05" c={c} />
      <Mechanism fig="Fig. 06" c={c} />
      <BugPersonalities fig="Fig. 07" order={c.bugs} hot={c.hot} hotLabel={c.hotLabel} />

      <section className="fx reveal" aria-label="The tests">
        <div className="fx-in">
          <div className="fx-head"><p className="fx-fig">Fig. 08 &middot; The tests</p><p className="fx-by">Bring this list to your doctor</p></div>
          <h2 className="fx-title">What to ask for, <em>and why.</em></h2>
          <p className="fx-p">Start with the strep and Mycoplasma tests above. Then these.</p>
          <table className="tx"><tbody>
            {c.tests.map(([n, code, why]) => <tr key={n}><td>{n}{code && <code>{code}</code>}</td><td>{why}</td></tr>)}
          </tbody></table>
          {c.testsNote && <p className="cx-note">{c.testsNote}</p>}
          {c.warn && <p className="cx-warn"><b>{c.warn.split(',')[0]},</b>{c.warn.slice(c.warn.indexOf(',') + 1)}</p>}
          <p style={{ margin: '14px 0 0' }}><a className="fx-link" href="/tests">See every test, with costs and where to get them →</a></p>
        </div>
      </section>

      <DoctorReplies fig="Fig. 09" c={c} />

      <section className="how reveal" id="how" style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
        <div className="how-in">
          <p className="eyebrow" style={{ marginBottom: 14 }}>How Plan B for {c.name} works</p>
          <h2 className="how-title">Four steps. <em>Start</em> with the whole picture.</h2>
          <div className="how-steps">
            <div className="step">
              <p className="step-n">01</p>
              <p className="step-tag">The Synthesis &middot; free</p>
              <h3>See the whole picture</h3>
              <p>Share your child&apos;s story and labs. Get a written read of what may be driving it, and what&apos;s been missed.</p>
              <svg className="fig-svg" viewBox="0 0 300 150" aria-hidden="true">
                {[[40, 36], [80, 104], [120, 56], [170, 116], [210, 46], [250, 92], [60, 76], [150, 28], [230, 128], [100, 132], [190, 84], [270, 36]].map(([x, y], i) => <circle key={i} className="dot" cx={x} cy={y} r="3.2" style={{ animationDelay: `${i * 0.07}s` }} />)}
                <path className="draw link" d="M120 56 L150 28 L210 46 L190 84 L120 56" />
                {[[120, 56], [150, 28], [210, 46], [190, 84]].map(([x, y], i) => <circle key={i} className="hit" cx={x} cy={y} r="5.5" style={{ animationDelay: `${1.5 + i * 0.15}s` }} />)}
              </svg>
            </div>
            <div className="step">
              <p className="step-n">02</p>
              <p className="step-tag">Additional labs &middot; coded</p>
              <h3>Fill the gaps</h3>
              <p>Your Synthesis lists the tests still missing, with the codes and reasons your doctor needs to order them.</p>
              <svg className="fig-svg tubes" viewBox="0 0 300 150" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const x = 34 + i * 44
                  const missing = i === 2 || i === 4
                  return (
                    <g key={i}>
                      <rect x={x} y="20" width="22" height="104" rx="11" className="tube" />
                      <rect x={x - 3} y="14" width="28" height="10" rx="2" className={missing ? 'cap cap-miss' : 'cap'} />
                      {!missing && <rect x={x + 2} y="44" width="18" height="78" rx="9" className="liquid" style={{ animationDelay: `${0.2 + i * 0.15}s` }} />}
                      {missing && <text x={x + 11} y="140" textAnchor="middle" className="miss">to run</text>}
                    </g>
                  )
                })}
              </svg>
            </div>
            <div className="step">
              <p className="step-n">03</p>
              <p className="step-tag">The Tracker &middot; free</p>
              <h3>Track it</h3>
              <p>Thirty seconds a night on your phone. Over weeks, you see what flares your child and what helps.</p>
              <svg className="fig-svg" viewBox="0 0 300 150" aria-hidden="true">
                <g className="axes"><line x1="24" y1="128" x2="292" y2="128" /><line x1="24" y1="10" x2="24" y2="128" /></g>
                {[0, 1, 2, 3, 4].map((i) => <line key={i} className="gridline" x1="24" x2="292" y1={128 - i * 26} y2={128 - i * 26} />)}
                <path className="draw" d="M24 30 L64 42 L104 34 L144 64 L184 80 L224 100 L264 110 L292 112" />
                {[[64, 42], [104, 34], [144, 64], [184, 80], [224, 100], [264, 110]].map(([x, y], i) => <circle key={i} className="pt" cx={x} cy={y} r="3" style={{ animationDelay: `${0.5 + i * 0.22}s` }} />)}
                <text x="292" y="144" textAnchor="end">weeks</text>
              </svg>
            </div>
            <div className="step">
              <p className="step-n">04</p>
              <p className="step-tag">The Case Review</p>
              <h3>Can&apos;t do it alone?</h3>
              <p>Rachel combs through your child&apos;s whole record, birth to now. She built the system behind every Synthesis, so she catches what it missed and sets it right. No stone unturned.</p>
              <a href="/case-review" className="step-link">What a Case Review is &rarr;</a>
              <svg className="fig-svg" viewBox="0 0 300 150" aria-hidden="true">
                <line className="draw" x1="20" y1="80" x2="284" y2="80" />
                {[20, 64, 102, 150, 188, 236, 284].map((x, i) => <line key={i} className="tick" x1={x} x2={x} y1={i % 2 ? 70 : 64} y2="90" style={{ animationDelay: `${0.4 + i * 0.15}s` }} />)}
                {[102, 188, 284].map((x, i) => <circle key={i} className="pt" cx={x} cy="80" r="4.5" style={{ animationDelay: `${1 + i * 0.3}s` }} />)}
                <text x="20" y="112">birth</text><text x="102" y="112" textAnchor="middle">onset</text><text x="188" y="112" textAnchor="middle">flare</text><text x="284" y="112" textAnchor="end">now</text>
              </svg>
            </div>
          </div>
          <CarePath fig="Fig. 10" />
          <div className="how-cta">
            <a href={`${APP}/signup${from}`} rel="noopener" className="cta-teal">Start your free Synthesis</a>
            <a href={`${APP}/sample-synthesis-2`} rel="noopener" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>See a sample Synthesis &rarr;</a>
          </div>
        </div>
      </section>

      <section className="tracker-show reveal">
        <div className="tracker-in">
          <div className="phone" aria-hidden="true">
            <div className="phone-screen">
              <p className="ph-date">Tonight &middot; Tue</p>
              <p className="ph-title">How was today?</p>
              {c.tracker.map((r, i) => (
                <div key={r.k} className="ph-row">
                  <span>{r.k}</span><b>{r.v}</b>
                  <div className="ph-track"><i style={{ ['--w' as string]: `${r.v * 10}%`, animationDelay: `${0.3 + i * 0.25}s` }} /></div>
                </div>
              ))}
              <p className="ph-note">{c.trackerNote}</p>
              <div className="ph-spark">{[8, 7, 8, 6, 7, 5, 6, 4, 5, 3, 4, 3, 2, 3].map((h, i) => <span key={i} style={{ height: `${h * 10}%`, animationDelay: `${1.4 + i * 0.05}s` }} />)}</div>
              <p className="ph-saved">Saved ✓ &nbsp;14 nights in a row</p>
            </div>
          </div>
          <div className="tracker-copy">
            <p className="eyebrow" style={{ marginBottom: 14 }}>The daily tracker</p>
            <h2>The tracker <em>is</em> Plan B for {c.name}.</h2>
            <ul>
              <li><b>Thirty seconds</b> before bed.</li>
              <li><b>Patterns</b> one bad week hides.</li>
              <li><b>Research</b> that helps the next family.</li>
            </ul>
            <a href={`${APP}/signup${from}&next=/tracker`} className="cta-teal">Start the free tracker</a>
            <p style={{ marginTop: 18 }}>
              <a href="/learning" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>What we&rsquo;re learning from tracking &rarr;</a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,96px) 24px', background: 'var(--teal)', color: '#FFFFFF' }}>
        <div className="pb-container" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#cfe3df', margin: '0 0 20px' }}>
            We are the research
          </p>
          <p className="serif" style={{ fontSize: 'clamp(30px,5vw,54px)', lineHeight: 1.12, margin: '0 0 26px' }}>
            The more families track, <em>the more we learn.</em>
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#d9e2e1', margin: '0 0 8px' }}>
            Much is still unknown about how infections and the immune system change a child&apos;s brain.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#efe6e3', margin: '0 0 22px' }}>
            Every family that tracks helps us find what makes symptoms rise and fall, and the way out.
          </p>
          <p className="serif" style={{ fontSize: 'clamp(21px,3vw,28px)', fontStyle: 'italic', color: 'var(--teal-light)', margin: 0 }}>
            Together, we pull each other out.
          </p>
        </div>
      </section>

      <Research fig="Fig. 11" c={c} />

      <section aria-label="Try Minta" style={{ padding: 'clamp(72px, 10vw, 120px) 24px', background: 'var(--cream-light)', borderBottom: '1px solid var(--rule)', position: 'relative', overflow: 'hidden' }}>
        <div className="bloom-float" style={{ position: 'absolute', top: -180, right: -160, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(31,107,107,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="pb-container reveal" style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow" style={{ color: 'var(--teal)', fontWeight: 600, marginBottom: 22 }}>Try Minta &middot; Free sample &middot; No sign-up</p>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 300, letterSpacing: '-0.022em', lineHeight: 1.05, margin: '0 0 24px', color: 'var(--ink)' }}>
            Ask Minta <em style={{ color: 'var(--teal)', fontStyle: 'italic', fontWeight: 400 }}>anything.</em>
          </h2>
          <p style={{ fontSize: 'clamp(17px, 1.9vw, 20px)', lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 680, margin: '0 auto 44px' }}>{c.minta}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`${APP}/ask${from}&q=${encodeURIComponent(c.mintaQ)}`} rel="noopener" className="cta-teal" style={{ textDecoration: 'none', display: 'inline-block' }}>Ask Minta about your child&rsquo;s {c.name === 'Constipation' ? 'constipation' : c.name} &rarr;</a>
            <a href={`${APP}/try${from}`} rel="noopener" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5, alignSelf: 'center' }}>Or ask anything &rarr;</a>
          </div>
          <p style={{ marginTop: 26, fontSize: 12, color: 'var(--sand-dark)', fontStyle: 'italic', lineHeight: 1.6 }}>Minta is an AI and can be wrong. Plan B is not a doctor and this isn&rsquo;t medical advice. In an emergency, call 911 or 988.</p>
          <p style={{ marginTop: 10, fontSize: 14 }}><a href="/minta" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: 4 }}>Who is Minta? &rarr;</a></p>
        </div>
      </section>

      <Faq fig="Fig. 12" c={c} />

      <section className="fx reveal" aria-label="From the Field Guide" style={{ paddingBottom: 'clamp(56px, 7vw, 96px)' }}>
        <div className="fx-in">
          <div className="fx-head"><p className="fx-fig">From the Field Guide</p><p className="fx-by">Read more</p></div>
          <div className="cx-reads">
            {c.reads.map(([href, t, d]) => <a key={href} href={href}><span className="fx-tag">Guide</span><b>{t}</b><span>{d}</span></a>)}
          </div>
        </div>
      </section>

      <CaseReviewLong />

      <section className="voices reveal">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 14 }}>In parents&apos; words</p>
        <div className="voices-feature">
          {[VOICES[0], VOICES[1], VOICES[3]].map((v) => (
            <figure key={v.quote}><blockquote>&ldquo;{v.quote}&rdquo;</blockquote><figcaption>{v.who}</figcaption></figure>
          ))}
        </div>
        <div className="voices-row">
          <div className="voices-run">
            {[0, 1].map((n) => (
              <Fragment key={n}>
                {VOICES.filter((_, i) => ![0, 1, 3].includes(i)).map((v) => (
                  <figure key={v.quote + n} className="voice" aria-hidden={n === 1 || undefined} data-dup={n === 1 ? '' : undefined}><blockquote>&ldquo;{v.quote}&rdquo;</blockquote><figcaption>{v.who}</figcaption></figure>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
