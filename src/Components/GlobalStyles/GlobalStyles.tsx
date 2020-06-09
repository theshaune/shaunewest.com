import * as React from 'react'
import { Global } from '@emotion/core'

const GlobalStyles = (): JSX.Element => (
  <Global
    styles={(theme) => ({
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        margin: 0,
      },
    })}
  />
)

export default GlobalStyles
