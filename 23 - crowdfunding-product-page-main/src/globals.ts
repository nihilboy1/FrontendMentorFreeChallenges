import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
    font: 400 16px 'Commissioner', sans-serif;
  }

  button{
    cursor: pointer;
    background-color: transparent;
  }

  body, #root, html{
    min-height: 150rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.2rem;
  background-color: hsl(0, 0%, 99%);

`

