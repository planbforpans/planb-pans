// What parents said about their Case Review, verbatim (Rachel, 2026-11-14:
// "we need quotes all over the website of case studies"). Only quotes with the
// family's OK go here. Weston's mom said yes in writing on 2026-09-15 ("Of
// course you can quote me like that"). Rían's mom (Ireland) is asked; add hers
// only after she says yes.

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'

export type CaseReviewVoice = { quote: string; who: string }

export const CASE_REVIEW_VOICES: CaseReviewVoice[] = [
  {
    quote: "That was an incredible experience and worth 10× the price. I can't wait to shout it from the rooftops to every mom I know — thank you for the gift of holistic, zoomed-out (and then targeted, zoomed-back-in) analysis.",
    who: 'Mom of a 7-year-old, Florida · the morning after her Case Review',
  },
  {
    quote: 'I work in tech and I wanted to build what Plan B for PANS was. When I saw it existed and it was even better than I could have dreamed… this thing is going to go viral.',
    who: 'The same mom, on her call',
  },
  {
    quote: 'I appreciate your time and effort into helping mothers like myself in getting their children on the path to recovery and a better quality of life!',
    who: 'Lupita, PANS parent · after her Case Review',
  },
]

export default function CaseReviewVoices({ dark = false, title = 'After a Case Review, in their words' }: { dark?: boolean; title?: string }) {
  const [lead, ...rest] = CASE_REVIEW_VOICES
  const fg = dark ? '#F3F7F6' : ink
  const sub = dark ? '#B9CCC9' : soft
  const accent = dark ? '#9fd0c6' : teal
  return (
    <section style={{ padding: 'clamp(44px,7vw,80px) 24px', background: dark ? '#203f3e' : '#F5F7F6' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ color: accent, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 18px', textAlign: 'center' }}>{title}</p>
        <figure style={{ margin: '0 auto 30px', maxWidth: 820, textAlign: 'center' }}>
          <span aria-hidden style={{ display: 'block', fontFamily: 'var(--font-display), Georgia, serif', fontSize: 72, lineHeight: 0.6, color: accent, opacity: 0.5, height: 34 }}>&ldquo;</span>
          <blockquote style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(22px,3.4vw,32px)', lineHeight: 1.35, color: fg, margin: '0 0 14px', fontWeight: 400 }}>{lead.quote}</blockquote>
          <figcaption style={{ fontSize: 14, color: sub }}>{lead.who}</figcaption>
        </figure>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {rest.map((v) => (
            <figure key={v.quote} style={{ margin: 0, padding: '20px 22px', borderRadius: 12, background: dark ? 'rgba(255,255,255,0.07)' : '#FFFFFF', border: dark ? 'none' : '1px solid #E1E5E4' }}>
              <blockquote style={{ fontSize: 16.5, lineHeight: 1.6, color: fg, margin: '0 0 10px', fontStyle: 'italic' }}>&ldquo;{v.quote}&rdquo;</blockquote>
              <figcaption style={{ fontSize: 13.5, color: sub }}>{v.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
