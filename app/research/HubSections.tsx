import type { Counter, FindingsWeek, Study, Trial } from '../../lib/research-data'

// The Research hub sections (Rachel, 2026-11-26): The patterns, Our studies +
// volunteer, Studies you can join (the trials engine), Vote. Data comes from
// the app's public endpoints; each section has a graceful fallback.

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.planbforpans.com'

const css = `
.hub{padding:clamp(56px,8vw,96px) 16px;border-bottom:1px solid var(--rule)}
.hub-in{max-width:920px;margin:0 auto}
.hub-fig{display:flex;justify-content:space-between;gap:12px;font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid var(--rule)}
.hub-fig span:last-child{color:var(--mute)}
.hub h2{font-family:var(--serif);font-weight:300;font-size:clamp(32px,5.4vw,56px);letter-spacing:-.02em;line-height:1.04;color:var(--ink);margin:0 0 14px}
.hub h2 em{color:var(--teal)}
.hub-lede{font-size:17px;line-height:1.7;color:var(--ink-soft);font-weight:300;max-width:720px;margin:0 0 28px}
.hub-count{display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;padding:12px 0;margin:0 0 8px;border-top:1px solid var(--ink);border-bottom:1px solid var(--rule);font-family:var(--font-mono);font-size:12.5px;color:var(--ink-soft)}
.hub-count b{font-family:var(--serif);font-weight:500;font-size:28px;color:var(--ink);margin-right:8px}
.hub-f{display:grid;grid-template-columns:44px 1fr;gap:0 12px;padding:22px 0;border-bottom:1px solid var(--rule)}
.hub-f .no{font-family:var(--font-mono);font-size:12px;color:var(--teal);padding-top:6px}
.hub-f h3{font-family:var(--serif);font-weight:400;font-size:clamp(21px,3.4vw,27px);line-height:1.22;margin:0;color:var(--ink)}
.hub-f p{font-size:15.5px;line-height:1.65;color:var(--ink-soft);margin:8px 0 0}
.hub-n{display:inline-block;margin-top:10px;font-family:var(--font-mono);font-size:11.5px;color:var(--signal,#A3242F);border:1px solid currentColor;padding:2px 8px}
.hub-empty{padding:34px 20px;border:1px dashed var(--teal);background:var(--paper,#fff);text-align:center;font-family:var(--serif);font-size:clamp(22px,4vw,30px);color:var(--ink)}
.hub-note{font-family:var(--font-mono);font-size:11px;line-height:1.6;color:var(--mute);margin:16px 0 0}
.hub-actions{display:flex;flex-wrap:wrap;gap:14px 26px;align-items:center;margin-top:24px}
.hub-studies{display:grid;gap:16px}
.hub-study{background:var(--paper,#fff);border:1px solid var(--ink);box-shadow:6px 6px 0 rgba(31,36,36,.07);padding:20px}
.hub-study header{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);margin:0 0 10px}
.hub-study header b{color:var(--teal);font-weight:500}
.hub-study h3{font-family:var(--serif);font-weight:400;font-size:clamp(24px,4vw,32px);line-height:1.08;margin:0 0 10px;color:var(--ink)}
.hub-study p{font-size:15px;line-height:1.6;color:var(--ink-soft);margin:0 0 10px}
.hub-study dl{display:grid;gap:6px;margin:0 0 14px}
.hub-study dt{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink)}
.hub-study dd{margin:0;font-size:14.5px;line-height:1.55;color:var(--ink-soft)}
.hub-vol{margin-top:22px;padding:22px;background:var(--ink);color:#fff}
.hub-vol h3{font-family:var(--serif);font-weight:400;font-size:clamp(24px,4vw,32px);margin:0 0 10px;color:#fff}
.hub-vol p{font-size:15px;line-height:1.65;color:#D7DEDD;margin:0 0 10px}
.hub-vol ul{margin:0 0 16px;padding-left:18px;color:#D7DEDD;font-size:14.5px;line-height:1.7}
.hub-vol .cta-teal{background:#fff;color:var(--ink)}
.hub-trial{display:block;text-decoration:none;padding:16px 0;border-bottom:1px solid var(--rule)}
.hub-trial .meta{display:flex;flex-wrap:wrap;gap:4px 14px;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}
.hub-trial .meta .st{color:var(--teal)}
.hub-trial .meta .pin{color:var(--signal,#A3242F)}
.hub-trial h3{font-size:17px;font-weight:500;line-height:1.4;color:var(--ink);margin:6px 0 4px}
.hub-trial p{font-size:14px;color:var(--ink-soft);margin:0}
.hub-more summary{cursor:pointer;color:var(--teal);font-weight:600;padding:16px 0;list-style:none}
.hub-vote{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap}
@media (max-width:520px){.hub-f{grid-template-columns:1fr}.hub-f .no{padding:0 0 4px}}
`

export function HubStyles() {
  return <style>{css}</style>
}

export function Patterns({ weeks, counter }: { weeks: FindingsWeek[]; counter: Counter }) {
  const latest = weeks.flatMap((w) => w.findings).slice(0, 3)
  return (
    <section className="hub" id="patterns">
      <div className="hub-in">
        <p className="hub-fig"><span>Fig. 02 &middot; The patterns</span><span>Updated weekly</span></p>
        <h2>What we&apos;ve learned <em>so far.</em></h2>
        <p className="hub-lede">What families tracking together are learning, week by week. Anonymous, aggregate, and public.</p>
        {counter && (
          <div className="hub-count"><span><b>{counter.families_tracking.toLocaleString('en-US')}</b>families tracking</span><span><b>{counter.nights_logged.toLocaleString('en-US')}</b>nights logged</span></div>
        )}
        {latest.length ? latest.map((f, i) => (
          <div className="hub-f" key={f.id + i}>
            <span className="no">{String(i + 1).padStart(2, '0')}</span>
            <div><h3>{f.headline}</h3><p>{f.body}</p><span className="hub-n">n = {f.n} {f.unit || 'families'}</span></div>
          </div>
        )) : <div className="hub-empty">Our first weekly findings are coming soon.</div>}
        <div className="hub-actions">
          <a href={`${APP}/findings`} rel="noopener" className="cta-teal">See every week &rarr;</a>
          <a href={`${APP}/signup`} rel="noopener" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>Start tracking free &rarr;</a>
        </div>
        <p className="hub-note">Illustrative and observational, not proof. Only families who share their data for research are counted, and any group under 5 families is left out.</p>
      </div>
    </section>
  )
}

const FALLBACK_STUDIES: Study[] = [
  { slug: 'mold-first-2026', title: 'The Mold-First Study', kicker: 'Case study No. 1', status: 'Open', question: 'If mold exposure early in life weakens the immune system, does clearing the mold first, in the right order, help the infections clear too?', who: 'Children exposed to mold before birth or in their first years, who keep getting sick and crash on treatment.', how: 'A baseline, then one step at a time, every step dated. Free to join. Every decision stays with your child’s own doctor.', href: '/mold-study', join: 'I’m interested' },
  { slug: 'infection-clearing-2026', title: 'The Kids Who Aren’t Clearing', kicker: 'Infection study · Round 1', status: 'Applications open', question: 'Why do some children’s infection markers stay high after antibiotics or IVIG?', who: 'Children who have been treated for an infection but never truly cleared.', how: 'Apply through the intake. A learning study, not a clinical trial, always alongside your own doctor.', href: '/infection-study', join: 'I’m interested' },
]

export function OurStudies({ studies }: { studies: Study[] | null }) {
  const list = studies ?? FALLBACK_STUDIES
  return (
    <section className="hub" id="our-studies" style={{ background: 'var(--cream-light)' }}>
      <div className="hub-in">
        <p className="hub-fig"><span>Fig. 03 &middot; Our studies</span><span>Run by parents</span></p>
        <h2>Plan B studies <em>you can join.</em></h2>
        <p className="hub-lede">Documented child by child, always alongside your child&apos;s own doctor. Joining is free.</p>
        <div className="hub-studies">
          {list.map((s) => (
            <article className="hub-study" key={s.slug}>
              <header><span>{s.kicker}</span><b>{s.status}</b></header>
              <h3>{s.title}</h3>
              <p>{s.question}</p>
              <dl><dt>Who can join</dt><dd>{s.who}</dd><dt>How</dt><dd>{s.how}</dd></dl>
              <div className="hub-actions" style={{ marginTop: 0 }}>
                <a href={`${APP}/research#our-studies`} rel="noopener" className="cta-teal">{s.join} &rarr;</a>
                <a href={`${APP}${s.href}`} rel="noopener" className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>Read the study</a>
              </div>
            </article>
          ))}
        </div>
        <div className="hub-vol" id="volunteer">
          <h3>Volunteer for a study</h3>
          <p>Raise your hand, inside the app, for any of these:</p>
          <ul>
            <li>Plan B studies, like the ones above.</li>
            <li>Free-treatment cohorts: <a href="/practitioners" style={{ color: '#fff' }}>volunteer practitioners</a> take a small group of children pro bono, matched by what they offer.</li>
            <li>Outside clinical trials: be contacted if one looks like a fit.</li>
          </ul>
          <p>Volunteering opens once your child&apos;s synthesis is released. It doesn&apos;t guarantee a spot; Rachel or the study team reviews every match, and you can withdraw any time.</p>
          <a href={`${APP}/research#volunteer`} rel="noopener" className="cta-teal">Volunteer in the app &rarr;</a>
        </div>
      </div>
    </section>
  )
}

export function EngineTrials({ trials, topics, updated }: { trials: Trial[]; topics: Record<string, string>; updated: string | null }) {
  const row = (t: Trial) => (
    <a key={t.nct} className="hub-trial" href={t.url} target="_blank" rel="noopener">
      <div className="meta">{t.pinned && <span className="pin">Pinned</span>}<span className="st">{t.status}</span><span>{t.phase}</span><span>{t.topics.map((x) => topics[x] || x).join(' · ')}</span></div>
      <h3>{t.title}</h3>
      <p>{t.location} &middot; {t.ages} &middot; {t.nct}</p>
    </a>
  )
  return (
    <>
      {trials.slice(0, 8).map(row)}
      {trials.length > 8 && <details className="hub-more"><summary>Show {Math.min(trials.length, 60) - 8} more</summary>{trials.slice(8, 60).map(row)}</details>}
      <p className="hub-note">Pulled every week from ClinicalTrials.gov{updated ? `, last updated ${new Date(updated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : ''}: recruiting studies for children on PANS and PANDAS, sudden-onset OCD, autism with immune or gut findings, ARFID, tics, ADHD with inflammation, Lyme and Bartonella, IVIG and mold.</p>
    </>
  )
}

export function Vote() {
  return (
    <section className="hub" id="vote">
      <div className="hub-in hub-vote">
        <div>
          <p className="hub-fig" style={{ border: 0, padding: 0 }}><span>Fig. 05 &middot; Vote</span></p>
          <h2 style={{ margin: 0 }}>Vote what we <em>study next.</em></h2>
        </div>
        <a href="/vote" className="cta-teal">Cast your vote &rarr;</a>
      </div>
    </section>
  )
}
