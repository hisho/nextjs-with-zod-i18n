import type { NextPage } from 'next'
import { Button, chakra, Container, Grid, Heading } from '@chakra-ui/react'
import { FormControl } from '@src/components/ui/FormControl/FormControl'
import { Input } from '@src/components/ui/Input/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import NextLink from 'next/link'
import { useLocale } from '@src/hooks/useLocale'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

const sleep = (ms: number = 1000) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })

const Home: NextPage = () => {
  const { control, handleSubmit, formState } = useForm<z.infer<typeof schema>>({
    mode: 'all',
    resolver: zodResolver(schema),
  })
  const { isJapanese } = useLocale()
  const [isLoading, setLoading] = useState(false)

  const onSubmit = handleSubmit(async ({ name, email }) => {
    setLoading(true)
    try {
      await sleep()
      console.table({ name, email })
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      }
    } finally {
      setLoading(false)
    }
  })

  return (
    <Container>
      <Heading textAlign={'center'}>next js with zod</Heading>
      <Grid mt={5} gap={2} gridTemplateColumns={'repeat(2,1fr)'}>
        <NextLink href={'/'} locale={'ja'} passHref>
          <Button as={'a'}>ja</Button>
        </NextLink>
        <NextLink href={'/'} locale={'en'} passHref>
          <Button as={'a'}>en</Button>
        </NextLink>
      </Grid>
      <chakra.form
        mt={12}
        px={4}
        pt={8}
        pb={6}
        borderWidth={1}
        maxW={600}
        mx={'auto'}
        display={'flex'}
        flexDirection={'column'}
        onSubmit={onSubmit}
      >
        <Grid gap={6}>
          <FormControl
            formLabel={isJapanese ? '名前' : 'name'}
            // isRequired
            errorMessage={formState.errors.name?.message}
          >
            <Input
              control={control}
              name={'name'}
              placeholder={isJapanese ? '名前 太郎' : 'Name Taro'}
            />
          </FormControl>
          <FormControl
            formLabel={isJapanese ? 'メールアドレス' : 'email'}
            // isRequired
            errorMessage={formState.errors.email?.message}
          >
            <Input
              control={control}
              name={'email'}
              type={'email'}
              placeholder={'mail@example.com'}
            />
          </FormControl>
        </Grid>
        <Button mt={6} type={'submit'} mx={'auto'} isLoading={isLoading}>
          {isJapanese ? 'アカウントの作成' : 'create account'}
        </Button>
      </chakra.form>
    </Container>
  )
}

export default Home
