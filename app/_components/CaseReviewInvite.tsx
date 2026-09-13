import { caseReviewBookingUrl, CASE_REVIEW_DETAILS } from './site-links'

export default function CaseReviewInvite({ source }: { source: string }) {
  return (
    <section style={{ background: '#fffdf7', border: '1px solid #d4cbb6', borderRadius: 12, padding: 'clamp(24px, 5vw, 44px)', maxWidth: 900, margin: '32px auto', color: '#2a2a26' }}>
      <p style={{ color: '#1F6B6B', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', margin: '0 0 10px' }}>THE CASE REVIEW · $200</p>
      <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 400, lineHeight: 1.15, margin: '0 0 16px' }}>You don’t have to sort through it all alone.</h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, margin: '0 0 16px' }}>If you’d like a person to help connect the pieces, Rachel reviews your child’s records and talks through the whole picture with you: what may have been missed, what to prioritize, and what to ask your child’s practitioners.</p>
      <p style={{ fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>Plan B uses a combination of leading AI models to help process and organize information. Your Case Review adds Rachel’s personal attention. The goal is clearer next steps; outcomes vary, and we do not promise a cure.</p>
      <p style={{ fontSize: 14, lineHeight: 1.65, margin: '0 0 22px' }}><strong>$200 includes a personal record review and your consultation.</strong> You choose a time and pay through Calendly. A later Results &amp; Plan review is optional and costs $200 separately.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' }}>
        <a href={caseReviewBookingUrl(source)} style={{ display: 'inline-block', background: '#1F6B6B', color: '#fffdf7', padding: '13px 20px', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Book a Case Review · $200</a>
        <a href={CASE_REVIEW_DETAILS} style={{ color: '#1F6B6B', textUnderlineOffset: 4 }}>See what’s included</a>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: '#524d40', margin: '18px 0 0' }}>Not sure it fits? <a href="mailto:info@planbforpans.com?subject=Case%20Review%20question" style={{ color: '#1F6B6B' }}>Email a brief overview</a>. Please upload medical records through the app. Rachel is a parent navigator; your licensed practitioners guide medical decisions.</p>
    </section>
  )
}
