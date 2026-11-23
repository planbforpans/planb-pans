'use client'

// Visual proof of what a parent actually receives: a miniature, ANONYMIZED
// preview of (1) the Synthesis document and (2) the supplement titration
// calendar. Representative sample — not a real child's data.

const mono: React.CSSProperties = {
  fontFamily: 'var(--mono, ui-monospace, monospace)',
  fontSize: 10,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontWeight: 600,
}

export default function DeliverablePreview() {
  return (
    <section style={{ padding: 'clamp(64px, 8vw, 104px) 24px', background: 'var(--cream)' }}>
      <div className="pb-container" style={{ maxWidth: 1080 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>What you actually receive</p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(30px, 5vw, 58px)',
            fontWeight: 300,
            letterSpacing: '-0.022em',
            lineHeight: 1.02,
            color: 'var(--ink)',
            margin: '0 0 16px',
            maxWidth: 820,
          }}
        >
          Not a phone call you forget.{' '}
          <em style={{ color: 'var(--teal)' }}>A document you keep.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 680, margin: '0 0 16px' }}>
          Your Synthesis is a written, sourced plan — what&apos;s going on, what to do first, the
          tests still missing from your child&apos;s picture, and a month-by-month calendar your
          whole family can follow. Here&apos;s what it looks like.
        </p>
        <p style={{ ...mono, color: 'var(--sand-dark)', marginBottom: 44 }}>
          Representative sample · anonymized · not a real child&apos;s data
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          <SynthesisDoc />
          <TestsToOrder />
          <SupplementCalendar />
        </div>
      </div>
    </section>
  )
}

function Paper({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <p style={{ ...mono, color: 'var(--teal)', marginBottom: 12 }}>{label}</p>
      <div
        style={{
          background: 'var(--paper, #fff)',
          border: '1px solid var(--rule)',
          borderRadius: 8,
          padding: 'clamp(22px, 3vw, 32px)',
          boxShadow: '0 18px 40px -28px rgba(20,20,20,0.35)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function SynthesisDoc() {
  const cell: React.CSSProperties = { padding: '8px 10px', fontSize: 12, lineHeight: 1.45, verticalAlign: 'top', borderTop: '1px solid var(--cream-light, #F5F7F6)' }
  return (
    <Paper label="The Synthesis · PDF">
      <p style={{ ...mono, color: 'var(--sand-dark)', fontSize: 9, marginBottom: 6 }}>Plan B · Synthesis</p>
      <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, margin: '0 0 4px' }}>
        What&apos;s going on — <em style={{ color: 'var(--teal)' }}>and what to do first</em>
      </h3>
      <p style={{ fontSize: 11, color: 'var(--ink-soft)', margin: '0 0 16px' }}>Child A · age 12 · multi-driver PANS</p>

      {/* TL;DR */}
      <div style={{ background: 'var(--ink)', color: 'var(--cream)', borderRadius: 6, padding: '14px 16px', marginBottom: 16 }}>
        <p style={{ ...mono, color: 'var(--teal)', fontSize: 9, margin: '0 0 6px' }}>The short version</p>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
          Three drivers are stacked: an unaddressed infection load, a methylation/detox bottleneck,
          and an immune gap that explains why nothing has cleared. The first move isn&apos;t another
          antimicrobial — it&apos;s opening drainage and confirming the immune picture.
        </p>
      </div>

      {/* Drivers table */}
      <p style={{ ...mono, color: 'var(--ink-soft)', fontSize: 9, margin: '0 0 4px' }}>The drivers</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
        <tbody>
          {[
            ['Methylation / detox bottleneck', 'Strong', 'Slow MTRR + serum B12 near 2× range — supplemented B12 isn’t being used'],
            ['Chronic infection load', 'Strong', 'Multi-pathogen pattern on direct testing; supporting cytopenias'],
            ['Immune gap', 'Moderate', 'Low IgA / IgM — explains the failure-to-clear pattern'],
          ].map(([d, c, w]) => (
            <tr key={d}>
              <td style={{ ...cell, fontWeight: 600, color: 'var(--ink)', width: '38%' }}>{d}</td>
              <td style={{ ...cell, width: '20%' }}>
                <span style={{ ...mono, fontSize: 9, color: 'var(--cream)', background: 'var(--teal)', padding: '2px 6px', borderRadius: 3 }}>{c}</span>
              </td>
              <td style={{ ...cell, color: 'var(--ink-soft)' }}>{w}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Hypothesis */}
      <p style={{ ...mono, color: 'var(--ink-soft)', fontSize: 9, margin: '0 0 4px' }}>Where Minta&apos;s thinking is going</p>
      <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--ink)', margin: '0 0 8px' }}>
        <strong>Our best theory right now:</strong> the infections aren&apos;t clearing because of the
        immune gap. It fits the story, but nothing has proved it yet. Here&apos;s what the tests
        could show, and what each answer would change.
      </p>
      <div style={{ display: 'grid', gap: 6, marginBottom: 16 }}>
        {[
          ['Immune gap is letting infections hang on', 'Leading', 'IgG subclasses + vaccine titers', 'Low → the immune door (IVIG talk) opens', 'Normal → clearance moves up the list'],
          ['Methylation block is slowing clearance', 'Possible', 'MMA + homocysteine', 'High → cofactors before any killing', 'Normal → B12 isn’t the bottleneck'],
          ['An infection serology missed', 'Possible', 'Direct tick-borne panel', 'Positive → a targeted plan, sequenced slowly', 'Negative → focus stays on immune + clearance'],
        ].map(([name, lk, test, yes, no]) => (
          <div key={name} style={{ background: 'var(--cream-light, #F5F7F6)', borderRadius: 6, padding: '8px 10px', fontSize: 11.5, lineHeight: 1.45 }}>
            <div style={{ fontWeight: 600, color: 'var(--ink)' }}>
              {name} <span style={{ ...mono, fontSize: 8.5, color: 'var(--teal)', marginLeft: 4 }}>{lk}</span>
            </div>
            <div style={{ color: 'var(--ink-soft)' }}>
              <em>The test:</em> {test} · {yes} · {no}
            </div>
          </div>
        ))}
      </div>

      {/* Priority */}
      <div style={{ background: 'var(--cream-light, #F5F7F6)', borderLeft: '3px solid var(--teal)', borderRadius: '0 6px 6px 0', padding: '12px 14px', marginBottom: 14 }}>
        <p style={{ ...mono, color: 'var(--teal)', fontSize: 9, margin: '0 0 4px' }}>Do this first</p>
        <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--ink)', margin: 0 }}>
          Confirm the immune picture before any more killing. Drainage + cofactors come before
          antimicrobials — die-off can&apos;t outrun what the body can clear.
        </p>
      </div>

      <p style={{ fontSize: 11, lineHeight: 1.5, color: 'var(--sand-dark)', margin: 0, fontStyle: 'italic' }}>
        Every recommendation is a question to bring to your practitioner. Every number checked
        against the source.
      </p>
    </Paper>
  )
}

function TestsToOrder() {
  const td: React.CSSProperties = { padding: '8px 9px', fontSize: 11.5, lineHeight: 1.45, borderTop: '1px solid var(--cream-light, #F5F7F6)', verticalAlign: 'top' }
  return (
    <Paper label="Tests to order next">
      <p style={{ ...mono, color: 'var(--sand-dark)', fontSize: 9, marginBottom: 6 }}>Plan B · Data gaps</p>
      <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, margin: '0 0 6px' }}>
        What&apos;s <em style={{ color: 'var(--teal)' }}>missing</em> from the picture
      </h3>
      <p style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--ink-soft)', margin: '0 0 14px' }}>
        When the data isn&apos;t complete, the Synthesis names exactly what to run next — and where
        to order it without waiting on a doctor.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {[
            ['IgG subclasses 1–4', 'Confirm the immune gap', 'Self-order · Ulta / Quest'],
            ['MMA + homocysteine + B12', 'Prove the methylation block', 'Self-order · Labcorp OnDemand'],
            ['Tickborne direct panel', 'Find what serology missed', 'IGeneX · direct in most states'],
            ['Histamine + tryptase', 'Explain the high histamine', 'Self-order · Ulta'],
          ].map(([t, why, where]) => (
            <tr key={t}>
              <td style={{ ...td, fontWeight: 600, color: 'var(--ink)', width: '40%' }}>
                {t}
                <span style={{ display: 'block', fontWeight: 400, color: 'var(--ink-soft)', fontSize: 10.5, marginTop: 2 }}>{why}</span>
              </td>
              <td style={{ ...td, color: 'var(--teal)' }}>{where}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: 11, lineHeight: 1.5, color: 'var(--sand-dark)', margin: '14px 0 0', fontStyle: 'italic' }}>
        Each one with when, why, what it&apos;ll tell you, and the cheapest place to get it.
      </p>
    </Paper>
  )
}

function SupplementCalendar() {
  const th: React.CSSProperties = { ...mono, fontSize: 9, color: 'var(--cream)', background: 'var(--teal)', padding: '6px 8px', textAlign: 'left' }
  const td: React.CSSProperties = { padding: '7px 8px', fontSize: 11.5, lineHeight: 1.4, borderTop: '1px solid var(--cream-light, #F5F7F6)', color: 'var(--ink)', verticalAlign: 'top' }
  return (
    <Paper label="Supplement calendar · printable">
      <p style={{ ...mono, color: 'var(--sand-dark)', fontSize: 9, marginBottom: 6 }}>Plan B · Daily calendar</p>
      <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, margin: '0 0 14px' }}>
        Morning &amp; night — <em style={{ color: 'var(--teal)' }}>on one page</em>
      </h3>

      {/* AM / PM */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 18, border: '1px solid var(--rule)', borderRadius: 6, overflow: 'hidden' }}>
        <thead>
          <tr><th style={th}>☀ Morning</th><th style={th}>☾ Night</th></tr>
        </thead>
        <tbody>
          {[
            ['Molybdenum · 1 drop', 'Magnesium glycinate · 100 mg'],
            ['Hydroxy-B12 · ¼ tab', 'Liposomal glutathione · 1 pump'],
            ['Vitamin D3/K2 · 2,000 IU', 'Gentle binder · away from food'],
            ['Cod liver oil · ½ tsp', 'Probiotic · 1 cap'],
          ].map(([am, pm], i) => (
            <tr key={i}><td style={td}>{am}</td><td style={{ ...td, borderLeft: '1px solid var(--cream-light, #F5F7F6)' }}>{pm}</td></tr>
          ))}
        </tbody>
      </table>

      {/* Titration ramp */}
      <p style={{ ...mono, color: 'var(--ink-soft)', fontSize: 9, margin: '0 0 8px' }}>The ramp · start low, go slow</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {[
          ['Month 1', 'Drainage + cofactors only'],
          ['Month 3', 'Add first antimicrobial, low'],
          ['Month 6', 'Full stack, watch die-off'],
          ['Month 9', 'Retest · adjust · hold'],
        ].map(([m, note]) => (
          <div key={m} style={{ background: 'var(--cream-light, #F5F7F6)', borderRadius: 5, padding: '8px 9px' }}>
            <p style={{ ...mono, fontSize: 9, color: 'var(--teal)', margin: '0 0 4px' }}>{m}</p>
            <p style={{ fontSize: 10.5, lineHeight: 1.4, color: 'var(--ink-soft)', margin: 0 }}>{note}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, lineHeight: 1.5, color: 'var(--sand-dark)', margin: '16px 0 0', fontStyle: 'italic' }}>
        Stick it on the fridge. Everyone caring for your kid is on the same page.
      </p>
    </Paper>
  )
}
