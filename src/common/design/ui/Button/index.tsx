/* eslint-disable prettier/prettier */
import React from 'react'

import {
  Button as CHButton,
  ButtonProps as CHButtonProps,
} from '@chakra-ui/react'

type ButtonCustomProps = {
  variant?:
  | 'primary'
  | 'secondary'
  | 'miniPrimary'
  | 'miniSecondary'
  | 'other'
  children?: React.ReactNode
}

type ButtonProps = CHButtonProps & ButtonCustomProps

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <CHButton variant={variant} {...rest}>
      {children}
    </CHButton>
  )
}
