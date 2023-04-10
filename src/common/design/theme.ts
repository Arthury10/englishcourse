import { extendTheme, Theme } from '@chakra-ui/react'

import { colors } from './colors'
import { Button } from './CustomComponents/Button'
import { Text } from './CustomComponents/Text'
import { fonts } from './fonts'

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  fonts,
  config: {
    initialColorMode: 'light',
  },
  components: {
    Text,
    Button,
  },
} as Theme | {})
