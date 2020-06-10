/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import GithubIcon from '../../Components/Icons/Github'
import StackOverflowIcon from '../../Components/Icons/StackOverflow'
import SocialLink from './index.SocialLink'

import { PAGE_TITLE } from './index.constants'

const IndexPage = (): JSX.Element => {
  const cssLink: SxStyleProp = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  }

  return (
    <div className="App">
      <header className="App-header">
        <p sx={{ fontSize: 4 }}>{PAGE_TITLE}</p>
        <div sx={cssLink}>
          <SocialLink href="https://github.com/theshaune" Icon={GithubIcon} />
          <SocialLink
            href="https://stackoverflow.com/users/6712681/shaune"
            Icon={StackOverflowIcon}
          />
        </div>
      </header>
    </div>
  )
}

export default IndexPage
