/** @jsx jsx */
import { jsx } from 'theme-ui'
import GithubIcon from '../../Components/Icons/Github'
import StackOverflowIcon from '../../Components/Icons/StackOverflow'

import { PAGE_TITLE } from './index.constants'

function IndexPage(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p sx={{ fontSize: 4 }}>{PAGE_TITLE}</p>
        <div
          sx={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <a
            sx={{ display: 'inline-block', color: 'text' }}
            href="https://github.com/theshaune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              sx={{ display: 'block', fill: 'white', width: 'icon.2' }}
            />
          </a>
          <a
            sx={{ display: 'inline-block', color: 'text' }}
            href="https://stackoverflow.com/users/6712681/shaune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StackOverflowIcon
              sx={{ display: 'block', fill: 'white', width: 'icon.2' }}
            />
          </a>
        </div>
      </header>
    </div>
  )
}

export default IndexPage
