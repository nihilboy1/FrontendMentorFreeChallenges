import styled from 'styled-components'
import mobileBG from "../../images/image-hero-mobile.jpg"


export const Header = styled.header`
  height: 16.2rem;
  background-image: ${`url(${mobileBG})`};
  background-size: contain;
  padding: 1.4rem;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .logoImg{
    width: 7rem;
    cursor: pointer;
  }
`