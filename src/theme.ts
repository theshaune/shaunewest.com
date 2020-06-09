import { Theme } from 'theme-ui'

const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    /* H6 */ 'calc(1vw + 0.5rem)',
    /* H5 */ 'calc(1vw + .75rem)',
    /* H4 */ 'calc(1vw + 1rem)',
    /* H3 */ 'calc(1vw + 1.5rem)',
    /* H2 */ 'calc(1vw + 2rem)',
    /* H1 */ 'calc(1vw + 2rem)',
  ],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

export default theme
