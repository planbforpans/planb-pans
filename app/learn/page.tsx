// The Learn hub — home for every deconstructed modality. Each piece tells you
// what it is, the studies behind it, and (the part no one explains) HOW to
// actually access it. Cards link to live pages or mark "coming soon".

export const metadata = {
  title: 'Learn — Plan B for PANS',
  description:
    'Every PANS/Lyme treatment, deconstructed: what it is, the studies behind it, and — the part no one explains — how to actually access it and get help.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'
const rust = '#9a5a3a'

type Item = { title: string; blurb: string; href?: string }

// A section can render its items flat (items) OR grouped under small, quiet
// sub-headers (subgroups). A subgroup may carry a `caution` flag, which tints
// it so a desperate parent doesn't chase thin-evidence therapies first.
type Subgroup = { label: string; caution?: boolean; items: Item[] }
type Section = { group: string; sub: string; items?: Item[]; subgroups?: Subgroup[] }

// Ordered by where each piece falls in the decision tree — start here, check
// the engine, support daily, find the drivers, immune, then the deep menu — so
// a parent reads them in the order they'd actually face them.
const SECTIONS: Section[] = [
  {
    group: '1 · Start here',
    sub: 'Understand it, then begin.',
    items: [
      { title: 'Start here: understand this first (plain English)', blurb: 'The simplest possible explanation for a scared parent with zero biology background. Four plain ideas — genes are the blueprint, methylation is the maintenance crew, mitochondria are the batteries, the infection is what lit the fire — and the one thing that matters most: the order to do things in (understand & find → support the engine → THEN the deep kill), so your child gets better instead of crashing.', href: '/start-here.html' },
      { title: 'Where to Start — The Testing Map', blurb: 'Where do I even begin with testing? A tiered, scaffolded map: cast a wide net ONCE (Tier 1), then follow only the branches your results flag. Elevates the two tests almost every family misses — a comprehensive methylation panel and an organic-acids (mitochondrial) test — even two years in.', href: '/testing-map.html' },
      { title: 'How to actually use a genetic test', blurb: 'A genetic test like 23andMe is a blueprint — it shows what your kid might struggle with, but on its own it\'s just a spreadsheet of letters. The whole value is the read: a practitioner like Yasko interprets it — and Minta does it free, then overlays the bloodwork that shows what\'s really happening now. Plus the 3 simple steps to order both.', href: '/how-to-use-genetics.html' },
      { title: 'The Protocol', blurb: 'Where everyone starts — anti-inflammatory + a targeted antibiotic, the doses, how long, and what to do if your child slips.', href: '/deconstructing-pans.html#protocol' },
      { title: 'My child changed overnight — could it be PANS?', blurb: 'New OCD, tics, or rage out of nowhere. A calm first-read for the parent who just watched their child become someone else: what sudden onset can mean, and what to do first.', href: '/sudden-onset-ocd-tics-child.html' },
    ],
  },
  {
    group: '2 · Check the engine first',
    sub: 'Before you try anything else. If your child is undermethylating, detox is clogged, or the mitochondria are drained, treatments can BACKFIRE — this is the engine no specialist owns, and the bottleneck Plan B was built around.',
    items: [
      { title: 'Methylation, Detox & Energy', blurb: 'The body’s cleanup-and-power engine — methylation (the maintenance crew), detox/glutathione (the drains), and the mitochondria (the batteries), all one connected system. Why genes only say the crew might be short-staffed and blood tells you if it actually is, Naviaux’s Cell Danger Response, and why pushing a kill before the engine is running can make a sensitive kid worse.', href: '/methylation.html' },
      { title: 'Read your raw SNPs — free', blurb: 'Drop your 23andMe file and get your methylation genetics read through three frameworks (Yasko · Lynch · Kara Fitzgerald) — tendencies, not prescriptions. Free.', href: 'https://app.planbforpans.com/genetics' },
    ],
  },
  {
    group: '3 · Support & regulate — the daily foundation',
    sub: 'The layer that runs alongside everything — nourishing the body and steadying the nervous system so the medical work is tolerable. Alongside it, never instead of it.',
    items: [
      { title: 'Diet & Nutrition', blurb: 'Food as a real PANS lever — the anti-inflammatory foundation, which specialty diet fits your kid’s pattern, and how to find triggers without over-restricting.', href: '/diet.html' },
      { title: 'Nervous-System Regulation', blurb: 'Calming a fight-or-flight brain — vagus-nerve work, HRV, limbic retraining — the layer that makes everything else tolerable.', href: '/nervous-system.html' },
      { title: 'What to do during a meltdown', blurb: 'Two anchors, parent to parent — STAY CALM, HOLD THE RULES. What to say, what never to do, and the honest caveat that a flare is not a behavior problem.', href: '/meltdown-playbook-stay-calm-hold-the-rules.html' },
      { title: 'Brain Retraining for Kids', blurb: 'DNRS (Annie Hopper) as the lead, plus the kid-native tools (tapping, SSP, co-regulation) that make detox survivable.', href: '/brain-retraining-kids.html' },
      { title: 'Screens, Dopamine & the Point System', blurb: 'A real family\'s carrot-and-stick reset for a screen-obsessed, dopamine-driven kid — points to grow good behavior, strikes (a written reflection) to deter the bad — that calmed their whole home.', href: '/screen-time-dopamine-point-system.html' },
    ],
  },
  {
    group: '4 · Find the root drivers',
    sub: 'If the protocol isn’t enough, this is where the answers hide.',
    subgroups: [
      {
        label: 'Start here',
        items: [
          { title: 'Why Treatment Isn’t Working', blurb: 'The missed drivers behind relapse — mold, Lyme, methylation — and what to investigate next.', href: '/pans-treatment-not-working.html' },
          { title: 'Is it autism or PANS?', blurb: 'They overlap, get confused, and can coexist. How the two differ, why onset and timeline matter most, and why an autism label should never block a PANS workup.', href: '/is-it-autism-or-pans.html' },
        ],
      },
      {
        label: 'Infections',
        items: [
          { title: 'PANS, PANDAS & Strep', blurb: 'How strep triggers sudden OCD, tics, and behavior changes — the molecular-mimicry mechanism, what to test, and why a negative throat swab doesn\'t rule it out.', href: '/pans-and-strep.html' },
          { title: 'PANS and Lyme', blurb: 'The tick-borne connection — how Lyme and co-infections drive sudden OCD and rage, why standard tests miss them, and what to test and do next.', href: '/pans-and-lyme.html' },
          { title: 'Lyme & Co-infections', blurb: 'Antibiotics vs herbals (research-backed), the kill-menu, per-bug dosing, and how to find a Lyme doctor.', href: '/lyme.html' },
          { title: 'Parasites & Behavior', blurb: 'The overlooked driver — pinworms, protozoa, and helminths that drive night-waking, teeth-grinding, rage, and OCD-like behavior, the full-moon pattern, and how to treat them.', href: '/parasites.html' },
          { title: 'Testing for Parasites', blurb: 'Why a single stool test misses most parasites, the tape test and serial-sample protocols that actually catch them, and which labs to ask for.', href: '/parasite-testing-children.html' },
        ],
      },
      {
        label: 'High anecdotal success, low research — run in the background',
        items: [
          { title: 'Biomagnetism', blurb: 'Low-risk, low-cost magnet therapy (the Joan Randall Protocol). Formal evidence is thin, but the risk is near-zero and families credit it with real turnarounds. Once you know what you\'re targeting, run it in the background — in parallel with the real work.', href: '/biomagnetism.html' },
          { title: 'Homeopathy', blurb: 'Safe, gentle, contested in the studies — but with real recovery stories, including OCD and intrusive thoughts resolving. One PANS therapist\'s daughter, who had failed O\'Hara / IVIG / antibiotics, came back 100% on homeopathy. Once you know your targets, weave it in and let it run in the background. Start classical.', href: '/homeopathy.html' },
          { title: 'Muscle Testing (self-testing)', blurb: 'How parents "ask the body" yes/no — the sway test, the O-ring, the arm test, step by step. Honest about the thin evidence (it\'s subjective), but low-risk and free. Use it only AFTER a thorough functional-medicine workup — then, once you know your targets, to help choose and sequence in the background. Never a substitute for labs.', href: '/muscle-testing.html' },
        ],
      },
      {
        label: 'Environmental',
        items: [
          { title: 'Find Mold Yourself', blurb: 'The honest ERMI story + how to find and safely remediate mold without a predatory middleman.', href: '/find-mold.html' },
          { title: 'Mold — the full protocol', blurb: 'Once mold is implicated: remove → drainage → binders → antifungals → nasal, the 3 binder schools, and the order that matters.', href: '/mold-protocol.html' },
        ],
      },
      {
        label: 'Gut & mast cell',
        items: [
          { title: 'Gut & Microbiome', blurb: 'Which stool test (and which to skip), the gut-brain link, and how to reset it.', href: '/gut.html' },
          { title: 'Yeast & Candida', blurb: 'The behaviors it drives — the giddy "drunk" affect, OCD, sugar cravings — and a gentle, low-and-slow protocol for the super-sensitive kid who can\'t take die-off.', href: '/yeast.html' },
          { title: 'MCAS & Histamine', blurb: 'The tests an MCAS doctor runs, the treatment cocktail, and why the patch alone is not the cure (find the root).', href: '/mcas.html' },
        ],
      },
    ],
  },
  {
    group: '5 · Immune treatment',
    sub: 'Calming, steadying, or supplying an over-reactive immune system.',
    items: [
      { title: 'IVIG & Immune Treatment', blurb: 'Who qualifies, the infusion day demystified, the studies (what it clears vs not), and the insurance fight.', href: '/ivig.html' },
      { title: 'Serum Immunoglobulins (SBI Protect)', blurb: 'Powdered, oral IgG (serum-bovine immunoglobulin) that binds toxins and calms gut immunity — not IVIG. The gut-barrier and endotoxin-binding research, who it helps, how to dose, and the honest evidence.', href: '/serum-immunoglobulins.html' },
      { title: 'Intranasal Immunoglobulins', blurb: 'Immunoglobulins delivered to the nose — a far gentler, lower-cost cousin of IVIG aimed at the olfactory route into the brain. What it is, why it’s not IVIG, the early evidence, and how families access it.', href: '/nasal-immunoglobulins.html' },
      { title: 'LDN — Low-Dose Naltrexone', blurb: 'Jill Crista’s lead “regulate immunity” tool: a tiny dose of an old drug that rebalances an over-reactive immune system and quiets neuroinflammation. How it works, pediatric dosing, the honest evidence — plus colostrum and the rest of the immune toolkit.', href: '/ldn.html' },
    ],
  },
  {
    group: '6 · The deep menu',
    sub: 'Most families never need past here. When the standard path is exhausted, this is what hasn’t been tried — grouped by what it targets. Caution is reserved for the few that carry genuine risk.',
    subgroups: [
      {
        label: 'Oxygen & energy',
        items: [
          { title: 'Hyperbaric Oxygen (HBOT)', blurb: 'Pressurized oxygen for neuroinflammation — hard vs soft chambers, the honest (mixed) evidence, the cost, and the easiest antidote on the map.', href: '/hbot.html' },
          { title: 'Hyperthermia & Clinics', blurb: 'Heat that kills Borrelia — the clinics, who qualifies, the real risks, and what it costs.', href: '/hyperthermia.html' },
          { title: 'Methylene Blue', blurb: 'Mitochondrial + anti-biofilm support — and the serotonin-syndrome warning if your child is on an SSRI. USP grade only.', href: '/methylene-blue.html' },
          { title: 'Red Light Therapy', blurb: 'Photobiomodulation for the inflamed brain — what near-infrared light does for mitochondria and neuroinflammation, the honest (early) evidence in autism and PANS, and at-home vs clinic.', href: '/red-light-therapy-autism-pans.html' },
        ],
      },
      {
        label: 'Gut reset',
        items: [
          { title: 'FMT — Fecal Transplant', blurb: 'The deepest gut reset — the ASU autism trials, how to access it safely, and why screening IS the safety.', href: '/fmt.html' },
          { title: 'Helminthic Therapy', blurb: 'Worms that calm an over-reactive immune system — species, dosing, the antidote, and why non-verbal kids are off the table.', href: '/helminths.html' },
        ],
      },
      {
        label: 'Brain & nervous system',
        items: [
          { title: 'Neurofeedback & Biofeedback', blurb: 'Training the dysregulated brain and nervous system directly — what neurofeedback and biofeedback are, the evidence in ADHD and autism, and how to find a real provider.', href: '/neurofeedback-biofeedback-autism-adhd.html' },
          { title: 'MeRT', blurb: 'Magnetic e-Resonance Therapy — EEG-guided TMS aimed at the autistic brain. What it is, how it differs from standard TMS, the evidence so far, and how families access it.', href: '/mert-for-autism.html' },
        ],
      },
      {
        label: 'Targeted kill',
        items: [
          { title: 'Disulfiram for Lyme', blurb: 'The best human persister-remission data — and a real toxicity ceiling plus an absolute no-alcohol rule. Eyes wide open.', href: '/disulfiram.html' },
          { title: 'Phage Therapy', blurb: 'Viruses that kill bacteria and spare the gut — the real providers, how to access, and how to spot a quack.', href: '/phage.html' },
          { title: 'Peptide Therapies', blurb: 'TA1, BPC-157, LL-37 and more — what each does, the honest evidence per peptide, and why sourcing (not the molecule) is the real risk.', href: '/peptides.html' },
        ],
      },
      {
        label: '⚠ Real risks — expert supervision only',
        caution: true,
        items: [
          { title: 'Ozone Therapy', blurb: 'Oxidative therapy for chronic infection — the routes, the honest (thin) evidence, the gas-embolism rule, and why Plan B steers away from the IV forms in kids.', href: '/ozone.html' },
          { title: 'EBOO (Blood Ozonation)', blurb: 'The most intensive ozone form — "ozone dialysis" for refractory chronic Lyme/mold. Experimental, invasive, adult-studied; a deeper-menu option, never first-line, and extra caution in kids.', href: '/eboo.html' },
          { title: 'Bee Venom Therapy', blurb: 'Melittin kills Borrelia in the lab — but anaphylaxis is the headline: EpiPen on hand, test-sting first, never for young or allergic kids.', href: '/bee-venom.html' },
        ],
      },
    ],
  },
  {
    group: '7 · Answers from real cases',
    sub: 'Thirty questions that came up over and over in our own case work — answered the way we answer them for a family. Read the whole set at planbforpans.com/learn.',
    subgroups: [
      {
        label: 'What you are seeing',
        items: [
          { title: 'When your child fights every dose of medicine', blurb: 'Daily meltdowns over medication in a PANS child are usually OCD, not defiance. Why every trick stops working, and the approaches that actually help.', href: 'https://app.planbforpans.com/learn/medication-refusal' },
          { title: 'Some kids collect infections. There is a reason — and it is testable.', blurb: 'In our own cohort, children with abnormal immunoglobulins carried nearly twice the rate of stacked infection drivers. The standard blood test most PANS kids never get.', href: 'https://app.planbforpans.com/learn/collecting-infections' },
          { title: 'Leucovorin, cerebral folate deficiency, and the FRAT test', blurb: 'Why serum folate can look perfectly normal while a child’s brain is starved of it — and the antibody test that tells you whether leucovorin is the right lever.', href: 'https://app.planbforpans.com/learn/cerebral-folate-frat' },
          { title: 'When safe foods suddenly become inedible', blurb: 'ARFID in a PANS child is often the illness wearing a food costume. Why the food range collapses, and what actually helps.', href: 'https://app.planbforpans.com/learn/arfid-food-window' },
          { title: 'Uploaded is not the same as read: why findings get missed', blurb: 'A positive result can sit in a chart for years without anyone acting on it. How to make sure every lab your child has had actually gets looked at.', href: 'https://app.planbforpans.com/learn/uploaded-not-extracted' },
        ],
      },
      {
        label: 'Labs & testing',
        items: [
          { title: 'One lab says Lyme, the other says negative. Who is right?', blurb: 'Specialty tick-borne panels and standard two-tier testing often disagree. Why a negative Quest or LabCorp result does not mean your child was never infected.', href: 'https://app.planbforpans.com/learn/conflicting-lyme-tests' },
          { title: 'You treat the strep. The Mycoplasma is still there.', blurb: 'In our cohort, 53% of children carried three or more infection or mold drivers at once. Why treating one thing at a time keeps failing.', href: 'https://app.planbforpans.com/learn/never-one-thing' },
          { title: 'The immune workup almost no PANS child gets', blurb: 'Immunoglobulins, IgG subclasses and pneumococcal titers — the standard, covered blood tests that explain why some children cannot stop getting reinfected.', href: 'https://app.planbforpans.com/learn/immune-workup-nobody-orders' },
          { title: 'Your child’s labs are two years old. What still counts?', blurb: 'How to tell which old results are still useful, which need rechecking, and why a stale abnormal result should never be treated as today’s emergency.', href: 'https://app.planbforpans.com/learn/old-labs-recheck' },
          { title: 'Rage, night terrors and foot pain: the Bartonella signature', blurb: 'The behavioral fingerprint that points toward Bartonella in a PANS child, why standard testing misses it, and what treatment realistically looks like.', href: 'https://app.planbforpans.com/learn/bartonella-signature' },
          { title: 'Why the strep keeps coming back: household carriers', blurb: 'Roughly a third of PANS strep recurrences trace to an asymptomatic family member. How to find a carrier and decontaminate a house.', href: 'https://app.planbforpans.com/learn/family-strep-carriers' },
          { title: 'Babesia: the co-infection most often missed', blurb: 'Air hunger, night sweats and bone-deep fatigue that does not lift. Why Babesia is so often overlooked, and why it needs its own treatment.', href: 'https://app.planbforpans.com/learn/babesia-missed' },
          { title: 'Constipation is stealing your child’s appetite', blurb: 'No lunch, then a huge dinner. Why a backed-up gut produces exactly that pattern, and why fixing it comes before everything else.', href: 'https://app.planbforpans.com/learn/constipation-and-appetite' },
          { title: 'Genetics is the blueprint, not the whole picture', blurb: 'What a methylation panel can and cannot tell you about your child — and why the gene is the lock, not whether it is turned.', href: 'https://app.planbforpans.com/learn/genetics-is-the-blueprint' },
        ],
      },
      {
        label: 'Infections',
        items: [
          { title: 'Open the exit before you increase the kill', blurb: 'Why starting antimicrobials in a constipated, under-hydrated child backfires — and the order that actually works: water, bowels, binders, then herbs.', href: 'https://app.planbforpans.com/learn/drainage-first' },
          { title: 'The away trial: is your house making your child sick?', blurb: 'The cheapest and most informative mold test is leaving. What an away trial can and cannot tell you, and how to run one properly.', href: 'https://app.planbforpans.com/learn/mold-away-trial' },
          { title: 'What a positive anti-neuronal antibody panel actually means', blurb: 'Gold-standard antibody tests versus commercial neural panels — how to read a result where one is negative and the other shows a dozen positives.', href: 'https://app.planbforpans.com/learn/autoimmune-encephalitis-panel' },
          { title: 'Before IVIG: the workup worth finishing first', blurb: 'IVIG can be transformative, and it can also fail for reasons that were knowable beforehand. What to rule out and treat before you get there.', href: 'https://app.planbforpans.com/learn/pre-ivig-pathway' },
        ],
      },
      {
        label: 'Treatment & sequencing',
        items: [
          { title: 'Is it OCD, or is my child being defiant?', blurb: 'How to tell PANS-driven OCD from oppositional behavior — and why the difference completely changes what you should do.', href: 'https://app.planbforpans.com/learn/ocd-vs-defiance' },
          { title: 'Die-off reactions: how to tell a Herx from things getting worse', blurb: 'What a Herxheimer reaction looks like in a PANS child, how to tell it from a treatment failure, and exactly what to do when it happens.', href: 'https://app.planbforpans.com/learn/herx-reactions' },
          { title: 'When the supplement is the problem: overmethylation in PANS kids', blurb: 'Methylfolate, methyl-B12 and TMG can drive irritability, aggression and agitation in the wrong child. How to spot it and what to check.', href: 'https://app.planbforpans.com/learn/overmethylation' },
          { title: 'What a PANS flare actually is — and how to recognize one early', blurb: 'The signs a PANS child is flaring rather than regressing, what typically triggers one, and what to do in the first 48 hours.', href: 'https://app.planbforpans.com/learn/what-is-a-flare' },
          { title: 'The nose and sinuses: the reservoir nobody checks', blurb: 'Chronic nasal and sinus colonization is a recognized PANS driver and one of the least-ordered parts of the workup. What to test and why.', href: 'https://app.planbforpans.com/learn/nasal-sinus-reservoir' },
          { title: 'Drops are not a dose: reading herbal tincture strength', blurb: 'Twelve drops of one brand is not twelve drops of another. How to compare tinctures properly and avoid accidentally under- or over-dosing your child.', href: 'https://app.planbforpans.com/learn/drops-are-not-a-dose' },
          { title: 'Classical homeopathy, dosing frequency, and provings', blurb: 'Why a well-chosen remedy can start making things worse — and the difference between true classical practice and frequent-dosing approaches.', href: 'https://app.planbforpans.com/learn/homeopathy-provings' },
          { title: 'What most gut tests miss in a PANS child', blurb: 'Beneficial-species depletion matters as much as overgrowth — and the most common stool tests do not report it at the level that counts.', href: 'https://app.planbforpans.com/learn/gut-testing-bifidobacterium' },
        ],
      },
      {
        label: 'Environment',
        items: [
          { title: 'What to do when no doctor will order the labs', blurb: 'Practical routes to getting a full PANS workup ordered and covered — what to say, who to ask, and what to do when everyone says no.', href: 'https://app.planbforpans.com/learn/getting-labs-ordered' },
        ],
      },
      {
        label: 'What the data shows',
        items: [
          { title: 'Mycoplasma IgG vs IgM: does a high IgG mean an active infection?', blurb: 'High Mycoplasma IgG with a negative IgM confuses almost every PANS family. What each marker means, why doctors disagree, and the three tests that actually settle it.', href: 'https://app.planbforpans.com/learn/mycoplasma-igg-igm' },
          { title: 'Our kids take a median of nine supplements a day', blurb: 'What we found when we counted: two-thirds of children on five or more supplements, half never tested for the drivers most likely causing their illness.', href: 'https://app.planbforpans.com/learn/nine-supplements' },
          { title: 'Find the one biggest driver and knock that down first', blurb: 'Why treating a PANS child one symptom at a time keeps failing, and how to identify the single driver worth going after before anything else.', href: 'https://app.planbforpans.com/learn/find-the-driver' },
        ],
      },
    ],
  },
]

function ItemGrid({ items, caution }: { items: Item[]; caution?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
      {items.map((it) => (
        <a key={it.title} href={it.href} style={{ display: 'block', textDecoration: 'none', background: caution ? '#fbf5ef' : card, border: `1.5px solid ${caution ? 'rgba(154,90,58,0.5)' : teal}`, borderRadius: 14, padding: '22px 22px 24px' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 24, lineHeight: 1.1, color: ink, margin: '0 0 10px' }}>{it.title}</p>
          <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.55, margin: '0 0 14px' }}>{it.blurb}</p>
          <span style={{ fontSize: 13, color: caution ? rust : teal, fontWeight: 700, letterSpacing: '0.04em' }}>Read &rarr;</span>
        </a>
      ))}
    </div>
  )
}

export default function LearnPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 36px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>The Plan B Field Guide</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Every treatment, deconstructed.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            The hardest part of PANS is the moment you <strong style={{ color: ink }}>stall</strong> — when the standard path stops working and no one tells you what&rsquo;s left. <strong style={{ color: ink }}>This is what&rsquo;s left.</strong> Every treatment, laid out honestly, so that when you hit a wall you know the search isn&rsquo;t over — there&rsquo;s a Plan B. Each guide answers the same things: <strong style={{ color: ink }}>what it is</strong>, <strong style={{ color: ink }}>the research</strong>, <strong style={{ color: ink }}>the real risks</strong>, <strong style={{ color: ink }}>how to actually get it</strong>, and <strong style={{ color: ink }}>how to vet a practitioner.</strong>
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(24px, 4vw, 40px) 24px 0' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ background: '#fffdf7', border: `1px solid ${rule}`, borderLeft: `4px solid ${teal}`, borderRadius: 12, padding: 'clamp(20px, 4vw, 30px)' }}>
            <p style={{ color: teal, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 14px' }}>A note from Rachel &mdash; before you scroll</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 12px' }}>This map took me <strong style={{ color: ink }}>two years</strong> to understand. <strong style={{ color: ink }}>You don&rsquo;t have to.</strong> Plan B helps organize it so you can explore it with your care team.</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 12px' }}>So if this page tightens your chest or makes you want to close the laptop &mdash; <strong style={{ color: ink }}>do it. That&rsquo;s allowed.</strong> Let Minta do the work; that&rsquo;s exactly what she&rsquo;s for.</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: soft, margin: '0 0 14px' }}>I&rsquo;m a control freak &mdash; I need to see the gears turning behind the curtain. So I&rsquo;m pulling it back and showing you the basics. Fair warning: even the basics are honestly a lot. <strong style={{ color: ink }}>Take what helps, skip the rest, and let the system carry what you can&rsquo;t.</strong></p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 21, color: teal, margin: 0 }}>&mdash; Rachel</p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(36px, 6vw, 64px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* THE FULL MAP — the can't-miss hero with a mini-map visual */}
          <a href="/tree.html" style={{ display: 'block', textDecoration: 'none', background: 'linear-gradient(135deg, #1F6B6B, #24566a)', color: '#fdf8ee', borderRadius: 18, padding: 'clamp(28px,5vw,46px)', marginBottom: 38, boxShadow: '0 28px 64px -28px rgba(31,107,107,0.95)', border: '1px solid rgba(255,255,255,0.14)' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, color: '#bfe3df', margin: '0 0 12px' }}>★ Read this first — the whole picture</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(36px, 6.5vw, 58px)', lineHeight: 1.0, margin: '0 0 6px' }}>The Map</p>
            <svg viewBox="0 0 620 64" style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '14px 0 6px' }} aria-hidden="true">
              <path d="M14,48 C130,8 210,8 300,38 C392,68 460,16 600,22" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
              <circle cx="14" cy="48" r="7" fill="#ffffff" />
              <circle cx="210" cy="20" r="6" fill="#bfe3df" />
              <circle cx="380" cy="50" r="6" fill="#bfe3df" />
              <circle cx="520" cy="24" r="6" fill="#bfe3df" />
              <circle cx="600" cy="22" r="8" fill="#ffd966" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 560, fontSize: 10.5, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#cfe8e4', fontWeight: 600, margin: '0 0 18px' }}>
              <span>Protocol</span><span>Drivers</span><span>Deeper</span><span>Better</span>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#eaf4f2', margin: '0 0 20px', maxWidth: 640 }}>The whole journey for PANS — at a glance. <strong style={{ color: '#fff' }}>Tap any branch to open its treatments.</strong> Every guide below is one limb of this map.</p>
            <span style={{ display: 'inline-block', fontSize: 15, fontWeight: 800, color: '#1F6B6B', background: '#fff', padding: '13px 26px', borderRadius: 10, letterSpacing: '0.02em' }}>Open the Map &rarr;</span>
          </a>


          {SECTIONS.map((sec) => (
            <div key={sec.group} style={{ marginBottom: 30 }}>
              <p style={{ fontSize: 13, color: teal, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 2px' }}>{sec.group}</p>
              <p style={{ fontSize: 14, color: soft, fontStyle: 'italic', margin: '0 0 14px' }}>{sec.sub}</p>
              {sec.items && <ItemGrid items={sec.items} />}
              {sec.subgroups?.map((sg) => (
                <div key={sg.label} style={{ marginTop: 18 }}>
                  <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: sg.caution ? rust : teal, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 7 }}>
                    {sg.caution && <span aria-hidden="true">⚠</span>}
                    {sg.label}
                  </p>
                  <ItemGrid items={sg.items} caution={sg.caution} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
