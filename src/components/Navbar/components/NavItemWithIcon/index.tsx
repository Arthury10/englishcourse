import React from 'react'

import { Link } from 'src/common/design/ui/Link'
import { pixelToRem } from 'src/common/helpers/pixelToRem'

import { StyledButton } from './styles'

type NavItemWithIconProps = {
  label: string
  href: string
  Icon?: any
}

//

export const NavItemWithIcon: React.FC<NavItemWithIconProps> = ({
  label,
  href,
  Icon,
}) => {
  return (
    <Link href={href}>
      <StyledButton
        leftIcon={<Icon />}
        iconSpacing={pixelToRem(10)}
        wordBreak="break-word"
      >
        {label}
      </StyledButton>
    </Link>
  )
}
