// Terms of Service. Renders the TERMS-OF-SERVICE-DRAFT faithfully as branded JSX.
// Incorporates the Disclaimer and Privacy Policy by reference.
// NOTE: not yet attorney-reviewed; banner says so honestly.

export const metadata = {
  title: 'Terms of Service · Plan B for PANS',
  description:
    'The Terms of Service for Plan B for PANS — a non-profit, educational and organizational tool for families of children with PANS/PANDAS. Not medical care. The Disclaimer governs all health-related use.',
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
const legal: React.CSSProperties = { ...p, fontSize: 15, color: '#4a4a4a' }
const flag: React.CSSProperties = { color: muted, fontStyle: 'italic' }

export default function TermsPage() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(56px, 9vw, 104px) 24px 0' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.36em', textTransform: 'uppercase', color: muted, marginBottom: 16, fontWeight: 500 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(38px, 7vw, 62px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.02, margin: '0 0 18px' }}>
          Terms of Service
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
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Plan B&apos;s website,
            applications, and services (collectively, the &ldquo;Service&rdquo;). Please read them carefully,{' '}
            <span style={strong}>together with our <a href="/disclaimer" style={{ color: teal }}>Medical &amp;
            Informational Disclaimer</a> and <a href="/privacy" style={{ color: teal }}>Privacy Policy</a>, which
            are incorporated into these Terms by reference.</span>
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 120px' }}>
        <h2 style={h2}>1 · Acceptance of these Terms</h2>
        <p style={p}>
          By accessing or using the Service — including creating an account, using any free feature, or purchasing
          any paid feature — you agree to be bound by these Terms, the Disclaimer, and the Privacy Policy.{' '}
          <span style={strong}>If you do not agree, do not use the Service.</span>
        </p>

        <h2 style={h2}>2 · Eligibility</h2>
        <p style={p}>
          You must be <span style={strong}>at least 18 years old</span> to use the Service. The Service is intended
          for use by a <span style={strong}>parent or legal guardian acting on behalf of a minor child.</span> By
          using the Service you represent and warrant that:
        </p>
        <ul style={{ margin: '0 0 16px', paddingInlineStart: 22 }}>
          <li style={li}>you are 18 or older and able to form a binding contract;</li>
          <li style={li}>you are the parent or legal guardian of the child whose information you enter, or you are otherwise legally authorized to provide that information and to act on the child&apos;s behalf; and</li>
          <li style={li}>the information you provide is accurate and you have the right to provide it.</li>
        </ul>
        <p style={p}>
          <span style={strong}>Children may not use the Service directly.</span> The account holder is the
          responsible adult.
        </p>

        <h2 style={h2}>3 · What the Service is (and is not)</h2>
        <p style={p}>
          Plan B is a non-profit, direct-to-consumer <span style={strong}>educational and organizational</span>{' '}
          service for families of children with PANS/PANDAS and related conditions.
        </p>
        <p style={{ ...p, marginBottom: 8 }}><span style={strong}>Free features include:</span></p>
        <ul style={{ margin: '0 0 16px', paddingInlineStart: 22 }}>
          <li style={li}>the <span style={strong}>Field Guide</span> (educational content);</li>
          <li style={li}>the <span style={strong}>map</span>;</li>
          <li style={li}>the daily <span style={strong}>Tracker</span> for symptoms, medications, and behavior; and</li>
          <li style={li}>limited free use of <span style={strong}>Minta</span>, an AI assistant.</li>
        </ul>
        <p style={{ ...p, marginBottom: 8 }}><span style={strong}>Paid features include:</span></p>
        <ul style={{ margin: '0 0 16px', paddingInlineStart: 22 }}>
          <li style={li}>the <span style={strong}>Synthesis</span> ($397; currently a $197 founding rate for the first 20 families) — an integration of your family&apos;s own records, framed as questions and options to discuss with your own licensed providers;</li>
          <li style={li}>the <span style={strong}>Direction</span> ($97);</li>
          <li style={li}><span style={strong}>pay-as-you-go Minta token packs</span>; and</li>
          <li style={li}>a <span style={strong}>planned monthly subscription</span> (see Section 8).</li>
        </ul>
        <p style={p}>
          <span style={strong}>The Service is not medical care.</span> It does not diagnose, treat, prescribe, or
          direct treatment, and it does not create a practitioner–patient relationship. Plan B does not practice
          medicine. <span style={strong}>The Disclaimer governs all health-related aspects of the Service and is
          incorporated here in full.</span> All medical decisions are made by you, together with your child&apos;s
          own licensed clinicians.
        </p>

        <h2 style={h2}>4 · Medical disclaimer incorporated by reference</h2>
        <p style={p}>
          The <span style={strong}><a href="/disclaimer" style={{ color: teal }}>Medical &amp; Informational
          Disclaimer</a></span> is a material part of these Terms. By using the Service you acknowledge that you
          have read and agree to it, including that: the Service is information and education only; it is not a
          substitute for professional care; no practitioner–patient relationship is created; Minta and the
          Synthesis are informational and can be wrong; the Service is not for emergencies; and you should never
          start, stop, or change a treatment based on the Service without your own licensed provider.
        </p>

        <h2 style={h2}>5 · Acceptable use</h2>
        <p style={p}>You agree <span style={strong}>not</span> to:</p>
        <ul style={{ margin: '0 0 16px', paddingInlineStart: 22 }}>
          <li style={li}>use the Service for any unlawful purpose or in violation of these Terms;</li>
          <li style={li}>upload records or information you are not authorized to provide, or that infringe anyone&apos;s rights;</li>
          <li style={li}>represent yourself as a licensed provider, or use the Service to provide medical advice to others;</li>
          <li style={li}>attempt to access another user&apos;s account or data;</li>
          <li style={li}>reverse engineer, scrape, overload, disrupt, or interfere with the Service or its security;</li>
          <li style={li}>misuse Minta to generate unlawful, harmful, or abusive content, or attempt to circumvent usage limits or safeguards; or</li>
          <li style={li}>resell, sublicense, or commercially exploit the Service without our written permission.</li>
        </ul>
        <p style={p}>We may suspend or terminate access for violations.</p>

        <h2 style={h2}>6 · Your content and data</h2>
        <p style={p}>
          <span style={strong}>You own your data.</span> The records, labs, Tracker entries, Minta conversations,
          and other information you provide (&ldquo;User Content&rdquo;) remain yours.
        </p>
        <p style={p}>
          To operate the Service, you grant Plan B a <span style={strong}>limited, non-exclusive, worldwide,
          royalty-free license</span> to host, store, process, transmit, display, and otherwise use your User
          Content <span style={strong}>solely</span> to provide and improve the Service for you — including sending
          it to our subprocessors (such as the AI provider) to generate Minta responses and the Synthesis, as
          described in the Privacy Policy. This license ends when you delete the relevant data or your account,
          except for limited copies retained as required by law or in routine backups for a limited period.
        </p>
        <p style={p}>
          You are responsible for the accuracy of your User Content and for having the authority to provide it.{' '}
          <span style={strong}>De-identified aggregate research</span> is addressed in the Privacy Policy and is
          optional, consent-based, and does not identify your child.
        </p>

        <h2 style={h2}>7 · AI output limitations</h2>
        <p style={p}>
          Minta and the Synthesis are generated using artificial intelligence, including third-party AI systems
          (such as the Claude API from Anthropic). <span style={strong}>AI output can be inaccurate, incomplete, or
          wrong.</span> It is provided &ldquo;as is,&rdquo; is informational only, and is <span style={strong}>not</span>{' '}
          medical advice. You must independently verify all AI output with your child&apos;s licensed providers and
          must not rely on it for clinical decisions. See the <a href="/disclaimer" style={{ color: teal }}>Disclaimer</a>{' '}
          for full terms.
        </p>

        <h2 style={h2}>8 · Payments, refunds, and auto-renewal</h2>
        <p style={p}>
          <span style={strong}>Pricing and one-time purchases.</span> Prices for the Synthesis, the Direction, and
          Minta token packs are shown at the point of purchase. The Synthesis founding rate ($197 for the first 20
          families) is a limited promotional price. We may change prices prospectively; changes do not affect
          purchases already made.
        </p>
        <p style={p}>
          <span style={strong}>Payment processor.</span> Payments are processed by <span style={strong}>Stripe</span>.
          We do not store full payment-card numbers. Your use of payment features is also subject to Stripe&apos;s
          terms.
        </p>
        <p style={p}>
          <span style={strong}>Refunds.</span> <span style={flag}>[Refund policy to be confirmed with counsel and
          stated clearly here — for example, one-time digital purchases such as the Synthesis and Direction
          non-refundable once delivered, except where required by law; Minta token packs non-refundable once
          used.]</span>
        </p>
        <p style={p}>
          <span style={strong}>Subscription and auto-renewal (planned monthly subscription).</span> When the monthly
          subscription is offered, the following terms apply and are presented clearly before you subscribe:
        </p>
        <ul style={{ margin: '0 0 16px', paddingInlineStart: 22 }}>
          <li style={li}><span style={strong}>Recurring charge.</span> The subscription is a recurring subscription that automatically renews each billing period until you cancel. By subscribing, you authorize us (through Stripe) to charge your payment method the then-current subscription price at the start of each billing period on a recurring basis.</li>
          <li style={li}><span style={strong}>Price and frequency disclosed up front.</span> The price, the billing frequency, and the fact that the subscription auto-renews are clearly disclosed to you before you subscribe, in a clear and conspicuous manner, separate from other terms.</li>
          <li style={li}><span style={strong}>Affirmative consent.</span> We obtain your express, affirmative consent to the recurring charge before any charge is made.</li>
          <li style={li}><span style={strong}>Confirmation.</span> After you subscribe, we send you a confirmation of the subscription, including the recurring terms and how to cancel.</li>
          <li style={li}><span style={strong}>Easy cancellation.</span> You may cancel at any time, easily, through your account settings (or by contacting <a href="mailto:rachel@planbforpans.com" style={{ color: teal }}>rachel@planbforpans.com</a>) — using a method at least as simple as the method you used to subscribe. Cancellation stops future renewals; cancellation generally takes effect at the end of the current paid period, and you keep access until then.</li>
          <li style={li}><span style={strong}>Renewal/price-change reminders.</span> <span style={flag}>[Advance renewal reminders and/or advance notice of price changes to be confirmed with counsel for the applicable jurisdiction(s).]</span></li>
        </ul>
        <p style={{ ...legal, fontStyle: 'italic', color: muted }}>
          This section is drafted with the federal Restore Online Shoppers&apos; Confidence Act (ROSCA), the
          FTC&apos;s negative-option rules, and state automatic-renewal laws in mind, but the specific disclosures,
          consent flow, confirmation, and cancellation mechanics must be reviewed and finalized by counsel and
          matched to the actual product flow.
        </p>

        <h2 style={h2}>9 · Intellectual property</h2>
        <p style={p}>
          The Service — including the Field Guide, the map, software, design, text, graphics, the &ldquo;Plan
          B&rdquo; and &ldquo;Minta&rdquo; names and marks, and all other Plan B content (excluding your User
          Content and third-party content) — is owned by Plan B or its licensors and is protected by
          intellectual-property laws. We grant you a <span style={strong}>limited, personal, non-transferable,
          non-exclusive, revocable license</span> to use the Service for your own family&apos;s personal,
          non-commercial use under these Terms. All rights not expressly granted are reserved.
        </p>

        <h2 style={h2}>10 · Disclaimers of warranties</h2>
        <p style={p}>
          THE SERVICE IS PROVIDED <span style={strong}>&ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT
          WARRANTIES OF ANY KIND</span>, express or implied, including any implied warranties of merchantability,
          fitness for a particular purpose, accuracy, non-infringement, and any warranty regarding health outcomes.
          We do not warrant that the Service will be uninterrupted, error-free, secure, or that any AI output will
          be accurate or complete. See the <a href="/disclaimer" style={{ color: teal }}>Disclaimer</a> for
          additional health-specific disclaimers. Some jurisdictions do not allow certain warranty exclusions; in
          those places, some of the above may not apply to you.
        </p>

        <h2 style={h2}>11 · Limitation of liability</h2>
        <p style={p}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, PLAN B AND ITS STAFF, CONTRACTORS, VOLUNTEERS, DIRECTORS, AND
          SUPPLIERS <span style={strong}>WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          EXEMPLARY, OR PUNITIVE DAMAGES</span>, or for any loss of data, goodwill, or profits, arising out of or
          relating to your use of (or inability to use) the Service, <span style={strong}>even if advised of the
          possibility.</span> TO THE MAXIMUM EXTENT PERMITTED BY LAW, PLAN B&apos;S TOTAL AGGREGATE LIABILITY FOR
          ALL CLAIMS RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID PLAN B IN THE 12
          MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) A CAPPED AMOUNT TO BE CONFIRMED WITH COUNSEL.
        </p>
        <p style={p}>
          Nothing in these Terms limits liability that cannot be limited by law. Some jurisdictions do not allow
          certain limitations; in those places, some of the above may not apply to you.
        </p>

        <h2 style={h2}>12 · Indemnification</h2>
        <p style={p}>
          You agree to indemnify and hold harmless Plan B and its staff, contractors, volunteers, directors, and
          suppliers from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos;
          fees) arising out of or related to: (a) your use of the Service; (b) your User Content or your authority
          to provide it; (c) your violation of these Terms or any law; or (d) any decision you or your providers
          make in connection with information from the Service.
        </p>

        <h2 style={h2}>13 · Termination</h2>
        <p style={p}>
          You may stop using the Service and delete your account and data at any time (see the Privacy Policy for
          deletion). We may suspend or terminate your access at any time if you violate these Terms or if we
          discontinue the Service. Sections that by their nature should survive termination (including Sections 6–12
          and 14) survive.
        </p>

        <h2 style={h2}>14 · Governing law and dispute resolution</h2>
        <p style={p}>
          These Terms are governed by the laws of the State to be designated by counsel, without regard to
          conflict-of-laws rules. <span style={flag}>[Venue/jurisdiction; whether to include arbitration and/or a
          class-action waiver; any informal-resolution and notice period — to be drafted and finalized with
          counsel.]</span>
        </p>

        <h2 style={h2}>15 · Changes to these Terms</h2>
        <p style={p}>
          We may update these Terms from time to time. If we make material changes, we will provide reasonable
          notice (for example, by posting the updated Terms with a new effective date or by emailing you). Your
          continued use of the Service after changes take effect means you accept the updated Terms.
        </p>

        <h2 style={h2}>16 · Miscellaneous</h2>
        <p style={p}>
          These Terms (with the Disclaimer and Privacy Policy) are the entire agreement between you and Plan B
          regarding the Service. If any provision is held unenforceable, the rest remains in effect. Our failure to
          enforce a provision is not a waiver. You may not assign these Terms; we may assign them in connection with
          a reorganization or transfer of the non-profit&apos;s operations.
        </p>

        <h2 style={h2}>17 · Contact</h2>
        <p style={p}>
          Questions about these Terms:{' '}
          <a href="mailto:rachel@planbforpans.com" style={{ color: teal }}>rachel@planbforpans.com</a>.
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
        borderInlineStart: '3px solid var(--teal)',
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
      By creating an account or using Plan B for PANS, you acknowledge that you have read and agree to these Terms,
      the <a href="/disclaimer" style={{ color: teal, fontStyle: 'normal' }}>Disclaimer</a>, and the{' '}
      <a href="/privacy" style={{ color: teal, fontStyle: 'normal' }}>Privacy Policy</a>.
    </p>
  )
}
