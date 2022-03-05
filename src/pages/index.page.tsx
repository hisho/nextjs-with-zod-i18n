import type { NextPage } from 'next'
import { Button, chakra, Container, Grid, Heading } from '@chakra-ui/react'
import { FormControl } from '@src/components/ui/FormControl/FormControl'
import { Input } from '@src/components/ui/Input/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
})

const Home: NextPage = () => {
  const { control, handleSubmit, formState } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit(async ({ name, email }) => {
    try {
      console.log({ name })
      console.log({ email })
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  })

  return (
    <Container>
      <Heading textAlign={'center'}>next js with zod</Heading>
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
            formLabel={'名前'}
            // isRequired
            errorMessage={formState.errors.name?.message}
          >
            <Input control={control} name={'name'} placeholder={'名前 太郎'} />
          </FormControl>
          <FormControl
            formLabel={'メールアドレス'}
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
        <Button mt={6} type={'submit'} mx={'auto'}>
          アカウントの作成
        </Button>
      </chakra.form>
    </Container>
  )
}

export default Home
