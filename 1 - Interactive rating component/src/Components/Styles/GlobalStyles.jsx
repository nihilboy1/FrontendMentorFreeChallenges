import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;

  }

  body, #root {
    width: 100vw;
    height: 100vh;
    background-color: hsl(216, 12%, 8%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`
export default GlobalStyle
