'use client'

import Providers from 'src/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
