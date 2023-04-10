import styled from '@emotion/styled'
import { Button } from 'src/common/design/ui/Button'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledButton = styled(Button)`
  width: ${pixelToRem(180)};
  font-size: ${pixelToRem(16)};
  border-radius: ${pixelToRem(16)};
  background-color: #fff;
  box-shadow: 3px 4px 11px 2px rgba(0, 0, 0, 0.25);
`
