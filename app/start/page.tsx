import type { Metadata } from 'next'
import CaseReviewVoices from '../_components/CaseReviewVoices'

// REWRITTEN 2 Oct 2026. The old /start taught people about PANS protocols —
// antibiotics, panels, the Field Guide — and never once said what Plan B does
// or asked anyone to sign up. Rachel: "It says start here but when people go
// here they know nothing about what Plan B for PANS does."
//
// The actual offer, in her words: a free synthesis to help you understand your
// child's drivers. Upload labs, Minta reads everything, you get back the drivers,
// a plan, and a comprehensive list of bloodwork to run. Run it, upload the
// results, get a suggested plan. If the AI missed something, or you want a
// person, book a Case Review — and she only has time for a handful a week.

export const metadata: Metadata = {
  title: 'Start Here — Plan B for PANS',
  description:
    'Upload your child’s labs and get a free written read of what may be driving them, plus the exact bloodwork to run next. Built by a mother who got her own three children well.',
}

const ink = 'var(--ink)'
const teal = 'var(--teal)'
const soft = 'var(--sand-dark)'
const sand = 'var(--sand)'
const APP = 'https://app.planbforpans.com'

const STEPS = [
  {
    title: 'Upload everything you have',
    body: 'Every lab, every doctor’s note, every discharge summary — including the old ones, and especially the results you were told were normal. Photograph paper records with your phone; blurry is fine. Don’t organise or retype anything. No limit, no charge.',
  },
  {
    title: 'Tell us her story',
    body: 'When things changed, what she was like before, what illnesses came first, what you’ve already tried. This is what makes the labs mean something — numbers alone don’t tell us what happened to your child.',
  },
  {
    title: 'Get your synthesis — free',
    body: 'Minta, our AI, reads all of it together and writes it up: what her own results actually show, the working theory of what’s driving her, and a comprehensive list of the bloodwork and testing still worth running — each one with its insurance code, ready to hand to a doctor. Rachel reads every number before it reaches you.',
  },
  {
    title: 'Put it on your phone — this takes one minute',
    body: 'Open app.planbforpans.com in your phone’s browser. On iPhone: tap Share, then “Add to Home Screen.” On Android: tap the menu, then “Install app.” Minta and the daily tracker are now an icon on your home screen, like any other app. This matters more than it sounds — the families who get the most out of this are the ones who can open it in ten seconds at 2am, not the ones who have to find a laptop.',
  },
  {
    title: 'Run the tests, upload the results',
    body: 'As results come back, you upload them and the picture sharpens into a suggested plan — what to address, and in what order.',
  },
  {
    title: 'Then track daily, and ask Minta daily',
    body: 'This is the part that helps find the drivers, and it is the part people skip. Score your child every day — two minutes — and ask Minta whenever something changes. She has read your child’s whole record, so she answers in that context. Over weeks the pattern surfaces: what moves together, what shifts after an illness, what got worse three weeks after a new supplement. Nobody can hold that in their head. This is how you find it, and it costs nothing.',
  },
]

export default function StartHere() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      {/* What this actually is */}
      <section style={{ padding: 'clamp(56px,9vw,104px) 24px clamp(28px,5vw,44px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', margin: '0 0 20px' }}>PLAN B FOR PANS &middot; START HERE</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px,6.4vw,58px)', lineHeight: 1.0, letterSpacing: '-0.026em', margin: '0 0 22px' }}>
            Upload your child’s labs.<br />
            See <em style={{ color: teal, fontStyle: 'italic' }}>what may be driving her.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: soft, maxWidth: 620, margin: '0 auto 14px' }}>
            Plan B for PANS is a free non-profit. You put your child’s whole record in one place, and you get back
            a written read of what it shows — the likely drivers, and the exact bloodwork to run next, coded
            so any doctor can order it.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: soft, maxWidth: 620, margin: '0 auto 26px' }}>
            It costs nothing. It is the main thing we do.
          </p>
          <a href={`${APP}/signup`} rel="noopener" style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 17, fontWeight: 700, padding: '16px 38px', borderRadius: 2, textDecoration: 'none' }}>
            Start your free synthesis →
          </a>
        </div>
      </section>

      {/* The four steps */}
      <section style={{ padding: 'clamp(20px,4vw,34px) 24px clamp(40px,7vw,72px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {STEPS.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', gap: 'clamp(16px,3vw,34px)', alignItems: 'flex-start', borderTop: `1px solid ${sand}`, padding: 'clamp(20px,3.4vw,28px) 0' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', lineHeight: 1.9, flexShrink: 0, width: 28 }}>{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(23px,3.2vw,30px)', letterSpacing: '-0.02em', color: ink, margin: '0 0 8px', lineHeight: 1.08 }}>{s.title}</span>
                <span style={{ display: 'block', fontSize: 15.5, color: soft, lineHeight: 1.75, maxWidth: 600 }}>{s.body}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* When the AI isn't enough — Rachel */}
      <section style={{ background: teal, color: '#FFFFFF', padding: 'clamp(54px,8vw,92px) 24px', marginTop: 'clamp(34px,5vw,56px)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#9fc4c0', margin: '0 0 16px' }}>&sect; IF THE AI MISSED SOMETHING</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px,4.8vw,46px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Then you talk to Rachel.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#e6f0ee', margin: '0 0 18px', fontStyle: 'italic' }}>
            For when you need someone to hold your hand through the gates.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#e6f0ee', margin: '0 0 16px' }}>
            Her own three children have PANS. The standard protocol cured one of them outright — Advil and
            Augmentin, never came back. It did nothing at all for her son. So she spent years learning
            everything the guidelines don’t cover, and got him well too.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#e6f0ee', margin: '0 0 16px' }}>
            She is not a doctor. She has been to all of them, and built her own way out — and then built
            Minta, so she knows the whole thing inside and out.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#e6f0ee', margin: '0 0 16px' }}>
            In a Case Review she goes through your child’s entire record herself, birth to now, with a
            fine-toothed comb. She built the system behind every Synthesis, so she catches any
            inconsistency and sets it right. Together you work out the triggers and the order of
            operations: what to do first, what can wait, and what could make things worse if done too
            early. You leave with a complete list of the bloodwork and testing to run, coded for
            insurance. When the results come in, you get the plan.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#FFFFFF', margin: '0 0 24px', fontWeight: 600 }}>
            She can only do a handful a week.
          </p>
          <a href="/packages" style={{ display: 'inline-block', background: '#FFFFFF', color: teal, fontSize: 16, fontWeight: 700, padding: '14px 32px', borderRadius: 2, textDecoration: 'none' }}>
            See what a Case Review is →
          </a>
        </div>
      </section>

      {/* Close */}
      <section style={{ padding: '0 24px clamp(64px,10vw,110px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(22px,3.8vw,32px)', color: ink, lineHeight: 1.3, margin: '0 0 24px' }}>
            Start with the free synthesis. Most families never need anything else — and if the protocol
            hasn’t got your child all the way better, you are <em style={{ color: teal, fontStyle: 'italic' }}>not stuck.</em>
          </p>
          <a href={`${APP}/signup`} rel="noopener" style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 17, fontWeight: 700, padding: '16px 38px', borderRadius: 2, textDecoration: 'none' }}>
            Upload your child’s labs — free →
          </a>
        </div>
      </section>
      <CaseReviewVoices />
    </main>
  )
}
