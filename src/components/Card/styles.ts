import styled from '@emotion/styled'
import { Box } from 'src/common/design/ui/Box'
import { Paper } from 'src/common/design/ui/Paper'
import { Text } from 'src/common/design/ui/Text'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledTravelCardContainer = styled(Paper, {
  shouldForwardProp: (prop) => !['$size'].includes(prop as string),
})<{
  $size: number
}>`
  padding: 0;
  width: 100%;
  max-width: ${({ $size }) => pixelToRem($size) || '100%'};
  height: ${pixelToRem(370)};
  box-shadow: 3px 4px 11px 2px rgba(0, 0, 0, 0.25);
`

export const StyledTravelCardContent = styled(Box)`
  padding-top: ${pixelToRem(16)};
  padding-bottom: ${pixelToRem(16)};
  padding-left: ${pixelToRem(28)};
  padding-right: ${pixelToRem(28)};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(50)};
`

export const StyledTravelCardHeader = styled(Box)``

export const StyledTravelCardFooter = styled(Box)``

export const StyledTravelCardTitle = styled(Text)``
