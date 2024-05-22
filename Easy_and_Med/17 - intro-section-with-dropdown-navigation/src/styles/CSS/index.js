import styled from 'styled-components'

export const NavBar = styled.nav`
  display: ${props => (props.isTrue ? 'block' : 'none')};
`

export const Company = styled.div`
  display: ${props => (props.company ? 'flex' : 'none')};
`

export const Features = styled.div`
  display: ${props => (props.features ? 'flex' : 'none')};
`

export const Filter = styled.div`
  display: ${props => (props.isTrue ? 'block' : 'none')};
`

export const ArrowCompany = styled.img`
  transform: ${props => (props.company ? 'rotate(180deg)' : 'rotate(0deg)')};
`
export const ArrowFeatures = styled.img`
  transform: ${props => (props.features ? 'rotate(180deg)' : 'rotate(0deg)')};
`
