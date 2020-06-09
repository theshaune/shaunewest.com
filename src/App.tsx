/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import './App.css'
import theme from './theme'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <p sx={{ fontSize: 4 }}>Hello &amp; Welcome</p>
          <a
            sx={{ color: 'text', fontSize: 3 }}
            href="https://github.com/theshaune"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
