import * as S from './style'
import mastercraftLogoImg from '../../images/logo-mastercraft.svg'
import bookmarkImg from '../../images/icon-bookmark.svg'

export function SubHeader() {
  return (
    <S.SubHeader>
      <img className='mastercraft-logo' src={mastercraftLogoImg} alt="Logo da empresa Mastercraft" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className='buttons_box'>
        <button className='backthisproject'>Back this project</button>
        <button className='bookmark'>
          <img src={bookmarkImg} alt="Simbolo 'Bookmark'" />
        </button>
      </div>
    </S.SubHeader>
  )
}
