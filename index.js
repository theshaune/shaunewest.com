import {
  html,
  render,
} from 'https://unpkg.com/lit-html/lib/lit-extended.js?module'

const Link = html`
  <a title='View Github' href='https://github.com/theshaune/shaunewest.com' on-click=${event => increment()}>🕺</a>
`

const App = () => html`
  <h1>
    ${Link}
  </h1>
`

render(App(), document.getElementById('root'))