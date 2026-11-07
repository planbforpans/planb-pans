'use client'

import { useEffect, useRef, useState, Fragment } from 'react'
import BucketSection from './_components/BucketSection'
import { VOICES } from './_components/voices'

export default function Home() {
  const revealRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.14, rootMargin: '-40px 0px' },
    )
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main ref={revealRef} style={{ background: 'var(--cream)' }}>
      {/* HERO — the cover (Oct 13 2026). Rachel: "lean more into Vogue",
          "black is too hard", "clean like Goop tied with medical vibes".
          A magazine cover: giant masthead, the child overlapping it the way a
          cover model does, cover lines either side, then the promise. */}
      <section className="cover">
        <div className="cover-top">
          <span>The PANS &amp; PANDAS Issue</span>
          <span className="cover-top-mid">A non-profit research lab</span>
          <span>No. 01 &middot; Free for families</span>
        </div>
        <div className="cover-stage">
          <div className="cover-field" aria-hidden="true" />
          <p className="cover-mast" aria-hidden="true">Plan B<span className="mast-for">for PANS</span></p>
          <div className="cover-kid fade delay-2">
            <img src="/kid-cover.png" alt="Silhouette of a child — Plan B for PANS" width={900} height={1200} fetchPriority="high" />
            <span className="scan" aria-hidden="true" />
            {[
              { top: '24%', left: '52%', t: 'OCD', d: '1.6s' },
              { top: '36%', left: '40%', t: 'ARFID', d: '2.1s' },
              { top: '48%', left: '58%', t: 'Rage', d: '2.6s' },
            ].map((c) => (
              <span key={c.t} className="datapoint" style={{ top: c.top, left: c.left, animationDelay: c.d }}><i />{c.t}</span>
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
          <h1 className="rise delay-3">
            See the <em>whole picture</em> of your child&apos;s PANS &mdash; and the <em>next step</em> to take to their doctor.
          </h1>
          <div className="rise delay-5" style={{ display: 'flex', gap: 26, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://app.planbforpans.com/signup" rel="noopener" className="cta-teal">Start your free Synthesis</a>
            <a href="#how" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>How it works &darr;</a>
          </div>
          <p className="rise delay-5 cover-creds">We&apos;re not doctors. Everything we give you is made to take to yours.</p>
        </div>
      </section>

      {/* Patient-monitor strip — medical flair (Oct 13). Illustrative readings. */}
      <div className="monitor" aria-hidden="true">
        <span className="monitor-live"><i />Live</span>
        <div className="monitor-track">
          <div className="marquee-track monitor-run">
            {[0, 1].map((k) => (
              <Fragment key={k}>
                {["ASO 412 IU/mL ▲", "Anti-DNase B 680 ▲", "OCD 7/10 ▼", "Rage 3/10 ▼", "Tics 2/10 ▼", "Food refusals 1", "Sleep 7.2 h ▲", "Nights tracked 14", "Labs read 200", "Pattern found: 1"].map((t) => <span key={t + k} className="mon-item">{t}</span>)}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* OUR MISSION — Rachel, 7 Nov 2026: "This is the heart and the mission
          statement... put that everywhere." And: "Plan B for PANS is not a
          business, it's a movement." Placed right after the hero so it is the
          first thing a parent reads. */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 24px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--teal)', margin: '0 0 18px' }}>
            Our mission
          </p>
          <p className="serif" style={{ fontSize: 'clamp(30px,5vw,52px)', lineHeight: 1.1, margin: '0 0 26px', color: 'var(--ink, #1d2422)' }}>
            Plan B for PANS is not a business. <em style={{ color: 'var(--teal)' }}>It&apos;s a movement.</em>
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, margin: '0 0 16px', color: '#3b4642' }}>
            There is still so much no one understands about PANS and autism. Every child who is tracked teaches us
            something. The more families who track, the more we all learn, and together we pull each other out.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, margin: '0 0 16px', color: '#3b4642' }}>
            <strong>Track, track, track:</strong> for your child, for every child suffering now, and so the next
            generation never has to suffer the way ours did.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, margin: '0 0 26px', color: '#3b4642' }}>
            This is the beginning of the end of this suffering, and it starts with you and your child.
          </p>
          <p className="serif" style={{ fontSize: 'clamp(21px,3vw,27px)', fontStyle: 'italic', color: 'var(--teal)', margin: 0, lineHeight: 1.4 }}>
            Together, we will find a way out of this.
          </p>
          <p style={{ fontSize: 15, color: '#6b7672', margin: '12px 0 0' }}>Rachel Johnson, founder</p>
        </div>
      </section>

      {/* HOW IT WORKS — Oct 13 2026 restructure. Rachel: "people are confused
          when they come to the site… we want to really push the tracker,
          because the more we track the better it is, and the research." One
          story, four steps, the tracker first. Figures are illustrative. */}
      <section className="how reveal" id="how">
        <div className="how-in">
          <p className="eyebrow" style={{ marginBottom: 14 }}>How Plan B for PANS works</p>
          <h2 className="how-title">Four steps. <em>Start</em> with the whole picture.</h2>
          {/* Order set by Rachel, Oct 13: synthesis → additional labs → tracker →
              if still confused, the Case Review. */}
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
                {[[102, 'onset'], [188, 'flare'], [284, 'now']].map(([x, t], i) => <circle key={i} className="pt" cx={Number(x)} cy="80" r="4.5" style={{ animationDelay: `${1 + i * 0.3}s` }} />)}
                <text x="20" y="112">birth</text><text x="102" y="112" textAnchor="middle">onset</text><text x="188" y="112" textAnchor="middle">flare</text><text x="284" y="112" textAnchor="end">now</text>
              </svg>
            </div>
          </div>
          <div className="how-cta">
            <a href="https://app.planbforpans.com/signup" rel="noopener" className="cta-teal">Start your free Synthesis</a>
            <a href="https://app.planbforpans.com/sample-synthesis-2" rel="noopener" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>See a sample Synthesis &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE TRACKER — shown, not described. */}
      <section className="tracker-show reveal">
        <div className="tracker-in">
          <div className="phone" aria-hidden="true">
            <div className="phone-screen">
              <p className="ph-date">Tonight &middot; Tue</p>
              <p className="ph-title">How was today?</p>
              {[
                { k: 'Rage', v: 3, w: 30 },
                { k: 'Sleep', v: 7, w: 70 },
                { k: 'Food', v: 6, w: 60 },
                { k: 'Tics', v: 2, w: 20 },
              ].map((r, i) => (
                <div key={r.k} className="ph-row">
                  <span>{r.k}</span><b>{r.v}</b>
                  <div className="ph-track"><i style={{ ['--w' as string]: `${r.w}%`, animationDelay: `${0.3 + i * 0.25}s` }} /></div>
                </div>
              ))}
              <p className="ph-note">+ Started magnesium, 100 mg</p>
              <div className="ph-spark">{[8, 7, 8, 6, 7, 5, 6, 4, 5, 3, 4, 3, 2, 3].map((h, i) => <span key={i} style={{ height: `${h * 10}%`, animationDelay: `${1.4 + i * 0.05}s` }} />)}</div>
              <p className="ph-saved">Saved ✓ &nbsp;14 nights in a row</p>
            </div>
          </div>
          <div className="tracker-copy">
            <p className="eyebrow" style={{ marginBottom: 14 }}>The daily tracker</p>
            <h2>The tracker <em>is</em> Plan B for PANS.</h2>
            <ul>
              <li><b>Thirty seconds</b> before bed.</li>
              <li><b>Patterns</b> one bad week hides.</li>
              <li><b>Research</b> that helps the next family.</li>
            </ul>
            <a href="/daily-tracker#install" className="cta-teal">Put the tracker on your phone</a>
          </div>
        </div>
      </section>

      {/* THE THESIS — added 2 Oct 2026. Rachel: "It's like writing an essay
          without a clear thesis." The site had six competing claims and a parent
          had to assemble the point themselves. Everything below now serves this
          one: the protocol is a miracle when it works, and the families it fails
          fall off the end of the map. That is who this is for. */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 24px', background: 'var(--teal)', color: '#FFFFFF' }}>
        <div className="pb-container" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#cfe3df', margin: '0 0 20px' }}>
            Why Plan B for PANS exists
          </p>
          <p className="serif" style={{ fontSize: 'clamp(30px,5vw,54px)', lineHeight: 1.12, margin: '0 0 26px' }}>
            When there&apos;s no 911 to call, there&apos;s <em>Plan B for PANS.</em>
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#d9e2e1', margin: '0 0 8px' }}>
            PANS has a protocol. When it works, it&apos;s a miracle.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#efe6e3', margin: '0 0 22px' }}>
            It cured my daughter. It did nothing for my son.
          </p>
          <p className="serif" style={{ fontSize: 'clamp(21px,3vw,28px)', fontStyle: 'italic', color: 'var(--teal-light)', margin: 0 }}>
            Plan B for PANS is for the second group.
          </p>
        </div>
      </section>



      {/* BUCKET — the problem */}
      <BucketSection />

      {/* TRY MINTA — tangible interaction moment before the problem */}
      <section
        aria-label="Try Minta"
        style={{
          padding: 'clamp(72px, 10vw, 120px) 24px',
          background: 'var(--cream-light)',
          borderBottom: '1px solid var(--rule)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="pb-container reveal"
          style={{
            maxWidth: 900,
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <p
            className="eyebrow"
            style={{ color: 'var(--teal)', fontWeight: 600, marginBottom: 22 }}
          >
            Try Minta &middot; Free sample &middot; No sign-up
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 300,
              letterSpacing: '-0.022em',
              lineHeight: 1.05,
              margin: '0 0 24px',
              color: 'var(--ink)',
            }}
          >
            Ask Minta{' '}
            <em style={{ color: 'var(--teal)', fontStyle: 'italic', fontWeight: 400 }}>
              anything.
            </em>
          </h2>
          <p
            style={{
              fontSize: 'clamp(17px, 1.9vw, 20px)',
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 680,
              margin: '0 auto 44px',
            }}
          >
            A question about your kid. A modality you keep hearing about. A symptom
            that isn&rsquo;t in any textbook. Type it in your own words &mdash; Minta
            will give you a straight, plain-English read. A taste of the conversation
            that comes with every Synthesis.
          </p>


          <a
            href="https://app.planbforpans.com/try"
            rel="noopener"
            className="cta-teal"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Ask Minta now &rarr;
          </a>

          <p
            style={{
              marginTop: 26,
              fontSize: 12,
              color: 'var(--sand-dark)',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            Ask as many questions as you need. No data saved. No sign-up. Just a real read.
          </p>
          <p style={{ marginTop: 10, fontSize: 14 }}>
            <a href="/minta" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: 4 }}>Who is Minta? &rarr;</a>
          </p>
        </div>
      </section>




      {/* Unsolicited family testimonials (anonymized) */}
      {/* PARENT VOICES — Oct 13 2026. Rachel: "pull up all the quotes from my
          email and use them all… also from reviews." Verbatim; see voices.ts. */}
      <section className="voices reveal">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 14 }}>In parents&apos; words</p>
        <div className="voices-feature">
          {[VOICES[0], VOICES[1], VOICES[3]].map((v) => (
            <figure key={v.quote}><blockquote>&ldquo;{v.quote}&rdquo;</blockquote><figcaption>{v.who}</figcaption></figure>
          ))}
        </div>
        {[0].map((row) => (
          <div key={row} className="voices-row">
            <div className={`voices-run ${row ? 'rev' : ''}`}>
              {[0, 1].map((k) => (
                <Fragment key={k}>
                  {/* k=1 is the seamless-loop copy — hidden from AT and crawlers */}
                  {VOICES.filter((_, i) => ![0, 1, 3].includes(i)).map((v) => (
                    <figure key={v.quote + k} className="voice" aria-hidden={k === 1 || undefined} data-dup={k === 1 ? '' : undefined}><blockquote>&ldquo;{v.quote}&rdquo;</blockquote><figcaption>{v.who}</figcaption></figure>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </section>


      {/* PRIVACY PROMISE — three lines */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 28, textAlign: 'center' }}
          >
            Our promise on your kid&apos;s data
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                k: 'Yours, always',
                v: "Your kid's intake, logs, and conversations are your data. We don't sell it. We don't share it with advertisers, insurance, or schools.",
              },
              {
                k: 'Deleted on request',
                v: 'One click and everything your family put into Plan B for PANS is gone — from the tracker, the chat, the aggregate library. No questions asked.',
              },
              {
                k: 'Never shared without consent',
                v: "Aggregate patterns (de-identified) help the next family's read — but only if you opt in. No consent, no contribution. Default is private.",
              },
            ].map((c) => (
              <div
                key={c.k}
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--teal)',
                    fontStyle: 'italic',
                    marginBottom: 10,
                  }}
                >
                  {c.k}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'var(--ink-soft)',
                    fontWeight: 300,
                  }}
                >
                  {c.v}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'var(--sand-dark)',
              textAlign: 'center',
              marginTop: 28,
              fontStyle: 'italic',
            }}
          >
            Read the full{' '}
            <a
              href="/privacy"
              style={{ color: 'var(--teal)', textDecoration: 'underline' }}
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* EMAIL CAPTURE — stay in the loop */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Stay in the loop
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 42px)',
              fontWeight: 300,
              letterSpacing: '-0.018em',
              lineHeight: 1.1,
              marginBottom: 20,
              color: 'var(--ink)',
            }}
          >
            Not ready yet? <em style={{ color: 'var(--teal)' }}>Stay in touch.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              marginBottom: 28,
              maxWidth: 520,
              margin: '0 auto 28px',
            }}
          >
            A monthly note on what we&apos;re learning across families, and what&apos;s emerging
            in PANS care. No spam. One-click unsubscribe.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* VOLUNTEER (Rachel, 2026-10-21: "share it on the website") */}
      <section style={{ padding: '72px 24px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            We need help
          </p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(28px, 4.4vw, 42px)', fontWeight: 300, letterSpacing: '-0.018em', lineHeight: 1.1, marginBottom: 18, color: 'var(--ink)' }}
          >
            Volunteer with <em style={{ color: 'var(--teal)' }}>Plan B for PANS.</em>
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 580, margin: '0 auto 26px' }}>
            We&apos;re a very small nonprofit doing big work. Grants, software, design, outreach, research,
            clinical review, supporting other parents: tell us what you&apos;re good at and how much time you
            have. A few hours a month makes a real difference.
          </p>
          <a href="https://app.planbforpans.com/volunteer" rel="noopener" className="cta-teal">
            Apply to volunteer
          </a>
        </div>
      </section>

    </main>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    const subject = encodeURIComponent('Subscribe to Plan B for PANS updates')
    const body = encodeURIComponent(`Please add me to the Plan B for PANS mailing list: ${email.trim()}`)
    window.location.href = `mailto:rachel@planbforpans.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }
  if (submitted) {
    return (
      <p
        className="serif"
        style={{
          fontSize: 18,
          fontStyle: 'italic',
          color: 'var(--teal)',
          fontWeight: 400,
        }}
      >
        Your email client just opened. Send that email and you&apos;re on the list.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 10,
        maxWidth: 440,
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          flex: '1 1 220px',
          padding: '14px 16px',
          fontSize: 15,
          border: '1px solid var(--sand)',
          borderRadius: 4,
          background: 'var(--paper)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-inter)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        className="cta-teal"
        style={{ border: 'none', cursor: 'pointer', flexShrink: 0 }}
      >
        Subscribe →
      </button>
    </form>
  )
}

function InstallCard({ device, steps }: { device: string; steps: React.ReactNode[] }) {
  return (
    <div
      className="card-hover"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--sand)',
        borderRadius: 4,
        padding: 28,
      }}
    >
      <p className="eyebrow" style={{ marginBottom: 14 }}>
        {device}
      </p>
      <ol
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 15,
          color: 'var(--ink)',
          lineHeight: 1.9,
          paddingLeft: 22,
          margin: 0,
          fontWeight: 300,
        }}
      >
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
