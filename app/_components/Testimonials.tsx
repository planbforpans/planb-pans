// Real, unsolicited messages from Plan B families. Names anonymized to first
// name + descriptor by default (upgrade only with the family's OK). Add new
// quotes to TESTIMONIALS — the section renders whatever's here.

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'
const rule = '#E1E5E4'
const card = '#FFFFFF'

type Testimonial = { quote: string; name: string; detail: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I’ve been using ChatGPT for the last year or two but it forgets important details, can’t remember lab results, and gradually slows to the point of becoming unusable. Then I stumbled across Plan B for PANS. OMG! I love it! Thank you 🙏 Why isn’t everyone using this?!",
    name: 'Victoria',
    detail: 'PANS mom',
  },
  {
    quote:
      "This is the most amazing, comprehensive document I ever received, concerning my child’s health and test results. You and Minta are excellent! It makes so much sense 🙏",
    name: 'Yolanda',
    detail: 'PANS mom',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: 'clamp(56px, 9vw, 96px) 24px', background: '#F5F7F6', borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
      <div className="pb-container" style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ color: teal, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 10px', textAlign: 'center' }}>In their words</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px, 4.6vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: ink, margin: '0 0 36px', textAlign: 'center' }}>
          What families are saying
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} style={{ background: card, border: `1px solid ${rule}`, borderRadius: 16, padding: 'clamp(24px, 3.5vw, 32px)', margin: 0, display: 'flex', flexDirection: 'column' }}>
              <span aria-hidden style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, lineHeight: 0.5, color: 'rgba(31,107,107,0.35)', height: 24 }}>“</span>
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, color: ink, margin: '0 0 18px', fontStyle: 'italic', flex: 1 }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ fontSize: 14, color: soft }}>
                <strong style={{ color: teal }}>{t.name}</strong> · {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
