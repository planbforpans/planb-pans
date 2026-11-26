// Shared figures for the Plan B condition pages (/for-arfid, /for-constipation, /for-adhd, /for-ocd).
// Rachel, 2026-11-26: "These are precursors to PANS." Each page carries the same Early-signs strip.

type Pt = { x: number; y: number; label: string; sub: string }

// Silhouettes drawn at x=110, width 290 in a 400x400 plate, bottom-aligned.
const SIL = {
  girl: { src: '/girl-silhouette.png', h: 255.2 },
  boy: { src: '/kid-mask.png', h: 285 },
}

// Head-and-shoulders silhouette, "Fig." plate style, with leader lines to where the clue can start.
// Points are in the 400x400 viewBox. A point with y >= 396 is drawn as an arrow off the bottom (the gut).
// `sub` may hold one line break ("\n").
export function ClueFigure({ id, kind, points, fig, caption, tint, accent, label, line, panel }: {
  id: string
  kind: 'girl' | 'boy'
  points: Pt[]
  fig: string
  caption: string
  tint: string
  accent: string
  label: string
  line: string
  panel: string
}) {
  const s = SIL[kind]
  const y0 = 400 - s.h
  const sorted = [...points].sort((a, b) => a.y - b.y)
  const lines = sorted.map((p) => p.sub.split('\n').length)
  const gap = (i: number) => 34 + 16 * lines[i]
  const ly: number[] = []
  sorted.forEach((p, i) => {
    const want = p.y >= 396 ? 340 : p.y - 6
    ly.push(Math.max(want, i ? ly[i - 1] + gap(i - 1) : 116))
  })
  const n = ly.length - 1
  ly[n] = Math.min(ly[n], 400 - 8 - 16 * lines[n])
  for (let i = n - 1; i >= 0; i--) ly[i] = Math.min(ly[i], ly[i + 1] - gap(i))
  return (
    <figure className="cfig" style={{ margin: 0, background: panel, border: `1px solid ${line}`, borderRadius: 10, padding: '18px 18px 12px' }}>
      <style dangerouslySetInnerHTML={{ __html: FIG_CSS }} />
      <p className="cfig-k" style={{ color: label }}>{fig}</p>
      <svg viewBox="0 96 400 304" role="img" aria-label={`A child's silhouette in profile, with labels: ${points.map((p) => `${p.label}, ${p.sub.replace('\n', ' ')}`).join('; ')}.`}>
        <defs>
          <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0 H0 V20" fill="none" stroke={line} strokeWidth="1" />
          </pattern>
          <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400" style={{ maskType: 'alpha' }}>
            <image href={s.src} x="110" y={y0} width="290" height={s.h} preserveAspectRatio="xMidYMid meet" />
          </mask>
        </defs>
        <rect y="96" width="400" height="304" fill={`url(#${id}-grid)`} />
        <rect className="cfig-sil" width="400" height="400" fill={tint} mask={`url(#${id}-m)`} />
        {sorted.map((p, i) => {
          const y = ly[i]
          const tag = `0${i + 1} ${p.label.toUpperCase()}`
          const x1 = 8 + tag.length * 9.4 + 6
          const below = p.y >= 396
          const d = below
            ? `M${x1} ${y - 4} H${p.x} V${p.y - 3}`
            : `M${x1} ${y - 4} H${Math.max(x1 + 6, p.x - 30)} L${p.x} ${p.y}`
          return (
            <g key={p.label} className="cfig-pt" style={{ animationDelay: `${0.7 + i * 0.22}s` }}>
              <path d={d} fill="none" stroke={accent} strokeWidth="1.2" strokeDasharray="3 3" />
              {below
                ? <path d={`M${p.x - 6} ${p.y - 10} L${p.x} ${p.y - 2} L${p.x + 6} ${p.y - 10}`} fill="none" stroke={accent} strokeWidth="2" />
                : <><circle cx={p.x} cy={p.y} r="9" fill="none" stroke={accent} strokeWidth="1.2" /><circle cx={p.x} cy={p.y} r="3.6" fill={accent} /></>}
              <text x="8" y={y} fill={accent} fontSize="13" fontFamily="var(--f-plex), monospace" letterSpacing="1.5">{tag}</text>
              {p.sub.split('\n').map((t, j) => (
                <text key={t} x="8" y={y + 18 + j * 16} fill={label} fontSize="13.5" fontFamily="var(--f-instrument), system-ui, sans-serif">{t}</text>
              ))}
            </g>
          )
        })}
      </svg>
      <figcaption className="cfig-cap" style={{ color: label }}>{caption}</figcaption>
    </figure>
  )
}

const FIG_CSS = `
.cfig svg{ width:100%; height:auto; display:block }
.cfig-k{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px; margin:0 0 10px }
.cfig-cap{ font-size:12px; margin:8px 0 0; opacity:.85 }
.cfig-sil{ opacity:0; animation: cfigIn 1.2s .2s forwards }
.cfig-pt{ opacity:0; animation: cfigIn .7s forwards }
@keyframes cfigIn{ to{ opacity:1 } }
@media (prefers-reduced-motion: reduce){ .cfig-sil,.cfig-pt{ animation:none; opacity:1 } }
`

export type Sign = 'constipation' | 'food' | 'ocd' | 'tics' | 'attention' | 'sleep'

const SIGNS: { k: Sign; t: string; href?: string }[] = [
  { k: 'constipation', t: 'Constipation', href: 'https://planbforpans.com/for-constipation' },
  { k: 'food', t: 'Food restriction', href: 'https://planbforpans.com/for-arfid' },
  { k: 'ocd', t: 'Sudden OCD', href: 'https://planbforpans.com/for-ocd' },
  { k: 'tics', t: 'Tics', href: 'https://planbforpans.com/sudden-tics-pandas-strep.html' },
  { k: 'attention', t: 'Attention change', href: 'https://planbforpans.com/for-adhd' },
  { k: 'sleep', t: 'Sleep change' },
]

// "Fig. 2 · Early signs": constipation · food restriction · sudden OCD · tics · attention · sleep -> PANS.
export function EarlySigns({ current, fig = 'Fig. 3', ink, muted, accent, rule, card, em }: {
  current: Sign
  fig?: string
  ink: string
  muted: string
  accent: string
  rule: string
  card: string
  em: string
}) {
  return (
    <section className="es" style={{ color: ink, padding: 'clamp(36px,5vw,56px) 0 0' }}>
      <style dangerouslySetInnerHTML={{ __html: ES_CSS }} />
      <div className="es-wrap">
        <div className="es-plate" style={{ background: card, borderColor: rule }}>
          <p className="es-k" style={{ color: em }}>{fig} · Early signs</p>
          <h2 className="es-h">Often <em style={{ color: em }}>before</em> the full picture.</h2>
          <ol className="es-row" style={{ ['--es-rule' as string]: rule, ['--es-acc' as string]: accent }}>
            {SIGNS.map((s) => {
              const on = s.k === current
              const inner = <><span className="es-dot" style={on ? { background: accent, borderColor: accent } : undefined} /><span className="es-t" style={on ? { fontWeight: 700 } : undefined}>{s.t}</span>{on && <span className="es-here" style={{ color: em }}>you are here</span>}</>
              return <li key={s.k}>{s.href && !on ? <a href={s.href}>{inner}</a> : <span className="es-a">{inner}</span>}</li>
            })}
            <li className="es-end"><a href="https://planbforpans.com/understanding-pans.html" aria-label="What is PANS?"><span className="es-ring" style={{ borderColor: em, color: em, background: card }}>PANS</span></a></li>
          </ol>
          <p className="es-p" style={{ color: muted }}>Each of these can be an early sign that something in the body, often an infection or an immune reaction, is driving the brain. The signs often start soft, like these, one at a time.</p>
          <p className="es-p" style={{ color: muted, marginTop: 12 }}>When they come together, doctors have a name for it: <b style={{ color: ink }}>PANS</b>, or <b style={{ color: ink }}>PANDAS</b> when strep is the trigger. It is a name for when an infection or immune reaction drives sudden changes in a child’s brain and body. Many parents have never heard of it, and assume it couldn’t be their child. It often begins just like this, with one sign that doesn’t quite make sense.</p>
          <p className="es-p" style={{ color: muted, marginTop: 12 }}>Catching the pattern early and testing the biology is Phase 1 of the care path. <a href="https://planbforpans.com/#care-path" style={{ color: em }}>See the two phases →</a></p>
          <p className="es-n" style={{ color: muted }}>A sign worth looking into, not a diagnosis.</p>
        </div>
      </div>
    </section>
  )
}

const ES_CSS = `
.es{ padding: clamp(40px,6vw,72px) 0 0 }
.es-wrap{ max-width:1100px; margin:0 auto; padding:0 20px }
.es-plate{ border:1px solid; border-radius:10px; padding:clamp(20px,4vw,34px) }
.es-k{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px; margin:0 }
.es-h{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400; font-size:clamp(28px,3.6vw,40px); line-height:1.1; margin:8px 0 26px }
.es-row{ list-style:none; margin:0; padding:0; display:flex; align-items:flex-start; position:relative }
.es-row::before{ content:""; position:absolute; left:8px; right:40px; top:8px; border-top:1px dashed var(--es-rule) }
.es-row li{ flex:1; position:relative; min-width:0 }
.es-row a, .es-row .es-a{ display:flex; flex-direction:column; gap:8px; text-decoration:none; color:inherit; min-height:44px; padding-right:8px }
.es-dot{ width:17px; height:17px; flex:0 0 17px; border-radius:50%; border:2px solid var(--es-rule); background:#fff; position:relative }
.es-t{ font-size:14.5px; line-height:1.25 }
.es-row a:hover .es-t{ text-decoration:underline }
.es-here{ font-family: var(--f-plex), monospace; font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; margin-top:-4px }
.es-end{ flex:0 0 auto !important }
.es-ring{ display:inline-flex; align-items:center; justify-content:center; width:74px; height:74px; margin-top:-28px; border-radius:50%; border:2px solid; font-family: var(--f-bodoni), Georgia, serif; font-size:19px }
.es-p{ margin:24px 0 0; max-width:780px; font-size:16px }
.es-n{ margin:8px 0 0; font-size:13px; font-style:italic }
@media (max-width:760px){
  .es-row{ flex-direction:column; gap:2px }
  .es-row::before{ left:8px; right:auto; top:8px; bottom:40px; border-top:0; border-left:1px dashed var(--es-rule) }
  .es-row a, .es-row .es-a{ flex-direction:row; align-items:center; gap:12px; min-height:40px }
  .es-here{ margin-top:0 }
  .es-ring{ margin:6px 0 0 -20px; width:60px; height:60px; font-size:17px }
}
`

// "Fig. 2 · The strep connection" (Rachel, 2026-11-26: "Most don't even know that strep causes these things.")
// Test wording follows /pans-and-strep.html: rapid strep / throat culture, ASO + anti-DNase B titers.
export function StrepConnection({ id, ink, muted, accent, rule, card, em }: {
  id: string
  ink: string
  muted: string
  accent: string
  rule: string
  card: string
  em: string
}) {
  const signs = ['Food refusal', 'Constipation', 'Worries that won’t let go', 'Tics', 'Focus falling apart']
  return (
    <section className="es" style={{ color: ink, padding: 'clamp(36px,5vw,56px) 0 0' }}>
      <style dangerouslySetInnerHTML={{ __html: ES_CSS + SC_CSS }} />
      <div className="es-wrap">
        <div className="es-plate sc" style={{ background: card, borderColor: rule }}>
          <p className="es-k" style={{ color: em }}>Fig. 2 · The strep connection</p>
          <h2 className="es-h">Strep can do <em style={{ color: em }}>more than</em> a sore throat.</h2>
          <div className="sc-grid">
            <div>
              <p className="sc-p">Most parents have never been told this. Strep, and other infections like Mycoplasma, can set off sudden or worsening changes in a child’s brain and body:</p>
              <ul className="sc-chips">{signs.map((s) => <li key={s} style={{ borderColor: rule }}>{s}</li>)}</ul>
              <p className="sc-p">Sometimes it shows up weeks after a sore throat. Sometimes there was no sore throat at all: strep can live around the bottom (perianal strep), or be carried by someone at home who never gets sick.</p>
            </div>
            <figure style={{ margin: 0 }}>
              <svg viewBox="0 0 400 210" role="img" aria-label="A timeline: a sore throat, or no symptoms at all; days to weeks pass; then a behavior change begins.">
                <defs>
                  <pattern id={`${id}-sg`} width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0 H0 V20" fill="none" stroke={rule} strokeWidth="1" /></pattern>
                </defs>
                <rect width="400" height="210" fill={`url(#${id}-sg)`} opacity=".7" />
                <line x1="20" y1="170" x2="390" y2="170" stroke={muted} strokeWidth="1" opacity=".6" />
                <line x1="70" y1="40" x2="70" y2="170" stroke={accent} strokeWidth="1.2" strokeDasharray="4 4" />
                <circle cx="70" cy="150" r="6" fill={accent} />
                <text x="78" y="44" fill={em} fontSize="12.5" fontFamily="var(--f-plex), monospace" letterSpacing="1">SORE THROAT</text>
                <text x="78" y="61" fill={muted} fontSize="12.5" fontFamily="var(--f-instrument), system-ui, sans-serif">or no symptoms at all</text>
                <path d="M74 120 H236" stroke={muted} strokeWidth="1" markerEnd={`url(#${id}-ar)`} />
                <defs><marker id={`${id}-ar`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10" fill="none" stroke={muted} strokeWidth="1.5" /></marker></defs>
                <text x="155" y="112" textAnchor="middle" fill={muted} fontSize="12.5" fontFamily="var(--f-plex), monospace" letterSpacing="1">DAYS TO WEEKS</text>
                <line x1="250" y1="40" x2="250" y2="170" stroke={em} strokeWidth="1.2" strokeDasharray="4 4" />
                <text x="257" y="44" fill={em} fontSize="12.5" fontFamily="var(--f-plex), monospace" letterSpacing="1">CHANGE BEGINS</text>
                <path className="sc-line" d="M20 160 L70 158 L120 160 L170 158 L220 159 L250 155 L270 120 L290 86 L310 78 L330 82 L350 74 L370 80 L390 76" fill="none" stroke={ink} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
                <text x="24" y="192" fill={muted} fontSize="11" fontFamily="var(--f-plex), monospace">time →</text>
              </svg>
              <figcaption style={{ fontSize: 12, color: muted, marginTop: 6 }}>An illustration of the pattern, not a real child.</figcaption>
            </figure>
          </div>
          <div className="sc-ask" style={{ borderColor: rule }}>
            <p className="es-k" style={{ color: em, marginBottom: 10 }}>What to ask your doctor for</p>
            <ul>
              <li><b>A strep swab</b>: rapid strep with a throat culture, or a strep PCR (LabCorp 180800). For your child, and everyone at home.</li>
              <li><b>A perianal swab</b> when there is redness or itching around the bottom.</li>
              <li><b>Strep blood tests</b>: ASO and anti-DNase B titers, run together and repeated in 4–6 weeks. A rise matters more than one number.</li>
              <li><b>Mycoplasma</b>: a PCR swab (LabCorp 139845) with IgG + IgM blood tests.</li>
            </ul>
            <p style={{ margin: '12px 0 0' }}><a href="https://planbforpans.com/pans-and-strep.html" style={{ color: em, minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>Read: PANDAS and strep →</a></p>
          </div>
          <p className="es-n" style={{ color: muted }}>A possible trigger to test for, not a diagnosis.</p>
        </div>
      </div>
    </section>
  )
}

const SC_CSS = `
.sc-grid{ display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:center }
.sc-grid > *{ min-width:0 }
.sc svg{ width:100%; height:auto; display:block }
.sc-p{ margin:0 0 14px; font-size:16.5px }
.sc-chips{ list-style:none; padding:0; margin:0 0 16px; display:flex; flex-wrap:wrap; gap:8px }
.sc-chips li{ border:1px solid; border-radius:6px; padding:6px 12px; font-size:14.5px }
.sc-ask{ border-top:1px solid; margin-top:24px; padding-top:20px }
.sc-ask ul{ margin:0; padding-inline-start:20px; font-size:15.5px } .sc-ask li{ margin-bottom:6px }
.sc-line{ stroke-dasharray:600; stroke-dashoffset:600; animation: scDraw 2.2s .4s cubic-bezier(.4,.1,.2,1) forwards }
@keyframes scDraw{ to{ stroke-dashoffset:0 } }
@media (max-width:760px){ .sc-grid{ grid-template-columns:1fr; gap:18px } }
@media (prefers-reduced-motion: reduce){ .sc-line{ animation:none; stroke-dashoffset:0 } }
`
