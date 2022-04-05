import styled from 'styled-components'

export const AlertIcon = styled.img`
  display: ${props => {
    return props.isTrue ? 'flex' : 'none'
  }};
  position: absolute;
  right: 70px;
  top: 7px;
  @media screen and (min-width: 850px) {
    right: 75px;
    top: 7px;
  }
`

export const AlertMessage = styled.p`
  position: absolute;
  display: flex;
  font-size: 0.7rem;
  width: 170px;
  bottom: -20px;
  right: 84px;
  color: ${props => {
    props.isTrue ? 'red' : ''
  }};

  @media screen and (min-width: 850px) {
    right: 136px;
  }
`
