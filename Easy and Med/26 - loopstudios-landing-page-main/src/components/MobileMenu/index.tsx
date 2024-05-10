import S from './style.module.scss'
import { Popover } from '@headlessui/react'
import closeMenuIcon from '../../images/icon-close.svg'
import loopstudiosLogo from '../../images/logo.svg'

export function MobileMenu() {
  return (
    <Popover.Panel className={S.popoverPanel}>
      <div className={S.innerHeader}>
        <img className={S.logo} src={loopstudiosLogo} alt="loopstudios Logo" />
        <Popover.Button>
          <img src={closeMenuIcon} alt="close Menu Icon" />
        </Popover.Button>
      </div>
      <div className={S.menuItensBox}>
        <a href="#">ABOUT</a>
        <a href="#">CAREERS</a>
        <a href="#">EVENTS</a>
        <a href="#">PRODUCTS</a>
        <a href="#">SUPPORT</a>
      </div>
    </Popover.Panel>
  )
}
