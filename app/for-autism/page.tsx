import type { Metadata } from 'next'
import HeaderLang from '../_components/HeaderLang'

// Plan B for Autism (Rachel, 2026-11-19). Served at planbforautism.com/.org via middleware rewrite.
// Same offer as every Plan B site (free Synthesis, Minta the troubleshooter, tracker, Case Review, app),
// packaged for autism families. Language: autism and the body; never "cure", never the puzzle piece.
const DESC = 'Your child’s autism is real. So are the gut, the sleep, the infections and the inflammation that can make everything harder. Free help from Plan B, a nonprofit that follows children night by night.'
export const metadata: Metadata = {
  title: 'Plan B for Autism · Autism and the body',
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-autism' },
  openGraph: { title: 'Plan B for Autism', description: DESC, url: 'https://planbforpans.com/for-autism', siteName: 'Plan B for Autism', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for Autism', description: DESC },
}

const APP = 'https://app.planbforpans.com'
const FROM = 'autism'
const BEHAVIORS = 'https://planbforpans.com/learning/behaviors-are-a-clue'

const css = `
body:has(.pa) .site-header, body:has(.pa) > footer { display:none !important }
body:has(.pa){ background:#F6F4F9 }
.pa{ --ink:#1E2230; --dusk:#2F3E63; --dusk2:#43568A; --lilac:#C9C3E6; --peach:#F2C9A9; --paper:#F6F4F9; --rule:#DDD8EA;
  color:var(--ink); font-family: var(--f-instrument), 'Instrument Sans', system-ui, sans-serif; font-size:17px; line-height:1.65 }
.pa *{ box-sizing:border-box } .pa a{ color:inherit }
.pa h1,.pa h2,.pa h3,.pa p,.pa li{ color:inherit }
.pa .serif{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400 }
.pa .mono{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.2em; text-transform:uppercase; font-size:11.5px }
.pa .wrap{ max-width:1080px; margin:0 auto; padding:0 20px }
.pa .hero{ background: radial-gradient(ellipse 80% 70% at 80% 30%, #43568A 0%, #2F3E63 45%, #1F2946 100%); color:#F6F4F9; padding:26px 0 70px; position:relative; overflow:hidden }
.pa .stars{ position:absolute; inset:0; background-image: radial-gradient(1.5px 1.5px at 12% 22%, #fff8, transparent), radial-gradient(1px 1px at 32% 70%, #fff7, transparent), radial-gradient(1.5px 1.5px at 58% 16%, #fff9, transparent), radial-gradient(1px 1px at 78% 62%, #fff6, transparent), radial-gradient(1.2px 1.2px at 90% 30%, #fff8, transparent), radial-gradient(1px 1px at 45% 40%, #fff5, transparent); opacity:.8 }
.pa .top{ display:flex; justify-content:space-between; align-items:center; gap:12px; position:relative }
.pa .brand{ font-family: var(--f-bodoni), Georgia, serif; font-size:24px; text-decoration:none }
.pa .brand em{ color:var(--peach) }
.pa .grid{ display:grid; grid-template-columns: 1.15fr .85fr; gap:30px; align-items:center; margin-top:46px; position:relative }
.pa h1{ font-size:clamp(44px,7vw,84px); line-height:.98; margin:0 }
.pa h1 em{ color:var(--peach) }
.pa .lede{ font-size:clamp(18px,2.2vw,22px); line-height:1.5; color:#E3E1F0; margin:22px 0 28px; max-width:600px }
.pa .girl{ width:100%; max-width:420px; justify-self:end; filter: drop-shadow(0 30px 60px rgba(10,14,30,.45)); opacity:0; animation: fade 1.4s .3s forwards }
.pa .girl img{ width:100%; height:auto; filter: invert(1) sepia(.15) saturate(1.2) hue-rotate(200deg) brightness(1.02) }
.pa .btns{ display:flex; flex-wrap:wrap; gap:12px }
.pa .btn{ display:inline-block; padding:14px 22px; border-radius:999px; text-decoration:none; font-weight:600; font-size:15px }
.pa .btn.p{ background:var(--peach); color:#2A1E14 } .pa .btn.g{ border:1px solid rgba(246,244,249,.55); color:#F6F4F9 } .pa .btn.d{ background:var(--dusk); color:#fff }
.pa section{ padding: clamp(60px,8vw,110px) 0 }
.pa h2{ font-size:clamp(32px,4.6vw,54px); line-height:1.06; margin:10px 0 18px }
.pa h2 em{ color:var(--dusk2) }
.pa .minta{ background:#fff; border:1px solid var(--rule); border-radius:22px; padding:clamp(22px,4vw,40px); box-shadow:0 30px 70px -40px rgba(47,62,99,.45) }
.pa .ask{ display:flex; gap:8px; margin-top:18px }
.pa .ask input{ flex:1; min-width:0; font-size:17px; padding:15px 20px; border:1px solid #CFCADF; border-radius:999px; font-family:inherit }
.pa .ask button{ border:0; border-radius:999px; background:var(--dusk); color:#fff; font-weight:600; padding:0 22px; font-size:15px; cursor:pointer }
.pa .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:14px }
.pa .chips a{ text-decoration:none; border:1px solid var(--rule); background:#F6F4F9; border-radius:999px; padding:8px 14px; font-size:13.5px }
.pa .cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:16px; margin-top:22px }
.pa .card{ background:#fff; border:1px solid var(--rule); border-radius:18px; padding:22px; text-decoration:none; display:block }
.pa .card .k{ color:var(--dusk2) }
.pa .card h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:8px 0 6px }
.pa .card p{ margin:0; font-size:15.5px; color:#4A4E5E }
.pa .signs{ columns:2 260px; column-gap:34px; margin-top:16px }
.pa .signs li{ break-inside:avoid; margin:0 0 12px; padding-inline-start:4px }
.pa .band{ background:var(--dusk); color:#F6F4F9 }
.pa .band h2 em{ color:var(--peach) }
.pa .quote{ font-family: var(--f-bodoni), Georgia, serif; font-style:italic; font-size:clamp(22px,3vw,32px); line-height:1.35; max-width:820px }
.pa .foot{ background:#141A2E; color:#B8BCD2; padding:44px 0 88px; font-size:14.5px }
.pa .foot a{ color:#E8E6F2 }
.pa .fam{ display:flex; flex-wrap:wrap; gap:10px 18px; margin:14px 0 18px }
.pa{ overflow-x:hidden }
.pa .grid > *{ min-width:0 }
.pa .topr{ display:flex; gap:10px; align-items:center }
.pa .topr a, .pa .topr .nav-lang{ min-height:44px; display:inline-flex; align-items:center; text-decoration:none; color:#E3E1F0 }
.pa .topr .nav-lang{ padding:0 14px; font-family: var(--f-plex), monospace; letter-spacing:.1em; font-size:12px; text-transform:uppercase }
.pa .brand{ min-height:44px; display:inline-flex; align-items:center }
.pa .btn{ min-height:48px; display:inline-flex; align-items:center }
.pa .chips a{ min-height:44px; display:inline-flex; align-items:center }
.pa .foot a{ min-height:44px; display:inline-flex; align-items:center }
.pa .manifesto{ background:linear-gradient(180deg,#1F2946 0%, #2F3E63 100%); color:#F6F4F9; padding-top:clamp(40px,6vw,80px) }
.pa .belief{ font-family: var(--f-bodoni), Georgia, serif; font-size:clamp(26px,3.6vw,44px); line-height:1.22; margin:14px 0 0; max-width:900px }
.pa .belief em{ color:var(--peach) }
.pa .sig{ font-family: var(--f-bodoni), Georgia, serif; font-style:italic; font-size:24px; color:var(--peach); margin:22px 0 0 }
.pa .research{ border-top:1px solid rgba(201,195,230,.3); margin-top:44px; padding-top:30px; display:grid; grid-template-columns:auto 1fr; gap:22px; align-items:start; max-width:900px }
.pa .research p{ margin:0; font-size:clamp(18px,2vw,21px); color:#E3E1F0 }
.pa .ages{ display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:26px 0 }
.pa .age{ border-radius:18px; padding:24px; border:1px solid var(--rule); background:#fff }
.pa .age.young{ background:#EEEBF7 }
.pa .age h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:28px; margin:6px 0 6px }
.pa .age p{ margin:0; font-size:15.5px; color:#4A4E5E }
.pa .cols{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:16px; margin-top:16px }
.pa .col{ background:#fff; border:1px solid var(--rule); border-radius:18px; padding:22px }
.pa .col h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:6px 0 10px }
.pa .col ul{ margin:0; padding-inline-start:18px; font-size:15.5px } .pa .col li{ margin-bottom:8px }
.pa .frame{ border-inline-start:3px solid var(--peach); padding:4px 0 4px 16px; font-style:italic; color:#4A4E5E; margin:24px 0 0 }
.pa .teaser{ display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid var(--rule); border-radius:18px; padding:26px; background:#fff; text-decoration:none; margin-top:18px }
.pa .clue{ font-family: var(--f-bodoni), Georgia, serif; font-size:clamp(20px,2.4vw,26px); line-height:1.3; margin:0 0 6px }
@media (max-width:760px){ .pa .ages{ grid-template-columns:1fr } .pa .research{ grid-template-columns:1fr; gap:8px } }
@keyframes fade{ to{ opacity:1 } }
@keyframes rise{ from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:none } }
.pa .r{ opacity:0; animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards } .pa .d1{animation-delay:.1s} .pa .d2{animation-delay:.35s} .pa .d3{animation-delay:.6s}
@media (max-width:760px){ .pa .grid{ grid-template-columns:1fr } .pa .girl{ max-width:240px; justify-self:start; order:-1 } }
@media (prefers-reduced-motion: reduce){ .pa .r,.pa .girl{ animation:none; opacity:1 } }
`

const IDEAS = [
  'My autistic son suddenly started having rages after a cold. Why?',
  'My daughter is constipated all the time and her behavior gets worse. Could they be connected?',
  'He lost words he used to have after being sick. What should I ask the doctor?',
  'Why is my child up at 2am every night?',
]

export default function PlanBForAutism() {
  return (
    <div className="pa">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="hero">
        <div className="stars" aria-hidden />
        <div className="wrap top">
          <a className="brand" href="/for-autism">Plan B&nbsp;<em>for Autism</em></a>
          <div className="topr mono">
            <HeaderLang />
            <a href={`${APP}/sign-in`}>Sign in</a>
          </div>
        </div>
        <div className="wrap grid">
          <div>
            <p className="mono r d1" style={{ color: 'var(--lilac)', margin: '0 0 16px' }}>Autism and the body · free · a nonprofit</p>
            <h1 className="serif r d2">Your child’s autism is real. <em>So is everything else.</em></h1>
            <p className="lede r d3">The gut, the sleep, the infections, the inflammation, the sudden rages and lost words that nobody can explain. Plan B helps you read your child’s whole story, find what makes everything harder, and track what helps. Free.</p>
            <div className="btns r d3">
              <a className="btn p" href={`${APP}/ask?from=${FROM}`}>Ask Minta now</a>
              <a className="btn g" href={`${APP}/signup?from=${FROM}`}>Start your child’s free Synthesis</a>
            </div>
          </div>
          <div className="girl"><img src="/girl-silhouette.png" alt="" /></div>
        </div>
      </header>

      <section className="manifesto">
        <div className="wrap">
          <p className="mono" style={{ color: 'var(--lilac)', margin: 0 }}>What we believe</p>
          <blockquote style={{ margin: 0 }}>
            <p className="belief">Autism is not a chronic condition. It’s a name to describe things we don’t understand. <em>We think that PANS/PANDAS start when the immune system is older and autism hits when it’s younger.</em> Plan B suspects both are fixable and we are dedicated to figuring out a way out for all children.</p>
            <p className="sig">— Rachel</p>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--lilac)' }}>Founder of Plan B, and a mother who has walked this road</p>
          </blockquote>
          <div className="research">
            <p className="mono" style={{ color: 'var(--peach)', fontSize: 11.5, paddingTop: 6 }}>Our research</p>
            <p>Most autism research takes a snapshot. We follow children night by night: infections, the immune system, food, sleep and treatments. Every family that tracks helps us find what makes symptoms rise and fall, and the way out.</p>
          </div>
          <div className="btns" style={{ marginTop: 28 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}&next=/tracker`}>Start tracking, free</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="minta">
            <p className="mono" style={{ color: 'var(--dusk2)', margin: 0 }}>Minta · your 2am troubleshooter</p>
            <h2 className="serif" style={{ marginTop: 8 }}>Something changed tonight. <em>Ask Minta why.</em></h2>
            <p style={{ maxWidth: 700, margin: 0 }}>Minta is Plan B’s AI, built for families like yours. Tell her what happened, a meltdown, a bad night, a new behavior, and she helps you think through what might be driving it and what to try or ask next. She gets sharper once she’s read your child’s records.</p>
            <form className="ask" action={`${APP}/ask`} method="get">
              <input type="hidden" name="from" value={FROM} />
              <input name="q" placeholder="What’s going on with your child?" aria-label="Your question for Minta" />
              <button type="submit">Ask</button>
            </form>
            <div className="chips">{IDEAS.map((q) => <a key={q} href={`${APP}/ask?from=${FROM}&q=${encodeURIComponent(q)}`}>{q}</a>)}</div>
            <p style={{ fontSize: 12.5, color: '#6B6F80', margin: '12px 0 0' }}>Minta is an AI and can be wrong. Plan B is not a doctor and this isn’t medical advice. In an emergency, call 911 or 988.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono" style={{ color: 'var(--dusk2)' }}>Signs worth a closer look</p>
          <h2 className="serif">When it’s <em>more than</em> autism.</h2>
          <p style={{ maxWidth: 760 }}>Many autistic children also carry something treatable in the body that makes everything harder. These are the patterns parents tell us about most:</p>
          <ul className="signs">
            <li><b>A sudden change</b>: rage, fear, rituals or tics that appeared fast, often after an illness</li>
            <li><b>Lost words or skills</b> after being sick</li>
            <li><b>Constipation</b> that never really goes away</li>
            <li><b>Sleep</b> that falls apart, or 2am wakings</li>
            <li><b>Food</b> narrowing to a few safe things, or new fears about eating</li>
            <li><b>Flares</b> that come with colds, strep, a moldy building, or a season</li>
            <li><b>A child who is better away from home</b>, on a trip or at grandma’s</li>
            <li><b>Eczema, allergies or infections</b> that never quite clear</li>
          </ul>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono" style={{ color: 'var(--dusk2)' }}>Autism and the immune system</p>
          <h2 className="serif">One story, <em>at different ages.</em></h2>
          <p style={{ maxWidth: 780 }}>Here is what we think, and what we are testing with every family who tracks. An infection or an immune hit can change how a child’s brain works. What it looks like may depend on how old the immune system is when it lands.</p>
          <div className="ages">
            <div className="age"><span className="mono" style={{ color: 'var(--dusk2)' }}>An older immune system</span><h3>It can look like PANS</h3><p>A child who was doing fine, then overnight: OCD, rage, fear, food refusal. Parents can often name the week it started.</p></div>
            <div className="age young"><span className="mono" style={{ color: 'var(--dusk2)' }}>A younger immune system</span><h3>It can look like autism</h3><p>The hit lands while the immune system and the brain are still being built. The change is slower, earlier and harder to date, so it gets a different name.</p></div>
          </div>
          <div className="cols">
            <div className="col"><span className="mono" style={{ color: 'var(--dusk2)' }}>What families track</span><h3>One minute a night</h3><ul><li>Meltdowns, sleep, words and eye contact</li><li>Bowel movements and food</li><li>Colds, coughs, fevers, anyone sick at home</li><li>Every treatment, and the day it started</li></ul></div>
            <div className="col"><span className="mono" style={{ color: 'var(--dusk2)' }}>The clues</span><h3>What we look at</h3><ul><li><b>Infections</b>: strep, Mycoplasma, viruses, tick-borne</li><li><b>Immune labs</b>: can the body make antibodies and clear a bug?</li><li><b>Mold</b> at home or school</li><li><b>The gut</b>: constipation, yeast</li><li><b>Blood sugar</b> swings behind meltdowns</li></ul></div>
            <div className="col"><span className="mono" style={{ color: 'var(--dusk2)' }}>The tests that sort kids</span><h3>What to ask for</h3><ul><li><b>The swab set</b>: strep PCR throat swab and a Mycoplasma PCR, for your child and everyone at home</li><li><b>Pneumococcal titers + immunoglobulins</b> (IgG, IgA, IgM, IgG subclasses): does the immune system answer?</li><li><b>Glucose during a meltdown</b>: a home meter, checked in the moment</li><li><b>FRAT</b>, the folate receptor antibody test, when speech stalled or slipped</li></ul></div>
          </div>
          <p className="frame">Clues to test, not a diagnosis. We update when the data says otherwise. We’re not doctors: everything here is made to take to yours.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono" style={{ color: 'var(--dusk2)' }}>Behaviors are a clue</p>
          <h2 className="serif">What the behavior <em>is pointing at.</em></h2>
          <p className="clue">Sudden OCD after a sore throat: think strep.</p>
          <p className="clue">Rage with nightmares or urinary urgency: think Bartonella.</p>
          <p className="clue">Meltdowns after hunger, exercise or sweets: think blood-sugar swings.</p>
          <a className="teaser" href={BEHAVIORS}>
            <span><span className="mono" style={{ color: 'var(--dusk2)' }}>Read the guide</span><br /><span className="serif" style={{ fontSize: 26 }}>Behaviors are a clue: rage, food refusal, tics, sleep and more</span></span>
            <span aria-hidden style={{ fontSize: 28 }}>→</span>
          </a>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono" style={{ color: 'var(--lilac)' }}>Everything is free</p>
          <h2 className="serif">One family file. <em>Every tool.</em></h2>
          <div className="cards">
            <a className="card" href={`${APP}/signup?from=${FROM}`} style={{ color: 'var(--ink)' }}><span className="mono k">01 · Free</span><h3>Your child’s Synthesis</h3><p>Every lab and record, read together, so the clues line up. Questions and tests to bring to your doctor.</p></a>
            <a className="card" href={`${APP}/ask?from=${FROM}`} style={{ color: 'var(--ink)' }}><span className="mono k">02 · Free</span><h3>Minta, any hour</h3><p>Your troubleshooter for the hard nights, built for these kids.</p></a>
            <a className="card" href={`${APP}/signup?from=${FROM}&next=/tracker`} style={{ color: 'var(--ink)' }}><span className="mono k">03 · Free</span><h3>A one-minute tracker</h3><p>See what helps and what sets off a flare, on a chart you can show the doctor.</p></a>
            <a className="card" href="https://planbforpans.com/app" style={{ color: 'var(--ink)' }}><span className="mono k">04 · Free</span><h3>Get the app</h3><p>Plan B on your phone, in the App Store and Google Play.</p></a>
          </div>
          <p style={{ marginTop: 22, color: '#D9D7E8' }}>Want a second set of eyes? <a href="https://planbforpans.com/case-review" style={{ color: 'var(--peach)' }}>A Case Review with Rachel</a> goes through your child’s whole story with you.</p>
          <p style={{ marginTop: 10, color: '#D9D7E8' }}>What happens next: biology first, then whatever your child needs. <a href="https://planbforpans.com/#care-path" style={{ color: 'var(--peach)' }}>See the two-phase care path →</a></p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="quote">“For the first time, every detail of my son’s history was considered together, rather than just the one sliver relevant to whichever specialist we happened to be seeing.”</p>
          <p style={{ color: '#5A5E70' }}>E., Florida · after her Case Review</p>
          <div className="btns" style={{ marginTop: 22 }}>
            <a className="btn d" href={`${APP}/signup?from=${FROM}`}>Start free</a>
            <a className="btn d" style={{ background: 'var(--dusk2)' }} href={`${APP}/join?src=${FROM}`}>Just keep me posted</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <p className="serif" style={{ fontSize: 24, color: '#F6F4F9', margin: '0 0 6px' }}>Plan B for Autism</p>
          <p style={{ margin: 0 }}>Part of the Plan B family, from <a href="https://planbforpans.com">Plan B for PANS</a>, a Colorado nonprofit.</p>
          <div className="fam">
            <a href="https://planbforpans.com">Plan B for PANS</a>
            <a href="https://planbforpans.com/for-autism">Plan B for Autism</a>
            <a href="https://planbforpans.com/for-ocd">Plan B for OCD</a>
            <a href="https://planbforpans.com/for-adhd">Plan B for ADHD</a>
            <a href="https://planbforpans.com/for-arfid">Plan B for ARFID</a>
            <a href="https://planbforpans.com/for-constipation">Plan B for Constipation</a>
            <a href="https://askminta.org">Ask Minta</a>
            <a href="https://unheardtrees.org">The Unheard Trees</a>
            <a href="https://planbforpans.com/directory">Find a doctor</a>
            <a href="https://planbforpans.com/donate">Donate</a>
          </div>
          <p style={{ margin: 0, fontSize: 13 }}>Educational information only; not medical advice. Plan B does not diagnose or treat. Always work with your child’s doctor.</p>
        </div>
      </footer>
    </div>
  )
}
