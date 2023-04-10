import { useEffect, useRef, useState } from 'react'

export function useWebSocket(url) {
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState(null)
  const queueRef = useRef([])

  useEffect(() => {
    const socket = new WebSocket(url)
    socket.addEventListener('open', () => {
      setConnected(true)
      queueRef.current.forEach(({ type, message }) => {
        socket.send(JSON.stringify({ type, message }))
      })
      queueRef.current = []
    })
    socket.addEventListener('close', () => setConnected(false))
    socket.addEventListener('message', (event) => {
      const { type, message } = JSON.parse(event.data)
      receivedMessage(type, message)
    })
    setSocket(socket)
    return () => {
      socket.close()
    }
  }, [])

  function receivedMessage(type, message) {
    // Handle received messages
    console.log(type, message)
  }

  function sendMessage(type, message) {
    if (!connected) {
      queueRef.current.push({ type, message })
      return
    }
    socket.send(JSON.stringify({ type, message }))
  }

  return { connected, sendMessage, receivedMessage }
}
