'use client'
import { useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import { IntlProvider } from 'react-intl'
import { apolloClient } from 'src/common/apollo'
import { ThemeProvider } from 'src/common/design/themeProvider'
import en from 'src/common/locale/en.json'
import pt from 'src/common/locale/pt.json'
import { AuthProvider } from 'src/features/auth/context/UserContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const enMessages = { ...en }
  const ptMessages = { ...enMessages, ...pt }
  const messages: any = { en: enMessages, pt: ptMessages }
  const [language] = useState('pt')

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <IntlProvider locale={language} messages={messages[language]}>
          <ThemeProvider>{children}</ThemeProvider>
        </IntlProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default Providers
