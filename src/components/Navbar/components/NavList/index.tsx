import React, { Fragment } from 'react'

import { NavItem } from '../NavItem'
import { NavItemWithIcon } from '../NavItemWithIcon'
import { StyledNavListContainer } from './styles'

type NavListProps = {
  data?: any[]
  hasIcon?: boolean
}

export const NavList: React.FC<NavListProps> = ({
  data,
  hasIcon,
}) => {
  return (
    <StyledNavListContainer>
      {data?.map((item) => (
        <Fragment key={item.label}>
          {hasIcon ? (
            <NavItemWithIcon
              Icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ) : (
            <NavItem
              label={item.label}
              key={item.label}
              href={item?.href}
            />
          )}
        </Fragment>
      ))}
    </StyledNavListContainer>
  )
}
