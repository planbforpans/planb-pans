import type { ComponentType } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { langInfo } from '@/lib/languages'
import { localeFromSlug } from '@/lib/locales'
import { DictProvider } from '@/lib/i18n/T'
import { enableServerLocale, localizedMetadata, pageDict } from '@/lib/i18n/dicts'
import { SiteFooter, SiteHeader } from '../_components/SiteChrome'

// One translated page: /{locale}{path} renders the English page's own component
// with every phrase swapped for the language's version on the server (see
// lib/i18n/adapt.ts), inside the site header and footer in the same language.

type Params = { params: Promise<{ locale: string }> }

const ARABIC_FONT = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap'

export function localized(path: string, EnglishPage: ComponentType, en: Metadata) {
  async function Page({ params }: Params) {
    const locale = localeFromSlug((await params).locale)
    if (!locale) notFound()
    enableServerLocale(locale)
    const info = langInfo(locale)
    const english = path
    return (
      <DictProvider lang={locale} dict={pageDict(locale, path)}>
        {locale === 'ar' && <link rel="stylesheet" href={ARABIC_FONT} {...({ precedence: 'default' } as object)} />}
        <SiteHeader />
        <EnglishPage />
        <p className="pb-mt-note" lang={locale} dir={info.dir} data-no-translate>
          {info.note}{' '}
          <a href={english} hrefLang="en" lang="en" dir="ltr" translate="no">English</a>
        </p>
        <SiteFooter />
      </DictProvider>
    )
  }
  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const locale = localeFromSlug((await params).locale)
    if (!locale) return {}
    return localizedMetadata(locale, path, en)
  }
  return { Page, generateMetadata }
}
