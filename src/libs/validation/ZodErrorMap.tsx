import { memo, ReactElement } from 'react'
import { useLocale } from '@src/hooks/useLocale'
import { z } from 'zod'
import { zodCustomErrorMap } from '@src/libs/validation/zodCustomErrorMap'

type ZodErrorMapProps = Required<{
  children: ReactElement
}>

/**
 * @see https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md#global-error-map
 * @see https://github.com/colinhacks/zod/blob/cbbfedd15ffbe7d880f52d6becb76dcaef54875f/src/ZodError.ts#L284
 */
export const ZodErrorMap = memo(({ children }: ZodErrorMapProps) => {
  const { locale } = useLocale()
  z.setErrorMap(zodCustomErrorMap(locale))

  return <>{children}</>
})

ZodErrorMap.displayName = 'ZodErrorMap'
