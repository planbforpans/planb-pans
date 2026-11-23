// Shared FAQ data (no 'use client') so both the client UI and the server-side
// FAQPage JSON-LD can import the same source of truth. Importing data across a
// 'use client' boundary turns it into a client reference, so it must live here.
export const faqs = [
  {
    q: 'Is it free?',
    a: "Your Synthesis is included — a complete, integrated read of everything going on with your child, built by a real person. After that, you pay only for Minta tokens: units of her time that cover the actual AI cost. about $20 covers months of Minta, pay-as-you-go, nothing recurring. Plan B for PANS is a non-profit, and no family is ever turned away for cost.",
  },
  {
    q: "What about my kid’s privacy?",
    a: "Your kid's data is yours. It's stored encrypted. It's de-identified before any aggregate research. You can delete everything at any time — one click. We don't share with advertisers, insurance, school districts, or anyone else without your explicit consent. Details on the privacy page.",
  },
  {
    q: 'Is this instead of my doctor?',
    a: "No. Plan B for PANS is a thinking partner, not a replacement for clinical care. It helps you understand what's out there, track what's actually moving the needle for your kid, and walk into appointments with sharper questions. Your doctors stay your doctors. Plan B for PANS helps you use them better.",
  },
  {
    q: 'How is this different from ChatGPT or Claude?',
    a: "Plan B for PANS runs on the most advanced AI there is — so the engine is the same caliber. The difference is everything built around it. A blank chatbox forgets your child the moment you close it; Minta remembers your whole picture — every lab, symptom, and prior treatment — and re-reads it as new results come in. A general chatbot is a generalist; Minta is built on the PANS field's frameworks — Walsh, Yasko, Shoemaker, O'Hara, Crista, Nathan — and the safety rules that keep her from guessing (she won't hand you a supplement protocol off stale labs). She learns across families, anonymized, so she can see what's actually moved the needle for kids like yours — something no solo chat can do. And she produces what a wall of text can't: a doctor-ready packet, what to bring each specialist, the order to do things in, and a daily loop that flags when your child isn't responding. Claude is the engine; Plan B for PANS is the workshop built around your child — for the 95% of parents who don't have the time to become expert prompt-engineers at 2am.",
  },
  {
    q: 'What if Minta is wrong?',
    a: "Minta is still learning. She can and does make mistakes — especially on unusual presentations. Always verify anything critical with a practitioner. Flag bad responses and Minta gets sharper for every family after you. That's how it compounds.",
  },
  {
    q: "What if I don’t know where to start?",
    a: "Just do the intake. It takes about twenty minutes, or you can break it up across days. Minta works off what you give her — so the more detail you put in, the more useful every answer becomes. There's no wrong starting point.",
  },
  {
    q: 'How does Minta get sharper?',
    a: "Every family that tracks contributes (consent-based, de-identified) to a growing library. Minta learns which modalities work for which symptoms across cohorts — patterns no single family can see alone. Your log today makes the next family's read sharper. It's a compounding engine.",
  },
  {
    q: 'Is this PANS-only?',
    a: "No. Plan B for PANS is for PANS, PANDAS, autism (all severity levels — verbal, nonverbal, regressive), severe dysregulation (rage, meltdowns, self-injury), and the 4-A conditions (autism, ADHD, asthma, allergies). We treat these as overlapping driver clusters, not separate silos.",
  },
  {
    q: "What if I’ve already tried everything?",
    a: "Then Plan B for PANS is built for exactly you. The kids who've been through IVIG, multiple antibiotics, three specialists, and a year of nothing working — that's the edge of mainstream care and the start of what Plan B for PANS specializes in. The fringe modalities your ninth doctor never mentioned.",
  },
  {
    q: "Who’s behind this?",
    a: "Rachel Johnson — a mom of three recovered PANS kids who taught herself this entire field at 2am because the system couldn't. She built Minta to understand her own children when no doctor would, and it found what they'd all missed. Plan B for PANS is what she wishes she'd had on the worst nights of her life. Read the full story on the About page.",
  },
  {
    q: "I’m a practitioner. How do I get involved?",
    a: "Visit the Practitioners page. The short version: we're looking for practitioners willing to take on ten pro-bono cohort clients, have their work openly documented over six months, and be matched to families whose kids fit their modality. Any public listing can be removed by email with no questions asked.",
  },
]
