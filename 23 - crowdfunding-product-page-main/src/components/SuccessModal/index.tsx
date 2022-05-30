import * as S from './style'
import successIcon from '../../images/icon-check.svg'
import { Popover } from '@headlessui/react'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

export function SuccessModal() {
  const { setOpenCloseSuccessModal, openCloseSuccessModal } =
    useContext(MyContext)
  return (
    <Popover>
      <S.SuccessModal openCloseSuccessModal={openCloseSuccessModal}>
        <img src={successIcon} alt="Ícone de sucesso" />
        <h1>Thanks for your support!</h1>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Popover.Button
          onClick={() => {
            setOpenCloseSuccessModal(!openCloseSuccessModal)
          }}
        >
          Got it!
        </Popover.Button>
      </S.SuccessModal>
    </Popover>
  )
}
