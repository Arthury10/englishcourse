import React from 'react'

import {
  InputGroup as CHInputGroup,
  InputGroupProps as CHInputGroupProps,
} from '@chakra-ui/react'

type InputGroupProps = CHInputGroupProps & {
  children: React.ReactNode
}

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  ...rest
}) => {
  return <CHInputGroup {...rest}>{children}</CHInputGroup>
}
