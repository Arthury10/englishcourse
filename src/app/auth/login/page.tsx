'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { Box } from 'src/common/design/ui/Box'
import { Button } from 'src/common/design/ui/Button'
import { InputGroup } from 'src/common/design/ui/InputGroup'
import { Link } from 'src/common/design/ui/Link'
import { Paper } from 'src/common/design/ui/Paper'
import { Text } from 'src/common/design/ui/Text'
import { InputController } from 'src/components/InputController'
import { useUserAuthContext } from 'src/features/auth/context/UserContext'

export default function Page() {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const { authenticate, isLoading } = useUserAuthContext()

  const handleLogin = form.handleSubmit(async (data) => {
    console.log(data)
    await authenticate(data)
  })

  return (
    <Box
      bg={'primary.main'}
      flex={1}
      h={'100vh'}
      alignItems="center"
      justifyContent="center"
      display={'flex'}
    >
      <Paper p={12}>
        <FormProvider {...form}>
          <InputGroup display={'flex'} flexDir={'column'} gap={8}>
            <InputController name="username" label="Email:" />
            <InputController name="password" label="Password:" />
            <Button
              isLoading={isLoading}
              variant={'primary'}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Link href={'/auth/cadaster'}>
              <Text>Ainda não tem cadastro?</Text>
            </Link>
          </InputGroup>
        </FormProvider>
      </Paper>
    </Box>
  )
}
