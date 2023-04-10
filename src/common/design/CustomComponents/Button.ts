import { pixelToRem } from 'src/common/helpers/pixelToRem'

export const Button = {
  variants: {
    primary: {
      borderRadius: pixelToRem(10),
      bgColor: 'primary.main',
      color: 'white',
      fontSize: pixelToRem(12),
    },
    secondary: {
      borderRadius: pixelToRem(10),
      bgColor: '#3b506e',
      color: '#a22d9f',
      fontSize: pixelToRem(16),
    },
    miniPrimary: {
      borderRadius: pixelToRem(21),
      bgColor: '#a22d9f',
      color: 'white',
    },
    miniSecondary: {
      borderRadius: pixelToRem(21),
      bgColor: '#3b506e',
      color: '#a22d9f',
    },
    other: {
      borderRadius: pixelToRem(17),
      bgColor: 'white',
      color: '#a22d9f',
      boxShadow: '3px 4px 11px 2px rgba(0, 0, 0, 0.25)',
      fontSize: pixelToRem(16),
    },
  },
}
