import logoImg from '../../images/logo.svg'
import S from './style.module.scss'

export function Header() {
  return (
    <header className={S.headerBox}>
      <div className={S.headerInnerBox}>
        <h1>My Balance</h1>
        <h2>$921.48</h2>
      </div>
      <img src={logoImg} alt="Logo Img" />
    </header>
  )
}
