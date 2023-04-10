import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const Text = {
  variants: {
    h1: {
      //hero
      fontSize: pixelToRem(36),
      lineHeight: pixelToRem(42),
      fontFamily: 'Helvetica Neue',
    },
    h2: {
      // h1
      fontSize: pixelToRem(30),
      lineHeight: pixelToRem(36),
      fontFamily: 'Helvetica Neue',
    },
    h3: {
      // h2
      fontSize: pixelToRem(24),
      lineHeight: pixelToRem(30),
      fontFamily: 'Helvetica Neue',
    },
    h4: {
      // h3
      fontSize: pixelToRem(18),
      lineHeight: pixelToRem(24),
      fontFamily: 'Helvetica Neue',
    },
    body1: {
      // body uppercase
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      fontFamily: 'Helvetica Neue',
      textTransform: 'uppercase',
    },
    body2: {
      // body
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      fontFamily: 'Helvetica Neue',
      textTransform: 'none',
    },
    subtitle1: {
      // paragraph uppercase
      fontSize: pixelToRem(12),
      lineHeight: pixelToRem(16),
      fontFamily: 'Helvetica Neue',
      textTransform: 'uppercase',
    },
    subtitle2: {
      // paragraph
      fontSize: pixelToRem(12),
      lineHeight: pixelToRem(16),
      fontFamily: 'Helvetica Neue',
      textTransform: 'none',
    },
    overline: {
      // overline
      fontWeight: 700,
      fontFamily: 'Helvetica Neue',
      fontSize: pixelToRem(10),
      lineHeight: pixelToRem(14),
      textTransform: 'uppercase',
    },
    overline2: {
      // overline2
      fontFamily: 'Helvetica Neue',
      fontSize: pixelToRem(10),
      lineHeight: pixelToRem(14),
    },
    button: {
      fontWeight: 700,
      fontFamily: 'Helvetica Neue',
      fontSize: pixelToRem(14),
      lineHeight: pixelToRem(20),
      letterSpacing: 'normal',
      textTransform: 'none',
    },
  },
}
