'use client'

import { useEffect, useRef, useState, Fragment } from 'react'
import BucketSection from './_components/BucketSection'
import EscalationPath from './_components/EscalationPath'
import MethodSection from './_components/MethodSection'
import WhyBoth from './_components/WhyBoth'
import RegularAIvsMinta from './_components/RegularAIvsMinta'
import { FamilyStoriesTeaser } from './_components/FamilyStories'
import Testimonials from './_components/Testimonials'

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
      {/* HERO — editorial split */}
      <section
        className="graph-paper"
        style={{
          minHeight: '94vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -220,
            right: -200,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="bloom-float-alt"
          style={{
            position: 'absolute',
            bottom: -240,
            left: -220,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,203,182,0.45) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1240,
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left — text */}
          <div>
            <p
              className="rise delay-1"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
                marginBottom: 26,
              }}
            >
              Plan B for PANS
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(44px, 7.4vw, 86px)',
                fontWeight: 300,
                letterSpacing: '-0.026em',
                lineHeight: 1.02,
                marginBottom: 16,
                color: 'var(--ink)',
              }}
            >
              <span className="word" style={{ animationDelay: '0.16s' }}>We&apos;ll figure out what&apos;s</span>{' '}
              <span
                className="word"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.24s',
                }}
              >
                actually wrong
              </span>{' '}
              <span className="word" style={{ animationDelay: '0.32s' }}>with your child</span>{' '}
              <span className="word" style={{ animationDelay: '0.4s' }}>— and give you the</span>{' '}
              <span
                className="word"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.48s',
                }}
              >
                roadmap
              </span>{' '}
              <span className="word" style={{ animationDelay: '0.56s' }}>to get them better.</span>
            </h1>

            <p
              className="rise delay-3"
              style={{
                fontSize: 19,
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 600,
                marginTop: 28,
                marginBottom: 20,
              }}
            >
              Share your child&apos;s labs and history. A{' '}
              <em style={{ color: 'var(--ink)', fontStyle: 'normal', fontWeight: 600 }}>
                real person
              </em>
              , working with the most advanced AI there is, reads every piece together — the way a
              brilliant integrative doctor would if they had unlimited time — and hands you one clear
              picture:{' '}
              <em style={{ color: 'var(--ink)', fontStyle: 'normal', fontWeight: 600 }}>
                what&apos;s driving this, why nothing has worked yet, what to ask each doctor, and
                exactly what to do next.
              </em>{' '}
              <em style={{ color: 'var(--teal)', fontStyle: 'normal', fontWeight: 600 }}>
                It&apos;s free.
              </em>
            </p>
            <p
              className="rise delay-3"
              style={{
                fontSize: 14,
                color: 'var(--sand-dark)',
                lineHeight: 1.7,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              Trained on PANS <span style={{ opacity: 0.45, margin: '0 8px' }}>·</span> Non-profit{' '}
              <span style={{ opacity: 0.45, margin: '0 8px' }}>·</span> Built by a family who&apos;s lived it
            </p>
            <p
              className="rise delay-3 serif"
              style={{
                fontSize: 'clamp(15px, 1.55vw, 17px)',
                color: 'var(--ink)',
                lineHeight: 1.55,
                fontStyle: 'italic',
                fontWeight: 400,
                maxWidth: 580,
                marginBottom: 40,
                borderLeft: '2px solid var(--teal)',
                paddingLeft: 16,
              }}
            >
              Minta is still learning. Today she offers thoughtful suggestions shaped to your
              kid. Soon — as every family who joins adds their story —{' '}
              <span style={{ color: 'var(--teal)' }}>
                a real protocol emerges for every child.
              </span>
            </p>

            <div
              className="rise delay-4"
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://app.planbforpans.com/signup"
                rel="noopener"
                className="cta-teal"
                style={{ textDecoration: 'none' }}
              >
                Start your free Synthesis →
              </a>
              <a
                href="https://app.planbforpans.com/try"
                rel="noopener"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  textDecoration: 'none',
                  background: 'transparent',
                }}
              >
                Try Plan B — ask a question →
              </a>
            </div>

            <p
              className="fade delay-6"
              style={{
                marginTop: 56,
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
              }}
            >
              ↓ &nbsp; What Plan B is
            </p>
          </div>

          {/* Right — silhouette as clinical figure */}
          <div
            className="fade delay-2 hero-portrait"
            style={{
              position: 'relative',
              paddingLeft: 24,
            }}
          >
            {/* Teal offset panel behind the image */}
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                bottom: -32,
                left: 52,
                background: 'var(--teal)',
                zIndex: 0,
              }}
            />
            {/* Vertical masthead strip */}
            <p
              className="mono"
              style={{
                position: 'absolute',
                top: 32,
                left: 2,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                zIndex: 2,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              FIG. 01 &middot; Subject P-0001 &middot; Plan B for PANS
            </p>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  position: 'relative',
                  background: 'var(--cream)',
                  border: '1px solid var(--ink)',
                  overflow: 'hidden',
                }}
              >
                {/* Light graph-paper inside the image frame */}
                <div
                  className="graph-paper"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.55,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img
                    src="/kid-silhouette.png"
                    alt="Clinical silhouette — representative subject, Plan B for PANS"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      mixBlendMode: 'multiply',
                      padding: '28px 40px 0',
                    }}
                  />
                </div>

                {/* Acute indicator, top-left */}
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    zIndex: 3,
                  }}
                >
                  <span className="pulse-dot" />
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: '#a02020',
                      fontWeight: 700,
                    }}
                  >
                    Acute · Ongoing
                  </span>
                </div>


                {/* Symptoms dispersed around the head — annotated-diagram style */}
                {[
                  { top: '16%', left: '50%', text: 'OCD' },
                  { top: '26%', left: '42%', text: 'ARFID' },
                  { top: '38%', left: '52%', text: 'Agoraphobia' },
                ].map((pin) => (
                  <div
                    key={pin.text}
                    style={{
                      position: 'absolute',
                      top: pin.top,
                      left: pin.left,
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      pointerEvents: 'none',
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'var(--teal)',
                        boxShadow: '0 0 0 3px rgba(31,107,107,0.3)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--cream)',
                        fontWeight: 600,
                        lineHeight: 1,
                        textShadow: '0 1px 3px rgba(0,0,0,0.55)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {pin.text}
                    </span>
                  </div>
                ))}

                {/* Caption — Rachel's voice */}
                <div
                  style={{
                    background: 'var(--cream)',
                    borderTop: '1px solid var(--ink)',
                    padding: '22px 24px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(17px, 1.95vw, 21px)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.45,
                      marginBottom: 12,
                    }}
                  >
                    &ldquo;My son was eight when he told me he wanted to die. The doctors
                    didn&apos;t have an answer. Neither did I. I spent two years at 2am —
                    alone, researching every modality anyone said had helped — and then
                    piecing it together across a dozen practices none of which talked to each
                    other. Plan B is what I wish I&apos;d had.&rdquo;
                  </p>
                  <p
                    className="label-tracked"
                    style={{ color: 'var(--teal)', fontWeight: 600 }}
                  >
                    Rachel Johnson · Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PLAN B EXISTS — the mission, right after the hero */}
      <section
        style={{
          padding: 'clamp(64px, 9vw, 100px) 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Why Plan B exists
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(30px, 4.6vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            Your child&rsquo;s doctor isn&rsquo;t ordering the right labs &mdash; and it&rsquo;s usually{' '}
            <em style={{ color: 'var(--teal)' }}>not their fault</em>.
          </h2>
          <div
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.8,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
            }}
          >
            <p style={{ margin: '0 0 18px' }}>
              PANS/PANDAS falls between specialties. Neurology, immunology, infectious disease, and
              psychiatry each see a sliver; none owns the whole picture. It&rsquo;s barely taught,
              it&rsquo;s not in the guidelines, and it doesn&rsquo;t fit a 15-minute visit.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              So the OCD, the rage, the tics, the regression get sent to behavioral health &mdash; and
              the immune, infectious, and metabolic drivers underneath never get tested.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
                Families spend years being dismissed.
              </strong>
            </p>
            <p style={{ margin: '0 0 18px' }}>
              Plan B holds the whole picture no single specialist has time to hold. We assemble the
              workup that should have been done &mdash; every test coded and insurance-ready &mdash;
              put an ordering clinician behind it so it actually happens, and read every result
              ourselves. Then we connect you to someone who&rsquo;ll treat.
            </p>
            <p style={{ margin: 0, fontSize: 19, color: 'var(--ink)', fontWeight: 400 }}>
              That&rsquo;s the gap. That&rsquo;s why we&rsquo;re here.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — your path to a roadmap (near the top, by design) */}
      <section
        style={{
          padding: 'clamp(64px, 9vw, 100px) 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 44, maxWidth: 820 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              How it works
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.4vw, 58px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.02,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Your path to a{' '}
              <em style={{ color: 'var(--teal)' }}>roadmap</em>.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 18,
                maxWidth: 680,
              }}
            >
              Three steps. The first two are on us — what&apos;s wrong, and the plan. Then you&apos;re
              never alone working it.
            </p>
          </div>

          <div
            className="how-start-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: '01',
                t: 'Share what you have',
                b: 'Your child&apos;s labs and history. <em>No labs yet? The Synthesis tells you exactly what to run.</em>',
              },
              {
                n: '02',
                t: 'Get your Synthesis',
                b: 'One integrated read of everything — what&apos;s wrong, why, and the roadmap: what to ask, what to test, in what order.',
              },
              {
                n: '03',
                t: 'Work the plan — never alone',
                b: 'Minta (your AI guide) and a 60-second daily tracker walk every step and adapt as your child changes.',
              },
            ].map((s, i, arr) => (
              <div
                key={s.n}
                style={{
                  padding: '32px 28px',
                  borderRight: i < arr.length - 1 ? '1px solid var(--sand)' : 'none',
                  position: 'relative',
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 52,
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: 'var(--teal)',
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {s.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {s.t}
                </p>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: 'var(--ink-soft)',
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: s.b }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <a
              href="https://app.planbforpans.com/signup"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Start your free Synthesis →
            </a>
          </div>
        </div>
      </section>

      {/* The escalation path — crisis → functional med → what hasn't been tried */}
      <EscalationPath />

      {/* Why you need both — the bot + the human */}
      <WhyBoth />

      {/* Why not just a chatbot — regular AI vs Minta */}
      <RegularAIvsMinta />

      {/* Where they were → the new angle (Tommy + Daniel, anonymized) */}
      <FamilyStoriesTeaser />

      {/* Unsolicited family testimonials (anonymized) */}
      <Testimonials />

      {/* THESIS — stated plainly */}
      <section
        aria-label="Thesis"
        style={{
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
          padding: '56px 24px',
        }}
      >
        <div
          className="pb-container"
          style={{
            maxWidth: 1080,
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(18px, 4vw, 40px)',
            alignItems: 'start',
          }}
        >
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              paddingTop: 6,
            }}
          >
            Our thesis
          </p>
          <div>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(28px, 4.2vw, 46px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.08,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              A <em style={{ color: 'var(--teal)' }}>path out of the fire</em> —
              built from every modality, every family,{' '}
              <em style={{ color: 'var(--teal)' }}>every hard-won answer.</em>
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 18,
                maxWidth: 760,
              }}
            >
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Today:</strong> a synthesis
              that reads every lab, every modality, and your child&apos;s whole history together —
              and names what&apos;s been missed and what hasn&apos;t been tried.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Tomorrow:</strong> as more
              families join, the patterns sharpen — which modality actually helps, for which child,
              in what order.
            </p>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
                marginTop: 18,
                paddingTop: 14,
                borderTop: '1px solid var(--sand-light)',
              }}
            >
              Built by a mother who&apos;s lived it &middot; We never prescribe &middot; Every number checked against the source
            </p>
          </div>
        </div>
      </section>

      {/* COMPOUNDING PROMISE — it gets better the more of us join */}
      <section
        style={{
          padding: '64px 24px',
          background: 'var(--cream)',
          borderBottom: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 900 }}>
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: 600,
              marginBottom: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span aria-hidden="true">↺</span> Compounding promise
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(26px, 4.2vw, 44px)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            It gets better with every family who joins.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Over time — together — we build the way out.
            </span>
          </p>
        </div>
      </section>

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

          <div style={{ marginBottom: 44 }}>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              For example
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 12,
                maxWidth: 820,
                margin: '0 auto',
              }}
            >
              {[
                'My 9yo has new OCD and food refusal after strep. Where do I start?',
                'What&rsquo;s the difference between PANS and PANDAS?',
                'My kid plateaued on IVIG &mdash; what are we missing?',
                'Is mold the reason nothing else is working?',
              ].map((q, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '11px 18px',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(14px, 1.4vw, 16px)',
                    fontStyle: 'italic',
                    color: 'var(--ink)',
                    background: 'white',
                    border: '1px solid var(--sand)',
                    borderRadius: 999,
                    lineHeight: 1.35,
                    maxWidth: 360,
                  }}
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${q}&rdquo;` }}
                />
              ))}
            </div>
          </div>

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
        </div>
      </section>

      {/* BUCKET — the problem */}
      <BucketSection />

      {/* STAKES — no 911 */}
      <section
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          padding: '80px 24px',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="graph-paper"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        />
        <div
          className="pb-container"
          style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}
        >
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#a02020',
              fontWeight: 700,
              marginBottom: 18,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span className="pulse-dot" />
            The stakes
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 6vw, 64px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
              margin: 0,
              color: 'var(--cream)',
              maxWidth: 880,
            }}
          >
            There&apos;s no 911 for this. When your kid is in crisis, the emergency system has no answer for what&apos;s actually driving it underneath.
          </h2>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontStyle: 'italic',
              color: 'var(--teal-light)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '28px 0 0',
              maxWidth: 780,
            }}
          >
            This is where you go when there&apos;s no other place — for solutions.
          </p>
        </div>
      </section>

      {/* THE ENGINE — one synthesized system */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 48, maxWidth: 900 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 02 · The engine
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(36px, 6vw, 68px)',
                fontWeight: 300,
                letterSpacing: '-0.022em',
                lineHeight: 1,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              One system.
              <br />
              <em style={{ color: 'var(--teal)' }}>Every facet feeds it.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 24,
                maxWidth: 720,
              }}
            >
              Parent forums have suggestions. A doctor sees one slice. Plan B reads every modality,
              every practitioner teaching, and your child&apos;s full history together — and
              synthesizes them into one plan, sequenced for your kid. The more families who join,
              the sharper that synthesis gets for the next child.
            </p>
          </div>

          {/* Engine schematic */}
          <div
            className="engine-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: 'clamp(20px, 4vw, 56px)',
              alignItems: 'stretch',
              marginBottom: 40,
            }}
          >
            {/* Inputs */}
            <div
              style={{
                border: '1px solid var(--ink)',
                padding: '26px 24px',
                position: 'relative',
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  color: 'var(--sand-dark)',
                  fontWeight: 600,
                  marginBottom: 18,
                  textTransform: 'uppercase',
                }}
              >
                Inputs · What feeds it
              </p>
              {[
                'Every modality (standard · functional · fringe)',
                'Every practitioner teaching & published work',
                'Live cohort data from running cohort studies',
                'Your kid\u2019s full intake, onset story, labs',
                'Community questions and corrections',
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '28px 1fr',
                    gap: 10,
                    alignItems: 'baseline',
                    padding: '10px 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--sand-light)',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      color: 'var(--ink)',
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {x}
                  </span>
                </div>
              ))}
            </div>

            {/* Engine center */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 180,
                position: 'relative',
              }}
              aria-hidden="false"
            >
              <div
                className="engine-arrow-in"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: -40,
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 1,
                  background: 'var(--ink)',
                }}
              />
              <div
                className="engine-arrow-in"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 5px)',
                  left: -12,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '8px solid var(--ink)',
                }}
              />
              <div
                style={{
                  background: 'var(--ink)',
                  color: 'var(--cream)',
                  padding: '36px 28px',
                  textAlign: 'center',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="graph-paper"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    pointerEvents: 'none',
                  }}
                />
                <p
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.28em',
                    color: 'var(--teal-light)',
                    fontWeight: 600,
                    marginBottom: 14,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Synthesis engine
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: 'var(--cream)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1,
                    margin: '0 0 8px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Plan B
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Reads it all together.
                </p>
              </div>
              <div
                className="engine-arrow-out"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: -40,
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 1,
                  background: 'var(--ink)',
                }}
              />
              <div
                className="engine-arrow-out"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 5px)',
                  right: -12,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '8px solid var(--ink)',
                }}
              />
            </div>

            {/* Outputs */}
            <div
              style={{
                border: '1px solid var(--ink)',
                padding: '26px 24px',
                position: 'relative',
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  color: 'var(--sand-dark)',
                  fontWeight: 600,
                  marginBottom: 18,
                  textTransform: 'uppercase',
                }}
              >
                Outputs · What it produces
              </p>
              {[
'A synthesis shaped to your kid\u2019s specific profile',
                'What\u2019s been missed \u2014 and what hasn\u2019t been tried yet',
                'Referrals to practitioners whose work fits \u2014 and the questions to bring them',
                '30 days of Minta to troubleshoot the plan',
                'Patterns that sharpen the read for every family after',
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '28px 1fr',
                    gap: 10,
                    alignItems: 'baseline',
                    padding: '10px 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--sand-light)',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      color: 'var(--ink)',
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {x}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback loop callout */}
          <div
            style={{
              borderTop: '1px dashed var(--sand)',
              paddingTop: 24,
              display: 'flex',
              gap: 16,
              alignItems: 'baseline',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.24em',
                color: 'var(--teal)',
                fontWeight: 600,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              ↺ Feedback loop
            </span>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                margin: 0,
                flex: 1,
                minWidth: 280,
              }}
            >
              Your family&apos;s journey feeds back into the library. The 100th family&apos;s
              synthesis benefits from what the first 99 contributed. More families in → sharper
              patterns → faster to answers, for everyone.
            </p>
          </div>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(24px, 3.4vw, 34px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.3,
              fontWeight: 400,
              margin: '48px 0 0',
              maxWidth: 800,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            A real plan, not silence.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Sharpened with every family. Together we get out.
            </span>
          </p>
        </div>
      </section>

      {/* THE CENTER — intake + tracker + troubleshooting */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 44, maxWidth: 920 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 03 · The center
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(38px, 6.2vw, 72px)',
                fontWeight: 300,
                letterSpacing: '-0.024em',
                lineHeight: 0.98,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              The tracker <em style={{ color: 'var(--teal)' }}>is</em> Plan B.
            </h2>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '32px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                maxWidth: 800,
              }}
            >
              {[
                'Answers at 2am, when there’s nowhere else to turn.',
                "The friend who'll help you troubleshoot when you're out of options and can't sleep.",
                'Every modality, held in one place — so you can see your next lane.',
              ].map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '24px 1fr',
                    gap: 14,
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 700,
                    }}
                  >
                    →
                  </span>
                  <span
                    className="serif"
                    style={{
                      fontSize: 'clamp(19px, 2.2vw, 24px)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.4,
                    }}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 36,
                maxWidth: 760,
              }}
            >
              Every answer Plan B gives starts from your kid&apos;s full story — captured in
              intake, extended daily by the tracker. Without that, there&apos;s nothing to
              synthesize. With it, the engine works for your kid specifically, and sharpens
              every time you come back.
            </p>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(15px, 1.55vw, 17px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                fontStyle: 'italic',
                fontWeight: 400,
                marginTop: 22,
                maxWidth: 720,
                borderLeft: '2px solid var(--teal)',
                paddingLeft: 16,
              }}
            >
              Your Synthesis is real today — built by a person, checked against the source. And it
              keeps getting sharper:{' '}
              <span style={{ color: 'var(--teal)' }}>
                with every family who joins, the patterns behind it grow stronger.
              </span>
            </p>
          </div>

          {/* Live view of the tracker — sees it before reads about it */}
          <div
            style={{
              margin: '0 calc(-1 * clamp(12px, 2vw, 24px)) 56px',
            }}
          >
            <MethodSection />
          </div>

          {/* Four blocks — intake → tracker → Minta troubleshoots → sharpens */}
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 0,
              borderTop: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: '01',
                tag: 'Intake',
                title: 'The whole story, captured once.',
                body: "Pregnancy, birth, environment, diet. Every medication ever tried, every supplement, every modality. Every symptom, every flare, every weird behavior that nobody else took seriously. Labs, tests, imaging. The onset story — told in your own words, in conversation with Minta, at your pace. About twenty minutes in one sitting, or broken up across days. It all saves as you go.",
              },
              {
                n: '02',
                tag: 'After intake, the tracker opens',
                title: 'Daily check-ins. Thirty seconds before bed.',
                body: "Once your intake is in, the tracker takes over — from your phone, every day. Tap a mood rating (0&ndash;10). Log any med change, new supplement, dose tweak. Rate each symptom you care about — OCD, rage, sleep, tics, food aversion, anxiety — on the same 0&ndash;10 scale. When a new weird behavior shows up (a tic, a food fear, a rage episode, a 2am wake-up), tag it the moment you see it. Free text for context when you need it: <em>&lsquo;meltdown at 4pm, right after screen time and missed lunch.&rsquo;</em> <br/><br/>Saturday gives you a weekly rollup — bar charts for every symptom, a timeline of every med change, all your flare notes in one place. Patterns you couldn&apos;t see before start to jump out: <em>rage was 8/10 Monday, 3/10 Wednesday — what changed? The binder dose, probably.</em> Six weeks in, the pattern is visible in a way no memory, no folder of doctor notes, no stack of Google tabs could ever hold.",
              },
              {
                n: '03',
                tag: 'Minta reads both',
                title: 'Troubleshoots from the full record, 2am included.',
                body: "Minta already has your intake. Now she has every day you&apos;ve logged. Ask anything — <em>&lsquo;why did we have a bad week?&rsquo;</em>, <em>&lsquo;is this new symptom concerning?&rsquo;</em>, <em>&lsquo;what should we try next?&rsquo;</em> — and she reads the whole record before answering. She runs correlations across meds, symptoms, timing, triggers: <em>&lsquo;Rage spiked the week you raised guanfacine AND started the new binder. Tics ticked up same week — may be rebound. Pause the binder at half-dose for 10 days to isolate which one is the driver.&rsquo;</em> Specific to your kid. Grounded in your data. Not generic advice.",
              },
              {
                n: '04',
                tag: 'It sharpens',
                title: 'We&rsquo;re teaching Minta to spot patterns.',
                body: "Your kid&apos;s data (consent-based, de-identified) joins every other family&apos;s data in the library. As stories come in, Minta is learning which modalities actually work for which symptoms — spotting the patterns no single family can see alone. Every successful story teaches her what to suggest. Every failed one teaches her what not to. Every cohort run adds signal. The read you get today is only as sharp as what the first families contributed. The read the hundredth family gets is sharper still.",
              },
            ].map((s) => (
              <li
                key={s.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(60px, 80px) 1fr',
                  gap: 'clamp(18px, 3vw, 36px)',
                  padding: '32px 0',
                  borderBottom: '1px solid var(--sand)',
                  alignItems: 'baseline',
                }}
              >
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 48,
                      fontWeight: 300,
                      color: 'var(--teal)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {s.n}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: 'var(--sand-dark)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.tag}
                  </p>
                </div>
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 'clamp(22px, 2.8vw, 30px)',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      color: 'var(--ink)',
                      marginBottom: 12,
                    }}
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <p
                    style={{
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </li>
            ))}
          </ol>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '40px 0 0',
              maxWidth: 800,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            Nothing works without your intake. Nothing sharpens without your log.{' '}
            <span style={{ color: 'var(--teal)' }}>This is where the compounding lives.</span>
          </p>

          {/* A day with the tracker — concrete example */}
          <div
            style={{
              marginTop: 48,
              padding: '32px 30px',
              background: '#141414',
              color: 'var(--cream)',
              border: '1px solid var(--ink)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              className="graph-paper"
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--teal-light)',
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                A day with the tracker
              </p>
              <p
                className="serif"
                style={{
                  fontSize: 'clamp(24px, 3.2vw, 32px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: 24,
                  color: 'var(--cream)',
                  maxWidth: 700,
                }}
              >
                Thirty seconds at a time. Six weeks of these and the pattern finally becomes
                visible.
              </p>

              <div style={{ display: 'grid', gap: 8, maxWidth: 640 }}>
                {[
                  { t: '07:12', k: 'Mood', v: '4 / 10 · Woke up anxious', c: '#d4a24a' },
                  { t: '08:30', k: 'Symptom', v: 'New tic — throat clear', c: '#c76a4a' },
                  { t: '12:00', k: 'Food', v: 'Lunch refusal · tagged ARFID', c: '#c76a4a' },
                  { t: '15:10', k: 'Rage', v: '8 / 10 · triggered by screen time', c: '#c76a4a' },
                  { t: '19:00', k: 'Dose', v: 'Binder · 1/2 scoop', c: '#5aa19f' },
                  { t: '22:45', k: 'Note', v: '30s before bed · day logged', c: '#bbb3a2' },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 80px 1fr',
                      gap: 14,
                      alignItems: 'center',
                      padding: '10px 12px',
                      border: '1px solid rgba(246,241,231,0.1)',
                    }}
                  >
                    <span
                      className="mono"
                      style={{ fontSize: 11, color: '#8a8373', letterSpacing: '0.08em' }}
                    >
                      {r.t}
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: r.c,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {r.k}
                    </span>
                    <span style={{ fontSize: 13.5, color: '#eee', lineHeight: 1.4 }}>{r.v}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 26,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(246,241,231,0.15)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 18,
                  alignItems: 'baseline',
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--teal-light)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Saturday →
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: '#d4cbb6',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  Weekly roll-up: rage spiked Mon &amp; Wed — both after binder increases.
                  Food refusals clustered around screen-time days. ARFID tagged 5x this week
                  (up from 2 last week). A pattern you couldn&apos;t see before becomes
                  visible in a way no memory could hold.
                </p>
              </div>
            </div>
          </div>

          {/* The usage loop */}
          <div
            style={{
              marginTop: 48,
              padding: '32px 30px',
              background: 'var(--paper)',
              border: '1px solid var(--ink)',
              position: 'relative',
            }}
          >
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                fontWeight: 700,
                marginBottom: 18,
              }}
            >
              Use · Share · Use again
            </p>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 28px)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
                color: 'var(--ink)',
                margin: 0,
                marginBottom: 16,
                maxWidth: 780,
              }}
            >
              The more you log — what&apos;s failing, what&apos;s working — the faster Minta
              sees your kid&apos;s patterns and the path out.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                margin: 0,
                maxWidth: 780,
              }}
            >
              Make this your trusted advisor while you&apos;re waiting six weeks for the next
              intake appointment — or when the $2,000 half-hour specialist consult isn&apos;t an
              option. Your free Synthesis is the path that always is. Every log adds to your
              kid&apos;s picture <em>and</em> the library that helps the next family. Use it.
              Share it. Come back.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <a
              href="https://app.planbforpans.com/intake"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Start your intake →
            </a>
          </div>
        </div>
      </section>

      {/* THE WHY — mechanism questions */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream-light)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1000 }}>
          <div style={{ marginBottom: 36, maxWidth: 860 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 03 · The why
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.6vw, 60px)',
                fontWeight: 300,
                letterSpacing: '-0.022em',
                lineHeight: 1,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Understanding the mechanism — <em style={{ color: 'var(--teal)' }}>so solutions get easier to craft.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 20,
                maxWidth: 720,
              }}
            >
              Plan B isn&apos;t only matching modalities to kids. It&apos;s pursuing the
              questions underneath — which behavior is which driver? Every added family,
              every added cohort, every added data point pushes these questions closer to
              answers.
            </p>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderTop: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: 'Q1',
                q: 'Are these behaviors pathogen-driven?',
                s: 'When sudden OCD, rage, or regression appears — is the brain reacting to a specific infection? Which one, and in which kid?',
              },
              {
                n: 'Q2',
                q: 'Or are they symptoms of an inflamed brain?',
                s: 'Is the driver the pathogen itself, or the inflammation it provoked? Different answers mean different protocols.',
              },
              {
                n: 'Q3',
                q: 'Does strep have a personality? Does mold? Does lyme?',
                s: 'Do specific pathogens produce specific behavioral signatures? Does a kid picking their nose constantly mean parasites? Does a kid saying "I want to die" mean lyme? We&apos;re collecting the data to find out.',
              },
              {
                n: 'Q4',
                q: 'Which combinations load the bucket fastest?',
                s: 'Mold + strep + methylation stall + stress — what order? Which is the bottleneck for which kid?',
              },
              {
                n: 'Q5',
                q: 'Where does each modality actually fit?',
                s: 'Not &ldquo;does it work&rdquo; — where in the sequence does it belong, for which kind of kid?',
              },
            ].map((x) => (
              <li
                key={x.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 18,
                  padding: '26px 0',
                  borderBottom: '1px solid var(--sand)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: 'var(--teal)',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                    textAlign: 'right',
                    textTransform: 'uppercase',
                  }}
                >
                  {x.n}
                </span>
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 'clamp(22px, 2.8vw, 30px)',
                      fontStyle: 'italic',
                      color: 'var(--ink)',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      marginBottom: 10,
                    }}
                  >
                    {x.q}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                    dangerouslySetInnerHTML={{ __html: x.s }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '48px 0 0',
              maxWidth: 820,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            The why is how the solution gets precise.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Every family helps us answer it.
            </span>
          </p>
        </div>
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
                v: 'One click and everything your family put into Plan B is gone — from the tracker, the chat, the aggregate library. No questions asked.',
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

      {/* COMPARISON — why Plan B vs. the alternatives */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 44, maxWidth: 880 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              What makes Plan B different
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.4vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.05,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              You&apos;ve already tried the other places.
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 14,
                minWidth: 720,
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                  {['', 'Facebook groups', 'PANS forums', 'Doctor visits', 'Plan B'].map(
                    (h, i) => (
                      <th
                        key={i}
                        className="mono"
                        style={{
                          padding: '16px 12px',
                          fontSize: 10,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: i === 4 ? 'var(--teal)' : 'var(--sand-dark)',
                          fontWeight: 700,
                          textAlign: i === 0 ? 'left' : 'center',
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ['2am access', '✓', '✓', '—', '✓'],
                  ['Specific to YOUR kid', '—', '—', '✓', '✓'],
                  ['Reads every modality together', '—', '—', '—', '✓'],
                  ['Remembers your kid&apos;s full history', '—', '—', 'partial', '✓'],
                  ['Gets sharper with every family', '—', '—', '—', '✓'],
                  ['Cost', 'free', 'free', '$300–$2,000 per visit', 'free synthesis · pay-as-you-go Minta'],
                  ['Data belongs to', 'Meta', 'forum owner', 'their chart', 'you'],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--sand-light)',
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: '14px 12px',
                          fontSize: j === 0 ? 14 : 13,
                          color:
                            j === 4
                              ? 'var(--teal)'
                              : j === 0
                              ? 'var(--ink)'
                              : 'var(--ink-soft)',
                          fontWeight: j === 0 ? 500 : 400,
                          textAlign: j === 0 ? 'left' : 'center',
                          fontFamily:
                            j > 0 && (cell === '✓' || cell === '—') ? 'var(--font-mono)' : 'inherit',
                        }}
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(20px, 2.6vw, 26px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.4,
              fontWeight: 400,
              margin: '36px 0 0',
              maxWidth: 780,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            Parent forums have suggestions. Doctors see their slice. Plan B is the only place
            that holds <span style={{ color: 'var(--teal)' }}>everything together</span> —
            your kid, every modality, every family&apos;s story.
          </p>
        </div>
      </section>

      {/* VOICES — social proof placeholder */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--cream)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 960 }}>
          <p className="eyebrow" style={{ marginBottom: 24, textAlign: 'center' }}>
            Voices · From the families using Plan B
          </p>
          <div
            style={{
              padding: 'clamp(40px, 6vw, 64px) clamp(28px, 5vw, 56px)',
              textAlign: 'center',
              border: '1px solid var(--sand)',
              borderRadius: 8,
              background: 'var(--paper)',
            }}
          >
            <p
              className="serif"
              style={{
                fontSize: 'clamp(24px, 3.4vw, 34px)',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.38,
                fontWeight: 400,
                maxWidth: 720,
                margin: '0 auto 22px',
              }}
            >
              &ldquo;This is the most comprehensive document I have ever received concerning my
              son&apos;s health and test results. You and Minta are excellent —{' '}
              <span style={{ color: 'var(--teal)' }}>it makes so much sense.</span>&rdquo;
            </p>
            <p className="serial" style={{ color: 'var(--sand-dark)', marginBottom: 18 }}>
              Mother of a teen son · Europe ·{' '}
              <a href="/stories#europe-teen" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>
                read his story
              </a>
            </p>
            <p
              style={{
                fontSize: 14,
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              Using Plan B and want your story here (with consent)?{' '}
              <a
                href="mailto:rachel@planbforpans.com?subject=Plan%20B%20story"
                style={{ color: 'var(--teal)', textDecoration: 'underline' }}
              >
                Email Rachel
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FREE SPOT — waitlist */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 88px) 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>The free spot · Non-profit</p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--ink)',
              margin: '0 0 16px',
            }}
          >
            Can&apos;t afford it?{' '}
            <em style={{ color: 'var(--teal)' }}>One family a week, free.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 620, margin: '0 auto 28px' }}>
            Cost should never be the reason your child doesn&apos;t get this. The waitlist is open and
            public; the finished synthesis is published anonymized, so we all learn together from
            what Minta finds.
          </p>
          <a
            href="/waitlist"
            style={{
              display: 'inline-block',
              padding: '15px 32px',
              background: 'var(--teal)',
              color: 'var(--cream)',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Join the waitlist →
          </a>
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

      {/* INSTALL */}
      <section style={{ padding: '120px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Put Plan B on your phone
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              No app store. <em style={{ color: 'var(--teal)' }}>No download.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              Plan B lives on your home screen like any other app. Updates automatically. Works
              offline for the daily tracker.
            </p>
          </div>

          <div
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              marginBottom: 48,
            }}
          >
            <InstallCard
              device="iPhone · Safari"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Safari</>,
                <>Tap the <strong>Share</strong> button (square with arrow)</>,
                <>Scroll down, tap <strong>Add to Home Screen</strong></>,
                <>Tap <strong>Add</strong></>,
              ]}
            />
            <InstallCard
              device="Android · Chrome"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Chrome</>,
                <>Tap the <strong>⋮</strong> menu (top right)</>,
                <>Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>)</>,
                <>Tap <strong>Install</strong></>,
              ]}
            />
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <a
              href="https://app.planbforpans.com/intake"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Open Plan B →
            </a>
          </div>
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
    const subject = encodeURIComponent('Subscribe to Plan B updates')
    const body = encodeURIComponent(`Please add me to the Plan B mailing list: ${email.trim()}`)
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
