import styled from 'styled-components'

export const ColorDiv = styled.div`
  background-color: ${props => {
    return props.id === 'work'
      ? 'hsl(15, 100%, 70%)'
      : props.id === 'play'
      ? 'hsl(195, 74%, 62%)'
      : props.id === 'study'
      ? 'hsl(348, 100%, 68%)'
      : props.id === 'exercise'
      ? 'hsl(145, 58%, 55%)'
      : props.id === 'social'
      ? 'hsl(264, 64%, 52%)'
      : props.id === 'selfcare'
      ? 'hsl(43, 84%, 65%)'
      : ''
  }};
`

export const ButtonColorDaily = styled.button`
  color: ${props => {
    return props.active === '1' ? 'white' : '#ffffff7e'
  }};
`
export const ButtonColorWeekly = styled.button`
  color: ${props => {
    return props.active === '2' ? 'white' : '#ffffff7e'
  }};
`
export const ButtonColorMonthly = styled.button`
  color: ${props => {
    return props.active === '3' ? 'white' : '#ffffff7e'
  }};
`
