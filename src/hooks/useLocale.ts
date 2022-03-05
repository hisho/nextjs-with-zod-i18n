import { NextRouter, useRouter } from 'next/router'

const localeMap = (locale: NextRouter['locale']) => {
  switch (locale) {
    case 'ja':
      return 'ja'
    case 'en':
      return 'en'
    default:
      return 'ja'
  }
}

/**
 * @see https://zenn.dev/steelydylan/articles/nextjs-with-i18n
 */
export const useLocale = (): {
  isEnglish: boolean
  isJapanese: boolean
  locale: ReturnType<typeof localeMap>
} => {
  const { locale: _locale } = useRouter()

  const locale = localeMap(_locale)
  const isJapanese = locale === 'ja'
  const isEnglish = locale === 'en'
  return {
    isEnglish,
    isJapanese,
    locale,
  }
}

export type UseLocaleResult = ReturnType<typeof useLocale>
