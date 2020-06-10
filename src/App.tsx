/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import './App.css'
import theme from './theme'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
import GithubIcon from './Components/Icons/Github'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <p sx={{ fontSize: 3 }}>Hello</p>
          <a
            sx={{ color: 'text', width: '2rem' }}
            href="https://github.com/theshaune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon sx={{ fill: 'white', width: 'icon.2' }} />
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
