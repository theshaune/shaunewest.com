import React from "react";
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import "./App.css";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <header className="App-header">
          <p>Hello</p>
          <a
            sx={{ color: 'text' }}
            href="https://github.com/theshaune"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
