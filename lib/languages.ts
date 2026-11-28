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
  // "Choose your language", in this language (the language chooser).
  choose: string
  // The banner shown after switching to the browser's language on its own:
  // "Viewing in {lang}" and the link that opens the chooser.
  viewing: string
  switchLang: string
  // How the translator and Minta should write for this audience.
  style: string
}

export const LANGS: LangInfo[] = [
  { code: 'en', name: 'English', english: 'English', dir: 'ltr', translating: 'Translating…', note: '', choose: 'Choose your language', viewing: 'Viewing in {lang}', switchLang: 'Switch language', style: '' },
  {
    code: 'es', name: 'Español', english: 'Spanish', dir: 'ltr', translating: 'Traduciendo…',
    note: 'Traducido automáticamente — el inglés es la referencia.',
    choose: 'Elija su idioma',
    viewing: 'Viendo en {lang}', switchLang: 'Cambiar idioma',
    style: 'Warm, plain, everyday Spanish for US and Latin American parents. Use "usted". Standard Spanish medical terms (e.g. "estreptococo", "moho", "inmunoglobulina").',
  },
  {
    code: 'fr', name: 'Français', english: 'French', dir: 'ltr', translating: 'Traduction…',
    note: 'Traduit automatiquement — la version anglaise fait foi.',
    choose: 'Choisissez votre langue',
    viewing: 'Affichage en {lang}', switchLang: 'Changer de langue',
    style: 'Warm, plain French for parents. Use "vous". Standard French medical terms (e.g. "streptocoque", "moisissures", "immunoglobulines"). Use French typographic spacing before : ; ? !.',
  },
  {
    code: 'de', name: 'Deutsch', english: 'German', dir: 'ltr', translating: 'Wird übersetzt…',
    note: 'Automatisch übersetzt — maßgeblich ist die englische Fassung.',
    choose: 'Sprache wählen',
    viewing: 'Angezeigt auf {lang}', switchLang: 'Sprache wechseln',
    style: 'Warm, plain German for parents. Use "Sie". Standard German medical terms (e.g. "Streptokokken", "Schimmel", "Immunglobuline"). Prefer shorter words over very long compounds in buttons and headings.',
  },
  {
    code: 'pt', name: 'Português', english: 'Brazilian Portuguese', dir: 'ltr', translating: 'Traduzindo…',
    note: 'Traduzido automaticamente — o inglês é a referência.',
    choose: 'Escolha seu idioma',
    viewing: 'Exibindo em {lang}', switchLang: 'Mudar idioma',
    style: 'Warm, plain Brazilian Portuguese for parents. Use "você". Standard Brazilian medical terms (e.g. "estreptococo", "mofo", "imunoglobulina").',
  },
  {
    code: 'it', name: 'Italiano', english: 'Italian', dir: 'ltr', translating: 'Traduzione…',
    note: 'Tradotto automaticamente — fa fede la versione inglese.',
    choose: 'Scelga la lingua',
    viewing: 'Visualizzato in {lang}', switchLang: 'Cambia lingua',
    style: 'Warm, plain Italian for parents. Use the courteous "Lei". Standard Italian medical terms (e.g. "streptococco", "muffa", "immunoglobuline").',
  },
  {
    code: 'zh-Hans', name: '简体中文', english: 'Simplified Chinese', dir: 'ltr', translating: '正在翻译…',
    note: '自动翻译——以英文原文为准。',
    choose: '选择语言',
    viewing: '当前语言：{lang}', switchLang: '切换语言',
    style: 'Warm, plain Simplified Chinese (mainland usage) for parents. Use 您. Standard Chinese medical terms (e.g. 链球菌, 霉菌, 免疫球蛋白). Use full-width Chinese punctuation.',
  },
  {
    code: 'zh-Hant', name: '繁體中文', english: 'Traditional Chinese', dir: 'ltr', translating: '正在翻譯…',
    note: '自動翻譯——以英文原文為準。',
    choose: '選擇語言',
    viewing: '目前語言：{lang}', switchLang: '切換語言',
    style: 'Warm, plain Traditional Chinese (Taiwan and Hong Kong usage) for parents. Use 您. Standard Traditional Chinese medical terms (e.g. 鏈球菌, 黴菌, 免疫球蛋白). Use full-width Chinese punctuation.',
  },
  {
    code: 'ja', name: '日本語', english: 'Japanese', dir: 'ltr', translating: '翻訳中…',
    note: '自動翻訳です。英語の原文が正式な内容です。',
    choose: '言語を選んでください',
    viewing: '{lang}で表示中', switchLang: '言語を切り替える',
    style: 'Warm, polite Japanese (です・ます) for parents. Standard Japanese medical terms (e.g. 溶連菌, カビ, 免疫グロブリン). Use Japanese punctuation.',
  },
  {
    code: 'ar', name: 'العربية', english: 'Arabic', dir: 'rtl', translating: 'جارٍ الترجمة…',
    note: 'ترجمة آلية — النص الإنجليزي هو المرجع.',
    choose: 'اختر لغتك',
    viewing: 'العرض باللغة {lang}', switchLang: 'تغيير اللغة',
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

// Nothing chosen yet: the first browser language we support.
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

// Automatic switching (Rachel, 2026-11-27: "Wherever browser people are in
// should automatically switch language"). With no saved choice, a browser whose
// first supported language is not English gets that language straight away,
// with a small banner to switch. A saved choice always wins over the browser.

// An Accept-Language header as an ordered list of tags, highest q first.
export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (!header) return []
  return header
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
      const w = q ? Number(q.slice(2)) : 1
      return { tag: tag.trim(), w: Number.isFinite(w) ? w : 0, i }
    })
    .filter((x) => x.tag && x.tag !== '*' && x.w > 0)
    .sort((a, b) => b.w - a.w || a.i - b.i)
    .map((x) => x.tag)
}

// Crawlers, ad checkers and link-preview fetchers (Googlebot, Bingbot,
// AdsBot-Google, facebookexternalhit, Slackbot, WhatsApp...) always get the
// address they asked for, in that address's language: no redirect and no
// automatic translation, so hreflang and canonicals stay what they say.
const BOT_UA = /bot\b|bot\/|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|facebot|meta-externalagent|whatsapp|skypeuripreview|pinterest|embedly|quora|vkshare|applebot|petalbot|semrush|ahrefs|mj12|lighthouse|pagespeed|headless|preview|validator|curl\/|wget|python-requests|node-fetch|axios|go-http-client|vercel-|uptime|monitor/i

export function isBot(ua: string | null | undefined): boolean {
  return !ua || BOT_UA.test(ua)
}

// The language to switch to on its own, or null to stay in English.
export function autoLang(list: readonly string[], ua: string | null | undefined): Exclude<Lang, 'en'> | null {
  if (isBot(ua)) return null
  const l = fromBrowser(list)
  return l === 'en' ? null : l
}

// Which language a page shows. In order: the address's language (/es/...), a
// ?lang= link, the saved choice, then the browser's language on its own
// (auto: true, nothing saved). `save` is the choice to remember, if any.
export function resolveLang(o: {
  urlLocale?: Lang | null
  query?: string | null
  stored: Lang | null
  browser: readonly string[]
  ua: string | null | undefined
  stayEnglish?: boolean
}): { lang: Lang; auto: boolean; save: Lang | null } {
  const auto = o.stored || o.stayEnglish ? null : autoLang(o.browser, o.ua)
  if (o.urlLocale) {
    if (o.urlLocale === auto) return { lang: o.urlLocale, auto: true, save: null }
    return { lang: o.urlLocale, auto: false, save: o.stored === o.urlLocale ? null : o.urlLocale }
  }
  if (isLang(o.query)) return { lang: o.query, auto: false, save: o.query }
  if (o.stored) return { lang: o.stored, auto: false, save: null }
  if (auto) return { lang: auto, auto: true, save: null }
  return { lang: 'en', auto: false, save: null }
}

// "Viewing in Español" in that language.
export function viewingIn(code: Lang): string {
  const l = langInfo(code)
  return l.viewing.replace('{lang}', l.name)
}

// Latin-script runs (test names, codes, numbers, "Plan B for PANS", "Minta")
// inside right-to-left text are wrapped in Unicode isolates (the text-only
// equivalent of <bdi dir="ltr">) so they keep their left-to-right order.
export function isolateLtrRuns(s: string): string {
  return s.replace(/[A-Za-z0-9][A-Za-z0-9 .,:/+#&'%@_=?-]*[A-Za-z0-9%]|[A-Za-z0-9]/g, (m) => `\u2066${m}\u2069`)
}
