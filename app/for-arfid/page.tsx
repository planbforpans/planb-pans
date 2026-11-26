import type { Metadata } from 'next'
import HeaderLang from '../_components/HeaderLang'
import { ClueFigure, EarlySigns, StrepConnection } from '../_components/ConditionFigures'

// Plan B for ARFID (Rachel, 2026-11-26). Served at planbforarfid.com/.org via middleware rewrite.
// Sudden or worsening food restriction as an early sign that something in the body is driving the brain.
const TITLE = 'Plan B for ARFID · When eating suddenly narrows'
const DESC = 'Safe foods suddenly inedible? A new fear of choking or throwing up? Free help from a nonprofit for parents whose child’s eating narrowed fast: what to track, which tests, and what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-arfid' },
  openGraph: { title: 'Plan B for ARFID', description: DESC, url: 'https://planbforpans.com/for-arfid', siteName: 'Plan B for ARFID', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for ARFID', description: DESC },
}

const APP = 'https://app.planbforpans.com'
const FROM = 'arfid'
const BEHAVIORS = 'https://planbforpans.com/learning/behaviors-are-a-clue'

const css = `
body:has(.pf) .site-header, body:has(.pf) > footer { display:none !important }
body:has(.pf){ background:#F8F1EC }
.pf{ --ink:#2A1724; --aub:#3A1F35; --aub2:#5A2F4F; --pers:#EE8A5A; --rust:#A4472B; --paper:#F8F1EC; --card:#FDF9F6; --rule:#E5D6CF; --muted:#6A5A60;
  color:var(--ink); font-family: var(--f-instrument), 'Instrument Sans', system-ui, sans-serif; font-size:17px; line-height:1.65; overflow-x:hidden }
.pf *{ box-sizing:border-box } .pf a{ color:inherit }
.pf h1,.pf h2,.pf h3,.pf p,.pf li{ color:inherit }
.pf .serif{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400 }
.pf .mono{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px }
.pf .wrap{ max-width:1100px; margin:0 auto; padding:0 20px }
.pf .hero{ background-color:var(--aub); color:#F8F1EC; padding:22px 0 72px; position:relative; overflow:hidden;
  background-image: radial-gradient(circle at 1px 1px, rgba(248,241,236,.10) 1px, transparent 0), radial-gradient(ellipse 70% 80% at 85% 20%, #5A2F4F 0%, #3A1F35 58%, #26121F 100%);
  background-size: 22px 22px, 100% 100% }
.pf .top{ display:flex; justify-content:space-between; align-items:center; gap:12px; position:relative; flex-wrap:wrap }
.pf .brand{ font-family: var(--f-bodoni), Georgia, serif; font-size:24px; text-decoration:none; min-height:44px; display:inline-flex; align-items:center }
.pf .brand em{ color:var(--pers) }
.pf .topr{ display:flex; gap:10px; align-items:center; font-size:12px }
.pf .topr a, .pf .topr .nav-lang{ min-height:44px; display:inline-flex; align-items:center; text-decoration:none; color:#EEE2DC }
.pf .topr .nav-lang{ padding:0 14px; font-family: var(--f-plex), monospace; letter-spacing:.1em; font-size:12px }
.pf .grid{ display:grid; grid-template-columns: 1.1fr .9fr; gap:36px; align-items:center; margin-top:44px; position:relative }
.pf .grid > *{ min-width:0 }
.pf h1{ font-size:clamp(42px,6.4vw,78px); line-height:1; margin:0 }
.pf h1 em{ color:var(--pers) }
.pf .lede{ font-size:clamp(18px,2.1vw,21px); line-height:1.5; color:#EADCD6; margin:22px 0 28px; max-width:590px }
.pf .btns{ display:flex; flex-wrap:wrap; gap:12px }
.pf .btn{ display:inline-flex; align-items:center; min-height:48px; padding:12px 22px; border-radius:6px; text-decoration:none; font-weight:600; font-size:15px }
.pf .btn.p{ background:var(--pers); color:#2A120A } .pf .btn.g{ border:1px solid rgba(248,241,236,.5); color:#F8F1EC } .pf .btn.d{ background:var(--aub); color:#fff }
.pf section{ padding: clamp(58px,8vw,104px) 0 }
.pf h2{ font-size:clamp(32px,4.4vw,52px); line-height:1.06; margin:10px 0 18px }
.pf h2 em{ color:var(--rust) }
.pf .k{ color:var(--rust) }
.pf .frame{ border-inline-start:3px solid var(--pers); padding:4px 0 4px 16px; margin:0 0 26px; font-style:italic; color:var(--muted) }
.pf .clues{ list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr)); gap:0 34px }
.pf .clues li{ border-top:1px solid var(--rule); padding:16px 0 }
.pf .clues b{ display:block; font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:22px; line-height:1.25; margin-bottom:4px }
.pf .clues span{ color:var(--muted); font-size:15.5px }
.pf .minta{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:clamp(22px,4vw,40px); box-shadow:0 30px 70px -44px rgba(58,31,53,.55) }
.pf .ask{ display:flex; gap:8px; margin-top:18px }
.pf .ask input{ flex:1; min-width:0; font-size:17px; padding:13px 16px; min-height:50px; border:1px solid #D6C3BA; border-radius:6px; font-family:inherit; background:#fff }
.pf .ask button{ border:0; border-radius:6px; background:var(--aub); color:#fff; font-weight:600; padding:0 22px; min-height:50px; font-size:15px; cursor:pointer }
.pf .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:14px }
.pf .chips a{ text-decoration:none; border:1px solid var(--rule); background:var(--paper); border-radius:6px; padding:10px 14px; font-size:13.5px; min-height:44px; display:inline-flex; align-items:center }
.pf .two{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); gap:18px; margin-top:20px }
.pf .panel{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:24px }
.pf .panel h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:28px; margin:6px 0 10px }
.pf .panel ul{ margin:0; padding-inline-start:20px } .pf .panel li{ margin-bottom:6px }
.pf .warn{ border:1px solid #E2B9A6; background:#FBEDE5; border-radius:10px; padding:16px 20px; margin-top:20px; font-size:15.5px }
.pf .tests{ width:100%; border-collapse:collapse; margin-top:16px }
.pf .tests td{ border-top:1px solid var(--rule); padding:16px 12px 16px 0; vertical-align:top }
.pf .tests td:first-child{ width:38%; font-weight:600 }
.pf .tests .code{ display:block; font-family: var(--f-plex), monospace; font-size:12px; color:var(--muted); font-weight:400; margin-top:3px }
.pf .band{ background:var(--aub); color:#F8F1EC }
.pf .band h2 em{ color:var(--pers) }
.pf .band .k{ color:#E9B9A0 }
.pf .cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:16px; margin-top:22px }
.pf .card{ background:var(--card); color:var(--ink); border-radius:10px; padding:22px; text-decoration:none; display:block; border:1px solid var(--rule) }
.pf .card h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:8px 0 6px }
.pf .card p{ margin:0; font-size:15.5px; color:var(--muted) }
.pf .helped{ counter-reset:h; list-style:none; padding:0; margin:20px 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:18px }
.pf .helped li{ counter-increment:h; background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:22px }
.pf .helped li::before{ content:"0" counter(h); font-family: var(--f-plex), monospace; color:var(--rust); font-size:13px; letter-spacing:.15em; display:block }
.pf .helped h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:6px 0 8px }
.pf .helped p{ margin:0; font-size:15.5px; color:var(--muted) }
.pf .teaser{ display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid var(--rule); border-radius:10px; padding:24px; background:var(--card); text-decoration:none }
.pf .research{ border-top:1px solid rgba(248,241,236,.25); margin-top:34px; padding-top:26px; display:grid; grid-template-columns:auto 1fr; gap:22px; align-items:start; max-width:900px }
.pf .research p{ margin:0; font-size:clamp(18px,2vw,21px); color:#EADCD6 }
.pf .foot{ background:#1C0E18; color:#C2B0B8; padding:44px 0 88px; font-size:14.5px }
.pf .foot a{ color:#F1E6E0; min-height:44px; display:inline-flex; align-items:center }
.pf .fam{ display:flex; flex-wrap:wrap; gap:0 20px; margin:10px 0 14px }
@keyframes rise{ from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:none } }
.pf .r{ opacity:0; animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards } .pf .d1{animation-delay:.1s} .pf .d2{animation-delay:.3s} .pf .d3{animation-delay:.5s} .pf .d4{animation-delay:.75s}
@media (max-width:820px){ .pf .grid{ grid-template-columns:1fr } .pf .tests td{ display:block; width:auto !important; padding:4px 0 } .pf .tests td:first-child{ padding-top:16px } .pf .tests td + td{ border-top:0; padding-bottom:16px } .pf .research{ grid-template-columns:1fr; gap:8px } }
@media (prefers-reduced-motion: reduce){ .pf .r{ animation:none; opacity:1 } }
`

const IDEAS = [
  'My daughter suddenly eats only three foods. What should I ask the doctor?',
  'Since he was sick he’s scared he’ll choke on anything solid. Why?',
  'Could constipation be why she eats nothing all day?',
  'Which blood tests check zinc and iron for appetite?',
]

const CLUES: [string, string][] = [
  ['Eating collapsed within days: think PANS.', 'A sudden, severe drop in what a child will eat is one of the two core signs doctors look for. Ask what else changed that week.'],
  ['After a sore throat, or someone sick at home: think strep.', 'Strep is the original trigger. A sibling or parent who carries it counts too.'],
  ['After a cough or “walking pneumonia”: think Mycoplasma.', 'It can set things off without ever looking like pneumonia.'],
  ['Full fast, belly aches, no lunch then a huge dinner: think constipation.', 'A backed-up gut takes the appetite. It can hide behind daily bowel movements.'],
  ['Reflux, hives, flushing, “everything upsets my belly”: think histamine.', 'Mast cells (MCAS) can make food feel unsafe in the body.'],
  ['Sugar cravings, bloating, silly or foggy spells: think yeast.', 'An overgrowth in the gut can pull the whole menu toward sweets and starch.'],
  ['Food tastes “wrong” or bland: think zinc and iron.', 'Low zinc can change taste and smell. Low iron can blunt appetite.'],
  ['Better away from one house or school: think mold.', 'Mold keeps the immune system on edge, and the gut often shows it first.'],
]

const TESTS: [string, string | null, string][] = [
  ['Zinc, ferritin and a CBC with iron panel', null, 'Taste, smell and appetite. Ferritin is the iron store and is often missed by a plain CBC.'],
  ['Celiac screen: tTG-IgA with total IgA', null, 'Belly pain, weight loss and food fear can all come from celiac disease. Total IgA makes sure the screen can be trusted.'],
  ['A stool test and a look for constipation', null, 'A comprehensive stool test can show yeast and an off-balance gut. Ask the doctor whether stool is backed up, even if your child goes every day.'],
  ['Immunoglobulins (IgG, IgA, IgM, IgG subclasses) + pneumococcal titers', null, 'Can your child’s immune system make the antibodies it needs? A child who keeps getting hit may not be clearing infections.'],
]

export default function PlanBForARFID() {
  return (
    <div className="pf">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="hero">
        <div className="wrap top">
          <a className="brand" href="/for-arfid">Plan B&nbsp;<em>for ARFID</em></a>
          <div className="topr mono">
            <HeaderLang />
            <a href={`${APP}/sign-in`}>Sign in</a>
          </div>
        </div>
        <div className="wrap grid">
          <div>
            <p className="mono r d1" style={{ color: '#E9B9A0', margin: '0 0 16px' }}>When eating suddenly narrows · free · a nonprofit</p>
            <h1 className="serif r d2">Safe foods suddenly off the table? <em>Look at the body.</em></h1>
            <p className="lede r d3">Foods your child loved now “feel wrong.” A new fear of choking or throwing up. Smells and textures they can’t stand. Weight slipping. When eating narrows fast, it can be an early sign that something in the body is driving the brain: an infection, the gut, a missing nutrient. Plan B helps you track the pattern, find the right tests and bring it all to your doctor. Free.</p>
            <div className="btns r d4">
              <a className="btn p" href={`${APP}/ask?from=${FROM}`}>Ask Minta now</a>
              <a className="btn g" href={`${APP}/signup?from=${FROM}`}>Start your child’s free Synthesis</a>
            </div>
          </div>
          <div className="r d3">
            <ClueFigure
              id="arfid"
              kind="girl"
              fig="Fig. 1 · Where the clue can start"
              caption="An illustration, not a real child. Places to look, not a diagnosis."
              tint="#F3D9CB"
              accent="#EE8A5A"
              label="#E6D3CC"
              line="rgba(248,241,236,.10)"
              panel="rgba(20,8,16,.35)"
              points={[
                { x: 262, y: 215, label: 'Brain', sub: 'new fears, food OCD' },
                { x: 171, y: 260, label: 'Smell', sub: 'new aversions' },
                { x: 177, y: 290, label: 'Taste', sub: 'texture, fear of choking,\nzinc, iron' },
                { x: 236, y: 342, label: 'Throat', sub: 'strep, Mycoplasma' },
                { x: 272, y: 398, label: 'Gut', sub: 'constipation, yeast,\nhistamine' },
              ]}
            />
          </div>
        </div>
      </header>

      <StrepConnection id="arfid" ink="var(--ink)" muted="var(--muted)" accent="#EE8A5A" rule="var(--rule)" card="var(--card)" em="var(--rust)" />

      <EarlySigns current="food" ink="var(--ink)" muted="var(--muted)" accent="#EE8A5A" rule="var(--rule)" card="var(--card)" em="var(--rust)" />

      <section>
        <div className="wrap">
          <p className="mono k">Behavior is a clue</p>
          <h2 className="serif">What came <em>right before</em> the food changed?</h2>
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
            <h2 className="serif" style={{ marginTop: 8 }}>Dinner was a battle tonight. <em>Ask Minta why.</em></h2>
            <p style={{ maxWidth: 700, margin: 0 }}>Minta is Plan B’s AI, built for families like yours. Tell her what changed: a safe food dropped, a new fear at the table, a bad week after a cold. She helps you think through what might be driving it and what to try or ask next. She gets sharper once she’s read your child’s records.</p>
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
          <p className="mono k">ARFID and PANS, in plain words</p>
          <h2 className="serif">Was it always there, <em>or did it switch on?</em></h2>
          <p style={{ maxWidth: 760 }}>ARFID (avoidant/restrictive food intake disorder) is real, and feeding therapy helps many children. The question that changes what you look for is how it started.</p>
          <div className="two">
            <div className="panel">
              <span className="mono k">Slow and long-standing</span>
              <h3>A narrow eater for years</h3>
              <ul>
                <li>Picky since the toddler years, often with strong sensory preferences</li>
                <li>Steady, without big swings tied to illness</li>
                <li>Feeding therapy is the main path, and iron, zinc and the gut are still worth checking</li>
              </ul>
            </div>
            <div className="panel">
              <span className="mono k">Sudden</span>
              <h3>It switched on</h3>
              <ul>
                <li><b>Severe food restriction</b> over days or weeks, often after an infection</li>
                <li>New fears: choking, vomiting, contamination, a food being “wrong”</li>
                <li>Often with anxiety, OCD, rage, sleep trouble, bedwetting or schoolwork falling apart</li>
                <li>That pattern is worth asking your doctor about PANS</li>
              </ul>
            </div>
          </div>
          <p style={{ maxWidth: 760, marginTop: 20, color: 'var(--muted)' }}>Only a doctor can diagnose ARFID or PANS. What you bring them, a clear timeline and the right tests, makes that conversation much easier.</p>
          <p className="warn"><b>Call the doctor today, or go to the ER,</b> if your child is losing weight fast, refusing fluids, dizzy or fainting, or has stopped eating almost completely.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">What to track</p>
          <h2 className="serif">One minute a night. <em>The pattern shows itself.</em></h2>
          <div className="two">
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>How many safe foods today, and how much was eaten</li>
              <li>New fears: choking, vomiting, a food “tasting wrong”</li>
              <li>Weight, once a week</li>
              <li>Bowel movements and belly aches</li>
            </ul>
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Sore throats, coughs, fevers, anyone sick at home</li>
              <li>Every treatment, and the day it started</li>
              <li>Where they were: home, school, a trip</li>
              <li>Rage, anxiety, sleep, bedwetting</li>
            </ul>
          </div>
          <div className="research">
            <p className="mono" style={{ color: 'var(--pers)', fontSize: 11.5, paddingTop: 6 }}>We are the research</p>
            <p>Food restriction is rarely followed night by night. We follow it: infections, the gut, the immune system, sleep and treatments. Every family that tracks helps us find what makes symptoms rise and fall, and the way out.</p>
          </div>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}&next=/tracker`}>Start the free tracker</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="mono k">The tests</p>
          <h2 className="serif">What to ask for, <em>and why.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>Start with the strep and Mycoplasma tests above. Then these, for taste, appetite and the gut. Bring this list to your doctor.</p>
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
          <p className="mono k">What has helped</p>
          <h2 className="serif">Treat the trigger. <em>Support the eating.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>What families and published studies report has helped. Every child is different, and every one of these is decided with your doctor.</p>
          <ol className="helped">
            <li><h3>Clearing the gut first</h3><p>When constipation is part of it, moving the backup out often comes before anything else, because a full gut takes the appetite.</p></li>
            <li><h3>Treating what is found</h3><p>When a swab or titer finds strep or Mycoplasma, treating it, then checking it cleared. Topping up low zinc or iron with your doctor.</p></li>
            <li><h3>Feeding therapy, alongside</h3><p>Gentle, step-by-step work with a feeding therapist or a therapist trained in CBT for ARFID, alongside treating the body, not instead of it.</p></li>
          </ol>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16 }}>We’re not doctors. Everything we give you is made to take to yours. Never start, stop or change a medicine without your child’s doctor.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">From the Field Guide</p>
          <h2 className="serif">Read <em>more.</em></h2>
          <div className="cards">
            <a className="card" href="https://planbforpans.com/sudden-food-refusal-arfid-pans.html"><span className="mono k">Guide</span><h3>Sudden food refusal and fear of choking</h3><p>PANS and ARFID: how to tell them apart and what to test.</p></a>
            <a className="card" href={`${APP}/learn/arfid-food-window`}><span className="mono k">From our cases</span><h3>When safe foods suddenly become inedible</h3><p>Why the food range collapses, and what helps.</p></a>
            <a className="card" href={`${APP}/learn/constipation-and-appetite`}><span className="mono k">From our cases</span><h3>Constipation is stealing the appetite</h3><p>No lunch, then a huge dinner, and why.</p></a>
            <a className="card" href="https://planbforpans.com/constipation-in-children-hidden-causes.html"><span className="mono k">Guide</span><h3>Constipation that won’t go away</h3><p>The usual causes first, then when to look deeper.</p></a>
            <a className="card" href="https://planbforpans.com/gut.html"><span className="mono k">Guide</span><h3>The gut and the microbiome</h3><p>Which stool test, and how to reset it.</p></a>
            <a className="card" href="https://planbforpans.com/mcas.html"><span className="mono k">Guide</span><h3>MCAS and histamine</h3><p>Signs, testing, and how to calm it.</p></a>
            <a className="card" href="https://planbforpans.com/yeast.html"><span className="mono k">Guide</span><h3>Yeast and Candida</h3><p>The behaviors it drives, and a gentle protocol.</p></a>
          </div>
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
          <p style={{ marginTop: 22, color: '#EADCD6' }}>What happens next: biology first, then whatever your child needs. <a href="https://planbforpans.com/#care-path" style={{ color: 'var(--pers)' }}>See the two-phase care path →</a></p>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}`}>Start free</a>
            <a className="btn g" href={`${APP}/join?src=${FROM}`}>Just keep me posted</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <p className="serif" style={{ fontSize: 24, color: '#F8F1EC', margin: '0 0 6px' }}>Plan B for ARFID</p>
          <p style={{ margin: 0 }}>Part of the Plan B family, from Plan B for PANS, a Colorado nonprofit.</p>
          <div className="fam">
            <a href="https://planbforpans.com">Plan B for PANS</a>
            <a href="https://planbforpans.com/for-autism">Plan B for Autism</a>
            <a href="https://planbforpans.com/for-ocd">Plan B for OCD</a>
            <a href="https://planbforpans.com/for-adhd">Plan B for ADHD</a>
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
