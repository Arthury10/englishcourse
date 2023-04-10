import React from 'react'

import {
  AspectRatio as CHAspectRatio,
  AspectRatioProps as CHAspectRatioProps,
  Image as CHImage,
  ImageProps as CHImageProps,
} from '@chakra-ui/react'

type TextCustomProps = {
  children?: React.ReactNode
  hasAspectRatio?: boolean
  aspectRatioProps?: CHAspectRatioProps
}

export type ImageProps = CHImageProps & TextCustomProps

export const Image: React.FC<ImageProps> = ({
  aspectRatioProps,
  hasAspectRatio,
  children,
  ...rest
}) => {
  const AspectRatio = hasAspectRatio ? CHAspectRatio : 'div'

  return (
    //@ts-ignore
    <AspectRatio {...aspectRatioProps}>
      <CHImage objectFit="cover" {...rest}>
        {children}
      </CHImage>
    </AspectRatio>
  )
}
