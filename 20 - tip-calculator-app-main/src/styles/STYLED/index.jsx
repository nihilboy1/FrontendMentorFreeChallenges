import styled from 'styled-components'

export const Input5perc = styled.input`
  background-color: ${props => {
    return props.selectedPerc === 5
      ? 'hsl(172, 67%, 45%)'
      : 'hsl(183, 100%, 15%)'
  }};
  color: ${props => {
    return props.selectedPerc === 5 ? 'hsl(183, 100%, 15%)' : 'white'
  }};
`
export const Input10perc = styled.input`
  background-color: ${props => {
    return props.selectedPerc === 10
      ? 'hsl(172, 67%, 45%)'
      : 'hsl(183, 100%, 15%)'
  }};
  color: ${props => {
    return props.selectedPerc === 10 ? 'hsl(183, 100%, 15%)' : 'white'
  }};
`
export const Input15perc = styled.input`
  background-color: ${props => {
    return props.selectedPerc === 15
      ? 'hsl(172, 67%, 45%)'
      : 'hsl(183, 100%, 15%)'
  }};
  color: ${props => {
    return props.selectedPerc === 15 ? 'hsl(183, 100%, 15%)' : 'white'
  }};
`
export const Input25perc = styled.input`
  background-color: ${props => {
    return props.selectedPerc === 25
      ? 'hsl(172, 67%, 45%)'
      : 'hsl(183, 100%, 15%)'
  }};
  color: ${props => {
    return props.selectedPerc === 25 ? 'hsl(183, 100%, 15%)' : 'white'
  }};
`
export const Input50perc = styled.input`
  background-color: ${props => {
    return props.selectedPerc === 50
      ? 'hsl(172, 67%, 45%)'
      : 'hsl(183, 100%, 15%)'
  }};
  color: ${props => {
    return props.selectedPerc === 50 ? 'hsl(183, 100%, 15%)' : 'white'
  }};
`
export const Inputfreeperc = styled.input`
  border: ${props => {
    return props.selectedPerc !== 0
      ? '2px solid hsl(189, 41%, 95%)'
      : '2px solid hsl(172, 67%, 45%)'
  }};
`

export const DivNumOP = styled.div`
  border: ${props => {
    return props.nopState != '0'
      ? '1px solid hsl(189, 41%, 95%)'
      : '1px solid red'
  }};
`

export const AlertP = styled.p`
  color: ${props => {
    return props.nopState != '0' ? 'white' : 'red'
  }};
`