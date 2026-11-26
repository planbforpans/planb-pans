const MARKERS = [
  { label: 'Infect', from: 22 },
  { label: 'Immune', from: 120 },
  { label: 'Inflam', from: 18 },
  { label: 'Nutrient', from: 124 },
  { label: 'Mold', from: 28 },
]

const TOOLS = ['Homeopathy', 'Behavioral therapy', 'Biomagnetism', 'Phage therapy', 'Craniosacral work', 'Stem cells, when ready']

const CSS = `
.cp { margin-top: clamp(56px, 7vw, 96px); border-top: 1px solid var(--ink); padding-top: 20px; }
.cp-head { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; align-items: baseline; margin: 0 0 18px; }
.cp-fig { font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal); margin: 0; }
.cp-by { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); margin: 0; }
.cp-title { font-size: clamp(28px, 3.4vw, 44px); margin: 0 0 clamp(28px, 4vw, 44px); max-width: 760px; }
.cp-title em { color: var(--teal); }
.cp-grid { display: grid; grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr); align-items: stretch; }
.cp-phase { background: var(--cream); border: 1px solid var(--sand); padding: clamp(20px, 2.4vw, 30px); display: flex; flex-direction: column; }
.cp-n { font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal); margin: 0 0 8px; }
.cp-phase h3 { font-size: clamp(22px, 2.2vw, 30px); margin: 0 0 12px; }
.cp-phase > p:not(.cp-n) { font-size: 15px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 20px; }
.cp-arrow { display: flex; align-items: center; justify-content: center; color: var(--teal); }
.cp-arrow svg { width: 40px; height: 16px; }
.cp-arrow .ln { stroke: currentColor; stroke-width: 1.4; fill: none; }
.cp-tag { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase; fill: var(--sand-dark); }
.cp-axis { font-size: 8.5px; letter-spacing: .04em; }
.cp .band { fill: var(--teal); opacity: .09; }
.cp .bandline { stroke: var(--teal); stroke-width: .7; stroke-dasharray: 3 3; }
.cp .was { fill: none; stroke: var(--signal); stroke-width: 1.3; }
.cp .trail { stroke: var(--sand-dark); stroke-width: .9; stroke-dasharray: 2 3; }
.cp .now { fill: var(--teal); opacity: 0; transform-box: fill-box; transform-origin: center; }
.how.in-view .cp .now { animation: pop .5s ease-out forwards; }
.cp-tools { list-style: none; padding: 0; margin: auto 0 0; display: flex; flex-wrap: wrap; gap: 8px; }
.cp-tools li { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--sand); background: var(--cream-light); padding: 7px 10px; border-radius: 2px; }
.cp-tools li:last-child { border-style: dashed; color: var(--teal); border-color: var(--teal-light); background: transparent; }
.cp-loop { margin-top: 18px; border: 1px dashed var(--teal-light); padding: 18px clamp(18px, 2.4vw, 30px); display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 18px; align-items: center; }
.cp-loop svg { width: 64px; height: 64px; color: var(--teal); }
.cp-loop .ring { fill: none; stroke: currentColor; stroke-width: 1.4; stroke-dasharray: 150; stroke-dashoffset: 150; }
.how.in-view .cp-loop .ring { animation: draw 1.6s cubic-bezier(.4,0,.2,1) .8s forwards; }
.cp-loop .head { fill: currentColor; }
.cp-loop p { margin: 0; font-size: 15.5px; line-height: 1.6; color: var(--ink); }
.cp-loop p b { font-weight: 600; }
.cp-steps { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); margin: 8px 0 0 !important; }
.cp-steps span { color: var(--teal); }
@media (max-width: 760px) {
  .cp-grid { grid-template-columns: 1fr; }
  .cp-arrow { height: 44px; }
  .cp-arrow svg { transform: rotate(90deg); }
  .cp-loop { grid-template-columns: 1fr; justify-items: start; }
  .cp-loop svg { width: 48px; height: 48px; }
}
`

export default function CarePath() {
  return (
    <div className="cp" id="care-path">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cp-head">
        <p className="cp-fig">Fig. 02 &middot; The care path</p>
        <p className="cp-by">In Rachel&apos;s words</p>
      </div>
      <h2 className="cp-title">Two phases. <em>Biology</em> first, then whatever your child needs.</h2>

      <div className="cp-grid">
        <div className="cp-phase">
          <p className="cp-n">Phase 1</p>
          <h3>The biology</h3>
          <p>We start with what the blood and biological labs show: infections, the immune system, inflammation, nutrients, mold. We treat what&apos;s found and retest, until those markers are back in a normal range.</p>
          <svg viewBox="0 0 300 150" style={{ width: '100%', height: 'auto', display: 'block', marginTop: 'auto' }} role="img" aria-label="Five lab markers move from outside the normal range back inside it after treatment and retesting">
            <rect className="band" x="10" y="52" width="280" height="44" />
            <line className="bandline" x1="10" x2="290" y1="52" y2="52" />
            <line className="bandline" x1="10" x2="290" y1="96" y2="96" />
            <text className="cp-tag" x="286" y="91" textAnchor="end">normal range</text>
            {MARKERS.map((m, i) => {
              const x = 30 + i * 50
              const y = 66 + (i % 3) * 8
              return (
                <g key={m.label}>
                  <line className="trail" x1={x} x2={x} y1={m.from < 74 ? m.from + 5 : m.from - 5} y2={y} />
                  <circle className="was" cx={x} cy={m.from} r="4.5" />
                  <circle className="now" cx={x} cy={y} r="4.5" style={{ animationDelay: `${0.6 + i * 0.18}s` }} />
                  <text className="cp-tag cp-axis" x={x} y="146" textAnchor="middle">{m.label}</text>
                </g>
              )
            })}
          </svg>
        </div>

        <div className="cp-arrow" aria-hidden="true">
          <svg viewBox="0 0 40 16"><path className="ln" d="M2 8 H36 M29 2 L36 8 L29 14" /></svg>
        </div>

        <div className="cp-phase">
          <p className="cp-n">Phase 2</p>
          <h3>Whatever your child needs</h3>
          <p>If symptoms persist once the markers are normal, we add other tools, chosen for your child: homeopathy, behavioral therapy, biomagnetism, phage therapy, craniosacral work, stem cells when a child is ready. Whatever helps.</p>
          <ul className="cp-tools" aria-label="Tools we may add">
            {TOOLS.map((t) => <li key={t}>{t}</li>)}
            <li>Whatever helps</li>
          </ul>
        </div>
      </div>

      <div className="cp-loop">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path className="ring" d="M32 8 A24 24 0 1 1 12.6 18" />
          <path className="head" d="M7 14 L17 14 L13 24 Z" />
        </svg>
        <div>
          <p><b>We recommend as we go, based on your child&apos;s behavior.</b> Your nightly notes tell us what to try next.</p>
          <p className="cp-steps">Nightly notes <span>&rarr;</span> behavior <span>&rarr;</span> next step <span>&#8634;</span></p>
        </div>
      </div>
    </div>
  )
}
