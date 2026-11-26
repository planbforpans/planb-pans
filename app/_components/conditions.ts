// The Plan B condition pages (Rachel, 2026-11-26): "Use the same format as planbforpans, just swap out
// the PANS stuff." One config per condition; ConditionHome renders it in the homepage's layout.

export type ConditionKey = 'ocd' | 'arfid' | 'adhd' | 'constipation'
export type BugKey = 'strep' | 'myco' | 'virus' | 'mold' | 'yeast' | 'clostridia' | 'bartonella' | 'lyme' | 'stress' | 'infection'
export type BugNote = { tell?: string; shows?: string; test?: string }
export type SignKey = 'constipation' | 'picky' | 'worries' | 'focus' | 'sleep' | 'tics' | 'food' | 'ocd' | 'rage' | 'regression'

// Link each condition to its own domain only once that domain resolves. OCD stays on the path
// until planbforocd.com DNS is fixed; flip it to true then.
export const CONDITION_DOMAIN_LIVE: Record<ConditionKey, boolean> = {
  ocd: false,
  arfid: true,
  adhd: true,
  constipation: true,
}

const DOMAINS: Record<ConditionKey, string> = {
  ocd: 'https://planbforocd.com',
  arfid: 'https://planbforarfid.com',
  adhd: 'https://planbforadhd.com',
  constipation: 'https://planbforconstipation.com',
}

export function conditionHref(k: ConditionKey): string {
  return CONDITION_DOMAIN_LIVE[k] ? DOMAINS[k] : `https://planbforpans.com/for-${k}`
}

// Footer / Learn order.
export const CONDITION_LINKS: { k: ConditionKey; name: string; seeing: string }[] = [
  { k: 'ocd', name: 'Plan B for OCD', seeing: 'Sudden OCD' },
  { k: 'adhd', name: 'Plan B for ADHD', seeing: 'Attention and focus (ADHD)' },
  { k: 'arfid', name: 'Plan B for ARFID', seeing: 'Food restriction (ARFID)' },
  { k: 'constipation', name: 'Plan B for Constipation', seeing: 'Constipation' },
]

export type Condition = {
  k: ConditionKey
  name: string
  issue: string
  kid: { src: string; alt: string; w: number; h: number }
  pins: { top: string; left: string; t: string }[]
  h1: [string, string, string, string, string]
  dek: string
  monitor: string[]
  signs: SignKey[]
  bugs: BugKey[]
  hot: BugKey[]
  hotLabel: string
  tests: [string, string | null, string][]
  testsNote?: string
  warn?: string
  tracker: { k: string; v: number }[]
  trackerNote: string
  minta: string
  reads: [string, string, string][]
  // Depth (Rachel, 2026-11-26: "Can we deepen it?")
  it: string
  mechHook: string
  mechExtra?: string
  replies: [string, string][]
  careQ: string
  careA: string
  mintaQ: string
  cites?: [string, string][]
  bugNotes?: Partial<Record<BugKey, BugNote>>
  lead?: { text: string; bugs: string[] }
}

const BOY = { src: '/kid-cover.png', alt: 'Silhouette of a child, Plan B for PANS', w: 900, h: 1200 }

export const CONDITIONS: Record<ConditionKey, Condition> = {
  ocd: {
    k: 'ocd',
    name: 'OCD',
    issue: 'The OCD Issue',
    kid: BOY,
    pins: [
      { top: '22%', left: '46%', t: 'Worries' },
      { top: '34%', left: '40%', t: 'Rituals' },
      { top: '46%', left: '44%', t: 'Tics' },
      { top: '56%', left: '34%', t: 'Sleep' },
    ],
    h1: ['OCD that came on ', 'almost overnight', '? See the whole picture, and the ', 'next step', ' to take to your doctor.'],
    dek: 'Rituals that weren’t there last month. Fears that won’t let go. Worse every time your child gets sick. When OCD arrives fast, the trigger may be in the body.',
    monitor: ['ASO 412 IU/mL ▲', 'Anti-DNase B 680 ▲', 'Worries 7/10 ▼', 'Rituals 4/10 ▼', 'Tics 2/10 ▼', 'Sleep 7.2 h ▲', 'Nights tracked 14', 'Pattern found: 1'],
    signs: ['worries', 'ocd'],
    bugs: ['strep', 'myco', 'virus', 'mold', 'stress', 'bartonella', 'lyme', 'yeast', 'clostridia'],
    hot: ['strep', 'myco'],
    hotLabel: 'sudden OCD',
    it: 'The OCD',
    mechHook: 'sudden OCD, tics and fears that won’t let go',
    replies: [
      ['“It’s just anxiety.”', 'That may be part of it. Could we look at the timeline together? It came on over about two weeks, right after a sore throat. Would a strep swab and ASO with anti-DNase B make sense, to rule a trigger in or out?'],
      ['“The strep test was negative.”', 'Thank you for checking. Could we also swab the rest of the family, and do a perianal swab? And would paired titers, repeated in four to six weeks, catch a strep we missed?'],
      ['“She’s too old for PANDAS.”', 'I’ve read that PANS isn’t limited to young children. Would you be open to looking at the PANS criteria with me, given how fast this started?'],
      ['“Let’s start an SSRI and see.”', 'We’re open to that. While we start, could we also check for an infection trigger, so we’re not missing something treatable?'],
    ],
    careQ: 'Does OCD therapy and medicine still matter?',
    careA: 'Yes. ERP and medicine help many children. Looking at the body is something you add, with your doctor, not instead.',
    mintaQ: 'My child’s OCD came on suddenly. What should I look at in the body, and what should I ask the doctor?',
    tests: [
      ['Immunoglobulins (IgG, IgA, IgM, IgG subclasses) + pneumococcal titers', null, 'Can your child’s immune system make the antibodies it needs? A child who keeps getting hit may not be clearing infections.'],
      ['Test-of-cure swab, 2–4 weeks after treatment', null, 'Did the treatment work? A flare that comes back may be strep that never cleared.'],
      ['Urine mycotoxins + an away-trial', 'RealTime Laboratories', 'When OCD is worse in one house, school or car, and better away.'],
    ],
    testsNote: 'ERP, exposure and response prevention, is the best-studied therapy for OCD. It works alongside looking at the body, not instead of it.',
    tracker: [{ k: 'Worries', v: 6 }, { k: 'Rituals', v: 4 }, { k: 'Sleep', v: 7 }, { k: 'Tics', v: 2 }],
    trackerNote: '+ Strep swab: negative',
    minta: 'The rituals got worse tonight, a week after a cold. Tell Minta what changed, in your own words, and get a straight, plain-English read on what might be driving it and what to ask next.',
    reads: [
      ['/pans-and-strep.html', 'PANDAS and strep', 'How strep can set off sudden OCD, and the tests.'],
      ['/mold-anxiety-ocd-children.html', 'Mold, anxiety and OCD', 'When the worries are worse in one building.'],
      ['/sudden-tics-pandas-strep.html', 'Sudden tics', 'The strep connection to tics.'],
      ['/behavior-pathogen-map.html', 'The behavior–pathogen map', 'What each behavior is worth investigating.'],
    ],
  },
  arfid: {
    k: 'arfid',
    name: 'ARFID',
    issue: 'The ARFID Issue',
    kid: BOY,
    pins: [
      { top: '22%', left: '46%', t: 'Foods' },
      { top: '34%', left: '40%', t: 'Fear' },
      { top: '46%', left: '44%', t: 'Belly' },
      { top: '56%', left: '34%', t: 'Weight' },
    ],
    h1: ['Safe foods suddenly ', 'off the table', '? See the whole picture, and the ', 'next step', ' to take to your doctor.'],
    dek: 'Foods your child loved now “feel wrong.” A new fear of choking or throwing up. Smells and textures they can’t stand. Weight slipping. When eating narrows fast, it can be a sign that something in the body is driving the brain.',
    monitor: ['Safe foods 4 ▲', 'Choking fear 6/10 ▼', 'Ferritin 18 ng/mL ▼', 'Zinc 62 µg/dL ▼', 'ASO 412 IU/mL ▲', 'Bowel movements 1/day', 'Nights tracked 14', 'Pattern found: 1'],
    signs: ['picky', 'food'],
    bugs: ['strep', 'yeast', 'mold', 'myco', 'virus', 'stress', 'clostridia', 'bartonella', 'lyme'],
    hot: ['strep', 'yeast'],
    hotLabel: 'food restriction',
    it: 'The food restriction',
    mechHook: 'sudden food fears and a menu that collapses',
    replies: [
      ['“She’s just picky.”', 'She was a good eater until about three weeks ago, right after she was sick. Could we look at the timeline together and check for a trigger, like strep, while we work on the eating?'],
      ['“The strep test was negative.”', 'Thank you for checking. Could we also swab the rest of the family, and do a perianal swab? And would paired titers, repeated in four to six weeks, catch a strep we missed?'],
      ['“It’s a feeding issue. See a therapist.”', 'We’d welcome feeding therapy. Could we also check zinc, ferritin and celiac, and whether she’s backed up, so the body isn’t working against the therapy?'],
      ['“Her labs were normal.”', 'That’s good to hear. Which tests were run? Could we add the ones that weren’t, like ferritin, zinc and strep titers, and repeat anything that was borderline?'],
    ],
    careQ: 'Does feeding therapy still matter?',
    careA: 'Yes. A feeding therapist, or a therapist trained in CBT for ARFID, helps many children. Looking at the body is something you add, not instead.',
    mintaQ: 'My child’s eating narrowed suddenly. What should I look at in the body, and what should I ask the doctor?',
    cites: [['Toufexis MD, et al. Disordered eating and food restrictions in children with PANDAS/PANS. J Child Adolesc Psychopharmacol. 2015;25(1):48–56.', 'https://pubmed.ncbi.nlm.nih.gov/25329522/']],
    tests: [
      ['Zinc, ferritin and a CBC with iron panel', null, 'Taste, smell and appetite. Ferritin is the iron store and is often missed by a plain CBC.'],
      ['Celiac screen: tTG-IgA with total IgA', null, 'Belly pain, weight loss and food fear can all come from celiac disease. Total IgA makes sure the screen can be trusted.'],
      ['A stool test and a look for constipation', null, 'A comprehensive stool test can show yeast and an off-balance gut. Ask whether stool is backed up, even if your child goes every day.'],
      ['Immunoglobulins (IgG, IgA, IgM, IgG subclasses) + pneumococcal titers', null, 'Can your child’s immune system make the antibodies it needs?'],
    ],
    testsNote: 'Feeding therapy, or a therapist trained in CBT for ARFID, works alongside looking at the body, not instead of it.',
    warn: 'Call the doctor today, or go to the ER, if your child is losing weight fast, refusing fluids, dizzy or fainting, or has stopped eating almost completely.',
    tracker: [{ k: 'Safe foods', v: 4 }, { k: 'Fear', v: 6 }, { k: 'Belly', v: 3 }, { k: 'Sleep', v: 7 }],
    trackerNote: '+ Added zinc, with the doctor',
    minta: 'Dinner was a battle tonight. Another safe food dropped. Tell Minta what changed, in your own words, and get a straight, plain-English read on what might be driving it and what to ask next.',
    reads: [
      ['/sudden-food-refusal-arfid-pans.html', 'Sudden food refusal and fear of choking', 'How to tell ARFID and PANS apart, and what to test.'],
      ['https://app.planbforpans.com/learn/arfid-food-window', 'When safe foods suddenly become inedible', 'Why the food range collapses, and what helps.'],
      ['https://app.planbforpans.com/learn/constipation-and-appetite', 'Constipation is stealing the appetite', 'No lunch, then a huge dinner, and why.'],
      ['/gut.html', 'The gut and the microbiome', 'Which stool test, and how to reset it.'],
      ['/mcas.html', 'MCAS and histamine', 'When food feels unsafe in the body.'],
      ['/yeast.html', 'Yeast and Candida', 'The behaviors it drives, and a gentle protocol.'],
    ],
  },
  adhd: {
    k: 'adhd',
    name: 'ADHD',
    issue: 'The ADHD Issue',
    kid: BOY,
    pins: [
      { top: '22%', left: '46%', t: 'Focus' },
      { top: '34%', left: '40%', t: 'Sleep' },
      { top: '46%', left: '44%', t: 'Restless' },
      { top: '56%', left: '34%', t: 'Mood' },
    ],
    h1: ['Focus fell apart ', 'after an illness', '? Look at the body too, and take the ', 'next step', ' to your doctor.'],
    dek: 'ADHD is real, and medicine and support help many children. But when attention or hyperactivity came on suddenly, got much worse fast, or flares with every cold, it can also be a sign that something in the body is driving the brain.',
    monitor: ['Focus 4/10 ▲', 'Restless 6/10 ▼', 'Ferritin 16 ng/mL ▼', 'Snoring nights 5', 'Mycoplasma IgM ▲', 'Sleep 8.1 h ▲', 'Nights tracked 14', 'Pattern found: 1'],
    signs: ['focus'],
    bugs: ['strep', 'myco', 'virus', 'mold', 'stress', 'lyme', 'yeast', 'bartonella', 'clostridia'],
    hot: ['strep', 'myco', 'mold'],
    hotLabel: 'a sudden change in focus',
    it: 'The change in focus',
    mechHook: 'focus and restlessness that changed almost overnight',
    replies: [
      ['“It’s just ADHD.”', 'That may well be part of it. What I noticed is that it got much worse over a couple of weeks, right after he was sick. Could we check for a trigger, like strep or Mycoplasma, alongside his ADHD care?'],
      ['“The strep test was negative.”', 'Thank you for checking. Could we also swab the rest of the family? And would paired titers, repeated in four to six weeks, catch a strep we missed?'],
      ['“Kids get colds. That’s not related.”', 'You may be right. Could I track it for a month, focus next to every cold, and bring it back to you so we can look at it together?'],
      ['“Let’s adjust the medicine.”', 'We’re open to that. Could we also check ferritin, thyroid and sleep, so we’re treating the whole picture?'],
    ],
    careQ: 'Does ADHD medicine still matter?',
    careA: 'Yes. Medicine, behavioral support and school help make a real difference for many children. Keep what is working. Looking at the body is something you add, with your doctor.',
    mintaQ: 'My child’s focus changed suddenly after an illness. What should I look at in the body, and what should I ask the doctor?',
    tests: [
      ['Ferritin and an iron panel', null, 'The iron store, which a plain CBC can miss. Linked to restless sleep and attention.'],
      ['Thyroid: TSH + free T4', null, 'An over- or underactive thyroid can change focus, energy and mood.'],
      ['Blood lead level', null, 'A simple screen. Lead affects attention, and older homes still carry it.'],
      ['A sleep evaluation', null, 'If your child snores, stops breathing for moments, or wakes unrefreshed, ask whether a sleep study makes sense.'],
      ['Glucose during a meltdown', null, 'A home meter, checked in the moment, shows whether blood-sugar swings are part of the picture.'],
    ],
    testsNote: 'A child can have both. Looking at the body is something you add, not a reason to stop ADHD care that is helping. Never start, stop or change a medicine without your child’s doctor.',
    tracker: [{ k: 'Focus', v: 5 }, { k: 'Restless', v: 4 }, { k: 'Sleep', v: 8 }, { k: 'Mood', v: 6 }],
    trackerNote: '+ Ferritin checked: 16',
    minta: 'A wild week after a cold, and school called again. Tell Minta what changed, in your own words, and get a straight, plain-English read on what might be driving it and what to ask next.',
    reads: [
      ['/is-it-adhd-or-pans.html', 'Is it ADHD, or something more?', 'How to tell a long-standing pattern from a sudden change.'],
      ['/root-cause-adhd-treatable-drivers.html', 'Treatable drivers behind focus', 'Sleep, iron, the gut and more, alongside standard care.'],
      ['/mold-and-adhd.html', 'Mold and attention', 'The inflammation and attention connection.'],
      ['/gut-microbiome-and-adhd.html', 'The gut and the brain in ADHD', 'Microbiome, diet and focus.'],
    ],
  },
  constipation: {
    k: 'constipation',
    name: 'Constipation',
    issue: 'The Constipation Issue',
    kid: BOY,
    pins: [
      { top: '22%', left: '46%', t: 'Mood' },
      { top: '34%', left: '40%', t: 'Appetite' },
      { top: '46%', left: '44%', t: 'Belly' },
      { top: '56%', left: '34%', t: 'Sleep' },
    ],
    h1: ['Constipation ', 'no one can explain', '? See the whole picture, and the ', 'next step', ' to take to your doctor.'],
    dek: 'Most constipation in children is simple. But when it never really goes away, comes with mood or behavior changes, or gets better every time your child is on an antibiotic, it can be a sign that something in the gut is talking to the brain. Two big triggers to look at first: mold and infection.',
    monitor: ['Days since BM 3 ▼', 'Bloating 6/10 ▼', 'Methane 22 ppm ▲', 'Mood 4/10 ▲', 'Better on amoxicillin', 'Sleep 7.0 h ▲', 'Nights tracked 14', 'Pattern found: 1'],
    signs: ['constipation'],
    bugs: ['mold', 'infection', 'clostridia', 'yeast', 'virus', 'stress', 'bartonella', 'lyme'],
    hot: ['mold', 'infection'],
    // Rachel, 2026-11-26: "Mold is a big trigger for constipation. Also infection."
    bugNotes: {
      mold: {
        tell: 'Constipation that eases away from the house is a clue.',
        shows: 'Mycotoxins can slow the gut and feed yeast and clostridia. Often with anxiety, mood swings, brain fog and a child who is “sensitive to everything.”',
        test: 'Urine mycotoxins (RealTime Laboratories), a home check you can do yourself, and an away-trial: a week somewhere else. Fast better-away rules mold in.',
      },
    },
    lead: { text: 'For constipation, look first at mold and infection.', bugs: ['Mold', 'Strep', 'Mycoplasma', 'Clostridia'] },
    hotLabel: 'constipation',
    it: 'The constipation, or the behavior with it,',
    mechHook: 'mood and behavior that swing with the gut',
    mechExtra: 'The gut has its own line to the brain. Some gut microbes, like clostridia, make byproducts that can reach the brain and change mood and behavior. Constipation can be a sign that the gut’s balance is off.',
    replies: [
      ['“Just add fiber and MiraLAX.”', 'We will. It keeps coming back, and his mood rides along with it. Could we also look for a cause, like a breath test or a stool test, so we’re not just managing it?'],
      ['“Lots of kids are constipated.”', 'That’s true. What stands out to me is that it got better on amoxicillin and came back after. Could that be a clue worth testing?'],
      ['“Bowels and behavior aren’t related.”', 'I’ve read about the gut–brain connection and I’m curious what you think. Could I track both for a month and bring it back to you?'],
      ['“The labs are normal.”', 'That’s good to hear. Which tests were run? Could we add thyroid, celiac, ferritin and a breath test if they weren’t?'],
    ],
    careQ: 'Does the pediatrician’s bowel plan still matter?',
    careA: 'Yes. Clearing the backup and keeping things moving comes first. Looking for a cause is something you add, not instead.',
    mintaQ: 'My child’s constipation won’t go away and the behavior swings with it. What should I look at, and what should I ask the doctor?',
    tests: [
      ['Lactulose breath test: hydrogen and methane', 'CPT 91065', 'Measures gas made by gut microbes. High methane points to slow-transit constipation and a treatable overgrowth.'],
      ['A comprehensive stool test', null, 'The balance of gut bacteria, yeast and inflammation, including clostridia. C. diff testing is separate and only runs on loose stool.'],
      ['Thyroid: TSH + free T4', null, 'A slow thyroid is a common and treatable cause of constipation.'],
      ['Ferritin, iron panel and magnesium', null, 'Iron supplements can constipate; low magnesium can slow the bowel. Check before guessing.'],
      ['Celiac screen: tTG-IgA with total IgA', null, 'In children, celiac disease can show up as constipation rather than diarrhea.'],
    ],
    testsNote: 'Constipation that eases on an antibiotic for something else is a clue. Write down the dates and bring them.',
    warn: 'Call the doctor promptly for constipation since the first days of life, blood in the stool, a swollen belly with vomiting, weight loss, pale or clay-colored stools, or new leg weakness or back pain.',
    tracker: [{ k: 'Poops', v: 3 }, { k: 'Belly', v: 6 }, { k: 'Mood', v: 5 }, { k: 'Sleep', v: 7 }],
    trackerNote: '+ Better on amoxicillin, day 4',
    minta: 'Four days, no poop, and a hard night. Tell Minta what changed, in your own words, and get a straight, plain-English read on what might be driving it and what to ask next.',
    reads: [
      ['/constipation-in-children-hidden-causes.html', 'Constipation that won’t go away', 'The usual causes and red flags first, then when to look deeper.'],
      ['https://app.planbforpans.com/learn/constipation-and-appetite', 'Constipation is stealing the appetite', 'No lunch, then a huge dinner, and why.'],
      ['/gut.html', 'The gut and the microbiome', 'Which stool test, and how to reset it.'],
      ['/fmt.html', 'Probiotic enemas and FMT', 'The trial data, the routes and the FDA limits, honestly.'],
      ['/yeast.html', 'Yeast and Candida', 'The behaviors it drives, and a gentle protocol.'],
    ],
  },
}
