import React from 'react'

import { InputSearch } from 'src/components/InputSearch'
import { Logo } from 'src/components/Logo'

import { NavList } from './components/NavList'
import { NavItems } from './navItemsData'
import {
  StyledContainer,
  StyledLinksContainer,
  StyledLinksWithIconContainer,
  StyledNavbarContainer,
} from './styles'

type NavbarProps = {
  name: string
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { headerItems, subHeaderItems } = NavItems()

  return (
    <StyledNavbarContainer>
      <StyledContainer>
        <Logo />
        <StyledLinksContainer>
          <NavList data={headerItems} />
          <InputSearch />
        </StyledLinksContainer>
      </StyledContainer>
      <StyledLinksWithIconContainer>
        <NavList data={subHeaderItems} hasIcon />
      </StyledLinksWithIconContainer>
    </StyledNavbarContainer>
  )
}
