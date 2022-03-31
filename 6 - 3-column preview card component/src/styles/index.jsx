import styled from 'styled-components'

export const ContentBox = styled.div`
  background-color: ${props => {
    return props.title === 'SEDANS'
      ? '#E28525'
      : props.title === 'SUVS'
      ? '#016972'
      : '#00403F'
  }};
  border-radius: ${props => {
    return props.title === 'SEDANS'
      ? '10px 10px 0px 0px'
      : props.title === 'LUXURY'
      ? '0px 0px 10px 10px'
      : ''
  }};
  @media screen and (min-width: 850px) {
    border-radius: ${props => {
      return props.title === 'SEDANS'
        ? '10px 0px 0px 10px'
        : props.title === 'LUXURY'
        ? '0px 10px 10px 0px'
        : ''
    }};
  }
`

export const ButtonBox = styled.button`
  cursor: pointer;
  color: ${props => {
    return props.title === 'SEDANS'
      ? '#E28525'
      : props.title === 'SUVS'
      ? '#016972'
      : '#00403F';
  }};
  &:hover {
    color: white;
    background-color: ${props => {
      return props.title === 'SEDANS'
        ? '#E28525'
        : props.title === 'SUVS'
        ? '#016972'
        : '#00403F'
    }};
  }
`
