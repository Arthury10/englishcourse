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

export const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <CHBox p={pixelToRem(4)} {...rest}>
      {children}
    </CHBox>
  )
}
