import React from 'react'

import { StyledLink } from './styles'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return <StyledLink href={href}>{label}</StyledLink>
}
