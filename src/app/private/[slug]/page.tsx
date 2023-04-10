'use client'

import { useEffect, useState } from 'react'

import { io } from 'socket.io-client'
import { Camera } from 'src/common/hooks/useCamera'
import { useGetClassroomByPkLazyQuery } from 'src/features/classroom/graphql/query.generated'

// const socket = io('http://localhost:3139')
const socket = io('http://localhost:4000', { secure: true })

export default function Page() {
  const users: any[] = [
    {
      id: '1',
      name: 'Arthur',
      cameraActive: true,
      microphoneActive: true,
      deviceId: '1',
    },
  ]

  const [getClassroom, { called, data }] =
    useGetClassroomByPkLazyQuery({
      variables: {
        id: '94689964-9b53-42b1-881c-f05d4d48f1bf',
      },
      onCompleted: (data) => {
        console.log('completou', data)
      },
    })

  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!called && !data) getClassroom()
  }, [called, data, getClassroom])

  return (
    <div>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <Camera
              cameraActive={user.cameraActive}
              deviceId={user.deviceId}
              id={user.id}
              microphoneActive={user.microphoneActive}
              name={user.name}
            />
          </div>
        )
      })}
      <h1>Classroom</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => ''}>Send</button>
      </div>
      <div>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button onClick={() => ''}>Play Video</button>
      </div>
      {/* <button onClick={joinRoom}>joinRoom</button>
      <button onClick={leaveRoom}>leaveRomm</button> */}
    </div>
  )
}

// 'use client'

// import { useEffect, useState } from 'react'

// import { FormProvider, useForm } from 'react-hook-form'
// import { io } from 'socket.io-client'
// import { Box } from 'src/common/design/ui/Box'
// import { Button } from 'src/common/design/ui/Button'
// import { Input } from 'src/common/design/ui/Input'
// import { InputGroup } from 'src/common/design/ui/InputGroup'
// import { Paper } from 'src/common/design/ui/Paper'
// import { InputController } from 'src/components/InputController'
// import * as uuid from 'uuid'

// const socket = io('http://localhost:4000')

// interface Message {
//   id: string
//   name: string
//   text: string
// }

// interface Payload {
//   name: string
//   text: string
// }

// export default function Page() {
//   const [title] = useState('Chat Web')
//   const [name, setName] = useState('')
//   const [text, setText] = useState('')
//   const [messages, setMessages] = useState<Message[]>([])

//   useEffect(() => {
//     function receivedMessage(message: Payload) {
//       const newMessage: Message = {
//         id: uuid.v4(),
//         name: message.name,
//         text: message.text,
//       }

//       setMessages([...messages, newMessage])
//     }

//     socket.on('msgToClient', (message: Payload) => {
//       receivedMessage(message)
//     })
//   }, [messages, name, text])

//   function validateInput() {
//     return name.length > 0 && text.length > 0
//   }

//   function sendMessage() {
//     if (validateInput()) {
//       const message: Payload = {
//         name,
//         text,
//       }

//       socket.emit('msgToServer', message)
//       setText('')
//     }
//   }

//   const form = useForm({
//     defaultValues: {
//       message: '',
//     },
//   })

//   return (
//     <Box
//       bg={'primary.main'}
//       flex={1}
//       h={'100vh'}
//       alignItems="center"
//       justifyContent="center"
//       display={'flex'}
//     >
//       <Box id="messages"></Box>
//       <Paper p={12}>
//         <FormProvider {...form}>
//           <Box>
//             <Box>{}</Box>
//             <Input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name..."
//             />
//             <ul>
//               {messages.map((message) => {
//                 if (message.name === name) {
//                   return (
//                     <Box key={message.id}>
//                       <span>
//                         {message.name}
//                         {' diz:'}
//                       </span>

//                       <p>{message.text}</p>
//                     </Box>
//                   )
//                 }

//                 return (
//                   <Box key={message.id}>
//                     <span>
//                       {message.name}
//                       {' diz:'}
//                     </span>

//                     <p>{message.text}</p>
//                   </Box>
//                 )
//               })}
//             </ul>
//             <Button onClick={sendMessage}>Send</Button>
//           </Box>
//           <InputGroup display={'flex'} flexDir={'column'} gap={8}>
//             <InputController name="message" label="Classroom name:" />
//             <Button variant={'primary'} onClick={sendMessage}>
//               Create Classroom
//             </Button>
//           </InputGroup>
//           <Input
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter message..."
//           />
//           <Button type="button" onClick={() => sendMessage()}>
//             Send
//           </Button>
//         </FormProvider>
//       </Paper>
//     </Box>
//   )
// }
