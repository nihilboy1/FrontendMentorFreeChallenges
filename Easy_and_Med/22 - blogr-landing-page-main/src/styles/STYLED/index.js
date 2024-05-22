import styled from 'styled-components'
import close from '../../images/icon-close.svg'
import open from '../../images/icon-hamburger.svg'

export const MenuProductItens = styled.div`
  overflow: hidden;
  height: ${props => {
    return props.active === '1' ? 'auto' : '0'
  }};
  padding: ${props => {
    return props.active === '1' ? '10px' : '0'
  }};
  @media (min-width: 1000px) {
    padding: ${props => {
      return props.active === '1' ? '30px 20px' : '0'
    }};
  }
`

export const MenuCompanyItens = styled.div`
  overflow: hidden;
  height: ${props => {
    return props.active === '2' ? 'auto' : '0'
  }};
  padding: ${props => {
    return props.active === '2' ? '10px' : '0'
  }};
  @media (min-width: 1000px) {
    padding: ${props => {
      return props.active === '2' ? '30px 20px' : '0'
    }};
  }
`

export const MenuConnectItens = styled.div`
  overflow: hidden;
  height: ${props => {
    return props.active === '3' ? 'auto' : '0'
  }};
  padding: ${props => {
    return props.active === '3' ? '10px' : '0'
  }};
  @media (min-width: 1000px) {
    padding: ${props => {
      return props.active === '3' ? '30px 20px' : '0'
    }};
  }
`

export const Menu = styled.nav`
  display: ${props => {
    return props.showhide ? 'flex' : 'none'
  }};
`

export const OpenClose = styled.div`
  background-image: ${props => {
    return props.showhide ? `url(${close})` : `url(${open})`
  }};
`

export const ArrowProduct = styled.img`
  transform: ${props => {
    return props.active === '1' ? 'rotate(180deg)' : 'rotate(0deg)'
  }};
`

export const ArrowCompany = styled.img`
  transform: ${props => {
    return props.active === '2' ? 'rotate(180deg)' : 'rotate(0deg)'
  }};
`

export const ArrowConnect = styled.img`
  transform: ${props => {
    return props.active === '3' ? 'rotate(180deg)' : 'rotate(0deg)'
  }};
`
