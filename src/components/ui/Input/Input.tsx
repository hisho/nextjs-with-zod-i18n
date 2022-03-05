import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type InputProps<T extends FieldValues> = Omit<ChakraInputProps, 'name'> &
  Omit<UseControllerProps<T>, 'control' | 'name'> &
  Required<Pick<UseControllerProps<T>, 'control' | 'name'>>

/**
 * react-hook-formに依存したInput component
 * @see https://zenn.dev/manalink/articles/manalink-react-hook-form-v7#%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF%E5%B1%A4
 */
export const Input = <T extends FieldValues>({
  control,
  name,
  ...props
}: InputProps<T>) => {
  const { field } = useController<T>({ control, name })
  return <ChakraInput {...props} {...field} />
}
