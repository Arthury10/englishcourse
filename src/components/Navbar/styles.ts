import styled from '@emotion/styled'
import { Box } from 'src/common/design/ui/Box'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledNavbarContainer = styled(Box)`
  padding-right: ${pixelToRem(40)};
  padding-left: ${pixelToRem(40)};
  padding-top: ${pixelToRem(20)};
  padding-bottom: ${pixelToRem(20)};
`

export const StyledContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: ${pixelToRem(24)};
`

export const StyledLinksContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: ${pixelToRem(24)};
`
export const StyledLinksWithIconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: ${pixelToRem(24)};
`
