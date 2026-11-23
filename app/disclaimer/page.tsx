// Medical & Informational Disclaimer — the most important legal page for a
// health service. Renders the DISCLAIMER-DRAFT faithfully as branded JSX.
// NOTE: not yet attorney-reviewed; banner says so honestly.

export const metadata = {
  title: 'Medical & Informational Disclaimer · Plan B for PANS',
  description:
    'Plan B for PANS is information and education only — not medical advice, not a diagnosis, not a substitute for your child’s licensed healthcare provider. Always consult your physician.',
  robots: { index: true, follow: true },
}

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'
const muted = '#7C8585'
const rule = '#d4cbb6'

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant)',
  fontWeight: 400,
  fontSize: 'clamp(24px, 3.4vw, 32px)',
  color: ink,
  letterSpacing: '-0.01em',
  margin: '48px 0 16px',
}
const p: React.CSSProperties = { fontSize: 16, lineHeight: 1.85, color: soft, margin: '0 0 16px', fontWeight: 300 }
const strong: React.CSSProperties = { color: ink, fontWeight: 600 }
const li: React.CSSProperties = { fontSize: 16, lineHeight: 1.8, color: soft, margin: '0 0 10px', fontWeight: 300 }

export default function DisclaimerPage() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(56px, 9vw, 104px) 24px 0' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.36em', textTransform: 'uppercase', color: muted, marginBottom: 16, fontWeight: 500 }}>
          Legal · Medical
        </p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(38px, 7vw, 62px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.02, margin: '0 0 18px' }}>
          Medical &amp; Informational Disclaimer
        </h1>
        <p style={{ fontSize: 13, color: muted, marginBottom: 24, fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.02em' }}>
          Last updated: June 27, 2026
        </p>

        <FinalizingBanner />

        <div style={{ marginTop: 36, paddingBottom: 20, borderBottom: `1px solid ${rule}` }}>
          <p style={{ ...p, marginBottom: 6 }}>
            <span style={strong}>Plan B for PANS</span> (&ldquo;Plan B,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) — a non-profit organization.
          </p>
          <p style={{ ...p, margin: 0 }}>
            This Disclaimer is incorporated by reference into, and forms a part of, the Plan B{' '}
            <a href="/terms" style={{ color: teal }}>Terms of Service</a>. Please read it carefully. By using
            Plan B — including the free Field Guide, the map, the daily Tracker, the Minta AI assistant, the
            Synthesis, the Direction, or any other feature — you acknowledge and agree to everything below.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 120px' }}>
        <h2 style={h2}>1 · Plan B is information and education — not medical advice</h2>
        <p style={p}>
          Plan B is an educational and organizational tool for parents and guardians of children with PANS/PANDAS
          and related conditions. Everything Plan B provides — the Field Guide, the map, the Tracker, Minta, the
          Synthesis, and the Direction — is <span style={strong}>information and education only.</span>
        </p>
        <p style={p}>
          <span style={strong}>Plan B does not provide medical advice.</span> Nothing on or from Plan B is a
          diagnosis, a treatment, a prescription, a clinical recommendation, or a medical opinion about your child.
          Plan B is <span style={strong}>not a substitute for professional medical care, diagnosis, or treatment</span>{' '}
          from a qualified, licensed healthcare provider.
        </p>
        <p style={p}>
          <span style={strong}>Always seek the advice of your child&apos;s own licensed physician or other qualified
          healthcare provider</span> with any questions you have about your child&apos;s health, symptoms,
          medications, supplements, or any medical condition. Never disregard professional medical advice, or delay
          seeking it, because of something you read, saw, or received from Plan B.
        </p>

        <h2 style={h2}>2 · No practitioner–patient relationship</h2>
        <p style={p}>
          Using Plan B <span style={strong}>does not create a doctor–patient, practitioner–patient, or any other
          professional healthcare relationship</span> between you (or your child) and Plan B, its staff,
          contractors, volunteers, or any AI system it operates. <span style={strong}>Plan B does not practice
          medicine.</span> Plan B does not diagnose conditions, prescribe or recommend medications or supplements,
          order or interpret tests for clinical decision-making, or direct, manage, or supervise your child&apos;s
          care.
        </p>

        <h2 style={h2}>3 · What the Synthesis and Minta actually do</h2>
        <p style={p}>
          The <span style={strong}>Synthesis</span> is an integration and organization of{' '}
          <span style={strong}>your family&apos;s own existing records and the information you provide.</span> It is
          designed to help you <span style={strong}>understand and organize</span> your child&apos;s records and to{' '}
          <span style={strong}>prepare better questions and options to discuss with your own licensed providers.</span>{' '}
          It is framed as <span style={strong}>questions and options</span>, not instructions. It does not tell you
          what to do.
        </p>
        <p style={p}>
          <span style={strong}>Minta</span> is an artificial intelligence assistant. Minta helps you organize
          information, understand terminology, and think through questions to bring to your providers. Minta is{' '}
          <span style={strong}>not a medical professional</span>, is <span style={strong}>not a licensed
          clinician</span>, and does not provide medical advice.
        </p>
        <p style={p}>
          For both the Synthesis and Minta: <span style={strong}>all medical decisions are yours, made together
          with your child&apos;s own licensed clinicians.</span> Plan B surfaces information, context, and
          questions — your licensed providers make the clinical judgments.
        </p>

        <h2 style={h2}>4 · AI can be wrong — verify everything</h2>
        <p style={p}>
          Minta and the Synthesis are generated using artificial intelligence (including third-party AI systems
          such as the Claude API from Anthropic). <span style={strong}>AI systems can be inaccurate, incomplete,
          outdated, or simply wrong.</span> They can misread a record, miss something important, or state something
          with confidence that is not correct.
        </p>
        <p style={p}>
          <span style={strong}>Do not rely on any AI-generated output as fact or as medical guidance.</span>{' '}
          Independently verify everything with your child&apos;s licensed healthcare providers before acting on it.
        </p>

        <h2 style={h2}>5 · Never start, stop, or change treatment based on Plan B</h2>
        <p style={p}>
          <span style={strong}>Do not start, stop, increase, decrease, or otherwise change any medication,
          supplement, diet, therapy, or treatment based on anything from Plan B</span> — including the Synthesis,
          the Direction, Minta, the Tracker, or the Field Guide — without first consulting your child&apos;s own
          licensed healthcare provider.
        </p>
        <p style={p}>
          Treatment decisions for a child with a complex chronic illness carry real risk. Sequencing, dosing, drug
          and supplement interactions, and individual tolerance all require professional clinical judgment that
          Plan B cannot and does not provide.
        </p>

        <h2 style={h2}>6 · Not for emergencies</h2>
        <p style={p}>
          <span style={strong}>Plan B is not for medical emergencies.</span> Minta and Plan B&apos;s other features
          are not monitored for emergencies and cannot help in a crisis.
        </p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}>
            <span style={strong}>If you or your child are experiencing a medical emergency, call 911</span> (or your
            local emergency number) or go to the nearest emergency room immediately.
          </li>
          <li style={li}>
            <span style={strong}>If you or your child are experiencing a mental-health crisis, thoughts of
            self-harm, or suicidality, call or text 988</span> (the Suicide &amp; Crisis Lifeline in the U.S.) or go
            to the nearest emergency room.
          </li>
        </ul>
        <p style={p}>Do not use Plan B in place of emergency services.</p>

        <h2 style={h2}>7 · No guarantee of outcomes</h2>
        <p style={p}>
          Plan B makes <span style={strong}>no promise, guarantee, or warranty</span> about any health outcome,
          improvement, result, diagnosis, or benefit for any child. Every child is different. PANS/PANDAS and
          related conditions are complex, individual, and not fully understood by medicine. Information that is
          relevant to one family may not apply to yours.
        </p>
        <p style={p}>
          Any stories, examples, testimonials, or &ldquo;what&apos;s worked&rdquo; content reflect individual
          experiences only, are <span style={strong}>not typical or expected results</span>, and are{' '}
          <span style={strong}>not a prediction or guarantee</span> of what will happen for your child.
        </p>

        <h2 style={h2}>8 · Educational frameworks and third-party information</h2>
        <p style={p}>
          Plan B may reference clinical frameworks, research, practitioners, protocols, products, labs, and other
          third-party information for <span style={strong}>educational context.</span> A reference is{' '}
          <span style={strong}>not an endorsement</span>, not a recommendation that you use it, and not a statement
          that it is safe or effective for your child. Plan B is not responsible for third-party information,
          products, or services. Discuss anything you find here with your own licensed providers.
        </p>

        <h2 style={h2}>9 · Your responsibility</h2>
        <p style={p}>
          You are responsible for the decisions you make for your child. By using Plan B you accept that Plan B is a
          tool to help you <span style={strong}>organize, understand, and ask better questions</span> — and that
          the responsibility for your child&apos;s care rests with you and your child&apos;s licensed healthcare
          providers.
        </p>

        <Closing />
      </section>
    </main>
  )
}

function FinalizingBanner() {
  return (
    <div
      style={{
        background: 'var(--cream-soft)',
        border: `1px solid ${rule}`,
        borderLeft: '3px solid var(--teal)',
        borderRadius: 6,
        padding: '16px 20px',
        fontSize: 14,
        lineHeight: 1.7,
        color: '#505858',
        fontWeight: 300,
      }}
    >
      <span style={{ color: 'var(--teal)', fontWeight: 600 }}>This is our current policy in plain language.</span>{' '}
      It is being finalized with legal counsel; if anything changes materially we&apos;ll note it here.
    </div>
  )
}

function Closing() {
  return (
    <p style={{ marginTop: 56, paddingTop: 28, borderTop: `1px solid ${rule}`, fontSize: 14, lineHeight: 1.8, fontStyle: 'italic', color: muted, fontWeight: 300 }}>
      Questions about this Disclaimer? Email{' '}
      <a href="mailto:rachel@planbforpans.com" style={{ color: teal, fontStyle: 'normal' }}>rachel@planbforpans.com</a>. See
      also our <a href="/terms" style={{ color: teal, fontStyle: 'normal' }}>Terms of Service</a> and{' '}
      <a href="/privacy" style={{ color: teal, fontStyle: 'normal' }}>Privacy Policy</a>.
    </p>
  )
}
