import * as S from './style'

interface MenuProps {
  openCloseMenu: boolean
}

export function Menu({ openCloseMenu }: MenuProps) {
  return (
    <S.Menu openCloseMenu={openCloseMenu}>
      <a href="#about">About</a>
      <a href="#discover" className="middle_link">
        Discover
      </a>
      <a href="#getstarted">Get Started</a>
    </S.Menu>
  )
}
