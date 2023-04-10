import styled from '@emotion/styled'
import { Box } from 'src/common/design/ui/Box'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledNavListContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${pixelToRem(24)};
`
