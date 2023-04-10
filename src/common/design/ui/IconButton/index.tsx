import React from 'react'

import {
  IconButton as CHIconButton,
  IconButtonProps as CHIconButtonProps,
} from '@chakra-ui/react'

type ButtonCustomProps = {
  children?: React.ReactNode
}

type ButtonProps = CHIconButtonProps & ButtonCustomProps

export const IconButton: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return <CHIconButton {...rest}>{children}</CHIconButton>
}
