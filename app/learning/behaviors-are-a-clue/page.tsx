import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/locales'
import Link from 'next/link'

// What we're learning · Clue 01 (Rachel, 2026-11-25): "Behaviors are symptoms
// of illness and what brings down those symptoms." Landing page for the 10-week
// Facebook series "Behavior is a symptom. Track it."
//
// Rachel, same day: "Lyme has behavior. Strep does too... lean into it until
// corrected." So each card leads with the drivers, stated plainly, under one
// framing line. No doses, no cure promises. No child or family is described.

const TITLE = 'Behaviors are a clue — What we’re learning · Plan B for PANS'
const DESCRIPTION =
  'Sudden rage, overnight OCD, food refusal, tic flares, meltdowns after hunger: behavior is often the loudest sign that something in the body changed. What each behavior can be a clue to, what to check, and what has brought it down.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/learning/behaviors-are-a-clue', languages: languageAlternates('/learning/behaviors-are-a-clue') },
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
  think: string[]
  clue: React.ReactNode
  check: React.ReactNode
  helped: React.ReactNode
  deeper: { href: string; label: string }[]
}

const STREP_FLAG = (
  <span className="lrn-flag">
    <b>Note</b>A flat strep titer does not rule strep out. Some children make very little antibody, and titers rise weeks after an infection. A swab finds the bug itself.
  </span>
)

const TICK_FLAG = (
  <span className="lrn-flag">
    <b>Note</b>One negative Lyme or Bartonella test is not the end of the question. These bugs are hard to catch in the blood. Ask which lab and which method, and whether to repeat.
  </span>
)

const BEHAVIORS: Behavior[] = [
  {
    id: 'rage',
    icon: 'rage',
    title: 'Sudden rage or aggression',
    hint: 'A child who is suddenly not themselves: explosive, hitting, inconsolable.',
    think: ['Bartonella', 'Strep', 'Lyme', 'Mycoplasma', 'Blood sugar'],
    clue: (
      <>
        <p className="lrn-lead">Rage that comes out of nowhere: <strong>think Bartonella</strong> first, then strep.</p>
        <p>Rage plus urinary urgency, nightmares, or skin streaks that look like stretch marks without a growth spurt: <strong>think Bartonella.</strong> It spreads through cat scratches, fleas and ticks.</p>
        <p>Rage within days of a sore throat, or after a sibling had strep: <strong>think strep.</strong> After a lingering cough: <strong>think Mycoplasma.</strong></p>
        <p><strong>Lyme can change behavior too</strong>: rage, anxiety, brain fog, and sensitivity to light and sound. And a hungry child rages harder, because a blood-sugar dip pours fuel on an inflamed brain.</p>
      </>
    ),
    check: (
      <>
        <ul>
          <li><strong>Rapid strep test and throat culture</strong> (or strep PCR)</li>
          <li><strong>Perianal strep swab</strong></li>
          <li><strong>Strep titers: ASO + anti-DNase B</strong></li>
          <li><strong>Mycoplasma pneumoniae:</strong> PCR swab, plus IgM and IgG</li>
          <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong></li>
          <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong> (hs-CRP)</li>
        </ul>
        {STREP_FLAG}
        {TICK_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>The right antibiotic for the bug that is actually there</li>
        <li>Anti-inflammatory medicines such as NSAIDs</li>
        <li>For some children, immune therapies such as steroids or IVIG, with specialists</li>
        <li>Protein-rich snacks so hunger doesn&rsquo;t light the fuse</li>
        <li>A calm, low-demand home while the flare settles, with a safety plan the family agrees on</li>
      </ul>
    ),
    deeper: [
      { href: '/bartonella-rage-children.html', label: 'Bartonella and rage' },
      { href: '/strep-rage-personality-change.html', label: 'Strep and sudden personality change' },
    ],
  },
  {
    id: 'ocd',
    icon: 'ocd',
    title: 'Overnight OCD or intrusive fears',
    hint: 'Rituals, contamination fears or scary thoughts that seem to arrive in a day or two.',
    think: ['Strep', 'Mycoplasma', 'Lyme', 'Bartonella', 'Mold'],
    clue: (
      <>
        <p className="lrn-lead">Sudden OCD after a sore throat: <strong>think strep.</strong> That is PANDAS, the original pattern.</p>
        <p>After a cough, a chest cold or &ldquo;walking pneumonia&rdquo; in the house: <strong>think Mycoplasma.</strong> After the flu or COVID: a virus can set it off too.</p>
        <p>OCD that won&rsquo;t let go after strep is treated: <strong>look wider, at Lyme, Bartonella and mold.</strong> Mold exposure keeps the immune system on edge, and we see contamination fears and anxiety in kids from water-damaged buildings again and again.</p>
        <p>Write down the date it started and what happened in the weeks before. If it crept in instead, write down each illness and what got worse after it. The trigger is usually in there.</p>
      </>
    ),
    check: (
      <>
        <ul>
          <li><strong>Rapid strep test and throat culture</strong>, and a <strong>perianal strep swab</strong></li>
          <li><strong>Strep titers: ASO + anti-DNase B</strong></li>
          <li><strong>Mycoplasma pneumoniae</strong> PCR, IgM and IgG</li>
          <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong></li>
          <li><strong>Mycotoxin urine panel</strong> and a look at the house for water damage</li>
          <li>If infections keep coming back: an <strong>immune panel</strong> (IgG, IgA, IgM, and pneumococcal titers to see how well your child makes antibodies)</li>
        </ul>
        {STREP_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>Treating the infection that is found</li>
        <li>NSAIDs</li>
        <li>For some children, steroids or IVIG, with specialists</li>
        <li>Getting out of the mold, or fixing it</li>
        <li>Cognitive behavioral therapy with exposure and response prevention (ERP) alongside treating the cause</li>
      </ul>
    ),
    deeper: [
      { href: '/sudden-onset-ocd-tics-child.html', label: 'Sudden-onset OCD' },
      { href: '/mold-anxiety-ocd-children.html', label: 'Mold, anxiety and OCD' },
    ],
  },
  {
    id: 'food',
    icon: 'food',
    title: 'Sudden food refusal or restriction',
    hint: 'Not lifelong, steady picky eating. A child who ate fine, then suddenly won’t, or loses more foods with every illness.',
    think: ['Strep', 'Mycoplasma', 'Gut'],
    clue: (
      <>
        <p className="lrn-lead">Sudden food refusal is one of the two front doors of PANS. <strong>Think strep and Mycoplasma first.</strong></p>
        <p>It usually comes with a fear: of choking, of vomiting, of contamination, of a texture. Often it is <strong>sudden</strong>: eating that fell apart in a week. But not always. It can also creep in, the menu shrinking a little more after each cold or strep. The clue is the pattern. A child who has always eaten the same five foods, steady through every illness, is a different story.</p>
        <p>Belly pain, bloating or constipation riding along: <strong>look at the gut too.</strong></p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Strep swabs</strong> (throat and perianal) and <strong>strep titers: ASO + anti-DNase B</strong></li>
        <li><strong>Mycoplasma pneumoniae</strong> PCR, IgM and IgG</li>
        <li><strong>Weight and growth chart</strong> at every visit, so a slide is caught early</li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the infection that is found</li>
        <li>Anti-inflammatory treatment</li>
        <li>Treating constipation and gut pain</li>
        <li>Feeding support and close weight checks with the care team, so nutrition holds while the cause is treated</li>
      </ul>
    ),
    deeper: [{ href: '/sudden-food-refusal-arfid-pans.html', label: 'Sudden food refusal and PANS' }],
  },
  {
    id: 'tics',
    icon: 'tics',
    title: 'Tics that flare',
    hint: 'Tics that jump in number or strength, especially after being sick.',
    think: ['Strep', 'Mycoplasma', 'Viruses'],
    clue: (
      <>
        <p className="lrn-lead">Tics that jump after a sore throat: <strong>think strep.</strong></p>
        <p>After a cough or a cold: <strong>think Mycoplasma</strong> or a virus. Tics that flare every time the classroom gets sick are an immune system reacting to each new bug.</p>
        <p>Poor sleep, stress and excitement make tics louder too, so the pattern over weeks matters more than one day.</p>
      </>
    ),
    check: (
      <>
        <ul>
          <li><strong>Rapid strep test and throat culture</strong>, and a <strong>perianal strep swab</strong></li>
          <li><strong>Strep titers: ASO + anti-DNase B</strong>, and a repeat in 4 to 6 weeks to see if they rise</li>
          <li><strong>Mycoplasma pneumoniae</strong> PCR, IgM and IgG</li>
          <li>Swabs for the whole household if strep keeps coming back</li>
        </ul>
        {STREP_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>Treating the strep or Mycoplasma infection that is found, and the carriers at home</li>
        <li>Protecting sleep and lowering stress during a flare</li>
        <li>Behavioral therapy for tics (CBIT)</li>
      </ul>
    ),
    deeper: [{ href: '/sudden-tics-pandas-strep.html', label: 'Sudden tics and strep' }],
  },
  {
    id: 'fears',
    icon: 'fears',
    title: 'Separation anxiety or new fears',
    hint: 'A child who can’t let you leave the room, or is suddenly scared of the dark, the bath, the car.',
    think: ['Strep', 'Bartonella', 'Babesia', 'Lyme', 'Mold'],
    clue: (
      <>
        <p className="lrn-lead">Can&rsquo;t let you leave the room, overnight: a classic PANS flare. <strong>Check strep and Mycoplasma first.</strong></p>
        <p>Anxiety with nightmares and rage: <strong>think Bartonella.</strong> Anxiety with air hunger (deep sighs, can&rsquo;t get a full breath) or drenching night sweats: <strong>think Babesia.</strong> Anxiety with brain fog and aches: <strong>think Lyme.</strong></p>
        <p>Clearly better away from one house, school or car: <strong>think mold.</strong> Mold exposure keeps the immune system on edge.</p>
      </>
    ),
    check: (
      <>
        <ul>
          <li><strong>Strep swabs</strong>, <strong>strep titers</strong> and <strong>Mycoplasma</strong> tests</li>
          <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong></li>
          <li><strong>Mycotoxin urine panel</strong>, plus notes on how your child does after a few days away from the building</li>
          <li><strong>Home mold testing</strong> (ERMI or HERTSMI-2)</li>
        </ul>
        {TICK_FLAG}
      </>
    ),
    helped: (
      <ul>
        <li>Treating the infection that is found</li>
        <li>Fixing the mold, or moving away from it</li>
        <li>Cognitive behavioral therapy, and steady, predictable routines</li>
      </ul>
    ),
    deeper: [
      { href: '/separation-anxiety-pans.html', label: 'Separation anxiety and PANS' },
      { href: '/babesia-air-hunger-children.html', label: 'Babesia and air hunger' },
      { href: '/find-mold.html', label: 'Finding the mold' },
    ],
  },
  {
    id: 'sugar',
    icon: 'sugar',
    title: 'Meltdowns after hunger, exercise or sweets',
    hint: 'The 4 pm crash, the after-practice explosion, the storm an hour after cake.',
    think: ['Blood sugar', 'Yeast'],
    clue: (
      <>
        <p className="lrn-lead">Meltdowns after hunger, exercise or sweets: <strong>think blood-sugar swings.</strong></p>
        <p>This is not diabetes. It is a dip, or a fast drop after a spike, and in a child whose brain is already inflamed it turns a hard afternoon into a meltdown. It is an <strong>amplifier</strong>: it makes every other driver louder. An HbA1c test is a three-month average, so it comes back normal and misses the swings.</p>
        <p>Craving sugar hard, with giddy, &ldquo;drunk&rdquo; laughing or brain fog, especially after many rounds of antibiotics: <strong>think yeast</strong> (Candida).</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>A finger-stick glucose meter reading during a meltdown</strong>, and one on a calm day. Note how long since your child last ate.</li>
        <li>If readings are low or jumpy: a short trial of a <strong>continuous glucose monitor</strong></li>
        <li>For yeast: an <strong>Organic Acids Test (OAT)</strong> or a <strong>GI-MAP stool test</strong></li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Regular protein-rich snacks, so your child never goes long without food</li>
        <li>A snack before and after sports</li>
        <li>Pairing sweets with protein or fat instead of eating them alone</li>
        <li>Treating yeast when testing finds it</li>
      </ul>
    ),
    deeper: [
      { href: '/candida-sugar-cravings-brain-fog-children.html', label: 'Sugar cravings and yeast' },
      { href: '/yeast-candida-inappropriate-laughing.html', label: 'Giddy laughing and yeast' },
    ],
  },
  {
    id: 'sleep',
    icon: 'sleep',
    title: 'Sleep that falls apart',
    hint: 'Can’t fall asleep, wakes at night, or needs you in the room again.',
    think: ['Pinworms', 'Babesia', 'Strep', 'Low iron', 'Blood sugar'],
    clue: (
      <>
        <p className="lrn-lead">Sleep falls apart in a PANS flare. Then look at <em>how</em> it falls apart.</p>
        <p>Waking with an itchy bottom: <strong>think pinworms.</strong> Cheap to check, worth ruling out first. Drenching night sweats or air hunger: <strong>think Babesia.</strong> Restless legs, can&rsquo;t settle: <strong>think low iron.</strong> Waking hungry or sweaty in the early hours: <strong>think a blood-sugar dip.</strong></p>
        <p>Snoring or mouth breathing: large tonsils and adenoids, which can also hold on to strep.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Pinworm tape test</strong> in the morning</li>
        <li><strong>Strep swabs</strong>, <strong>strep titers</strong> and <strong>Mycoplasma</strong> tests</li>
        <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong></li>
        <li><strong>Ferritin + full iron panel</strong></li>
        <li>A glucose meter reading on a night waking</li>
        <li>A look at tonsils and adenoids</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the infection or parasite that is found</li>
        <li>Iron when ferritin is low</li>
        <li>A protein-rich bedtime snack</li>
        <li>Steady bedtime routines while the cause is treated</li>
      </ul>
    ),
    deeper: [
      { href: '/pinworms-night-waking-behavior.html', label: 'Pinworms and night waking' },
      { href: '/babesia-air-hunger-children.html', label: 'Babesia and night sweats' },
    ],
  },
  {
    id: 'bladder',
    icon: 'bladder',
    title: 'Urinary frequency or bedwetting returning',
    hint: 'A child who was dry, suddenly running to the bathroom or wet at night.',
    think: ['Strep', 'Bartonella', 'Constipation'],
    clue: (
      <>
        <p className="lrn-lead">Wet again after being dry: a PANS flare sign. <strong>Think strep.</strong></p>
        <p>Urinary urgency plus rage: <strong>think Bartonella.</strong> A full, constipated gut presses on the bladder, so <strong>check for constipation</strong> too.</p>
        <p>Rule out the simple causes the same week: a <strong>urinary tract infection</strong>, and <strong>high blood sugar</strong>, which makes children thirsty and wet.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Urinalysis and urine culture</strong></li>
        <li><strong>A glucose check</strong>, especially with extra thirst</li>
        <li><strong>Strep swabs</strong> and <strong>strep titers</strong></li>
        <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong> when rage rides along</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the infection that is found</li>
        <li>Treating constipation</li>
        <li>PANS treatment as above, when it is part of a flare</li>
      </ul>
    ),
    deeper: [{ href: '/sudden-bedwetting-pans.html', label: 'Sudden bedwetting and PANS' }],
  },
  {
    id: 'school',
    icon: 'school',
    title: 'Handwriting, math or speech slipping',
    hint: 'Messy writing, lost math facts, or words that used to come easily.',
    think: ['Strep', 'Mycoplasma', 'Lyme', 'Mold'],
    clue: (
      <>
        <p className="lrn-lead">Handwriting falling apart is a PANS red flag: <strong>something is inflaming the brain.</strong> Find the trigger: strep, Mycoplasma, Lyme.</p>
        <p>Brain fog, slow thinking and lost math facts, with tiredness or aching joints: <strong>think Lyme.</strong> Fog that lifts away from one building: <strong>think mold.</strong></p>
        <p>Any loss of speech in a young child needs a prompt, full evaluation, including hearing and neurology, alongside the infection workup.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Dated handwriting samples</strong>: a sentence and a drawing each week. They are some of the best data a parent can bring.</li>
        <li><strong>Strep swabs</strong>, <strong>strep titers</strong> and <strong>Mycoplasma</strong> tests</li>
        <li><strong>Tick-borne panel: Lyme, Babesia, Bartonella</strong></li>
        <li><strong>CBC with differential</strong> and an <strong>inflammation panel</strong></li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the flare. We see handwriting come back as the inflammation comes down.</li>
        <li>School support during flares, such as a 504 plan, extra time and less written work</li>
      </ul>
    ),
    deeper: [
      { href: '/sudden-handwriting-changes-pans.html', label: 'Sudden handwriting changes' },
      { href: '/lyme-brain-fog-mood-swings-children.html', label: 'Lyme, brain fog and mood' },
    ],
  },
  {
    id: 'gut',
    icon: 'gut',
    title: 'Constipation, or a child who gets calmer on antibiotics',
    hint: 'Hard, rare stools. Or the course for an ear infection that made behavior better too.',
    think: ['Strep', 'Clostridia', 'Gut'],
    clue: (
      <>
        <p className="lrn-lead">Calmer on an antibiotic given for something else: <strong>think infection.</strong> It is a sign a bug is driving the behavior. Tell the doctor which antibiotic and the dates.</p>
        <p>Strep can hide around the bottom, where a throat swab never looks: <strong>think perianal strep.</strong></p>
        <p>Stubborn constipation with behavior swings: <strong>think gut bacteria</strong>, including clostridia and the methane-making bacteria that slow the gut down. Constipation on its own also makes children uncomfortable, irritable and poor sleepers.</p>
      </>
    ),
    check: (
      <ul>
        <li><strong>Perianal strep swab</strong></li>
        <li><strong>Strep titers: ASO + anti-DNase B</strong>, and <strong>Mycoplasma</strong> tests</li>
        <li><strong>GI-MAP stool test</strong>, and a <strong>breath test for methane</strong></li>
        <li><strong>C. difficile testing</strong> if there is diarrhea after antibiotics</li>
        <li>Exact dates: when the antibiotic started, when the calm came, and when it faded</li>
      </ul>
    ),
    helped: (
      <ul>
        <li>Treating the infection that is found</li>
        <li>Treating constipation: water, fiber, movement, and a stool softener or laxative</li>
        <li>Treating the gut bacteria that testing finds</li>
      </ul>
    ),
    deeper: [{ href: '/constipation-in-children-hidden-causes.html', label: 'Constipation: the hidden causes' }],
  },
]

const CHAIN = [
  { k: 'Behavior', d: 'What you see. Rage, a ritual, a skipped meal, a wet bed.' },
  { k: 'Clue', d: 'What usually sits behind it: strep, Bartonella, Lyme, Mycoplasma, mold, a blood-sugar dip.' },
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
          <p className="lrn-frame">These are the patterns we see again and again. Often they arrive suddenly, but not always: they can also creep in and flare with every illness. Either way, they&rsquo;re clues to test, not a diagnosis &mdash; and we update this page whenever the data says otherwise.</p>
          <p className="body">Each card names what usually sits behind a behavior, the tests to ask for by name, and what has brought it down.</p>
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
                    <span className="lrn-think" aria-label={`Think: ${b.think.join(', ')}`}>
                      {b.think.map((t) => <span key={t}>{t}</span>)}
                    </span>
                  </span>
                  <span className="lrn-plus" aria-hidden="true" />
                </summary>
                <div className="lrn-card-body">
                  <div className="lrn-row r2">
                    <span className="dot" aria-hidden="true">02</span>
                    <div>
                      <h3>Think</h3>
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
                      <p className="lrn-deeper">
                        <span>Go deeper</span>
                        {b.deeper.map((d) => <a key={d.href} href={d.href}>{d.label} &rarr;</a>)}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <a href="/behavior-pathogen-map.html" className="lrn-map">
            <span className="lrn-eyebrow" style={{ margin: 0 }}>The full map</span>
            <span className="t">The Behavior&ndash;Pathogen Map</span>
            <span className="d">Every behavior we track, and the drivers that sit behind it: strep, Bartonella, Lyme, Babesia, Mycoplasma, yeast, parasites and mold.</span>
            <span className="go">Open the map &rarr;</span>
          </a>
          <div className="lrn-note">
            <p><strong>Every treatment here is decided with your child&rsquo;s doctor.</strong> No doses here on purpose: that is the doctor&rsquo;s call for your child.</p>
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
          <p className="body">The patterns on this page come from families who track, read alongside the published research below. When the data says otherwise, we change the page.</p>
          <ol className="lrn-sources">
            <li><span>Chang K, Frankovich J, Cooperstock M, et al. Clarification of Pediatric Acute-onset Neuropsychiatric Syndrome (PANS): recommendations from the 2013 PANS Consensus Conference. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2015. <a href="https://doi.org/10.1089/cap.2014.0084" rel="noopener" target="_blank">doi.org/10.1089/cap.2014.0084</a></span></li>
            <li><span>Thienemann M, Murphy T, Leckman J, et al. Clinical management of PANS: Part I, psychiatric and behavioral interventions. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0145" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0145</a></span></li>
            <li><span>Frankovich J, Swedo S, Murphy T, et al. Clinical management of PANS: Part II, use of immunomodulatory therapies. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0148" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0148</a></span></li>
            <li><span>Cooperstock MS, Swedo SE, Pasternack MS, Murphy TK. Clinical management of PANS: Part III, treatment and prevention of infections. <em>Journal of Child and Adolescent Psychopharmacology</em>, 2017. <a href="https://doi.org/10.1089/cap.2016.0151" rel="noopener" target="_blank">doi.org/10.1089/cap.2016.0151</a></span></li>
            <li><span>National Institute of Mental Health. PANDAS: Questions and Answers. <a href="https://www.nimh.nih.gov/health/publications/pandas" rel="noopener" target="_blank">nimh.nih.gov/health/publications/pandas</a></span></li>
            <li><span>PANDAS Physicians Network: diagnostic and treatment guidelines for clinicians. <a href="https://www.pandasppn.org" rel="noopener" target="_blank">pandasppn.org</a></span></li>
            <li><span>Fallon BA, Nields JA. Lyme disease: a neuropsychiatric illness. <em>American Journal of Psychiatry</em>, 1994. <a href="https://doi.org/10.1176/ajp.151.11.1571" rel="noopener" target="_blank">doi.org/10.1176/ajp.151.11.1571</a></span></li>
            <li><span>Fallon BA, Madsen T, Erlangsen A, Benros ME. Lyme borreliosis and associations with mental disorders and suicidal behavior: a nationwide Danish cohort study. <em>American Journal of Psychiatry</em>, 2021. <a href="https://doi.org/10.1176/appi.ajp.2021.20091347" rel="noopener" target="_blank">doi.org/10.1176/appi.ajp.2021.20091347</a></span></li>
            <li><span>Breitschwerdt EB, Greenberg R, Maggi RG, Mozayeni BR, et al. <em>Bartonella henselae</em> bloodstream infection in a boy with pediatric acute-onset neuropsychiatric syndrome. <em>Journal of Central Nervous System Disease</em>, 2019. <a href="https://doi.org/10.1177/1179573519832014" rel="noopener" target="_blank">doi.org/10.1177/1179573519832014</a></span></li>
            <li><span>Delaney S, Robveille C, Maggi RG, Lashnits E, et al. <em>Bartonella</em> species bacteremia in association with adult psychosis. <em>Frontiers in Psychiatry</em>, 2024. <a href="https://doi.org/10.3389/fpsyt.2024.1388442" rel="noopener" target="_blank">doi.org/10.3389/fpsyt.2024.1388442</a></span></li>
            <li><span>Ratnaseelan AM, Tsilioni I, Theoharides TC. Effects of mycotoxins on neuropsychiatric symptoms and immune processes. <em>Clinical Therapeutics</em>, 2018. <a href="https://doi.org/10.1016/j.clinthera.2018.05.004" rel="noopener" target="_blank">doi.org/10.1016/j.clinthera.2018.05.004</a></span></li>
            <li><span>Plan B for PANS. The Behavior&ndash;Pathogen Map. <a href="/behavior-pathogen-map.html">planbforpans.com/behavior-pathogen-map.html</a></span></li>
          </ol>
          <p className="body" style={{ marginTop: 24, fontSize: 14 }}>
            <Link href="/learning" className="lrn-crumb" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>&larr; All of what we&rsquo;re learning</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
