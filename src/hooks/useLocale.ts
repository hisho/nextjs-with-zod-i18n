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
export const useLocale = (): { locale: ReturnType<typeof localeMap> } => {
  const { locale: _locale } = useRouter()

  const locale = localeMap(_locale)
  return { locale }
}

export type UseLocaleResult = ReturnType<typeof useLocale>
