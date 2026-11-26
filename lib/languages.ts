// The languages a family can pick. Mirror of src/lib/languages.ts in planb-app
// (app.planbforpans.com), whose /api/translate serves this site too; keep the
// two lists the same.
//
// Rachel, 2026-11-26: Plan B for PANS worldwide. Spanish shipped first
// (2026-11-21); phase 1 adds French, German, Brazilian Portuguese, Italian,
// Simplified Chinese and Japanese, plus Arabic (right-to-left) for Palestinian
// families. Hebrew can join later by adding a row with dir: 'rtl'.
//
// English is the source and the reference. Every other language is machine
// translated (Claude) with hand-checked overrides that always win
// (planb-app src/lib/translation-overrides.ts).

export type Lang = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'zh-Hans' | 'ja' | 'ar'

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
  // How the translator and Minta should write for this audience.
  style: string
}

export const LANGS: LangInfo[] = [
  { code: 'en', name: 'English', english: 'English', dir: 'ltr', translating: 'Translating…', note: '', style: '' },
  {
    code: 'es', name: 'Español', english: 'Spanish', dir: 'ltr', translating: 'Traduciendo…',
    note: 'Traducido automáticamente — el inglés es la referencia.',
    style: 'Warm, plain, everyday Spanish for US and Latin American parents. Use "usted". Standard Spanish medical terms (e.g. "estreptococo", "moho", "inmunoglobulina").',
  },
  {
    code: 'fr', name: 'Français', english: 'French', dir: 'ltr', translating: 'Traduction…',
    note: 'Traduit automatiquement — la version anglaise fait foi.',
    style: 'Warm, plain French for parents. Use "vous". Standard French medical terms (e.g. "streptocoque", "moisissures", "immunoglobulines"). Use French typographic spacing before : ; ? !.',
  },
  {
    code: 'de', name: 'Deutsch', english: 'German', dir: 'ltr', translating: 'Wird übersetzt…',
    note: 'Automatisch übersetzt — maßgeblich ist die englische Fassung.',
    style: 'Warm, plain German for parents. Use "Sie". Standard German medical terms (e.g. "Streptokokken", "Schimmel", "Immunglobuline"). Prefer shorter words over very long compounds in buttons and headings.',
  },
  {
    code: 'pt', name: 'Português', english: 'Brazilian Portuguese', dir: 'ltr', translating: 'Traduzindo…',
    note: 'Traduzido automaticamente — o inglês é a referência.',
    style: 'Warm, plain Brazilian Portuguese for parents. Use "você". Standard Brazilian medical terms (e.g. "estreptococo", "mofo", "imunoglobulina").',
  },
  {
    code: 'it', name: 'Italiano', english: 'Italian', dir: 'ltr', translating: 'Traduzione…',
    note: 'Tradotto automaticamente — fa fede la versione inglese.',
    style: 'Warm, plain Italian for parents. Use the courteous "Lei". Standard Italian medical terms (e.g. "streptococco", "muffa", "immunoglobuline").',
  },
  {
    code: 'zh-Hans', name: '中文', english: 'Simplified Chinese', dir: 'ltr', translating: '正在翻译…',
    note: '自动翻译——以英文原文为准。',
    style: 'Warm, plain Simplified Chinese (mainland usage) for parents. Use 您. Standard Chinese medical terms (e.g. 链球菌, 霉菌, 免疫球蛋白). Use full-width Chinese punctuation.',
  },
  {
    code: 'ja', name: '日本語', english: 'Japanese', dir: 'ltr', translating: '翻訳中…',
    note: '自動翻訳です。英語の原文が正式な内容です。',
    style: 'Warm, polite Japanese (です・ます) for parents. Standard Japanese medical terms (e.g. 溶連菌, カビ, 免疫グロブリン). Use Japanese punctuation.',
  },
  {
    code: 'ar', name: 'العربية', english: 'Arabic', dir: 'rtl', translating: 'جارٍ الترجمة…',
    note: 'ترجمة آلية — النص الإنجليزي هو المرجع.',
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
// Any Chinese (zh, zh-CN, zh-TW, zh-Hant...) maps to Simplified, the only
// Chinese we offer for now.
export function fromBrowser(list: readonly string[]): Lang {
  for (const raw of list) {
    const tag = raw.toLowerCase()
    const base = tag.split('-')[0]
    if (base === 'en') return 'en'
    if (base === 'zh') return 'zh-Hans'
    if (isLang(base)) return base
  }
  return 'en'
}

// Latin-script runs (test names, codes, numbers, "Plan B for PANS", "Minta")
// inside right-to-left text are wrapped in Unicode isolates (the text-only
// equivalent of <bdi dir="ltr">) so they keep their left-to-right order.
export function isolateLtrRuns(s: string): string {
  return s.replace(/[A-Za-z0-9][A-Za-z0-9 .,:/+#&'%@_=?-]*[A-Za-z0-9%]|[A-Za-z0-9]/g, (m) => `\u2066${m}\u2069`)
}
