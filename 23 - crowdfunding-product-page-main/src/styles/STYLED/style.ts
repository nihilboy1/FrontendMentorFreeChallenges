import styled from 'styled-components'
import bg1 from '../../images/bookmark-changed.svg'
import bg2 from '../../images/icon-bookmark.svg'

export const Overlay = styled.div<{ showHideOverlay: boolean }>`
  height: ${props => {
    return props.showHideOverlay ? '100%' : '0'
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

export const Bookmark = styled.div<{
  activeBookmark: boolean
  onClick: (e: boolean) => void
}>`
  background-image: ${props => {
    return props.activeBookmark ? `url(${bg1})` : `url(${bg2})`
  }};
`

export const FirstModal = styled.div<{ showHideFirstModal: boolean }>`
  display: ${props => {
    return props.showHideFirstModal ? 'block' : 'none'
  }};
`

export const StandDiv = styled.div<{ left: number }>`
  opacity: ${props => {
    return props.left <= 0 ? '0.7' : '1'
  }};

  button {
    background-color: ${props => {
      return props.left ? 'hsl(176, 50%, 47%)' : 'hsl(0, 0%, 48%)'
    }};
    cursor: ${props => {
      return props.left ? 'pointer' : 'not-allowed'
    }};
  }
`

export const InsertPladgeBox = styled.div<{ showHideFirstModalInsertPladge: boolean }>`
  display: ${props => {
    return props.showHideFirstModalInsertPladge ? 'flex' : 'none'
  }};
`
