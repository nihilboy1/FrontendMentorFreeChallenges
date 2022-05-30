import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
    font: 400 16px 'Commissioner', sans-serif;
    transition: all 0.4s;
    
    @media (min-width: 1000px) {
    border: 1px solid grey;
  }
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
    transition: none;
  }

  .overlay{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }


`

interface AppStyleProps {
  openCloseSuccessModal: boolean
}

export const AppStyle = styled.div<AppStyleProps>`
  display: flex;
  flex-direction: column;
  width: 20.2rem;
  background-color: hsl(0, 0%, 99%);
  position: relative;

  .overlay2 {
    display: ${props => {
      return props.openCloseSuccessModal ? 'block' : 'none'
    }};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  @media (min-width: 1000px) {
    width: 100%;
  }
`
