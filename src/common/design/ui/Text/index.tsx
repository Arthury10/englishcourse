import React from 'react'

import {
  Text as CHText,
  TextProps as CHTextProps,
} from '@chakra-ui/react'

type TextCustomProps = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'overline'
    | 'overline2'
    | 'button'
  children?: React.ReactNode
}

type TextProps = CHTextProps & TextCustomProps

export const Text: React.FC<TextProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <CHText variant={variant} {...rest}>
      {children}
    </CHText>
  )
}
