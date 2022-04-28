import styled from 'styled-components'

export const Overlay = styled.div<{ showHideMenu: boolean }>`
  height: ${props => {
    return props.showHideMenu ? '100%' : '0'
  }};
`

export const MobileMenu = styled.div<{ showHideMenu: boolean }>`
  top: ${props => {
    return props.showHideMenu ? '75px' : '-250px'
  }};
  overflow: ${props => {
    return props.showHideMenu ? 'visible' : 'clip'
  }};
`

export const OpenIcon = styled.img<{ showHideMenu: boolean }>`
  display: ${props => {
    return props.showHideMenu ? 'none' : 'block'
  }};
`


export const Bookmark = styled.div<{ activeBookmark: boolean }>`
  background-image: url("../../images/bookmark-changed.svg");
  
`
