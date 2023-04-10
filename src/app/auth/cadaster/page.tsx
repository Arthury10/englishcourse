'use client'

import { useToast } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Box } from 'src/common/design/ui/Box'
import { Button } from 'src/common/design/ui/Button'
import { InputGroup } from 'src/common/design/ui/InputGroup'
import { Link } from 'src/common/design/ui/Link'
import { Paper } from 'src/common/design/ui/Paper'
import { Text } from 'src/common/design/ui/Text'
import { handleGraphQLError } from 'src/common/errors'
import { InputController } from 'src/components/InputController'
import { useCreateOneUserMutation } from 'src/features/user/graphql/mutation.generated'

export default function Page() {
  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
    },
  })

  const toast = useToast()

  const [createUser, { loading }] = useCreateOneUserMutation()

  const handleCreateUser = form.handleSubmit(async (data) => {
    try {
      const response = await createUser({
        variables: {
          email: data.username,
          name: data.name,
          password: data.password,
        },
      })
      toast({
        title: 'Sucesso!',
        description: 'Cadastro realizado com sucesso!',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      console.log(response)
    } catch (error) {
      const message = handleGraphQLError(error)
      toast({
        title: 'Ocorreu um erro!',
        description: message,
        status: 'error',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      console.log(error)
    }
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
            <InputController name="name" label="Name:" />
            <InputController name="username" label="Email:" />
            <InputController name="password" label="Password:" />
            <Button
              isLoading={loading}
              variant={'primary'}
              onClick={handleCreateUser}
            >
              Cadaster
            </Button>
            <Link href={'/auth/login'}>
              <Text>Já tem cadastro?</Text>
            </Link>
          </InputGroup>
        </FormProvider>
      </Paper>
    </Box>
  )
}
