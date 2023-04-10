import React from 'react'

import {
  InputLeftElement as CHInputLeftElement,
  InputLeftElementProps as CHInputLeftAddonProps,
} from '@chakra-ui/react'

type InputLeftElementProps = CHInputLeftAddonProps & {
  children: React.ReactNode
}

export const InputLeftElement: React.FC<InputLeftElementProps> = ({
  children,
  ...rest
}) => {
  return <CHInputLeftElement {...rest}>{children}</CHInputLeftElement>
}
