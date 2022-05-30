import * as S from './style'
import logoImg from '../../images/logo.svg'
import openMenuImg from '../../images/icon-hamburger.svg'
import { Popover } from '@headlessui/react'
import { Menu } from '../Menu'
import { useState } from 'react'

export function Header() {
  const [openCloseMenu, setOpenCloseMenu] = useState(false)
  return (
    <S.Header>
      <div className="header_div">
        <img
          className="logoImg"
          src={logoImg}
          alt="Imagem da logo da Crowdfund"
          onClick={() => {
            window.location.reload()
          }}
        />
        <button onClick={() => setOpenCloseMenu(!openCloseMenu) }>
          <img
            className="menuImg"
            src={openMenuImg}
            alt="Ícone de para abrir o menu"
          />
        </button>
        <div className="overlay2" />
        <Menu openCloseMenu={openCloseMenu} />
      </div>
    </S.Header>
  )
}
