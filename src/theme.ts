import { Theme } from 'theme-ui'

const theme: Theme  = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    /* H6 */ 'calc(1vmin + 0.5rem)',
    /* H5 */ 'calc(1vmin + .75rem)',
    /* H4 */ 'calc(1vmin + 1rem)',
    /* H3 */ 'calc(1vmin + 1.5rem)',
    /* H2 */ 'calc(1vmin + 2rem)',
    /* H1 */ 'calc(1vmin + 2rem)',
  ],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
  sizes: {
    icon: [
      /* xs */ 'calc(1vmin + 0.5rem)',
      /* sm */ 'calc(1vmin + 1rem)',
      /* md */ 'calc(1vmin + 1.5rem)',
      /* lg */ 'calc(1vmin + 2rem)',
      /* xl */ 'calc(1vmin + 4rem)',
    ],
  },
}

export default theme
