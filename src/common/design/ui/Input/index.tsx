import React from 'react'

import {
  Input as CHInput,
  InputProps as CHInputProps,
} from '@chakra-ui/react'

type InputProps = CHInputProps

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <CHInput {...rest} />
}
