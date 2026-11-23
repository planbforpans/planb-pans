import CaseReviewVoices, { CaseReviewLong } from '../_components/CaseReviewVoices'
// The Case Review — what it IS. Built 28 Oct 2026.
//
// Rachel: "I can't find the case review." She was right, and it predated the
// Ad Grants edits: /case-review was a 404, /case-studies is the cohort
// research, and /packages is a price list. Nowhere on the site said what the
// thing actually is. This page is the explanation; /packages keeps the price.
//
// Constraints this page is written under:
//  - The free path is named FIRST and the paid thing is framed as what you do
//    when the free path stalls (Rachel, 2026-10-07: leading with it "feels
//    predatory").
//  - No outcome promises, no urgency, no scarcity, no cure language.
//  - Not a clinician. Everything is educational and goes to their own doctor.
//  - States where the money goes — Ad Grants requires nonprofits to explain
//    how proceeds support the mission, and /packages does not.

export const metadata = {
  title: 'The Case Review | Plan B for PANS',
  description:
    'What a Case Review is: Rachel reads your child’s whole record — birth to now, every lab, every protocol — and builds a decision tree, a written plan, and a letter your doctor can act on.',
}

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'
const rule = '#E1E5E4'
const cream = '#FAF9F6'

const BOOK = 'https://app.planbforpans.com/book/case-review?source=website-case-review'
const SIGNUP = 'https://app.planbforpans.com/signup'

const STEPS: [string, string][] = [
  ['You send everything', 'Every lab, every discharge summary, every portal screenshot, the protocol someone put your child on two years ago. Photographs of paper are fine. There is no tidy format and you do not need to organise it first.'],
  ['Rachel reads all of it', 'Birth to now, in order, as one story rather than a stack of appointments. What was abnormal, what was trending the wrong way, what was ordered and never resulted, and what has never been run at all.'],
  ['You talk', 'An hour, on the phone. You fill in what no record holds — what the pregnancy was like, what changed and when, what helped for a fortnight and then stopped.'],
  ['You get it in writing', 'Not notes from a call. A document you can hand to somebody.'],
]

const DELIVERABLES: [string, string][] = [
  ['A decision tree', 'It starts from what you actually see in your child, not from a lab value. Each branch names the one test that settles that question — and what changes depending on the answer. So you are not ordering forty tests. You are ordering the next one.'],
  ['A written plan', 'Everything still worth running, each row with its insurance code and the reason it is there, in the order it should happen — and what can go on one blood draw instead of four.'],
  ['A letter for your doctor', 'Written to be handed over or pasted into a portal message. It says what was found, what it may mean, and what is being asked for, in the language a clinician reads.'],
]

export default function Page() {
  return (
    <main style={{ background: cream, color: ink, fontFamily: 'var(--font-body)' }}>
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '86px 24px 10px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: soft, marginBottom: 18 }}>
          When you are stuck
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 7vw, 62px)', lineHeight: 1.08, fontWeight: 500, margin: 0 }}>
          The Case&nbsp;Review
        </h1>
        <p style={{ fontSize: 21, lineHeight: 1.55, marginTop: 26, maxWidth: 640 }}>
          Rachel reads your child&rsquo;s whole record &mdash; birth to now, every lab, every
          protocol, everything you have already tried &mdash; and works out what is still
          unanswered and what to do about it next.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 18, color: soft, maxWidth: 640 }}>
          Most families never need this. <a href={SIGNUP} style={{ color: teal }}>The vault, the
          tracker, Minta and your synthesis are free</a>, and for a lot of people that is
          enough to get moving. This is for when it is not &mdash; when the labs will not
          get ordered, when the plan is not working, or when nobody has ever looked at
          the whole thing at once.
        </p>
      </section>

      <CaseReviewVoices />
      <CaseReviewLong />

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, margin: '0 0 26px' }}>What happens</h2>
        {STEPS.map(([h, b], i) => (
          <div key={h} style={{ display: 'flex', gap: 20, paddingBottom: 26, marginBottom: 26, borderBottom: i < STEPS.length - 1 ? `1px solid ${rule}` : 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: teal, paddingTop: 4, minWidth: 28 }}>{`0${i + 1}`}</div>
            <div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 7px' }}>{h}</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: soft, margin: 0 }}>{b}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{ background: '#FFFFFF', borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, margin: '20px 0 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, margin: '0 0 8px' }}>What you are left holding</h2>
          <p style={{ fontSize: 16, color: soft, margin: '0 0 30px' }}>Three documents. Yours to keep, and to hand to anyone.</p>
          {DELIVERABLES.map(([h, b]) => (
            <div key={h} style={{ marginBottom: 26 }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 7px', color: teal }}>{h}</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: soft, margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, margin: '0 0 20px' }}>What it is not</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: soft }}>
          Rachel is not a doctor. A Case Review is not a diagnosis, not a prescription and
          not a second opinion from a physician. Nothing in it is medical advice. It is a
          careful read of a record and a set of questions worth asking, written so that you
          can take them to your child&rsquo;s own clinicians &mdash; who remain the people who
          decide what is tested and what is treated.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: soft, marginTop: 16 }}>
          It also will not tell you your child will get better. Nobody can tell you that.
          What it can do is make sure the next decision is being made with the whole
          picture in front of you instead of a slice of it.
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '46px 24px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, margin: '0 0 20px' }}>Where the money goes</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: soft }}>
          Plan B for PANS is a 501(c)(3) nonprofit. The Case Review is the only thing we
          charge for, and it is what pays for everything that is free &mdash; the vault, the
          daily tracker, Minta, and the synthesis every family gets without being asked
          for anything. It funds the hours, the lab-reading and the software. Nobody takes
          a dividend.
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '46px 24px 96px' }}>
        <div style={{ border: `1px solid ${rule}`, background: '#FFFFFF', padding: '30px 28px' }}>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: '0 0 18px' }}>
            A Case Review is <strong>$400</strong>, and includes the hour on the phone and the
            three documents. After your Case Review, going over new labs is a <a href="https://calendly.com/rachel-planbforpans/new-meeting" style={{ color: teal }}><strong>Lab Review, $250</strong></a>.{' '}
            <a href="/packages" style={{ color: teal }}>What everything costs</a>.
          </p>
          <a href={BOOK} style={{ display: 'inline-block', padding: '14px 26px', background: teal, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>
            Book a Case Review
          </a>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: soft, margin: '20px 0 0' }}>
            Not sure yet? <a href={SIGNUP} style={{ color: teal }}>Start with the free synthesis</a> &mdash;
            it costs nothing and it is the same record we would read.
          </p>
        </div>
      </section>
    </main>
  )
}
