import styled from '@emotion/styled'
import { Box } from 'src/common/design/ui/Box'
import { InputGroup } from 'src/common/design/ui/InputGroup'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledInputSearchContainer = styled(Box)`
  display: flex;
  align-items: center;
`

export const StyledInputGroup = styled(InputGroup)`
  width: 100%;
  background-color: #ececec;
  border-radius: ${pixelToRem(20)};
`
