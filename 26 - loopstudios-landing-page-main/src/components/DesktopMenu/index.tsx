import S from './style.module.scss'

export function DesktopMenu() {
  return (
    <nav className={S.desktopMenu}>
      <a href="#">About</a>
      <a href="#">Careers</a>
      <a href="#">Events</a>
      <a href="#">Products</a>
      <a href="#">Support</a>
    </nav>
  )
}
