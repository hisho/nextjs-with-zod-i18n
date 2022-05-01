import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useLocale } from '@src/hooks/useLocale'
import { zodCustomErrorMap } from '@src/libs/validation/zodCustomErrorMap'
import { z } from 'zod'

/**
 * @see https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md#global-error-map
 * @see https://github.com/colinhacks/zod/blob/cbbfedd15ffbe7d880f52d6becb76dcaef54875f/src/ZodError.ts#L284
 */
function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useLocale()
  z.setErrorMap(zodCustomErrorMap(locale))

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
