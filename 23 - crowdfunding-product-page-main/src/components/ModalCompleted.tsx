import React from 'react'
import checkedimg from '../images/icon-check.svg'
import * as S from '../styles/STYLED/style'

export const ModalCompleted = () => {
  return (
    <S.CompletedModal>
      <img src={checkedimg} alt="" />
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button>Got it!</button>
    </S.CompletedModal>
  )
}
