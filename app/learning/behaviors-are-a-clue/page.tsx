import type { Metadata } from 'next'
import Link from 'next/link'

// What we're learning · Clue 01 (Rachel, 2026-11-25): "Behaviors are symptoms
// of illness and what brings down those symptoms." Landing page for the 10-week
// Facebook series "Behavior is a symptom. Track it."
//
// Guardrails: clues, not diagnoses. Mainstream links first (PANS/PANDAS
// criteria, strep, Mycoplasma); debated areas (tick-borne co-infections, mold)
// are labelled as debated. No doses. No child or family is described.

const TITLE = 'Behaviors are a clue — What we’re learning · Plan B for PANS'
const DESCRIPTION =
  'Sudden rage, overnight OCD, food refusal, tic flares, meltdowns after hunger: behavior is often the loudest sign that something in the body changed. What each behavior can be a clue to, what to check, and what has brought it down.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/learning/behaviors-are-a-clue' },
  openGraph: {
    title: 'Behaviors are a clue',
    description: DESCRIPTION,
    url: 'https://planbforpans.com/learning/behaviors-are-a-clue',
    type: 'article',
  },
}

const STRAP = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const ICONS: Record<string, React.ReactNode> = {
  rage: <path {...STRAP} d="M13.5 2 5 13.5h6L10 22l9-12.5h-6z" />,
  ocd: (
    <g {...STRAP}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3v4h-4" />
      <path d="M15.5 12a3.5 3.5 0 1 1-1-2.5" />
    </g>
  ),
  food: (
    <g {...STRAP}>
      <circle cx="12" cy="13" r="7" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M4 4l16 18" />
    </g>
  ),
  tics: <path {...STRAP} d="M2 12h4l2-5 3 10 3-14 3 12 2-3h3" />,
  fears: (
    <g {...STRAP}>
      <circle cx="7" cy="7" r="2.5" />
      <path d="M3.5 20v-4a3.5 3.5 0 0 1 7 0v4" />
      <circle cx="17.5" cy="9" r="2" />
      <path d="M15 20v-3a2.5 2.5 0 0 1 5 0v3" />
      <path d="M11.5 12.5h2" strokeDasharray="1 2" />
    </g>
  ),
  sugar: (
    <g {...STRAP}>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <rect x="8.5" y="5.5" width="7" height="5" rx="1" />
      <path d="M12 14.5c-1.4 1.8-2 2.8-2 3.6a2 2 0 0 0 4 0c0-.8-.6-1.8-2-3.6z" />
    </g>
  ),
  sleep: (
    <g {...STRAP}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
      <path d="M15 3h3l-3 3h3" />
    </g>
  ),
  bladder: (
    <g {...STRAP}>
      <path d="M12 3c-3.5 4.6-5.5 7.7-5.5 10.2a5.5 5.5 0 0 0 11 0C17.5 10.7 15.5 7.6 12 3z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </g>
  ),
  school: (
    <g {...STRAP}>
      <path d="M15.5 3.5l5 5L9 20l-6 1.5L4.5 15.5z" />
      <path d="M13 6l5 5" />
      <path d="M3 21.5c4-1.5 7-1.5 10 0s5 1 8-1" strokeDasharray="0" opacity=".5" />
    </g>
  ),
  gut: (
    <g {...STRAP}>
      <rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)" />
      <path d="M9.3 8.2l4.6 6.6" />
    </g>
  ),
}

type Behavior = {
  id: string
  icon: keyof typeof ICONS
  title: string
  hint: string
  clue: React.ReactNode
  check: React.ReactNode
  helped: React.ReactNode
}

const STREP_FLAG = (
  <span className="lrn-flag">
    <b>Note</b>A flat strep titer does not rule strep out. Some children make very little antibody, and titers rise weeks after an infection. A swab finds the bug itself.
  </span>
)

const BEHAVIORS: Behavior[] = [
  {
    id: 'rage',
    icon: 'rage',
    title: 'Sudden rage or aggression',
    hint: 'A child who is suddenly not themselves: explosive, hitting, inconsolable.',
    clue: (
      <>
        <p>Sudden irritability and aggression are among the symptoms that come with PANS and PANDAS, usually alongside new OCD or food restriction. It can be a clue to an <strong>immune reaction after an infection</strong>: Group A strep, Mycoplasma pneumoniae, flu or COVID.</p>
        <p>Some clinicians also look at tick-borne infections such as Lyme and Bartonella. That link is <strong>debated</strong>, but worth asking about if there was a tick bite or a cat scratch. Hunger and blood-sugar dips can make rage louder.</p>
      </>
    ),
    check: (
      <>
      <ul>
        <li><strong>Rapid strep test and throat culture</strong> (or strep PCR)</li>
        <li><strong>Perianal strep swab</strong> if the skin around the bottom is red or sore</li>
        <li><strong>Strep titers: ASO + anti-DNase B</strong></li>
        <li><strong>Mycoplasma pneumoniae:</strong> PCR swab, plus IgM and IgG blood tests</li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong> (hs-CRP)</li>
      </ul>
      {STREP_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>Treating a confirmed infection with antibiotics</li>
        <li>Anti-inflammatory medicines such as NSAIDs, under the doctor&rsquo;s guidance</li>
        <li>For some children, immune therapies such as steroids or IVIG, decided with specialists</li>
        <li>A calm, low-demand home while the flare settles, with a safety plan the family agrees on</li>
      </ul>
    ),
  },
  {
    id: 'ocd',
    icon: 'ocd',
    title: 'Overnight OCD or intrusive fears',
    hint: 'Rituals, contamination fears or scary thoughts that seem to arrive in a day or two.',
    clue: (
      <>
        <p>This is the sign the PANS and PANDAS criteria are built around: an <strong>abrupt, dramatic onset of OCD</strong> (or eating restriction) together with other new symptoms like anxiety, mood swings, irritability, school decline, sleep or bladder changes.</p>
        <p>In PANDAS the trigger is strep. In PANS it can be another infection or immune trigger. Write down the date it started and anything that happened in the weeks before: a sore throat, a fever, a cough, a move, a new building.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Rapid strep test and throat culture</strong>, and a <strong>perianal strep swab</strong></li>
        <li><strong>Strep titers: ASO + anti-DNase B</strong></li>
        <li><strong>Mycoplasma pneumoniae</strong> PCR, IgM and IgG</li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
        <li>If infections keep coming back: an <strong>immune panel</strong> (IgG, IgA, IgM, and pneumococcal titers to see how well your child makes antibodies)</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating a confirmed infection with antibiotics</li>
        <li>NSAIDs under the doctor&rsquo;s guidance</li>
        <li>For some children, steroids or IVIG, decided with specialists</li>
        <li>Cognitive behavioral therapy with exposure and response prevention (ERP), which the published PANS guidelines recommend alongside treating the cause</li>
      </ul>
    ),
  },
  {
    id: 'food',
    icon: 'food',
    title: 'Sudden food refusal or restriction',
    hint: 'Not lifelong picky eating. A child who ate fine, then suddenly won’t.',
    clue: (
      <>
        <p>Abrupt food restriction is the other doorway into a PANS diagnosis. It often comes with a fear: of choking, of vomiting, of contamination, of a texture, of swallowing.</p>
        <p>The key word is <strong>sudden</strong>. A child who has always eaten five foods is a different story from a child whose eating fell apart in a week.</p>
      </>
    ),
    check: (
      <ul>
        <li>The same infection screen: <strong>strep swabs, strep titers (ASO + anti-DNase B), Mycoplasma</strong></li>
        <li><strong>Weight and growth chart</strong> at every visit, so a slide is caught early</li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating a confirmed infection</li>
        <li>Anti-inflammatory treatment under the doctor&rsquo;s guidance</li>
        <li>Feeding support and close weight checks with the care team, so nutrition holds while the cause is treated</li>
      </ul>
    ),
  },
  {
    id: 'tics',
    icon: 'tics',
    title: 'Tics that flare',
    hint: 'Tics that jump in number or strength, especially after being sick.',
    clue: (
      <>
        <p>Tics naturally come and go. A <strong>sudden jump after an illness</strong> can be a clue to an infection-triggered flare. Tics were part of the original PANDAS description.</p>
        <p>Poor sleep, stress, excitement and being sick also make tics louder, so the pattern over weeks matters more than one day.</p>
      </>
    ),
    check: (
      <>
      <ul>
        <li><strong>Rapid strep test and throat culture</strong>, and a <strong>perianal strep swab</strong></li>
        <li><strong>Strep titers: ASO + anti-DNase B</strong>, and a repeat in 4 to 6 weeks to see if they rise</li>
        <li><strong>Mycoplasma pneumoniae</strong> PCR, IgM and IgG</li>
      </ul>
      {STREP_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>Treating a confirmed strep or Mycoplasma infection</li>
        <li>Protecting sleep and lowering stress during a flare</li>
        <li>Behavioral therapy for tics (CBIT), a mainstream first-line approach</li>
      </ul>
    ),
  },
  {
    id: 'fears',
    icon: 'fears',
    title: 'Separation anxiety or new fears',
    hint: 'A child who can’t let you leave the room, or is suddenly scared of the dark, the bath, the car.',
    clue: (
      <>
        <p>New, intense <strong>separation anxiety</strong> is one of the symptoms listed with PANS. When it arrives suddenly, it is worth asking what came before: an infection, a fever, a change at home or school.</p>
        <p>Some families and clinicians are also looking at <strong>mold exposure</strong> in a home, school or car. This is an <strong>emerging and debated</strong> area, but a child who is clearly better away from one building is a pattern worth writing down.</p>
      </>
    ),
    check: (
      <ul>
        <li>The infection screen: <strong>strep swabs, strep titers, Mycoplasma</strong></li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
        <li>If you suspect a building: notes on how your child does away from it for a few days, and, as an option, a <strong>mycotoxin urine panel</strong> (not standardized, so read it with a clinician)</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the trigger once it is found</li>
        <li>Cognitive behavioral therapy, and steady, predictable routines</li>
        <li>For families who found a mold problem, fixing it or moving away from the exposure</li>
      </ul>
    ),
  },
  {
    id: 'sugar',
    icon: 'sugar',
    title: 'Meltdowns after hunger, exercise or sweets',
    hint: 'The 4 pm crash, the after-practice explosion, the storm an hour after cake.',
    clue: (
      <>
        <p>This pattern can be a clue to <strong>blood-sugar swings</strong>. This is not diabetes. It is a dip, or a fast drop after a spike, and in a child whose brain is already inflamed it can turn a hard afternoon into a meltdown. Think of it as an <strong>amplifier</strong>, not the cause.</p>
        <p>An HbA1c blood test shows a three-month average, so it is usually normal and can miss swings within a day.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>A finger-stick glucose meter reading during a meltdown</strong>, and one on a calm day for comparison. Note how long since your child last ate.</li>
        <li>If readings are low or jumpy, ask whether a short trial of a <strong>continuous glucose monitor</strong> makes sense</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Regular protein-rich snacks, so your child never goes long without food</li>
        <li>A snack before and after sports or exercise</li>
        <li>Pairing sweets with protein or fat instead of eating them alone</li>
      </ul>
    ),
  },
  {
    id: 'sleep',
    icon: 'sleep',
    title: 'Sleep that falls apart',
    hint: 'Can’t fall asleep, wakes at night, or needs you in the room again.',
    clue: (
      <>
        <p>New sleep problems are another symptom listed with PANS, and they often rise and fall with a flare. Night waking can also be a clue to a <strong>blood-sugar dip</strong> overnight, <strong>low iron</strong> (linked to restless legs), or a blocked airway from <strong>large tonsils or adenoids</strong>.</p>
      </>
    ),
    check: (
      <ul>
        <li>The infection screen: <strong>strep swabs, strep titers, Mycoplasma</strong></li>
        <li><strong>Ferritin + full iron panel</strong></li>
        <li>Ask the doctor to look at tonsils and adenoids if your child snores or breathes through the mouth</li>
        <li>A glucose meter reading on a night waking, if the waking comes after a long gap without food</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating a confirmed infection or flare</li>
        <li>Iron when ferritin is low, decided with the doctor</li>
        <li>A protein-rich bedtime snack</li>
        <li>Steady bedtime routines while the cause is treated</li>
      </ul>
    ),
  },
  {
    id: 'bladder',
    icon: 'bladder',
    title: 'Urinary frequency or bedwetting returning',
    hint: 'A child who was dry, suddenly running to the bathroom or wet at night.',
    clue: (
      <>
        <p>New urinary frequency or bedwetting after being dry is one of the symptoms listed with PANS. It also has common causes that must be ruled out first: a <strong>urinary tract infection</strong>, <strong>constipation</strong> pressing on the bladder, and <strong>high blood sugar</strong>, which makes children thirsty and wet.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Urinalysis and urine culture</strong> to rule out a urinary infection</li>
        <li><strong>A glucose check</strong> to rule out diabetes, especially with extra thirst</li>
        <li>Questions about constipation (see the last card)</li>
        <li>The strep and Mycoplasma screen if other PANS symptoms came at the same time</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating a urinary infection or strep infection if found</li>
        <li>Treating constipation</li>
        <li>PANS-directed treatment as above, when it is part of a flare</li>
      </ul>
    ),
  },
  {
    id: 'school',
    icon: 'school',
    title: 'Handwriting, math or speech slipping',
    hint: 'Messy writing, lost math facts, or words that used to come easily.',
    clue: (
      <>
        <p>A sudden drop in school skills is listed in the PANS criteria. <strong>Handwriting</strong> is one of the clearest signs, because you can see it on paper. Math often slips too.</p>
        <p>Any loss of speech in a young child needs a prompt, full evaluation, including hearing and a neurology look, not only a PANS workup.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Dated handwriting samples</strong>: a sentence and a drawing each week. They are some of the best data a parent can bring.</li>
        <li>The infection screen: <strong>strep swabs, strep titers, Mycoplasma</strong></li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the flare. Families have seen handwriting come back as a flare settles.</li>
        <li>School support during flares, such as a 504 plan, extra time and less written work</li>
      </ul>
    ),
  },
  {
    id: 'gut',
    icon: 'gut',
    title: 'Constipation, or a child who gets calmer on antibiotics',
    hint: 'Hard, rare stools. Or the course for an ear infection that made behavior better too.',
    clue: (
      <>
        <p><strong>Constipation</strong> is common in children with PANS and autism, and on its own it makes children uncomfortable, irritable and poor sleepers.</p>
        <p>A child who becomes noticeably <strong>calmer on an antibiotic</strong> given for something else is a clue worth telling the doctor. It can mean an infection is part of the picture, such as strep around the bottom that a throat swab never finds.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Perianal strep swab</strong></li>
        <li><strong>Strep titers: ASO + anti-DNase B</strong>, and <strong>Mycoplasma</strong> tests</li>
        <li>Exact dates: when the antibiotic started, when the calm came, and when it faded after stopping</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating constipation: water, fiber, movement, and a stool softener or laxative chosen with the doctor</li>
        <li>Treating a confirmed infection</li>
      </ul>
    ),
  },
]

const CHAIN = [
  { k: 'Behavior', d: 'What you see. Rage, a ritual, a skipped meal, a wet bed.' },
  { k: 'Clue', d: 'What in the body it can point to: an infection, an immune reaction, the house, a blood-sugar dip.' },
  { k: 'Check', d: 'The specific tests to bring to your child’s doctor.' },
  { k: 'What helps', d: 'What families and published guidance report has brought it down.' },
]

// A month of nightly notes: 1 = calm, 10 = hardest. Red = the flare; teal = a note
// ("sore throat", "started treatment"). Illustrative, not any child's data.
const MONTH = [3, 2, 3, 2, 2, 3, 2, 3, 4, 3, 2, 3, 7, 9, 8, 9, 8, 7, 6, 5, 4, 4, 3, 3, 2, 3, 2, 2, 3, 2]

export default function BehaviorsAreAClue() {
  return (
    <main className="lrn">
      <header className="lrn-hero">
        <div className="lrn-wrap">
          <p className="lrn-serial">
            <span className="tag">Clue 01</span>
            <Link href="/learning" className="lrn-crumb">What we&rsquo;re learning</Link>
            <span className="muted">Behavior is a symptom. Track it.</span>
          </p>
          <h1>Behaviors are <em>a clue.</em></h1>
          <p className="lrn-lede">
            Behavior is often the <strong>loudest sign that something in the body changed</strong>: an infection, an immune reaction, something in the house, a blood-sugar dip. You can&rsquo;t see the pattern in one bad day. You can in <strong>a month of short notes.</strong>
          </p>
          <div className="lrn-month" aria-label="An example month of nightly notes: calm days, then a flare that begins after a sore throat and settles after treatment.">
            <div className="lrn-month-bars" aria-hidden="true">
              {MONTH.map((h, i) => (
                <span
                  key={i}
                  className={i === 10 || i === 17 ? 'mark' : h >= 7 ? 'hot' : undefined}
                  style={{ height: `${h * 10}%`, animationDelay: `${0.2 + i * 0.03}s` }}
                />
              ))}
            </div>
            <div className="lrn-month-legend">
              <span><i style={{ background: 'var(--teal-light)' }} />A normal day</span>
              <span><i style={{ background: 'var(--teal)' }} />A note: sore throat, then treatment</span>
              <span><i style={{ background: 'var(--signal)' }} />The flare</span>
            </div>
          </div>
        </div>
      </header>

      <section className="lrn-section">
        <div className="lrn-wrap">
          <p className="lrn-eyebrow">How to read this page</p>
          <h2>Four steps, <em>one behavior at a time.</em></h2>
          <p className="body">These are <strong>clues, not diagnoses.</strong> Each card says what a behavior can be a clue to, what is worth checking, and what families and clinicians have seen bring it down. Bring the card to your child&rsquo;s doctor with the test names.</p>
          <ol className="lrn-chain">
            {CHAIN.map((c, i) => (
              <li key={c.k} className={`s${i + 1}`}>
                <span className="lrn-node" aria-hidden="true">0{i + 1}</span>
                <div>
                  <b>{c.k}</b>
                  <p>{c.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lrn-section alt" id="behaviors">
        <div className="lrn-wrap">
          <p className="lrn-eyebrow">Ten behaviors · tap to open</p>
          <h2>What the behavior <em>can be telling you.</em></h2>
          <div className="lrn-cards">
            {BEHAVIORS.map((b, i) => (
              <details key={b.id} id={b.id} className="lrn-card">
                <summary>
                  <span className="lrn-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{ICONS[b.icon]}</svg>
                  </span>
                  <span>
                    <span className="lrn-card-num">Behavior {String(i + 1).padStart(2, '0')}</span>
                    <span className="lrn-card-title">{b.title}</span>
                    <span className="lrn-card-hint">{b.hint}</span>
                  </span>
                  <span className="lrn-plus" aria-hidden="true" />
                </summary>
                <div className="lrn-card-body">
                  <div className="lrn-row r2">
                    <span className="dot" aria-hidden="true">02</span>
                    <div>
                      <h3>It can be a clue to</h3>
                      {b.clue}
                    </div>
                  </div>
                  <div className="lrn-row r3">
                    <span className="dot" aria-hidden="true">03</span>
                    <div>
                      <h3>Bring this to your child&rsquo;s doctor</h3>
                      {b.check}
                    </div>
                  </div>
                  <div className="lrn-row r4">
                    <span className="dot" aria-hidden="true">04</span>
                    <div>
                      <h3>What has brought it down</h3>
                      {b.helped}
                      <p style={{ fontSize: 13.5, color: 'var(--sand-dark)' }}>Every treatment here is decided with your child&rsquo;s doctor.</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="lrn-note">
            <p><strong>Where the tests live.</strong> What each test finds, what it costs and how to order it is on <Link href="/tests" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>The Tests</Link>.</p>
            <p><strong>If it is an emergency</strong>, such as a child who is not eating or drinking, is a danger to themselves or others, or has lost a skill overnight, go to urgent care or the emergency room, or call 911 (988 for a mental-health crisis).</p>
          </div>
        </div>
      </section>

      <section className="lrn-section" id="track">
        <div className="lrn-wrap lrn-track">
          <div>
            <p className="lrn-eyebrow">Track it</p>
            <h2>One minute a night <em>shows which clue fits.</em></h2>
            <p className="body">A behavior on its own is a guess. The same behavior, next to what came before it and what made it better, is a pattern. The nightly tracker asks four short questions and lines your answers up over weeks, so you and your child&rsquo;s doctor can see it.</p>
            <div className="lrn-ctas">
              <a href="https://app.planbforpans.com/signup" rel="noopener" className="lrn-btn solid">Start tracking free</a>
              <a href="/minta" className="lrn-btn ghost">Ask Minta about a behavior</a>
            </div>
          </div>
          <ol className="lrn-qs">
            <li><span>How was <em>today?</em></span></li>
            <li><span>What was <em>new?</em></span></li>
            <li><span>What got <em>better?</em></span></li>
            <li><span>What&rsquo;s the one behavior you&rsquo;d most like to <em>understand?</em></span></li>
          </ol>
        </div>
      </section>

      <section className="lrn-section" style={{ paddingTop: 0, borderBottom: 0 }}>
        <div className="lrn-wrap">
          <div className="lrn-research">
            <p className="lrn-eyebrow">Part of the research</p>
            <h2>Every family that tracks <em>teaches the next one.</em></h2>
            <p>Plan B for PANS is run by parents. Each night of notes adds to what we all learn about which behaviors come before a flare and what brings them down. We share <strong style={{ color: '#fff' }}>patterns, never names.</strong></p>
            <a className="lrn-link" href="https://app.planbforpans.com/learning" rel="noopener">See what families are tracking right now &rarr;</a>
          </div>
        </div>
      </section>

      <section className="lrn-section alt" style={{ borderBottom: 0 }}>
        <div className="lrn-wrap lrn-narrow">
          <p className="lrn-eyebrow">Sources</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>Where this comes from</h2>
          <p className="body">The PANS and PANDAS links, tests and treatment categories above follow the published clinical guidance below. Blood-sugar swings, mold and tick-borne infections are patterns families and some clinicians report; they are not part of the formal criteria, and we say so on each card.</p>
          <ol className="lrn-sources">
            <li><span>Chang K, Frankovich J, Cooperstock M, et al. Clarification of Pediatric Acute-onset Neuropsychiatric Syndrome (PANS): recommendations from the 2013 PANS Consensus Conference. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2015. <a href="https://doi.org/10.1089/cap.2014.0084" rel="noopener" target="_blank">doi.org/10.1089/cap.2014.0084</a></span></li>
            <li><span>Thienemann M, Murphy T, Leckman J, et al. Clinical management of PANS: Part I, psychiatric and behavioral interventions. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0145" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0145</a></span></li>
            <li><span>Frankovich J, Swedo S, Murphy T, et al. Clinical management of PANS: Part II, use of immunomodulatory therapies. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0148" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0148</a></span></li>
            <li><span>Cooperstock MS, Swedo SE, Pasternack MS, Murphy TK. Clinical management of PANS: Part III, treatment and prevention of infections. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0151" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0151</a></span></li>
            <li><span>National Institute of Mental Health. PANDAS: Questions and Answers. <a href="https://www.nimh.nih.gov/health/publications/pandas" rel="noopener" target="_blank">nimh.nih.gov/health/publications/pandas</a></span></li>
            <li><span>PANDAS Physicians Network: diagnostic and treatment guidelines for clinicians. <a href="https://www.pandasppn.org" rel="noopener" target="_blank">pandasppn.org</a></span></li>
          </ol>
          <p className="body" style={{ marginTop: 24, fontSize: 14 }}>
            <Link href="/learning" className="lrn-crumb" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>&larr; All of what we&rsquo;re learning</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
