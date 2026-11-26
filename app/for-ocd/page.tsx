import type { Metadata } from 'next'
import HeaderLang from '../_components/HeaderLang'
import { EarlySigns } from '../_components/ConditionFigures'

// Plan B for OCD (Rachel, 2026-11-25: "Plan B for OCD"). Served at planbforocd.com/.org via middleware rewrite.
// For parents whose child's OCD came on suddenly or flares with illness. Same free tools as every Plan B site.
const TITLE = 'Plan B for OCD · When OCD comes on suddenly'
const DESC = 'Sudden OCD after a sore throat? Think strep. Free help from a nonprofit for parents whose child’s OCD came on overnight or flares with every illness: what to track, which tests, and what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-ocd' },
  openGraph: { title: 'Plan B for OCD', description: DESC, url: 'https://planbforpans.com/for-ocd', siteName: 'Plan B for OCD', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for OCD', description: DESC },
}

const APP = 'https://app.planbforpans.com'
const FROM = 'ocd'
const BEHAVIORS = 'https://planbforpans.com/learning/behaviors-are-a-clue'

const css = `
body:has(.po) .site-header, body:has(.po) > footer { display:none !important }
body:has(.po){ background:#F3F0E6 }
.po{ --ink:#16261F; --pine:#1E3A2F; --pine2:#2C5141; --moss:#4E7A5E; --saffron:#E3A93C; --paper:#F3F0E6; --card:#FBFAF5; --rule:#DCD6C4; --muted:#56605A;
  color:var(--ink); font-family: var(--f-instrument), 'Instrument Sans', system-ui, sans-serif; font-size:17px; line-height:1.65; overflow-x:hidden }
.po *{ box-sizing:border-box } .po a{ color:inherit }
.po h1,.po h2,.po h3,.po p,.po li{ color:inherit }
.po .serif{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400 }
.po .mono{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px }
.po .wrap{ max-width:1100px; margin:0 auto; padding:0 20px }
.po .hero{ background-color:var(--pine); color:#F3F0E6; padding:22px 0 72px; position:relative; overflow:hidden;
  background-image: linear-gradient(rgba(243,240,230,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,230,.06) 1px, transparent 1px), radial-gradient(ellipse 70% 80% at 85% 20%, #2C5141 0%, #1E3A2F 60%, #14291F 100%);
  background-size: 28px 28px, 28px 28px, 100% 100% }
.po .top{ display:flex; justify-content:space-between; align-items:center; gap:12px; position:relative; flex-wrap:wrap }
.po .brand{ font-family: var(--f-bodoni), Georgia, serif; font-size:24px; text-decoration:none; min-height:44px; display:inline-flex; align-items:center }
.po .brand em{ color:var(--saffron) }
.po .topr{ display:flex; gap:10px; align-items:center; font-size:12px }
.po .topr a, .po .topr .nav-lang{ min-height:44px; display:inline-flex; align-items:center; text-decoration:none; color:#E6E2D3 }
.po .topr .nav-lang{ padding:0 14px; font-family: var(--f-plex), monospace; letter-spacing:.1em; font-size:12px }
.po .grid{ display:grid; grid-template-columns: 1.1fr .9fr; gap:36px; align-items:center; margin-top:44px; position:relative }
.po .grid > *{ min-width:0 }
.po h1{ font-size:clamp(42px,6.6vw,80px); line-height:1; margin:0 }
.po h1 em{ color:var(--saffron) }
.po .lede{ font-size:clamp(18px,2.1vw,21px); line-height:1.5; color:#DCE3DC; margin:22px 0 28px; max-width:590px }
.po .btns{ display:flex; flex-wrap:wrap; gap:12px }
.po .btn{ display:inline-flex; align-items:center; min-height:48px; padding:12px 22px; border-radius:6px; text-decoration:none; font-weight:600; font-size:15px }
.po .btn.p{ background:var(--saffron); color:#24190A } .po .btn.g{ border:1px solid rgba(243,240,230,.5); color:#F3F0E6 } .po .btn.d{ background:var(--pine); color:#fff }
.po .chart{ background:rgba(10,24,18,.35); border:1px solid rgba(243,240,230,.16); border-radius:10px; padding:18px 18px 12px }
.po .chart svg{ width:100%; height:auto; display:block }
.po .chart .cap{ font-size:12px; color:#AFC0B4; margin:8px 0 0 }
.po .line{ stroke-dasharray:900; stroke-dashoffset:900; animation: draw 2.4s .5s cubic-bezier(.4,.1,.2,1) forwards }
.po section{ padding: clamp(58px,8vw,104px) 0 }
.po h2{ font-size:clamp(32px,4.4vw,52px); line-height:1.06; margin:10px 0 18px }
.po h2 em{ color:var(--moss) }
.po .k{ color:var(--moss) }
.po .frame{ border-inline-start:3px solid var(--saffron); padding:4px 0 4px 16px; margin:0 0 26px; font-style:italic; color:var(--muted) }
.po .clues{ list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr)); gap:0 34px }
.po .clues li{ border-top:1px solid var(--rule); padding:16px 0 }
.po .clues b{ display:block; font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:22px; line-height:1.25; margin-bottom:4px }
.po .clues span{ color:var(--muted); font-size:15.5px }
.po .minta{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:clamp(22px,4vw,40px); box-shadow:0 30px 70px -44px rgba(30,58,47,.55) }
.po .ask{ display:flex; gap:8px; margin-top:18px }
.po .ask input{ flex:1; min-width:0; font-size:17px; padding:13px 16px; min-height:50px; border:1px solid #C9C2AC; border-radius:6px; font-family:inherit; background:#fff }
.po .ask button{ border:0; border-radius:6px; background:var(--pine); color:#fff; font-weight:600; padding:0 22px; min-height:50px; font-size:15px; cursor:pointer }
.po .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:14px }
.po .chips a{ text-decoration:none; border:1px solid var(--rule); background:var(--paper); border-radius:6px; padding:10px 14px; font-size:13.5px; min-height:44px; display:inline-flex; align-items:center }
.po .two{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); gap:18px; margin-top:20px }
.po .panel{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:24px }
.po .panel h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:28px; margin:6px 0 10px }
.po .panel ul{ margin:0; padding-inline-start:20px } .po .panel li{ margin-bottom:6px }
.po .tests{ width:100%; border-collapse:collapse; margin-top:16px }
.po .tests td{ border-top:1px solid var(--rule); padding:16px 12px 16px 0; vertical-align:top }
.po .tests td:first-child{ width:38%; font-weight:600 }
.po .tests .code{ display:block; font-family: var(--f-plex), monospace; font-size:12px; color:var(--muted); font-weight:400; margin-top:3px }
.po .band{ background:var(--pine); color:#F3F0E6 }
.po .band h2 em{ color:var(--saffron) }
.po .band .k{ color:#A9C7B2 }
.po .cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:16px; margin-top:22px }
.po .card{ background:var(--card); color:var(--ink); border-radius:10px; padding:22px; text-decoration:none; display:block }
.po .card h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:8px 0 6px }
.po .card p{ margin:0; font-size:15.5px; color:var(--muted) }
.po .helped{ counter-reset:h; list-style:none; padding:0; margin:20px 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:18px }
.po .helped li{ counter-increment:h; background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:22px }
.po .helped li::before{ content:"0" counter(h); font-family: var(--f-plex), monospace; color:#9A6A14; font-size:13px; letter-spacing:.15em; display:block }
.po .helped h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:6px 0 8px }
.po .helped p{ margin:0; font-size:15.5px; color:var(--muted) }
.po .teaser{ display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid var(--rule); border-radius:10px; padding:24px; background:var(--card); text-decoration:none }
.po .foot{ background:#0F1E17; color:#AFBCB3; padding:44px 0 88px; font-size:14.5px }
.po .foot a{ color:#ECE8DA; min-height:44px; display:inline-flex; align-items:center }
.po .fam{ display:flex; flex-wrap:wrap; gap:0 20px; margin:10px 0 14px }
@keyframes draw{ to{ stroke-dashoffset:0 } }
@keyframes rise{ from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:none } }
.po .r{ opacity:0; animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards } .po .d1{animation-delay:.1s} .po .d2{animation-delay:.3s} .po .d3{animation-delay:.5s} .po .d4{animation-delay:.75s}
@media (max-width:820px){ .po .grid{ grid-template-columns:1fr } .po .tests td{ display:block; width:auto !important; padding:4px 0 } .po .tests td:first-child{ padding-top:16px } .po .tests td + td{ border-top:0; padding-bottom:16px } }
@media (prefers-reduced-motion: reduce){ .po .r{ animation:none; opacity:1 } .po .line{ animation:none; stroke-dashoffset:0 } }
`

const IDEAS = [
  'My son’s OCD started a week after strep. What should I ask the doctor?',
  'Her rituals get worse every time she gets a cold. Why?',
  'Which swabs should our whole family get?',
  'How do I explain PANDAS to a pediatrician who doesn’t believe in it?',
]

const CLUES: [string, string][] = [
  ['Sudden OCD after a sore throat: think strep.', 'That is PANDAS, the original pattern. A sibling with strep counts too.'],
  ['After a cough or “walking pneumonia” in the house: think Mycoplasma.', 'It can set off OCD without ever looking like pneumonia.'],
  ['After the flu or COVID: think a virus.', 'Any infection can be the spark when the immune system overreacts.'],
  ['Better away from one house, school or car: think mold.', 'Mold keeps the immune system on edge.'],
  ['OCD with rage, nightmares or urinary urgency: think Bartonella.', 'Spread by cat scratches, fleas and ticks.'],
  ['Flares every time the classroom gets sick.', 'An immune system reacting to each new bug. Track it and the pattern shows.'],
]

const TESTS: [string, string | null, string][] = [
  ['Strep PCR throat swab: your child and everyone at home', 'LabCorp 180800', 'Finds strep that is there right now. Swab the whole household: a sibling or parent who carries strep without symptoms can keep re-infecting your child.'],
  ['Perianal strep swab', null, 'Strep can live around the bottom. Ask for it when there is redness, itching or a flare that keeps coming back.'],
  ['Mycoplasma PCR (respiratory panel swab)', 'LabCorp 139845', 'Finds Mycoplasma now. Pair it with Mycoplasma pneumoniae IgG + IgM blood tests for the history.'],
  ['Strep titers: ASO + anti-DNase B, paired', null, 'Two blood markers of a past or recent strep. ASO peaks 3–6 weeks after infection, anti-DNase B at 6–8. Order both, and repeat in 4–6 weeks: a rise matters more than one number.'],
  ['Immunoglobulins (IgG, IgA, IgM, IgG subclasses) + pneumococcal titers', null, 'Can your child’s immune system make the antibodies it needs? A child who keeps getting hit may not be clearing infections.'],
  ['Test-of-cure swab, 2–4 weeks after treatment', null, 'Did the treatment work? A flare that comes back may be strep that never cleared.'],
]

export default function PlanBForOCD() {
  return (
    <div className="po">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="hero">
        <div className="wrap top">
          <a className="brand" href="/for-ocd">Plan B&nbsp;<em>for OCD</em></a>
          <div className="topr mono">
            <HeaderLang />
            <a href={`${APP}/sign-in`}>Sign in</a>
          </div>
        </div>
        <div className="wrap grid">
          <div>
            <p className="mono r d1" style={{ color: '#A9C7B2', margin: '0 0 16px' }}>When OCD comes on suddenly · free · a nonprofit</p>
            <h1 className="serif r d2">Sudden OCD after a sore throat? <em>Think strep.</em></h1>
            <p className="lede r d3">If your child’s OCD came on almost overnight, or gets worse every time they get sick, the trigger may be in the body. Sudden OCD can be an early sign that something in the body is driving the brain. Plan B helps you track the pattern, find the right tests and bring it all to your doctor. Free.</p>
            <div className="btns r d4">
              <a className="btn p" href={`${APP}/ask?from=${FROM}`}>Ask Minta now</a>
              <a className="btn g" href={`${APP}/signup?from=${FROM}`}>Start your child’s free Synthesis</a>
            </div>
          </div>
          <figure className="chart r d3" style={{ margin: 0 }}>
            <p className="mono" style={{ color: '#A9C7B2', margin: '0 0 10px' }}>Fig. 1 · What tracking shows</p>
            <svg viewBox="0 0 420 230" role="img" aria-label="An illustration: symptoms are low, rise sharply days after a sore throat, and fall after the infection is treated.">
              <g stroke="rgba(243,240,230,.18)" strokeWidth="1">
                <line x1="30" y1="200" x2="410" y2="200" /><line x1="30" y1="20" x2="30" y2="200" />
              </g>
              <line x1="110" y1="20" x2="110" y2="200" stroke="#E3A93C" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="250" y1="20" x2="250" y2="200" stroke="#A9C7B2" strokeWidth="1" strokeDasharray="4 4" />
              <text x="116" y="34" fill="#E3A93C" fontSize="12" fontFamily="monospace">sore throat</text>
              <text x="256" y="34" fill="#A9C7B2" fontSize="12" fontFamily="monospace">infection treated</text>
              <path className="line" d="M30 182 L60 180 L90 183 L110 181 L130 150 L150 78 L170 60 L190 66 L210 58 L230 70 L250 74 L270 104 L290 128 L320 150 L350 166 L380 172 L410 174" fill="none" stroke="#F3F0E6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              <text x="34" y="218" fill="rgba(243,240,230,.6)" fontSize="11" fontFamily="monospace">nights →</text>
              <text x="0" y="0" transform="translate(20 150) rotate(-90)" fill="rgba(243,240,230,.6)" fontSize="11" fontFamily="monospace">OCD</text>
            </svg>
            <figcaption className="cap">An illustration of the pattern, not a real child. Your own chart comes from the free tracker.</figcaption>
          </figure>
        </div>
      </header>

      <EarlySigns current="ocd" fig="Fig. 2" ink="var(--ink)" muted="var(--muted)" accent="#E3A93C" rule="var(--rule)" card="var(--card)" em="var(--moss)" />

      <section>
        <div className="wrap">
          <p className="mono k">Behaviors are a clue</p>
          <h2 className="serif">What came <em>right before</em> the OCD?</h2>
          <p className="frame">Clues to test, not a diagnosis. We update when the data says otherwise.</p>
          <ul className="clues">
            {CLUES.map(([b, s]) => <li key={b}><b>{b}</b><span>{s}</span></li>)}
          </ul>
          <a className="teaser" href={BEHAVIORS} style={{ marginTop: 28 }}>
            <span><span className="mono k">Read more</span><br /><span className="serif" style={{ fontSize: 26 }}>Behaviors are a clue: rage, food refusal, tics, sleep and more</span></span>
            <span aria-hidden style={{ fontSize: 28 }}>→</span>
          </a>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="minta">
            <p className="mono k" style={{ margin: 0 }}>Minta · your 2am troubleshooter</p>
            <h2 className="serif" style={{ marginTop: 8 }}>The rituals got worse tonight. <em>Ask Minta why.</em></h2>
            <p style={{ maxWidth: 700, margin: 0 }}>Minta is Plan B’s AI, built for families like yours. Tell her what changed: a new ritual, a fear that won’t let go, a bad night after a cold. She helps you think through what might be driving it and what to try or ask next. She gets sharper once she’s read your child’s records.</p>
            <form className="ask" action={`${APP}/ask`} method="get">
              <input type="hidden" name="from" value={FROM} />
              <input name="q" placeholder="What’s going on with your child?" aria-label="Your question for Minta" />
              <button type="submit">Ask</button>
            </form>
            <div className="chips">{IDEAS.map((q) => <a key={q} href={`${APP}/ask?from=${FROM}&q=${encodeURIComponent(q)}`}>{q}</a>)}</div>
            <p style={{ fontSize: 12.5, color: 'var(--muted)', margin: '12px 0 0' }}>Minta is an AI and can be wrong. Plan B is not a doctor and this isn’t medical advice. In an emergency, call 911 or 988.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">PANS and PANDAS, in plain words</p>
          <h2 className="serif">When OCD is <em>the immune system</em> talking.</h2>
          <p style={{ maxWidth: 760 }}>Most OCD builds slowly. PANS and PANDAS are different: the OCD arrives fast, often after an infection, and doctors think the immune system is reacting against the brain. They look for this:</p>
          <div className="two">
            <div className="panel">
              <span className="mono k">PANS</span>
              <h3>Any trigger</h3>
              <ul>
                <li><b>Sudden, severe OCD</b>, or a child who suddenly eats very little</li>
                <li>Plus at least two of: anxiety; mood swings or depression; rage, irritability or defiance; acting much younger; schoolwork falling apart; sensory or movement changes, including handwriting; sleep trouble, bedwetting or peeing often</li>
                <li>Not better explained by something else</li>
              </ul>
            </div>
            <div className="panel">
              <span className="mono k">PANDAS</span>
              <h3>Strep is the trigger</h3>
              <ul>
                <li><b>OCD and/or tics</b> that start suddenly</li>
                <li>Starts between age 3 and puberty</li>
                <li>Comes and goes in flares, tied to strep</li>
                <li>Often with hyperactivity or small jerky movements</li>
              </ul>
            </div>
          </div>
          <p style={{ maxWidth: 760, marginTop: 20, color: 'var(--muted)' }}>Only a doctor can diagnose PANS or PANDAS. What you bring them, a clear timeline and the right tests, makes that conversation much easier.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">What to track</p>
          <h2 className="serif">One minute a night. <em>The pattern shows itself.</em></h2>
          <div className="two">
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>How strong the OCD was today, 0 to 10</li>
              <li>New rituals, fears or intrusive thoughts</li>
              <li>Rage, crying, separation fears, sleep</li>
              <li>Food: what and how much</li>
            </ul>
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Sore throats, coughs, fevers, anyone sick at home</li>
              <li>Every treatment, and the day it started</li>
              <li>Where they were: home, school, a trip</li>
              <li>Peeing often, bedwetting, handwriting changes</li>
            </ul>
          </div>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}&next=/tracker`}>Start the free tracker</a>
          </div>
          <p style={{ marginTop: 18, color: '#C9D6CC', maxWidth: 760 }}>Every family that tracks also helps us find what makes symptoms rise and fall, and the way out.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="mono k">The tests</p>
          <h2 className="serif">What to ask for, <em>and why.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>Swabs first: they find what is there now. Blood tests tell the history. Bring this list to your doctor.</p>
          <table className="tests">
            <tbody>
              {TESTS.map(([n, code, why]) => (
                <tr key={n}><td>{n}{code && <span className="code">{code}</span>}</td><td>{why}</td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 18 }}><a href="https://planbforpans.com/tests" style={{ display: 'inline-flex', minHeight: 44, alignItems: 'center' }}>See every test, with costs and where to get them →</a></p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">What has brought it down</p>
          <h2 className="serif">Treat the trigger. <em>Treat the OCD.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>What families and published studies report has helped. Every child is different, and every one of these is decided with your doctor.</p>
          <ol className="helped">
            <li><h3>Treating the infection</h3><p>When a swab or titer finds strep or Mycoplasma, treating it, then checking it cleared with a test-of-cure swab. Treat the household carriers too.</p></li>
            <li><h3>ERP therapy</h3><p>Exposure and response prevention, the best-studied therapy for OCD. It works alongside treating the trigger, not instead of it.</p></li>
            <li><h3>Calming the inflammation</h3><p>Anti-inflammatory approaches, from simple to strong, chosen with your doctor based on how severe the flares are.</p></li>
          </ol>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16 }}>We’re not doctors. Everything we give you is made to take to yours. Never start, stop or change a medicine without your child’s doctor.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">Everything is free</p>
          <h2 className="serif">One family file. <em>Every tool.</em></h2>
          <div className="cards">
            <a className="card" href={`${APP}/signup?from=${FROM}`}><span className="mono k">01 · Free</span><h3>Your child’s Synthesis</h3><p>Every lab and record, read together, so the clues line up. Questions and tests to bring to your doctor.</p></a>
            <a className="card" href={`${APP}/ask?from=${FROM}`}><span className="mono k">02 · Free</span><h3>Minta, any hour</h3><p>Your troubleshooter for the hard nights.</p></a>
            <a className="card" href={`${APP}/signup?from=${FROM}&next=/tracker`}><span className="mono k">03 · Free</span><h3>A one-minute tracker</h3><p>See what helps and what sets off a flare, on a chart you can show the doctor.</p></a>
            <a className="card" href="https://planbforpans.com/app"><span className="mono k">04 · Free</span><h3>Get the app</h3><p>Plan B on your phone, in the App Store and Google Play.</p></a>
          </div>
          <p style={{ marginTop: 22, color: '#D7E3DA' }}>What happens next: biology first, then whatever your child needs. <a href="https://planbforpans.com/#care-path" style={{ color: 'var(--saffron)' }}>See the two-phase care path →</a></p>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}`}>Start free</a>
            <a className="btn g" href={`${APP}/join?src=${FROM}`}>Just keep me posted</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <p className="serif" style={{ fontSize: 24, color: '#F3F0E6', margin: '0 0 6px' }}>Plan B for OCD</p>
          <p style={{ margin: 0 }}>Part of the Plan B family, from Plan B for PANS, a Colorado nonprofit.</p>
          <div className="fam">
            <a href="https://planbforpans.com">Plan B for PANS</a>
            <a href="https://planbforpans.com/for-autism">Plan B for Autism</a>
            <a href="https://planbforpans.com/for-ocd">Plan B for OCD</a>
            <a href="https://planbforpans.com/for-adhd">Plan B for ADHD</a>
            <a href="https://planbforpans.com/for-arfid">Plan B for ARFID</a>
            <a href="https://planbforpans.com/for-constipation">Plan B for Constipation</a>
            <a href="https://planbforpans.com/directory">Find a doctor</a>
            <a href="https://planbforpans.com/donate">Donate</a>
          </div>
          <p style={{ margin: 0, fontSize: 13 }}>Educational information only; not medical advice. Plan B does not diagnose or treat. Always work with your child’s doctor.</p>
        </div>
      </footer>
    </div>
  )
}
