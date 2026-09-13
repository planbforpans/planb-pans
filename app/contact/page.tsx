import CaseReviewInvite from '../_components/CaseReviewInvite'

export default function Contact() {
  return (
    <main style={{ maxWidth: 940, padding: '48px 22px 72px', margin: '0 auto', color: '#2a2a26' }}>
      <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 400 }}>Get in touch</h1>
      <p style={{ fontSize: 17, lineHeight: 1.7 }}>Questions about Plan B or whether a Case Review fits your family? Email a brief overview and we can help you find the right starting point.</p>
      <a href="mailto:info@planbforpans.com" style={{ color: '#1F6B6B', fontSize: 18, overflowWrap: 'anywhere' }}>info@planbforpans.com</a>
      <p style={{ fontSize: 14, lineHeight: 1.7 }}>This link opens your email app; send your message there. Please upload medical records securely through the Plan B app.</p>
      <CaseReviewInvite source="website-contact" />
      <p style={{ lineHeight: 1.7 }}>For collaborations, practitioner inquiries, or a story you would like to share, use the same email address and tell us what you have in mind.</p>
    </main>
  )
}
