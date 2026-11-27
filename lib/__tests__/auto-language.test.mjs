import test from 'node:test'
import assert from 'node:assert/strict'
import { NextRequest } from 'next/server'
import { config, middleware } from '../../middleware.ts'
import { autoLang, isBot, parseAcceptLanguage, resolveLang, viewingIn } from '../languages.ts'

// Automatic language (Rachel, 2026-11-27: "Wherever browser people are in
// should automatically switch language").

const PHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1'
const BOTS = {
  Googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Googlebot smartphone': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.69 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  Bingbot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'AdsBot-Google': 'AdsBot-Google (+http://www.google.com/adsbot.html)',
  'AdsBot-Google-Mobile': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Mobile Safari/537.36 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
  'Google-InspectionTool': 'Mozilla/5.0 (compatible; Google-InspectionTool/1.0;)',
  facebookexternalhit: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  Twitterbot: 'Twitterbot/1.0',
  LinkedInBot: 'LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)',
  Slackbot: 'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)',
  WhatsApp: 'WhatsApp/2.23.20.0',
  'no user agent': '',
}

function req(url, { lang = 'es-MX,es;q=0.9,en;q=0.8', ua = PHONE, cookie, method = 'GET' } = {}) {
  const u = new URL(url)
  const headers = { host: u.host, 'user-agent': ua }
  if (lang) headers['accept-language'] = lang
  if (cookie) headers.cookie = cookie
  return new NextRequest(url, { headers, method })
}

const to = (res) => res?.headers.get('location') || null
const moved = (res) => (to(res) ? new URL(to(res)) : null)

test('first visit in a Spanish browser goes straight to /es, 307, gclid and utm kept', () => {
  const res = middleware(req('https://planbforpans.com/?gclid=Cj0KCQ_abc-123&utm_source=google&utm_campaign=pans%20es'))
  assert.equal(res.status, 307)
  const u = moved(res)
  assert.equal(u.pathname, '/es')
  assert.equal(u.searchParams.get('gclid'), 'Cj0KCQ_abc-123')
  assert.equal(u.searchParams.get('utm_source'), 'google')
  assert.equal(u.searchParams.get('utm_campaign'), 'pans es')
  assert.match(res.headers.get('vary') || '', /Accept-Language/)
  assert.match(res.headers.get('cache-control') || '', /no-store/)
  // Nothing is saved: a new device follows its own browser.
  assert.equal(res.cookies.get('pb_lang'), undefined)
})

test('deep pages move too, keeping the path', () => {
  assert.equal(moved(middleware(req('https://planbforpans.com/for-ocd?utm_medium=cpc'))).href, 'https://planbforpans.com/es/for-ocd?utm_medium=cpc')
  assert.equal(moved(middleware(req('https://planbforpans.com/learning/behaviors-are-a-clue', { lang: 'fr-FR' }))).pathname, '/fr/learning/behaviors-are-a-clue')
})

test('Chinese: Taiwan, Hong Kong and Macau get Traditional; mainland gets Simplified', () => {
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'zh-TW,zh;q=0.9,en;q=0.8' }))).pathname, '/zh-hant')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'zh-HK' }))).pathname, '/zh-hant')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'zh-MO' }))).pathname, '/zh-hant')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'zh-Hant' }))).pathname, '/zh-hant')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'zh-CN,zh;q=0.9' }))).pathname, '/zh-hans')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'ar-PS,ar;q=0.9' }))).pathname, '/ar')
})

test('English, unsupported and missing browser languages stay put', () => {
  for (const lang of ['en-US,en;q=0.9', 'en-GB', 'en-US,es;q=0.9', 'ko-KR', '']) {
    assert.equal(to(middleware(req('https://planbforpans.com/', { lang }))), null, lang)
  }
  // q values decide, not order.
  assert.equal(moved(middleware(req('https://planbforpans.com/', { lang: 'en;q=0.5,de-DE' }))).pathname, '/de')
})

test('crawlers and preview bots always see the address they asked for', () => {
  for (const [name, ua] of Object.entries(BOTS)) {
    assert.equal(to(middleware(req('https://planbforpans.com/', { ua }))), null, name)
    assert.equal(to(middleware(req('https://planbforpans.com/for-autism?gclid=x', { ua }))), null, name)
    assert.equal(to(middleware(req('https://planbforocd.com/', { ua }))), null, name)
  }
})

test('a saved choice always wins over the browser', () => {
  assert.equal(to(middleware(req('https://planbforpans.com/', { cookie: 'pb_lang=en' }))), null)
  assert.equal(moved(middleware(req('https://planbforpans.com/?gclid=g1', { cookie: 'pb_lang=fr' }))).href, 'https://planbforpans.com/fr?gclid=g1')
  assert.equal(moved(middleware(req('https://planbforpans.com/', { cookie: 'pb_lang=zh-Hant', lang: 'en-US' }))).pathname, '/zh-hant')
  // ?lang= is an explicit choice: kept as before (308, saved).
  const res = middleware(req('https://planbforpans.com/?lang=en&utm_source=x'))
  assert.equal(res.status, 308)
  assert.equal(moved(res).href, 'https://planbforpans.com/?utm_source=x')
  assert.equal(res.cookies.get('pb_lang')?.value, 'en')
})

test('an address that is already a language is never moved', () => {
  assert.equal(to(middleware(req('https://planbforpans.com/es', { lang: 'en-US' }))), null)
  assert.equal(to(middleware(req('https://planbforpans.com/fr/for-ocd'))), null)
})

test('only page views move: not form posts, not pages without a translated version', () => {
  assert.equal(to(middleware(req('https://planbforpans.com/', { method: 'POST' }))), null)
  assert.equal(to(middleware(req('https://planbforpans.com/about'))), null)
  // The middleware never runs on API routes, admin, auth callbacks or webhooks.
  const m = config.matcher.join(' ')
  assert.doesNotMatch(m, /api|admin|auth|webhook|stripe|twilio/)
})

test('condition domains: the root moves to /{locale} on the same domain', () => {
  const ocd = moved(middleware(req('https://planbforocd.com/?utm_source=ads')))
  assert.equal(ocd.href, 'https://planbforocd.com/es?utm_source=ads')
  // ...which serves the Spanish OCD page.
  const page = middleware(req('https://planbforocd.com/es?utm_source=ads'))
  assert.equal(to(page), null)
  assert.equal(new URL(page.headers.get('x-middleware-rewrite')).pathname, '/es/for-ocd')
  assert.equal(moved(middleware(req('https://www.planbforautism.com/', { lang: 'zh-TW' }))).href, 'https://www.planbforautism.com/zh-hant')
  assert.equal(moved(middleware(req('https://planbforadhd.com/', { lang: 'pt-BR' }))).href, 'https://planbforadhd.com/pt')
  assert.equal(to(middleware(req('https://planbforarfid.com/', { lang: 'en-US' }))), null)
})

test('the page itself: browser language unless something was chosen', () => {
  assert.deepEqual(resolveLang({ stored: null, browser: ['es-MX'], ua: PHONE }), { lang: 'es', auto: true, save: null })
  assert.deepEqual(resolveLang({ urlLocale: 'es', stored: null, browser: ['es-MX'], ua: PHONE }), { lang: 'es', auto: true, save: null })
  assert.deepEqual(resolveLang({ stored: 'en', browser: ['es-MX'], ua: PHONE }), { lang: 'en', auto: false, save: null })
  assert.deepEqual(resolveLang({ stored: null, browser: ['es-MX'], ua: BOTS.Googlebot }), { lang: 'en', auto: false, save: null })
  assert.deepEqual(resolveLang({ stored: null, browser: ['es-MX'], ua: PHONE, stayEnglish: true }), { lang: 'en', auto: false, save: null })
  assert.ok(Object.values(BOTS).every(isBot))
  assert.equal(autoLang(parseAcceptLanguage('zh-TW,zh;q=0.9'), PHONE), 'zh-Hant')
  assert.equal(viewingIn('es'), 'Viendo en Español')
  assert.equal(viewingIn('ar'), 'العرض باللغة العربية')
})
