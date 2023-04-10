import React from 'react'

import {
  InputLeftAddon as CHInputLeftAddon,
  InputLeftAddonProps as CHInputLeftAddonProps,
} from '@chakra-ui/react'

type InputLeftAddonProps = CHInputLeftAddonProps & {
  children: React.ReactNode
}

export const InputLeftAddon: React.FC<InputLeftAddonProps> = ({
  children,
  ...rest
}) => {
  return <CHInputLeftAddon {...rest}>{children}</CHInputLeftAddon>
}
