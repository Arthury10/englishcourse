import styled from '@emotion/styled'
import { Link } from 'src/common/design/ui/Link'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const StyledLink = styled(Link)`
  font-size: ${pixelToRem(20)};
  font-weight: 400;
  line-height: ${pixelToRem(24)};
`
