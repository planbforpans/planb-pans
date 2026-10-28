'use client'

// "Isn't ChatGPT already good for this?" — the HONEST version. The AIs are
// extraordinary and memory is now table stakes (Gemini/ChatGPT/Claude all
// remember). So we concede that, and lean on the three things a chat window
// genuinely can't be: cross-family data, a human, and a whole care system.

const ink = '#1F2424'
const soft = '#505858'
const teal = '#2E6E70'
const rule = '#E1E5E4'

const POINTS: { lead: string; body: string }[] = [
  {
    lead: 'It learns across families — not just yours.',
    body: "A chatbot remembers your chats. Plan B for PANS sees what's actually moved the needle across hundreds of PANS kids like yours — which driver showed up, what order worked, what backfired. That's outcome data no general AI has or can get. Your hardest season sharpens the next family's read; theirs sharpens yours.",
  },
  {
    lead: 'There’s a human who has lived it.',
    body: 'A mother who has been exactly where you are reads your synthesis and gets on the phone with you. A chatbot does not call you back at 2am.',
  },
  {
    lead: 'It’s not a chat window — it’s the whole way through.',
    body: 'A chatbot gives you answers. Plan B for PANS gives you the system: the tracker that catches when your child stalls, the synthesis built from your whole record, the map, and the exact thing to hand each doctor. A parent with a chatbot still has to drive. Plan B for PANS drives.',
  },
  {
    lead: 'It already knows PANS — and what to ask.',
    body: "Not just memory — it brings the field (Walsh, Yasko, Shoemaker, O'Hara, Crista, Nathan, the FRAT test, mold sequencing), kept current with every new study, and asks the questions you don't know to ask yet.",
  },
]

export default function RegularAIvsMinta() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,96px) 24px', background: '#F5F7F6', borderTop: `1px solid ${rule}` }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 14px' }}>
          Isn&rsquo;t ChatGPT already good for this?
        </p>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(30px,5vw,50px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, margin: '0 0 18px' }}>
          Yes. It&rsquo;s extraordinary — <em style={{ color: teal, fontStyle: 'italic' }}>and getting better.</em>
        </h2>
        <p style={{ textAlign: 'center', fontSize: 17, lineHeight: 1.7, color: soft, maxWidth: 640, margin: '0 auto 44px' }}>
          Gemini remembers. ChatGPT remembers. The models are remarkable, and Minta runs on the same kind of engine — so we won&rsquo;t pretend we&rsquo;re smarter. We&rsquo;ll be honest about the parts a chat window will <em>never</em> be:
        </p>

        <div style={{ display: 'grid', gap: 16 }}>
          {POINTS.map((p, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: `1px solid ${rule}`, borderLeft: `4px solid ${teal}`, borderRadius: 13, padding: 'clamp(18px,3vw,26px)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(21px,3vw,26px)', color: ink, margin: '0 0 8px', lineHeight: 1.15 }}>{p.lead}</p>
              <p style={{ fontSize: 15.5, lineHeight: 1.62, color: soft, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 'clamp(20px,3.2vw,26px)', color: ink, margin: '40px 0 0', lineHeight: 1.3 }}>
          We don&rsquo;t beat the AI. We wrap the <span style={{ color: teal }}>data</span>, the <span style={{ color: teal }}>human</span>, and the <span style={{ color: teal }}>system</span> around it — the parts a chatbot can&rsquo;t be.
        </p>
      </div>
    </section>
  )
}
