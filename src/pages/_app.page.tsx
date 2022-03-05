import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ZodErrorMap } from '@src/libs/validation/ZodErrorMap'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ZodErrorMap>
        <Component {...pageProps} />
      </ZodErrorMap>
    </ChakraProvider>
  )
}

export default MyApp
