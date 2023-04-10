import React from 'react'

import { Global } from '@emotion/react'

import { colors } from './colors'

export const GlobalStyle = (): React.ReactElement => (
  <Global
    styles={`
html {
  font-size: 87.5%
  /* 87.5% of 16px = 14px */
  scroll-behavior: smooth;
}



body {
  font-family: "Helvetica Neue";
  margin: 0;
  text-transform: none;
}

:focus {
  outline-color: ${colors.primary}
}

// /* Alternative solution to prevent show the error overlay (react error boundary) */
// iframe {
//   display: none;
// }

hr {
  width: 80%;
  border: 0.5px solid ${colors.primary};
}

a {
  text-decoration: none;
}

/* Custom scrollbar - Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: ${colors.primary} #fff;
}

/* Custom scrollbar - Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: #fff;
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.primary};
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb:hover {
  background: ${colors.primary};
}

.MuiModal-root {
*::-webkit-scrollbar-thumb {
  background-color: ${colors.primary}}
}

body.loading {
  cursor: wait;
}
`}
  />
)
