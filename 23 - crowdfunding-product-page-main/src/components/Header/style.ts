import styled from 'styled-components'
import mobileBG from '../../images/image-hero-mobile.jpg'
import desktopBG from '../../images/image-hero-desktop.jpg'


export const Header = styled.header`
  height: 16.2rem;
  background-image: ${`url(${mobileBG})`};
  background-size: contain;
  padding: 1.4rem;

  .header_div {
    display: flex;
    align-items: center;
    gap: 9.5rem;
  }

  .menuImg {
    z-index: 3;
  }

  .logoImg {
    width: 7rem;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    width: 100%;
    background-image: ${`url(${desktopBG})`};
    background-size: cover;
    height: 23.3rem;
    display: flex;
    justify-content: center;
    

    .header_div {
      margin-top: 1.4rem;
      width: 80%;
      justify-content: space-between;
      align-items: flex-start;
      height: 12rem;
    }

    .logoImg{
      width: 7.5rem;
    }

    .menuImg{
      display: none;
    }
  }
`
