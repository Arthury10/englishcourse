import React from 'react'

import { SearchIcon } from '@chakra-ui/icons'
import { useIntl } from 'react-intl'
import { Input } from 'src/common/design/ui/Input'
import { InputLeftElement } from 'src/common/design/ui/InputLeftElement'

import {
  StyledInputGroup,
  StyledInputSearchContainer,
} from './styles'

type InputSearchProps = {
  name?: string
}

export const InputSearch: React.FC<InputSearchProps> = ({ name }) => {
  const { formatMessage } = useIntl()

  return (
    <StyledInputSearchContainer>
      <StyledInputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          rounded={'full'}
          pl={10}
          name={name}
          placeholder={formatMessage({ id: 'label.search' })}
        />
      </StyledInputGroup>
    </StyledInputSearchContainer>
  )
}
