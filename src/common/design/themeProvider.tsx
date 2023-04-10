import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => (
  <ChakraProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ChakraProvider>
)
