import React from 'react'

import { StyledTravelCardContainer } from './styles'

type CardProps = {
  size?: 'small' | 'large'
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  size = 'small',
  children,
}) => {
  const width = size === 'small' ? 200 : 400

  return (
    <StyledTravelCardContainer $size={width}>
      {children}
    </StyledTravelCardContainer>
  )
}
