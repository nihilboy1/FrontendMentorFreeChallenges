import styled from 'styled-components'

export const MenuBox = styled.nav`
  opacity: ${props => {
    return props.active ? '1' : '0'
  }};
  z-index: ${props => {
    return props.active ? '1' : '-1'
  }};
`

export const MenuIcon = styled.img`
  opacity: ${props => {
    return props.active ? '0.5' : '2'
  }};
`
