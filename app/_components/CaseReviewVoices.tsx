// What parents said about their Case Review, verbatim (Rachel, 2026-11-14:
// "we need quotes all over the website of case studies"). Only quotes with the
// family's OK go here. Weston's mom said yes in writing on 2026-09-15 ("Of
// course you can quote me like that"). Rían's mom (Ireland): Rachel, 2026-11-14,
// "She said it was fine." 

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'

export type CaseReviewVoice = { quote: string; who: string }

// M., Florida (Monisha) sent hers 2026-11-14; signed by initial only so it can't be tied to the de-identified case study.
// E., Florida (Weston's mom) sent this full testimonial for the site, 2026-11-14.
export const CASE_REVIEW_LONG = { text: 'After years of bouncing between doctors and specialists, each looking at one piece of my son’s case, I had accumulated an overwhelming amount of information, conflicting guidance, and seemingly endless next steps. What I didn’t have was someone connecting all the dots. I was so overwhelmed that I’d reached a point of analysis paralysis. I knew there was more I should be doing, but I honestly didn’t know where to start.\n\nMy case review with Rachel and Minta was incredible. For the first time, EVERY detail of my son’s history was considered together, rather than just the one sliver relevant to whichever specialist we happened to be seeing. It was the big-picture perspective I’d been desperately missing.\n\nBut what really blew me away was how actionable it was. Minta essentially took the executive functioning burden off my plate. Instead of handing me another list of things to research, it helped turn years of fragmented information into a clear, prioritized action plan. It even drafted the letters I needed to send to his doctors! I cannot overstate how valuable that is when you’re a parent who has spent years trying to coordinate your child’s care while already running on fumes.\n\nI went from feeling completely stuck to knowing exactly what my next steps were, with much of the work already done for me.\n\nIf you’ve spent years collecting puzzle pieces from different doctors but still can’t see the whole picture, I cannot recommend this enough. I only wish something like this had existed years ago. It was worth every penny, and frankly, it would be a steal at twice the price.', who: 'E., Florida · after her Case Review' }

export const CASE_REVIEW_VOICES: CaseReviewVoice[] = [
  {
    quote: 'For the first time, EVERY detail of my son’s history was considered together, rather than just the one sliver relevant to whichever specialist we happened to be seeing. … It was worth every penny, and frankly, it would be a steal at twice the price.',
    who: 'E., Florida · after her Case Review',
  },
  {
    quote: "That was an incredible experience and worth 10× the price. I can't wait to shout it from the rooftops to every mom I know — thank you for the gift of holistic, zoomed-out (and then targeted, zoomed-back-in) analysis.",
    who: 'E., Florida · the morning after her Case Review',
  },
  {
    quote: 'I work in tech and I wanted to build what Plan B for PANS was. When I saw it existed and it was even better than I could have dreamed… this thing is going to go viral.',
    who: 'E., Florida · on her call',
  },
  {
    quote: 'Rachel helped put us in the express lane with greater focus and clarity. Just as meaningful were her compassion and reminders of everything I’m doing right for him. I left feeling heard, reassured and better prepared for our next steps.',
    who: 'M., Florida · after her Case Review',
  },
  {
    quote: "I've asked about PANS/PANDAS so many times here and they don't recognize it. To have someone take the end-to-end look — it feels just so amazing.",
    who: 'Mom of a 19-year-old, Ireland · after her Case Review',
  },
  {
    quote: 'I appreciate your time and effort into helping mothers like myself in getting their children on the path to recovery and a better quality of life!',
    who: 'Lupita, PANS parent · after her Case Review',
  },
]

export function CaseReviewLong({ dark = false }: { dark?: boolean }) {
  const fg = dark ? '#F3F7F6' : ink
  const sub = dark ? '#B9CCC9' : soft
  return (
    <section style={{ padding: 'clamp(44px,7vw,80px) 24px', background: dark ? '#203f3e' : '#FFFFFF' }}>
      <figure style={{ maxWidth: 720, margin: '0 auto' }}>
        <p style={{ color: dark ? '#9fd0c6' : teal, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 16px' }}>One mother, after her Case Review</p>
        <blockquote style={{ margin: 0 }}>
          {CASE_REVIEW_LONG.text.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily: i === 0 ? 'var(--font-display), Georgia, serif' : undefined, fontSize: i === 0 ? 'clamp(20px,2.8vw,25px)' : 17, lineHeight: 1.65, color: fg, margin: '0 0 16px' }}>{i === 0 ? '“' : ''}{para}{i === CASE_REVIEW_LONG.text.split('\n\n').length - 1 ? '”' : ''}</p>
          ))}
        </blockquote>
        <figcaption style={{ fontSize: 15, color: sub, fontWeight: 600 }}>— {CASE_REVIEW_LONG.who}</figcaption>
      </figure>
    </section>
  )
}

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
