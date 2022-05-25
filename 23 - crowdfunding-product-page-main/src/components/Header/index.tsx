import * as S from './style'
import logoImg from '../../images/logo.svg'
import openMenuImg from '../../images/icon-hamburger.svg'
import { Popover } from '@headlessui/react'
import { Menu } from '../Menu'

export function Header() {

  return (
    <S.Header>
      <Popover className="header_div">
        <img
          className="logoImg"
          src={logoImg}
          alt="Imagem da logo da Crowdfund"
          onClick={() => {
            window.location.reload()
          }}
        />
        <Popover.Button>
          <img
            className="menuImg"
            src={openMenuImg}
            alt="Ícone de para abrir o menu"
          />
        </Popover.Button>
        <Popover.Overlay className="overlay" />
        <Popover.Panel>
          <Menu/>
        </Popover.Panel>
      </Popover>
    </S.Header>
  )
}
