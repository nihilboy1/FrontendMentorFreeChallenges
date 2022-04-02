import styled from 'styled-components'

export const ShareOptions = styled.section`
  width: ${props => {
    return props.isTrue ? '310px' : '0px'
  }};
  opacity: ${props => {
    return props.isTrue ? '1' : '0'
  }};
`

export const ImgBox = styled.div`
  background-color: ${props => {
    return props.isTrue ? 'hsl(214, 17%, 51%)' : '#DFE8EF'
  }};
`

export const Image = styled.img`
  transition: all 1s;
  filter: ${props => {
    return props.isTrue ? 'brightness(100)' : 'brightness(1)'
  }};
`
