import S from './style.module.scss'
import backgroundImage from '../../images/bg-pattern.svg'

export function Header() {
  return (
    <header style={{ backgroundImage: `url(${backgroundImage})` }}></header>
  )
}
