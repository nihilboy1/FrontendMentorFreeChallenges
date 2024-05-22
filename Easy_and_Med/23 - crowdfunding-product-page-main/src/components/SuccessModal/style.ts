import styled from 'styled-components'

interface SuccessModalProps {
  openCloseSuccessModal: boolean
}

export const SuccessModal = styled.div<SuccessModalProps>`
  position: absolute;
  border: 1px solid hsl(0, 0%, 90%);
  background-color: white;
  top: 85rem;
  left: 0.9rem;
  display: ${props => {
    return props.openCloseSuccessModal ? 'flex' : 'none'
  }};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  width: 18.5rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 2;

  img {
    width: 3.8rem;
  }

  h1 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
    color: gray;
  }

  button {
    background-color: hsl(176, 50%, 47%);
    padding: 0.9rem 1.8rem;
    border-radius: 2rem;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
  }

  @media (min-width: 800px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
