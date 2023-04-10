import React from 'react'

import {
  Box as CHBox,
  BoxProps as CHBoxProps,
} from '@chakra-ui/react'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

type TextCustomProps = {
  children?: React.ReactNode
}

type BoxProps = CHBoxProps & TextCustomProps

export const Paper: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <CHBox
      p={pixelToRem(4)}
      bg="white"
      boxShadow={'2xl'}
      borderRadius={pixelToRem(20)}
      {...rest}
    >
      {children}
    </CHBox>
  )
}
