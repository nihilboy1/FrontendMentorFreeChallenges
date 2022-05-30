import * as S from './style'

interface MenuProps {
  openCloseMenu: boolean
}

export function Menu({ openCloseMenu }: MenuProps) {
  return (
    <S.Menu openCloseMenu={openCloseMenu}>
      <button>About</button>
      <button className="middle_button">Discover</button>
      <button>Get Started</button>
    </S.Menu>
  )
}
