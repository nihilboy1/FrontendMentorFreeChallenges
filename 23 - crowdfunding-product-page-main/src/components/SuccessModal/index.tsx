import * as S from './style'
import successIcon from '../../images/icon-check.svg'
import { Popover } from '@headlessui/react'

export function SuccessModal() {
  return (
      <S.SuccessModal>
        <img src={successIcon} alt="Ícone de sucesso" />
        <h1>Thanks for your support!</h1>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
      </S.SuccessModal>
    </Popover>
  )
}
