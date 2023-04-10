'use client'

import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { Box } from 'src/common/design/ui/Box'
import { Button } from 'src/common/design/ui/Button'
import { InputGroup } from 'src/common/design/ui/InputGroup'
import { Paper } from 'src/common/design/ui/Paper'
import { InputController } from 'src/components/InputController'
import { useCreateClassroomMutation } from 'src/features/classroom/graphql/query.generated'

export default function Page() {
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      classroom: '',
    },
  })

  const [createClassroom] = useCreateClassroomMutation()

  const handleCreateClassroom = form.handleSubmit(async (data) => {
    console.log(data)
    await createClassroom({
      variables: {
        data: {
          name: data.classroom,
          invite: window.location.href + `/${data.classroom}`,
        },
      },
    })
      .then(({ data: { createClassroom } }) => {
        //mandar o id da sala pela url
        router.push(`private/${data.classroom}`)
      })
      .catch((err) => {
        console.log(err)
      })
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
            <InputController
              name="classroom"
              label="Classroom name:"
            />
            <Button
              variant={'primary'}
              onClick={handleCreateClassroom}
            >
              Create Classroom
            </Button>
          </InputGroup>
        </FormProvider>
      </Paper>
    </Box>
  )
}
