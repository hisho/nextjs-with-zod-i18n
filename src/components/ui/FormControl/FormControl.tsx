import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import type { FormControlProps as ChakraFormControlProps } from '@chakra-ui/react'
import { ReactChild, ReactElement } from 'react'

type FormControlProps = {
  children: ReactElement
  formLabel: ReactChild
  errorMessage?: string | null
} & Omit<ChakraFormControlProps, 'children' | 'isInvalid'>

const _isInvalid = (errorMessage?: FormControlProps['errorMessage']) => {
  switch (errorMessage) {
    case undefined:
      return false
    case null:
      return false
    case '':
      return false
    default:
      return true
  }
}

/**
 * chakraのFormControlのwrapper
 */
export const FormControl = ({
  formLabel,
  children,
  errorMessage,
  ...props
}: FormControlProps) => {
  const isInvalid = _isInvalid(errorMessage)
  return (
    <ChakraFormControl isInvalid={isInvalid} {...props}>
      <FormLabel fontWeight={'bold'}>{formLabel}</FormLabel>
      {children}
      {errorMessage && (
        <FormErrorMessage color={'red'}>{errorMessage}</FormErrorMessage>
      )}
    </ChakraFormControl>
  )
}
