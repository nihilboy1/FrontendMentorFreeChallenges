import styled from 'styled-components'


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