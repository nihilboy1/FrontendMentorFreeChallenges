import S from './style.module.scss'
import loopstudiosLogo from '../../images/logo.svg'
import hamburgerIcon from '../../images/icon-hamburger.svg'
import { Menu } from '../Menu'
import { Popover } from '@headlessui/react'

export function Header() {
  return (
    <header className={S.header}>
      <div className={S.innerHeader}>
        <img className={S.logo} src={loopstudiosLogo} alt="loopstudios Logo" />
        <Popover>
          <Popover.Button>
            <img src={hamburgerIcon} alt="ícone para abrir o menu" />
          </Popover.Button>
          <Menu />
        </Popover>
      </div>
      <div className={S.titleBox}>
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </header>
  )
}
