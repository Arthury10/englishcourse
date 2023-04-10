'use client'
import React from 'react'

import { Box } from 'src/common/design/ui/Box'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      bg={'primary.main'}
      flex={1}
      h={'100vh'}
      alignItems="center"
      justifyContent="center"
      display={'flex'}
    >
      {children}
    </Box>
  )
}
