import React from 'react'
import { useRef, useState } from 'react'

import { BiMicrophone, BiMicrophoneOff } from 'react-icons/bi'
import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs'
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md'
import { Box } from 'src/common/design/ui/Box'
import { IconButton } from 'src/common/design/ui/IconButton'

type User = {
  id?: string
  name?: string
  cameraActive?: boolean
  microphoneActive?: boolean
  deviceId?: string
}

export const Camera = ({
  cameraActive,
  microphoneActive,
  deviceId,
  id,
  name,
}: User) => {
  const [videoOpen, setVideoOpen] = useState(false)
  const [microphoneOpen, setmicrophoneOpen] = useState(false)
  const [screenOpen, setScreenOpen] = useState(false)

  const localVideoref =
    useRef<HTMLVideoElement>() as React.MutableRefObject<HTMLVideoElement>

  const videoConfig = {
    audio: false,
    peerIdentity: 'camera',
    preferCurrentTab: true,
    video: {
      width: 320,
      height: 320,
      frameRate: {
        ideal: 60,
      },
    },
  } as MediaStreamConstraints

  const getPermissionsToAccessCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(
      videoConfig,
    )
    return stream
  }

  const openCamera = async () => {
    await getPermissionsToAccessCamera().then((stream) => {
      if (stream) {
        localVideoref.current.srcObject = stream as MediaStream
        setVideoOpen(true)
      }
      return stream
    })
  }

  const closeCamera = () => {
    localVideoref.current.srcObject = null
    setVideoOpen(false)
  }

  const shareScreen = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    })

    if (stream) {
      localVideoref.current.srcObject = stream as MediaStream
      setScreenOpen(true)
    }
    return stream
  }

  const stopScreenShare = () => {
    localVideoref.current.srcObject = null
    setScreenOpen(false)
  }

  return (
    <Box>
      <p>{name}</p>
      <Box h={320} w={320} bg="blackAlpha.400">
        <video id="my-video" ref={localVideoref} autoPlay></video>
      </Box>
      <IconButton
        icon={videoOpen ? <BsCameraVideo /> : <BsCameraVideoOff />}
        aria-label="video"
        onClick={videoOpen ? closeCamera : openCamera}
      />
      <IconButton
        icon={microphoneOpen ? <BiMicrophone /> : <BiMicrophoneOff />}
        aria-label="microphone"
        onClick={microphoneOpen ? closeCamera : closeCamera}
      />
      <IconButton
        icon={screenOpen ? <MdScreenShare /> : <MdStopScreenShare />}
        aria-label="screenShare"
        onClick={screenOpen ? stopScreenShare : shareScreen}
      />
    </Box>
  )
}
