import React from 'react'

import { Image, ImageProps } from 'src/common/design/ui/Image'

export const Logo: React.FC<ImageProps> = ({ ...rest }) => {
  return (
    <Image
      src={'ImageLogo.src'}
      alt="Logo"
      width="100%"
      maxW={'200px'}
      {...rest}
    />
  )
}
