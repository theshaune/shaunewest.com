import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './'
import { PAGE_TITLE } from './index.constants'

test('renders page title', () => {
  const { getByText } = render(<IndexPage />)
  const linkElement = getByText(`/${PAGE_TITLE}/i`)
  expect(linkElement).toBeInTheDocument()
})
