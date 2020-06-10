// import React from 'react'
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@testing-library/react'
import GlobalStyles from './GlobalStyles'
import theme from '../../theme'

test('renders the GlobalStyles Component', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  )

  expect(container).toBeDefined()
})
