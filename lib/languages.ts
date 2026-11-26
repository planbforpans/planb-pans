// The languages a family can pick. Mirror of src/lib/languages.ts in planb-app
// (app.planbforpans.com), whose /api/translate serves this site too; keep the
// two lists the same.
//
// Rachel, 2026-11-26: Plan B for PANS worldwide. Spanish shipped first
// (2026-11-21); phase 1 adds French, German, Brazilian Portuguese, Italian,
// Simplified and Traditional Chinese and Japanese, plus Arabic (right-to-left)
// for Palestinian families. Hebrew can join later by adding a row with dir: 'rtl'.
//
// English is the source and the reference. Every other language is machine
// translated (Claude) with hand-checked overrides that always win
// (planb-app src/lib/translation-overrides.ts).

export type Lang = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'zh-Hans' | 'zh-Hant' | 'ja' | 'ar'

export type LangInfo = {
  code: Lang
  // The language in its own name, shown in the picker.
  name: string
  // English name, used in prompts to the model.
  english: string
  dir: 'ltr' | 'rtl'
  // Shown on the picker while a page is being translated.
  translating: string
  // Small note wherever machine translation is shown.
  note: string
  // "Choose your language", in this language (the first-visit chooser).
  choose: string
  // How the translator and Minta should write for this audience.
  style: string
}

export const LANGS: LangInfo[] = [
  { code: 'en', name: 'English', english: 'English', dir: 'ltr', translating: 'Translating…', note: '', choose: 'Choose your language', style: '' },
  {
    code: 'es', name: 'Español', english: 'Spanish', dir: 'ltr', translating: 'Traduciendo…',
    note: 'Traducido automáticamente — el inglés es la referencia.',
    choose: 'Elija su idioma',
    style: 'Warm, plain, everyday Spanish for US and Latin American parents. Use "usted". Standard Spanish medical terms (e.g. "estreptococo", "moho", "inmunoglobulina").',
  },
  {
    code: 'fr', name: 'Français', english: 'French', dir: 'ltr', translating: 'Traduction…',
    note: 'Traduit automatiquement — la version anglaise fait foi.',
    choose: 'Choisissez votre langue',
    style: 'Warm, plain French for parents. Use "vous". Standard French medical terms (e.g. "streptocoque", "moisissures", "immunoglobulines"). Use French typographic spacing before : ; ? !.',
  },
  {
    code: 'de', name: 'Deutsch', english: 'German', dir: 'ltr', translating: 'Wird übersetzt…',
    note: 'Automatisch übersetzt — maßgeblich ist die englische Fassung.',
    choose: 'Sprache wählen',
    style: 'Warm, plain German for parents. Use "Sie". Standard German medical terms (e.g. "Streptokokken", "Schimmel", "Immunglobuline"). Prefer shorter words over very long compounds in buttons and headings.',
  },
  {
    code: 'pt', name: 'Português', english: 'Brazilian Portuguese', dir: 'ltr', translating: 'Traduzindo…',
    note: 'Traduzido automaticamente — o inglês é a referência.',
    choose: 'Escolha seu idioma',
    style: 'Warm, plain Brazilian Portuguese for parents. Use "você". Standard Brazilian medical terms (e.g. "estreptococo", "mofo", "imunoglobulina").',
  },
  {
    code: 'it', name: 'Italiano', english: 'Italian', dir: 'ltr', translating: 'Traduzione…',
    note: 'Tradotto automaticamente — fa fede la versione inglese.',
    choose: 'Scelga la lingua',
    style: 'Warm, plain Italian for parents. Use the courteous "Lei". Standard Italian medical terms (e.g. "streptococco", "muffa", "immunoglobuline").',
  },
  {
    code: 'zh-Hans', name: '简体中文', english: 'Simplified Chinese', dir: 'ltr', translating: '正在翻译…',
    note: '自动翻译——以英文原文为准。',
    choose: '选择语言',
    style: 'Warm, plain Simplified Chinese (mainland usage) for parents. Use 您. Standard Chinese medical terms (e.g. 链球菌, 霉菌, 免疫球蛋白). Use full-width Chinese punctuation.',
  },
  {
    code: 'zh-Hant', name: '繁體中文', english: 'Traditional Chinese', dir: 'ltr', translating: '正在翻譯…',
    note: '自動翻譯——以英文原文為準。',
    choose: '選擇語言',
    style: 'Warm, plain Traditional Chinese (Taiwan and Hong Kong usage) for parents. Use 您. Standard Traditional Chinese medical terms (e.g. 鏈球菌, 黴菌, 免疫球蛋白). Use full-width Chinese punctuation.',
  },
  {
    code: 'ja', name: '日本語', english: 'Japanese', dir: 'ltr', translating: '翻訳中…',
    note: '自動翻訳です。英語の原文が正式な内容です。',
    choose: '言語を選んでください',
    style: 'Warm, polite Japanese (です・ます) for parents. Standard Japanese medical terms (e.g. 溶連菌, カビ, 免疫グロブリン). Use Japanese punctuation.',
  },
  {
    code: 'ar', name: 'العربية', english: 'Arabic', dir: 'rtl', translating: 'جارٍ الترجمة…',
    note: 'ترجمة آلية — النص الإنجليزي هو المرجع.',
    choose: 'اختر لغتك',
    style: 'Warm, clear Modern Standard Arabic that Palestinian and other Levantine families read easily; plain words over formal ones. Standard Arabic medical terms (e.g. "المكورات العقدية", "العفن", "الغلوبولين المناعي"). Use Western digits (0-9) as in the source. Mirror direction arrows: write → as ← and ← as →.',
  },
]

export const LANG_CODES = LANGS.map((l) => l.code)

export function isLang(v: unknown): v is Lang {
  return typeof v === 'string' && (LANG_CODES as string[]).includes(v)
}

export function langInfo(code: Lang): LangInfo {
  return LANGS.find((l) => l.code === code) || LANGS[0]
}

// First visit, nothing chosen yet: the first browser language we support.
// Taiwan, Hong Kong, Macau and zh-Hant browsers get Traditional Chinese; any
// other Chinese gets Simplified.
export function fromBrowser(list: readonly string[]): Lang {
  for (const raw of list) {
    const tag = raw.toLowerCase()
    const base = tag.split('-')[0]
    if (base === 'en') return 'en'
    if (base === 'zh') return /-(hant|tw|hk|mo)\b/.test(tag) ? 'zh-Hant' : 'zh-Hans'
    if (isLang(base)) return base
  }
  return 'en'
}

// Show the first-visit chooser when nothing is chosen yet and the visitor is
// likely not a US English reader: a non-English browser language, a browser
// region other than the US, or a time zone outside the US.
export function shouldOfferChooser(list: readonly string[], timeZone: string): boolean {
  const tags = list.map((t) => t.toLowerCase())
  if (tags.some((t) => t.split('-')[0] !== 'en')) return true
  if (tags.some((t) => /^en-(?!us\b)[a-z]{2}\b/.test(t))) return true
  const usZone = /^America\/(New_York|Detroit|Chicago|Denver|Phoenix|Boise|Los_Angeles|Anchorage|Juneau|Sitka|Nome|Yakutat|Metlakatla|Adak|Menominee|Indiana\/|Kentucky\/|North_Dakota\/|Louisville|Indianapolis)|^Pacific\/Honolulu$|^US\//
  return !!timeZone && !usZone.test(timeZone)
}

// Latin-script runs (test names, codes, numbers, "Plan B for PANS", "Minta")
// inside right-to-left text are wrapped in Unicode isolates (the text-only
// equivalent of <bdi dir="ltr">) so they keep their left-to-right order.
export function isolateLtrRuns(s: string): string {
  return s.replace(/[A-Za-z0-9][A-Za-z0-9 .,:/+#&'%@_=?-]*[A-Za-z0-9%]|[A-Za-z0-9]/g, (m) => `\u2066${m}\u2069`)
}
