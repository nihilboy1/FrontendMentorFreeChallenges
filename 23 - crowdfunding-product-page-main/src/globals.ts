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

  @media (min-width: 1000px) {
    .overlay{
      opacity: 0.5;
    }
  }


`
