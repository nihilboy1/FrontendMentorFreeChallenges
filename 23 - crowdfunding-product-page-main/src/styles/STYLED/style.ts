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

export const FirstStandBox = styled.div<{ openClosePladge: number }>`
  border: ${props => {
    return props.openClosePladge === 1
      ? '2px solid hsl(176, 50%, 47%)'
      : '1px solid #00000031'
  }};

  section {
    display: ${props => {
      return props.openClosePladge === 1 ? 'flex' : 'none'
    }};
  }
`
export const SecondStandBox = styled.div<{
  openClosePladge: number
  secondLeft: number
}>`
  opacity: ${props => {
    return props.secondLeft <= 0 ? '0.5' : '1'
  }};
  border: ${props => {
    return props.openClosePladge === 2
      ? '2px solid hsl(176, 50%, 47%)'
      : '1px solid #00000031'
  }};

  div > input {
    display: ${props => {
      return props.secondLeft <= 0 ? 'none' : 'flex'
    }};
  }

  section {
    display: ${props => {
      return props.openClosePladge === 2 ? 'flex' : 'none'
    }};
  }
`
export const ThirdStandBox = styled.div<{
  openClosePladge: number
  thirdLeft: number
}>`
  opacity: ${props => {
    return props.thirdLeft <= 0 ? '0.5' : '1'
  }};
  border: ${props => {
    return props.openClosePladge === 3
      ? '2px solid hsl(176, 50%, 47%)'
      : '1px solid #00000031'
  }};

  div > input {
    display: ${props => {
      return props.thirdLeft <= 0 ? 'none' : 'flex'
    }};
  }

  section {
    display: ${props => {
      return props.openClosePladge === 3 ? 'flex' : 'none'
    }};
  }
`
export const FourStandBox = styled.div<{
  openClosePladge: number
  fourLeft: number
}>`
  opacity: ${props => {
    return props.fourLeft <= 0 ? '0.5' : '1'
  }};
  border: ${props => {
    return props.openClosePladge === 4
      ? '2px solid hsl(176, 50%, 47%)'
      : '1px solid #00000031'
  }};

  div > input {
    display: ${props => {
      return props.fourLeft <= 0 ? 'none' : 'flex'
    }};
  }

  section {
    display: ${props => {
      return props.openClosePladge === 4 ? 'flex' : 'none'
    }};
  }
`

export const CompletedModal = styled.div`
  position: absolute;
  gap: 25px;
  z-index: 2;
  border-radius: 10px;
  display: none;
  padding: 22px;
  flex-direction: column;
  align-items: center;
  left: 18px;
  top: 1000px;
  background-color: white;
  width: 78%;
  h1 {
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    text-align: center;
    color: hsl(0, 0%, 48%);
    font-size: 0.9rem;
  }
  button {
    border-radius: 25px;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: hsl(176, 50%, 47%);
    cursor: pointer;
    padding: 15px 30px;
  }
  img {
    width: 65px;
  }
`
