import styled from 'styled-components'

export const Question_p = styled.p`
  &:hover {
    color: ${props => {
      return props.isTrue ? '' : '#de5d35'
    }};
  }
  transition: all 600ms;
  font-weight: ${props => {
    return props.isTrue ? '700' : '400'
  }};
`

export const Answer_p = styled.p`
  overflow: hidden;
  display: flex;
  height: ${props => {
    return props.isTrue ? 'auto' : '0'
  }};
`

export const Arrow_img = styled.img`
  transition: all 1s;
  transform: ${props => {
    return props.isTrue ? `rotate(180deg)` : ''
  }};
`
