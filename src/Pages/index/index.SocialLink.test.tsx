import * as React from 'react'
import { render } from '@testing-library/react'
import SocialLink from './index.SocialLink'

import { Icon as IconType } from '../../Components/Icons/Icons.types'

describe('SocialLink', () => {
  test('Render Icon & href populated', () => {
    const href = 'https://example.com'
    const Icon: IconType = (props) => <div {...props}>Icon Mock Component</div>
    const { getByTestId } = render(<SocialLink href={href} Icon={Icon} />)

    const LinkElement = getByTestId('SocialLink')
    const IconElement = getByTestId('SocialLink-Icon')

    expect(LinkElement).toHaveAttribute('href', href)
    expect(IconElement).toBeInTheDocument()
  })
})
