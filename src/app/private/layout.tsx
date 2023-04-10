'use client'
import React from 'react'

import { useRouter } from 'next/navigation'
import { useUserAuthContext } from 'src/features/auth/context/UserContext'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { hasToken } = useUserAuthContext()

  const { replace } = useRouter()

  if (!hasToken) {
    replace('/auth/login')
    return <div>Not logged in</div>
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
