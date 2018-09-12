import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  #app {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`
