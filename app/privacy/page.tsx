// Privacy Policy. Renders the PRIVACY-POLICY-DRAFT faithfully as branded JSX.
// NOTE: not yet attorney-reviewed; banner says so honestly.

export const metadata = {
  title: 'Privacy Policy · Plan B for PANS',
  description:
    'How Plan B for PANS collects, uses, shares, and protects your information — including the sensitive health information you provide about your child. We do not sell your data.',
  robots: { index: true, follow: true },
}

const ink = '#141414'
const teal = '#1F6B6B'
const soft = '#3a3a3a'
const muted = '#8a8373'
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
const flag: React.CSSProperties = { color: muted, fontStyle: 'italic' }

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(56px, 9vw, 104px) 24px 0' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.36em', textTransform: 'uppercase', color: muted, marginBottom: 16, fontWeight: 500 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(38px, 7vw, 62px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.02, margin: '0 0 18px' }}>
          Privacy Policy
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
            This Privacy Policy explains what information Plan B collects, how we use it, who we share it with, and
            your choices. It applies to the Plan B website, applications, and services (the &ldquo;Service&rdquo;).{' '}
            <span style={strong}>Because the Service involves sensitive health information about children, please
            read this carefully.</span>
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 120px' }}>
        <h2 style={h2}>1 · A note about the sensitive nature of this data</h2>
        <p style={p}>
          Plan B is built for families of children with PANS/PANDAS. The information you provide{' '}
          <span style={strong}>includes sensitive health information about a child</span> — uploaded medical records
          and labs, symptoms, medications, behaviors, and your conversations with Minta about your child&apos;s
          health. We treat this information with care. You are the parent or guardian and the account holder; you
          decide what to provide.
        </p>

        <h2 style={h2}>2 · Information we collect</h2>
        <p style={p}>We collect information you provide and information generated through your use of the Service:</p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}><span style={strong}>Account information</span> — your name, email address, login credentials, and basic account settings.</li>
          <li style={li}><span style={strong}>Uploaded health records and labs</span> — documents, lab results, and other medical records you upload about your child.</li>
          <li style={li}><span style={strong}>Symptom-tracking entries</span> — daily Tracker data about your child&apos;s symptoms, medications, supplements, and behavior, and related context (for example, ZIP code used to provide environment/pollen context).</li>
          <li style={li}><span style={strong}>Minta conversations</span> — the messages you exchange with the Minta AI assistant.</li>
          <li style={li}><span style={strong}>Synthesis and Direction inputs and outputs</span> — the records you provide for, and the documents produced by, these features.</li>
          <li style={li}><span style={strong}>Payment information</span> — handled by Stripe. We receive limited transaction details (such as that a payment succeeded and the last four digits/brand); <span style={strong}>we do not store full payment-card numbers.</span></li>
          <li style={li}><span style={strong}>Usage and device information</span> — basic logs, device/browser information, and analytics used to operate and secure the Service. <span style={flag}>[Analytics/cookies actually used to be confirmed; cookie disclosure added if applicable.]</span></li>
        </ul>

        <h2 style={h2}>3 · How we use information</h2>
        <p style={p}>We use information to:</p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}><span style={strong}>operate and provide the Service</span> — store and display your records, run the Tracker, power Minta, and generate the Synthesis and Direction;</li>
          <li style={li}><span style={strong}>process information through AI</span> — send your relevant content to our AI subprocessor to generate Minta responses and the Synthesis (see Section 4);</li>
          <li style={li}><span style={strong}>process payments</span> through Stripe;</li>
          <li style={li}><span style={strong}>maintain security</span>, prevent abuse, debug, and comply with law;</li>
          <li style={li}><span style={strong}>communicate with you</span> about your account, purchases, and the Service; and</li>
          <li style={li}><span style={strong}>conduct optional, consent-based de-identified aggregate research</span> (see Section 5).</li>
        </ul>
        <p style={p}>We do <span style={strong}>not</span> use your child&apos;s identifiable health information for advertising.</p>

        <h2 style={h2}>4 · AI processing and subprocessors</h2>
        <p style={p}>
          To provide Minta, the Synthesis, and related features, we use third-party service providers
          (&ldquo;subprocessors&rdquo;). They process data only to provide their services to us.
        </p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}><span style={strong}>Anthropic (Claude API)</span> — AI processing. To generate Minta responses and the Synthesis, relevant content you provide is sent to Anthropic&apos;s API. Per Anthropic&apos;s commercial API terms, API inputs and outputs are not used to train Anthropic&apos;s models. <span style={flag}>[Current Anthropic API terms and retention to be confirmed with counsel before finalizing.]</span></li>
          <li style={li}><span style={strong}>Supabase</span> — database and storage hosting (your account data, records, Tracker entries, and conversations are stored here).</li>
          <li style={li}><span style={strong}>Vercel</span> — application hosting and delivery.</li>
          <li style={li}><span style={strong}>Stripe</span> — payment processing.</li>
        </ul>
        <p style={p}>
          Each subprocessor is bound by its own terms and security commitments. <span style={flag}>[Whether
          data-processing addenda / BAAs are needed with any subprocessor to be confirmed with counsel.]</span>
        </p>

        <h2 style={h2}>5 · Optional de-identified aggregate research</h2>
        <p style={p}>
          With your <span style={strong}>consent</span>, Plan B may use <span style={strong}>de-identified</span>{' '}
          information for <span style={strong}>aggregate cross-family research</span> — for example, to understand
          which approaches families report as helpful across many children. <span style={strong}>De-identified data
          does not identify your child</span> and we do not attempt to re-identify it. This is{' '}
          <span style={strong}>optional</span>; you can decline or withdraw consent without losing access to the
          core Service. <span style={flag}>[Consent mechanism, de-identification standard, and disclosures to be
          confirmed with counsel.]</span>
        </p>

        <h2 style={h2}>6 · What we do NOT do</h2>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}>We do <span style={strong}>not sell</span> your personal information.</li>
          <li style={li}>We do <span style={strong}>not share</span> your personal information with advertisers, data brokers, insurers, or schools without your explicit consent.</li>
          <li style={li}>We do <span style={strong}>not</span> use your child&apos;s identifiable health data for marketing or advertising.</li>
        </ul>
        <p style={p}>
          We share information only with the subprocessors listed above (to operate the Service), with your
          consent, or as required by law (for example, to comply with a valid legal request, or to protect rights,
          safety, or the integrity of the Service).
        </p>

        <h2 style={h2}>7 · Security</h2>
        <p style={p}>
          We use reasonable administrative, technical, and physical safeguards designed to protect your
          information, including encryption in transit and at rest and access controls. <span style={strong}>No
          method of transmission or storage is perfectly secure</span>, and we cannot guarantee absolute security.
          If we become aware of a breach affecting your information, we will notify you and authorities as required
          by law.
        </p>

        <h2 style={h2}>8 · Data retention and one-click deletion</h2>
        <p style={p}>
          We retain your information for as long as your account is active or as needed to provide the Service,
          unless a longer period is required by law.
        </p>
        <p style={p}>
          <span style={strong}>You can delete all of your data with one click</span> from your account. When you
          delete, we remove your account data and User Content from our active systems and instruct our
          subprocessors to do the same; <span style={strong}>limited copies may persist in routine backups for a
          limited period</span> before being overwritten, and we may retain minimal records where required by law.
          You may also email <a href="mailto:rachel@planbforpans.com" style={{ color: teal }}>rachel@planbforpans.com</a>{' '}
          to request deletion.
        </p>

        <h2 style={h2}>9 · HIPAA note</h2>
        <p style={p}>
          Plan B believes it is <span style={strong}>direct-to-consumer service</span> and{' '}
          <span style={strong}>likely not a HIPAA &ldquo;covered entity&rdquo; or &ldquo;business associate&rdquo;</span>,
          because it does not provide health care or bill insurance and instead helps families organize their own
          records. As a result, <span style={strong}>HIPAA may not apply</span> to Plan B. Regardless, Plan B treats
          health information carefully as described in this Policy. <span style={flag}>[HIPAA applicability — and
          whether any subprocessor relationship or future feature changes this analysis — to be confirmed with
          counsel.]</span>
        </p>

        <h2 style={h2}>10 · Your privacy rights</h2>
        <p style={p}>Depending on where you live, you may have rights under laws such as:</p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
          <li style={li}><span style={strong}>Washington My Health My Data Act (MHMDA)</span> — which broadly regulates &ldquo;consumer health data&rdquo; and may require a separate Consumer Health Data Privacy Policy, specific consent for collection/sharing, and a right to withdraw consent and to have data deleted.</li>
          <li style={li}><span style={strong}>California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA)</span> — rights to know, access, correct, delete, and limit use of sensitive personal information, and to opt out of &ldquo;sale&rdquo;/&ldquo;sharing&rdquo; (we do not sell or share for cross-context advertising).</li>
          <li style={li}><span style={strong}>Other state privacy laws</span> (e.g., Virginia, Colorado, and others) that may grant similar rights.</li>
        </ul>
        <p style={p}>
          To exercise any available right, contact{' '}
          <a href="mailto:rachel@planbforpans.com" style={{ color: teal }}>rachel@planbforpans.com</a>. We will
          respond as required by applicable law and will not discriminate against you for exercising your rights.{' '}
          <span style={flag}>[Which laws apply and the required disclosures, notices, and consent mechanics to be
          confirmed with counsel.]</span>
        </p>

        <h2 style={h2}>11 · Children&apos;s data</h2>
        <p style={p}>
          The Service is used by a <span style={strong}>parent or legal guardian (the account holder)</span>, who
          provides information about their minor child. <span style={strong}>Children do not use the Service
          directly and do not create accounts.</span> The data about a child is provided by, and under the control
          of, the responsible adult.
        </p>
        <p style={p}>
          Because the Service is directed to adult parents/guardians and not to children, we believe the
          Children&apos;s Online Privacy Protection Act (COPPA) — which governs collecting personal information
          directly from children under 13 — is unlikely to apply in the usual way. <span style={flag}>[COPPA
          consideration, including how the rule treats a parent entering a child&apos;s health data, to be confirmed
          with counsel.]</span>
        </p>

        <h2 style={h2}>12 · International users</h2>
        <p style={p}>
          The Service is operated in the United States, and your information is processed in the United States. If
          you access the Service from outside the U.S., you understand your information will be transferred to and
          processed in the U.S. <span style={flag}>[Whether the Service is offered outside the U.S. and any
          resulting obligations to be confirmed with counsel.]</span>
        </p>

        <h2 style={h2}>13 · Changes to this Policy</h2>
        <p style={p}>
          We may update this Policy from time to time. If we make material changes, we will provide reasonable
          notice (for example, by posting the updated Policy with a new effective date or by emailing you). The
          &ldquo;Last updated&rdquo; date at the top shows when this Policy was last updated.
        </p>

        <h2 style={h2}>14 · Contact</h2>
        <p style={p}>
          Questions about this Policy or your data:{' '}
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
        borderLeft: '3px solid var(--teal)',
        borderRadius: 6,
        padding: '16px 20px',
        fontSize: 14,
        lineHeight: 1.7,
        color: '#3a3a3a',
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
      See also our <a href="/disclaimer" style={{ color: teal, fontStyle: 'normal' }}>Medical &amp; Informational
      Disclaimer</a> and <a href="/terms" style={{ color: teal, fontStyle: 'normal' }}>Terms of Service</a>.
    </p>
  )
}
