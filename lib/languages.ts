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

// Rachel, 2026-11-26: "Let families request languages that go directly to me."
// The last line of the chooser opens a tiny form; it posts to the app's
// /api/language-requests (app.planbforpans.com), which emails Rachel and logs
// the request (app /admin/languages counts them). Same words as the app. The chooser itself is never machine
// translated, so its words are here in every language.
export type RequestCopy = {
  ask: string
  title: string
  language: string
  email: string
  country: string
  note: string
  send: string
  sending: string
  thanks: string
  error: string
  back: string
}

export const REQUEST_COPY: Record<Lang, RequestCopy> = {
  en: { ask: 'Don’t see your language? Ask for it \u2192', title: 'Ask for a language', language: 'Your language', email: 'Email (optional)', country: 'Country (optional)', note: 'Anything else? (optional)', send: 'Send to Rachel', sending: 'Sending…', thanks: 'Thank you — Rachel reads every request.', error: 'That didn’t go through. Please try again.', back: '\u2190 Back' },
  es: { ask: '\u00bfNo ve su idioma? P\u00eddalo \u2192', title: 'Pedir un idioma', language: 'Su idioma', email: 'Correo electr\u00f3nico (opcional)', country: 'Pa\u00eds (opcional)', note: '\u00bfAlgo m\u00e1s? (opcional)', send: 'Enviar a Rachel', sending: 'Enviando…', thanks: 'Gracias — Rachel lee cada solicitud.', error: 'No se pudo enviar. Int\u00e9ntelo de nuevo.', back: '\u2190 Volver' },
  fr: { ask: 'Votre langue n’y est pas ? Demandez-la \u2192', title: 'Demander une langue', language: 'Votre langue', email: 'E-mail (facultatif)', country: 'Pays (facultatif)', note: 'Autre chose ? (facultatif)', send: 'Envoyer \u00e0 Rachel', sending: 'Envoi…', thanks: 'Merci — Rachel lit chaque demande.', error: 'L’envoi a \u00e9chou\u00e9. Veuillez r\u00e9essayer.', back: '\u2190 Retour' },
  de: { ask: 'Ihre Sprache fehlt? Fragen Sie danach \u2192', title: 'Sprache anfragen', language: 'Ihre Sprache', email: 'E-Mail (optional)', country: 'Land (optional)', note: 'Sonst noch etwas? (optional)', send: 'An Rachel senden', sending: 'Wird gesendet…', thanks: 'Danke — Rachel liest jede Anfrage.', error: 'Das hat nicht geklappt. Bitte erneut versuchen.', back: '\u2190 Zur\u00fcck' },
  pt: { ask: 'N\u00e3o encontrou seu idioma? Pe\u00e7a \u2192', title: 'Pedir um idioma', language: 'Seu idioma', email: 'E-mail (opcional)', country: 'Pa\u00eds (opcional)', note: 'Mais alguma coisa? (opcional)', send: 'Enviar para Rachel', sending: 'Enviando…', thanks: 'Obrigada — Rachel l\u00ea cada pedido.', error: 'N\u00e3o foi poss\u00edvel enviar. Tente de novo.', back: '\u2190 Voltar' },
  it: { ask: 'Non trova la sua lingua? La richieda \u2192', title: 'Richiedere una lingua', language: 'La sua lingua', email: 'E-mail (facoltativa)', country: 'Paese (facoltativo)', note: 'Altro? (facoltativo)', send: 'Invia a Rachel', sending: 'Invio…', thanks: 'Grazie — Rachel legge ogni richiesta.', error: 'Invio non riuscito. Riprovi.', back: '\u2190 Indietro' },
  'zh-Hans': { ask: '\u6ca1\u6709\u60a8\u7684\u8bed\u8a00\uff1f\u544a\u8bc9\u6211\u4eec \u2192', title: '\u7533\u8bf7\u4e00\u79cd\u8bed\u8a00', language: '\u60a8\u7684\u8bed\u8a00', email: '\u7535\u5b50\u90ae\u4ef6\uff08\u9009\u586b\uff09', country: '\u56fd\u5bb6\uff08\u9009\u586b\uff09', note: '\u8fd8\u6709\u5176\u4ed6\u8bdd\u5417\uff1f\uff08\u9009\u586b\uff09', send: '\u53d1\u9001\u7ed9 Rachel', sending: '\u6b63\u5728\u53d1\u9001…', thanks: '\u8c22\u8c22——Rachel \u4f1a\u9605\u8bfb\u6bcf\u4e00\u6761\u8bf7\u6c42\u3002', error: '\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002', back: '\u2190 \u8fd4\u56de' },
  'zh-Hant': { ask: '\u6c92\u6709\u60a8\u7684\u8a9e\u8a00\uff1f\u544a\u8a34\u6211\u5011 \u2192', title: '\u7533\u8acb\u4e00\u7a2e\u8a9e\u8a00', language: '\u60a8\u7684\u8a9e\u8a00', email: '\u96fb\u5b50\u90f5\u4ef6\uff08\u9078\u586b\uff09', country: '\u570b\u5bb6\uff08\u9078\u586b\uff09', note: '\u9084\u6709\u5176\u4ed6\u8a71\u55ce\uff1f\uff08\u9078\u586b\uff09', send: '\u50b3\u9001\u7d66 Rachel', sending: '\u6b63\u5728\u50b3\u9001…', thanks: '\u8b1d\u8b1d——Rachel \u6703\u95b1\u8b80\u6bcf\u4e00\u5247\u8acb\u6c42\u3002', error: '\u50b3\u9001\u5931\u6557\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002', back: '\u2190 \u8fd4\u56de' },
  ja: { ask: '\u3054\u5e0c\u671b\u306e\u8a00\u8a9e\u304c\u3042\u308a\u307e\u305b\u3093\u304b\uff1f\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b \u2192', title: '\u8a00\u8a9e\u3092\u30ea\u30af\u30a8\u30b9\u30c8', language: '\u3054\u5e0c\u671b\u306e\u8a00\u8a9e', email: '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff08\u4efb\u610f\uff09', country: '\u56fd\uff08\u4efb\u610f\uff09', note: '\u305d\u306e\u307b\u304b\uff08\u4efb\u610f\uff09', send: 'Rachel \u306b\u9001\u308b', sending: '\u9001\u4fe1\u4e2d…', thanks: '\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002Rachel \u304c\u3059\u3079\u3066\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8aad\u307f\u307e\u3059\u3002', error: '\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002', back: '\u2190 \u623b\u308b' },
  ar: { ask: '\u0644\u0627 \u062a\u062c\u062f \u0644\u063a\u062a\u0643\u061f \u0627\u0637\u0644\u0628\u0647\u0627 \u2190', title: '\u0627\u0637\u0644\u0628 \u0644\u063a\u0629', language: '\u0644\u063a\u062a\u0643', email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)', country: '\u0627\u0644\u0628\u0644\u062f (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)', note: '\u0647\u0644 \u0645\u0646 \u0634\u064a\u0621 \u0622\u062e\u0631\u061f (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)', send: '\u0623\u0631\u0633\u0644 \u0625\u0644\u0649 Rachel', sending: '\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644…', thanks: '\u0634\u0643\u0631\u064b\u0627 \u0644\u0643 — Rachel \u062a\u0642\u0631\u0623 \u0643\u0644 \u0637\u0644\u0628.', error: '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644. \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.', back: '\u2192 \u0631\u062c\u0648\u0639' },
}

// Rachel, 2026-11-26: "Let people know I speak English for the Case Reviews.
// But I'm sure we can use an app to translate on the fly." Wherever the Case
// Review is offered and the family's language isn't English, this note shows
// (app/_components/CaseReviewLanguageNote.tsx). Same constant as the app
// (planb-app src/lib/languages.ts); change both once Rachel confirms the tool.
export const CASE_REVIEW_TRANSLATION_TOOL = 'Google Meet translated captions'

export function caseReviewLanguageNote(tool: string = CASE_REVIEW_TRANSLATION_TOOL): string {
  return `Rachel speaks English. Your Case Review call can use live translated captions (${tool}) — you’ll see her words in your language as she speaks, and you can speak yours.`
}
