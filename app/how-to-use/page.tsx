import type { Metadata } from 'next'

// /how-to-use — added 2 Oct 2026. Rachel: "Some parents have trouble finding
// Minta... Parents will forget their login, forget how to access her."
//
// Everything a parent needs to actually USE Plan B, in one findable place:
// what Minta is and where she lives, what the tracker is, how to put both on a
// phone, and — the one that matters most — how to get back in when you have
// forgotten everything. They do not need a password. The app has always sent
// one-tap email links; nobody ever told them.

export const metadata: Metadata = {
  title: 'How to use Plan B for PANS — find Minta, the tracker, and get back in',
  description:
    'Forgotten your login? You don’t need one. Here’s how to reach Minta, how to start the daily tracker, and how to put both on your phone.',
}

const ink = 'var(--ink)'
const teal = 'var(--teal)'
const soft = 'var(--sand-dark)'
const sand = 'var(--sand)'
const APP = 'https://app.planbforpans.com'

export default function HowToUse() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ padding: 'clamp(52px,8vw,92px) 24px clamp(20px,4vw,34px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', margin: '0 0 18px' }}>PLAN B FOR PANS &middot; USING IT</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px,6.4vw,58px)', lineHeight: 1.02, letterSpacing: '-0.026em', margin: '0 0 18px' }}>
            Can’t get in? <em style={{ color: teal, fontStyle: 'italic' }}>You don’t need your password.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, margin: 0 }}>
            Plan B for PANS never required one. If you’ve forgotten everything, this takes about fifteen seconds.
          </p>
        </div>
      </section>

      {/* GET BACK IN — first, because it is the most common problem */}
      <section style={{ padding: '0 24px clamp(34px,5vw,54px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', background: teal, color: '#FFFFFF', padding: 'clamp(26px,4.4vw,38px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#cfe3df', margin: '0 0 14px' }}>If you’re locked out</p>
          <ol style={{ margin: 0, paddingLeft: 20, fontSize: 17, lineHeight: 1.8, color: '#e6f0ee' }}>
            <li>Go to <strong style={{ color: '#FFFFFF' }}>app.planbforpans.com/minta</strong></li>
            <li>Type the email address you signed up with</li>
            <li>Check your inbox and tap the link we send</li>
          </ol>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#e6f0ee', margin: '16px 0 22px' }}>
            That’s it. Your child’s file opens with everything in it. No password to remember, no account to
            recover. You can do this as often as you need to, from any phone or computer.
          </p>
          <a href={`${APP}/minta`} rel="noopener" style={{ display: 'inline-block', background: '#FFFFFF', color: teal, fontSize: 16, fontWeight: 700, padding: '14px 30px', borderRadius: 2, textDecoration: 'none' }}>
            Get my link →
          </a>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#cfe3df', margin: '16px 0 0' }}>
            Nothing arrives? Check spam, and make sure you’re using the same email you signed up with. Still
            stuck — email Rachel and she’ll let you in herself.
          </p>
        </div>
      </section>

      {/* WHO MINTA IS */}
      <section style={{ padding: '0 24px clamp(26px,4vw,40px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', borderTop: '1px solid var(--ink)', padding: 'clamp(26px,4vw,36px) 0 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', margin: '0 0 12px' }}>&sect; 02</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(26px,4.2vw,40px)', letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.1 }}>Who Minta is</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 14px' }}>
            Minta is our AI, and she has read your child’s entire record — every lab you’ve uploaded, every
            note, the history you gave us. She writes your synthesis.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 14px' }}>
            She isn’t a chatbot you start over with each time. She answers about <em>your</em> child. You can
            ask her anything, any day: a result you don’t understand, a flare that came from nowhere, whether
            something is worth chasing, what to ask at Thursday’s appointment. She’ll also tell you when she
            doesn’t know, which is deliberate.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: soft, margin: '0 0 18px', fontStyle: 'italic' }}>
            Things parents actually ask her: “Why was this week so bad?” · “Is this new symptom something to
            worry about?” · “What should we try next?” · “What does this lab mean?” · “What do I say to his
            doctor on Friday?”
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: soft, margin: '0 0 18px' }}>
            <strong>Where to find her:</strong> she lives at <strong>app.planbforpans.com/minta</strong> — the
            same address that gets you back in. Bookmark that one page and you never have to remember anything
            else.
          </p>
          <a href={`${APP}/minta`} rel="noopener" style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 15, fontWeight: 700, padding: '13px 28px', borderRadius: 2, textDecoration: 'none' }}>
            Talk to Minta →
          </a>
        </div>
      </section>

      {/* THE TRACKER */}
      <section style={{ padding: '0 24px clamp(26px,4vw,40px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', borderTop: '1px solid var(--ink)', padding: 'clamp(26px,4vw,36px) 0 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', margin: '0 0 12px' }}>&sect; 03</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(26px,4.2vw,40px)', letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.1 }}>The daily tracker</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 14px' }}>
            A place to score your child each day — the rage, the tics, the stomach pain, the sleep, whatever
            her picture actually is. Zero to ten. About two minutes.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 14px' }}>
            It isn’t a separate app, and it isn’t extra homework. The tracker is how Minta learns your
            daughter. Every day you log, she answers you from more of your own data instead of guessing — so
            when you ask why a week went badly, she’s reading ninety days of your observations against her
            labs and what you tried last month.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: soft, margin: '0 0 18px' }}>
            Start while things are ordinary. A few weeks of normal days is what makes a bad week readable
            later — and a line on a page, with dates on it, is the single thing that most often changes a
            doctor’s mind.
          </p>
          <a href={`${APP}/minta`} rel="noopener" style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 15, fontWeight: 700, padding: '13px 28px', borderRadius: 2, textDecoration: 'none' }}>
            Open my tracker →
          </a>
        </div>
      </section>

      {/* PUT IT ON YOUR PHONE */}
      <section style={{ padding: '0 24px clamp(56px,9vw,100px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', borderTop: '1px solid var(--ink)', padding: 'clamp(26px,4vw,36px) 0 0' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--mute)', margin: '0 0 12px' }}>&sect; 04</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(26px,4.2vw,40px)', letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.1 }}>Put it on your phone</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 16px' }}>
            This takes a minute and it’s the difference between using Plan B for PANS and meaning to. There’s nothing
            to download — it becomes an icon on your home screen like any other app.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: soft, margin: '0 0 10px' }}>
            <strong>iPhone:</strong> open <strong>app.planbforpans.com</strong> in Safari → tap the Share
            button (the square with the arrow) → scroll down → <strong>Add to Home Screen</strong>.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: soft, margin: '0 0 16px' }}>
            <strong>Android:</strong> open <strong>app.planbforpans.com</strong> in Chrome → tap the three-dot
            menu → <strong>Install app</strong> or <strong>Add to Home Screen</strong>.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: soft, margin: 0 }}>
            Once it’s there, it stays signed in. No more lost passwords — which is the reason most parents
            stop, and it’s avoidable.
          </p>
        </div>
      </section>
    </main>
  )
}
