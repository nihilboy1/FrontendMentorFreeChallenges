import * as S from './style'
import mastercraftLogoImg from '../../images/logo-mastercraft.svg'
import bookmarkImg from '../../images/icon-bookmark.svg'
import changedBookmarkImg from '../../images/bookmark-changed.svg'
import { useState } from 'react'

export function SubHeader() {
  const [markState, setMarkState] = useState(false)
  return (
    <S.SubHeader>
      <img
        className="mastercraft-logo"
        src={mastercraftLogoImg}
        alt="Logo da empresa Mastercraft"
      />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="buttons_box">
        <button className="backthisproject">Back this project</button>
        <button
          className="bookmark"
          onClick={() => {
            setMarkState(!markState)
          }}
        >
          <img
            src={markState ? changedBookmarkImg : bookmarkImg}
            alt="Simbolo 'Bookmark'"
          />
        </button>
      </div>
    </S.SubHeader>
  )
}
