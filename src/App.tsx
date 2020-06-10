/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import './App.css'
import theme from './theme'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'

import IndexPage from './Pages/index'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <IndexPage />
      </div>
    </ThemeProvider>
  )
}

export default App
