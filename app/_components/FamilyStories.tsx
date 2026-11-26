'use client'

// Two anonymized family stories, structured as: where they were stuck → what the
// synthesis found when every lab was read together. Names anonymized, hospitals
// and countries generalized; clinical specifics shared with permission.
// Shared between the homepage teaser, /stories, and /pricing so copy never drifts.

export type FamilyStory = {
  id: string
  tag: string
  head: string
  headEm: string
  // "Where they were" — the stuck before-state.
  where: string
  // the single most counterintuitive connection — the genius re-read.
  leap?: { label: string; text: string }
  // the methylation/detox pieces no prior protocol matched to the child.
  methyl?: { label: string; text: string }
  // "What the synthesis found" — framing line + the specific findings.
  foundLabel: string
  found: string[]
  // optional secondary block — rule-outs (Daniel) or newly-ordered tests (Tommy).
  extraLabel?: string
  extra?: string[]
  // what reading it all together unlocked.
  unlock: string
  quote: string
}

export const FAMILY_STORIES: FamilyStory[] = [
  {
    id: 'europe-teen',
    tag: 'Family 01 · Teen son · Europe · 30+ labs, 25 categories · 5 specialists, 3 years',
    head: 'Three years. Thirty labs.',
    headEm: 'Three drivers nobody had stacked together.',
    where:
      'A teen son with PANS-spectrum symptoms — OCD, anxiety, recurrent infections, gut problems that wouldn’t resolve. Five specialists across three years. Hospital bloodwork, a full functional-genomics SNP panel, EU lab work — thirty-plus tests across twenty-five categories, each sitting in its own report. The neurologist read the brain. The immunologist read the antibodies. The gastroenterologist read the gut. A prior synthesis had called the whole thing “gut + neuroinflammation.” Every number that mattered was already on paper. Nobody had read them against each other.',
    leap: {
      label: 'The connection no one else made',
      text: 'His serum B12 came back at 1,360 — nearly double the top of range. Every prior reader saw a high, reassuring number and moved on. Minta cross-read it against his genetics — homozygous-slow MTRR — and saw the opposite: a methyl-trap. His body couldn’t convert the B12 it was being flooded with, so it pooled in his blood while his cells starved. The “good” result was actually proof of a functional deficiency — and it quietly rewrote his entire methylation plan.',
    },
    foundLabel: 'From there, three drivers no single specialist had connected fell into place:',
    found: [
      'An infection no one had named out loud — and the proof was already in his routine blood. Borrelia, Bartonella, Babesia and Mycoplasma showed on dark-field microscopy nobody had ordered. Minta didn’t stop at the image: it corroborated the load from labs everyone already had — ferritin 20 (Bartonella sequesters iron), neutropenia and a high CD57 (the Babesia/Bartonella cytopenia signature). Three “unrelated” abnormalities, one cause.',
      'Why his immune system could never close the deal — and what it unlocked. IgA 0.74, IgM 0.29, class-switched memory B-cells at 5.6%: a CVID-spectrum deficiency. A prior immunologist had written “immune dysfunction” and left it there. Minta tied those exact numbers to the failure-to-clear pattern — then to the funding: the same bloodwork qualifies him for IVIG under national health coverage his mom could never have paid for privately.',
      'Where the OCD actually came from. His genetics throttle the kynurenine pathway and slow COMT — pulling tryptophan away from serotonin toward quinolinic acid, a neuro-inflammatory byproduct. Not “he has OCD.” A measurable, addressable substrate underneath it.',
    ],
    extraLabel: 'Just as important — what reading it all together ruled OUT, so the family could stop chasing them:',
    extra: [
      'PANDAS / strep — ASO 15, essentially no strep antibody activity.',
      'Autoimmune encephalitis — NMDAR, LGI1, CASPR2 and GAD all negative.',
      'Mold / mycotoxins, and folate-receptor antibody — both negative.',
    ],
    methyl: {
      label: 'The methylation pieces no one supplied',
      text: 'His methylation and detox machinery was impaired at multiple steps — slow MTRR, slow COMT on both variants, an NRF2/glutathione block, and a Vitamin-D pathway broken at nearly every gene in the chain. The plan got specific: confirm the functional B12 with an MMA + homocysteine panel, then move him onto the active forms his body can actually use — methylcobalamin and folinic acid in place of the plain B12 and folate he’d been given, titrated to his slow COMT — with targeted glutathione support to open detox. Not more supplements. The right forms, matched to his genetics.',
    },
    unlock:
      'Every prior protocol had led with killing the infection — and failed three times. Reading it all as one system inverted the plan. First: a pediatric-immunologist referral to turn his existing bloodwork into insurance-covered IVIG. Alongside it: the methylation correction above, a Vitamin-D rebuild, and a histamine-pathway workup to settle what was driving his agitation. Only then — once his body could actually clear — targeted antimicrobials, sequenced so die-off never outruns drainage. That is the plan five specialists over three years never assembled, because no one had the whole picture in front of them at once.',
    quote:
      'This is the most comprehensive document I have ever received concerning my son’s health and test results. You and Minta are excellent — it makes so much sense.',
  },
  {
    id: 'us-teen',
    tag: 'Family 02 · Teen son · U.S. · multi-driver PANS · 2 years of treatment',
    head: 'Two years of treatment. The labs never moved.',
    headEm: 'Minta knew why.',
    where:
      'Two years of homeopathy, functional medicine and biomagnetism. Every panel run, more than once. And the labs kept coming back the same — histamine high, strep that never came down, mycoplasma climbing, mold through the roof. Treatment after treatment, and nothing held.',
    leap: {
      label: 'The connection no one else made',
      text: 'Two years of providers had treated his sky-high histamine, his stuck strep, his climbing mycoplasma and his off-the-charts mold as four separate problems. Minta saw one cause sitting under all four — a genetically throttled detox and immune system. His body simply could not clear what every protocol kept trying to kill, so each aggressive round drove die-off faster than he could drain it, and he got worse. Same labs everyone already had. One read nobody had made.',
    },
    foundLabel: 'Pulled apart, every stuck number had a reason — and they were the same reason:',
    found: [
      'Why the kills kept backfiring. Undermethylation + a CBS sulfur block + low ceruloplasmin throttle drainage at the source — so biomagnetism and antimicrobials produced more die-off than his body could clear. The “regression” after treatment wasn’t the protocol failing; it was working too fast for a body that couldn’t keep up. Even his “freezing in positions” on sulfur supplements was a clue, not a random reaction.',
      'Why his histamine never came down. A histadelic biotype, slow histamine-clearing genetics, and histamine-producing gut bacteria — three inputs stacking into one stubborn number no diet alone could move.',
      'Why the strep wouldn’t clear and the mycoplasma kept climbing — and the door it opened. Two years of “why won’t these infections resolve,” and no one had screened his immune function. Testing confirmed Specific Antibody Deficiency (SPAD): his body can’t mount a durable response to the bacteria it keeps fighting, so it never finishes the job. SPAD is a recognized diagnosis — which unlocks insurance-covered IVIG, a treatment two years of protocols never put on the table.',
      'The mold, in context. Off-the-charts mycotoxins are alarming on their own — but the insight was the stacking: a heavy mold load sitting on a detox system that genetically can’t process it. No one had sequenced the mold against his drainage capacity before going after it.',
    ],
    extraLabel: 'So the plan flipped the order everything had been done in:',
    extra: [
      'Open drainage and support the methylation + copper engine first — before any more killing.',
      'Then sequence the infections and the mold so die-off never outruns what his body can clear.',
      'Pursue the confirmed SPAD diagnosis into insurance-covered IVIG — a path two years of treatment never opened.',
    ],
    methyl: {
      label: 'The methylation pieces no one had matched to him',
      text: 'His methylation machinery was the throttle under everything — an undermethylation pattern on the Yasko panel, a CBS sulfur bottleneck, and low ceruloplasmin. The missing piece wasn’t another supplement; it was the framework and the order. The plan ran Yasko first to open his cycle safely — molybdenum and hydroxy-B12, copper-safe support before any zinc — and only layered in Walsh once his copper status was confirmed. The zinc-heavy Walsh protocols he’d already been put on had been crashing him for exactly the reason no one had checked: you can’t run Walsh before you’ve cleared the Yasko bottleneck.',
    },
    unlock:
      'The kill-first approach had been backfiring for two years. Reading every lab together — genetics, infections, histamine, mold and immune function as one system — showed exactly why, and put the steps in an order his body could finally handle.',
    quote:
      'Two years of treatment, and every lab kept coming back the same. Minta was the first to tell me why.',
  },
]

const p: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  fontWeight: 300,
  margin: '0 0 18px',
}

const label: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  fontWeight: 600,
  margin: '0 0 8px',
}

export function FamilyStoryFull({ s }: { s: FamilyStory }) {
  return (
    <article>
      <p className="mono" style={{ ...label, color: 'var(--ink-soft)', letterSpacing: '0.12em' }}>{s.tag}</p>
      <h3
        className="serif"
        style={{
          fontSize: 'clamp(26px, 3.6vw, 38px)',
          fontWeight: 300,
          letterSpacing: '-0.015em',
          lineHeight: 1.1,
          color: 'var(--ink)',
          margin: '4px 0 26px',
        }}
      >
        {s.head}{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{s.headEm}</span>
      </h3>

      {/* Where they were */}
      <p className="mono" style={{ ...label, color: 'var(--sand-dark)' }}>Where they were</p>
      <p style={p}>{s.where}</p>

      {/* The leap — the genius re-read */}
      {s.leap && (
        <div
          style={{
            background: 'var(--cream-light)',
            border: '1px solid var(--teal)',
            borderInlineStart: '4px solid var(--teal)',
            borderRadius: 6,
            padding: 'clamp(18px, 2.6vw, 26px)',
            margin: '22px 0',
          }}
        >
          <p className="mono" style={{ ...label, color: 'var(--teal)' }}>{s.leap.label}</p>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink)', fontWeight: 400, margin: 0 }}>{s.leap.text}</p>
        </div>
      )}

      {/* What the synthesis found */}
      <div
        style={{
          background: 'var(--paper)',
          border: '1px solid var(--rule)',
          borderInlineStart: '3px solid var(--teal)',
          borderRadius: 4,
          padding: 'clamp(20px, 3vw, 28px)',
          margin: '24px 0',
        }}
      >
        <p className="mono" style={{ ...label, color: 'var(--teal)' }}>What the synthesis found</p>
        <p style={{ ...p, marginBottom: 14, color: 'var(--ink)', fontWeight: 400 }}>{s.foundLabel}</p>
        <ol style={{ margin: 0, paddingInlineStart: 22, display: 'grid', gap: 13 }}>
          {s.found.map((f, i) => (
            <li key={i} style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>{f}</li>
          ))}
        </ol>

        {s.extra && s.extra.length > 0 && (
          <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--rule)' }}>
            {s.extraLabel && (
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink)', fontWeight: 400, margin: '0 0 10px' }}>{s.extraLabel}</p>
            )}
            <ul style={{ margin: 0, paddingInlineStart: 20, display: 'grid', gap: 8 }}>
              {s.extra.map((e, i) => (
                <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', fontWeight: 300 }}>{e}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* The methylation pieces no one matched to the child */}
      {s.methyl && (
        <div
          style={{
            background: 'var(--paper)',
            border: '1px dashed var(--teal)',
            borderRadius: 6,
            padding: 'clamp(16px, 2.4vw, 24px)',
            margin: '0 0 20px',
          }}
        >
          <p className="mono" style={{ ...label, color: 'var(--teal)' }}>{s.methyl.label}</p>
          <p style={{ ...p, margin: 0 }}>{s.methyl.text}</p>
        </div>
      )}

      <p style={p}>{s.unlock}</p>

      <blockquote style={{ margin: '26px 0 0', paddingInlineStart: 22, borderInlineStart: '2px solid var(--teal)' }}>
        <span
          className="serif"
          style={{
            fontSize: 'clamp(18px, 2.3vw, 23px)',
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.45,
            display: 'block',
          }}
        >
          &ldquo;{s.quote}&rdquo;
        </span>
        <p className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 14 }}>
          — His mom
        </p>
      </blockquote>
    </article>
  )
}

// Compact two-up teaser for the homepage. Front-and-center proof that links to
// the full /stories page.
export function FamilyStoriesTeaser() {
  return (
    <section style={{ padding: 'clamp(64px, 8vw, 104px) 24px', background: 'var(--cream-light)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="pb-container" style={{ maxWidth: 1080 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>Where they were · What the synthesis found</p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(30px, 5vw, 60px)',
            fontWeight: 300,
            letterSpacing: '-0.022em',
            lineHeight: 1.02,
            color: 'var(--ink)',
            margin: '0 0 16px',
            maxWidth: 820,
          }}
        >
          Two families, stuck for years.{' '}
          <em style={{ color: 'var(--teal)' }}>The picture no one had connected.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 640, margin: '0 0 48px' }}>
          Real syntheses. Names anonymized, lab details shared with permission.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {FAMILY_STORIES.map((s) => (
            <a
              key={s.id}
              href={`/stories#${s.id}`}
              style={{
                display: 'block',
                background: 'var(--paper)',
                border: '1px solid var(--rule)',
                borderRadius: 8,
                padding: 'clamp(24px, 3vw, 34px)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <p className="mono" style={{ ...label, color: 'var(--ink-soft)', letterSpacing: '0.12em' }}>{s.tag}</p>
              <h3 className="serif" style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', margin: '6px 0 16px' }}>
                {s.head}{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{s.headEm}</span>
              </h3>
              <p className="mono" style={{ ...label, color: 'var(--sand-dark)' }}>Where they were</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: '0 0 16px' }}>
                {s.where.length > 215 ? s.where.slice(0, 212).trimEnd() + '…' : s.where}
              </p>
              <span className="mono" style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)', fontWeight: 600 }}>
                Read the full synthesis →
              </span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <a
            href="/stories"
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: 'var(--teal)',
              color: 'var(--cream)',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Read both syntheses →
          </a>
        </div>
      </div>
    </section>
  )
}
