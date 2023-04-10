import React from 'react'

import NXLink, { LinkProps as NXLinkProps } from 'next/link'

type LinkProps = NXLinkProps & {
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return <NXLink {...rest}>{children}</NXLink>
}
