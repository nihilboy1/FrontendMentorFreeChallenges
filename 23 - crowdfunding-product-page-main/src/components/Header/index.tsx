import * as S from './style'
import logoImg from '../../images/logo.svg'
import menuImg from '../../images/icon-hamburger.svg'

export function Header() {

  return (
    <S.Header>
      <div>
        <img
          className="logoImg"
          src={logoImg}
          alt="Imagem da logo da Crowdfund"
          onClick={() => {window.location.reload()}}
        />
        <button>
          <img
            className="menuImg"
            src={menuImg}
            alt="Ícone de para abrir o menu"
          />
        </button>
      </div>
    </S.Header>
  )
}
