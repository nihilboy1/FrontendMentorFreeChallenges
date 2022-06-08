import { useContext, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'
import { Popover } from '@headlessui/react'

import * as S from './style'

interface PladgeEnterProps {
  checked: boolean
  minpladge: number
  left: number
  setLeft?: (value: number) => void
}

export function PladgeEnter({
  checked,
  minpladge,
  left,
  setLeft
}: PladgeEnterProps) {
  const {
    setInputPladge,
    inputPladge,
    setBacked,
    backed,
    setBackers,
    backers,
    setOpenCloseSuccessModal,
    openCloseSuccessModal
  } = useContext(MyContext)

  const confirmOperation = inputPladge >= minpladge

  return (
    <S.PladgeEnter
      confirmOperation={confirmOperation}
      className="pladge_box"
      checked={checked}
    >
      <h2>Enter your pledge</h2>
      <div className="input_box">
        <div className="dollar_box">
          <p>$</p>
          <input
            type="number"
            value={inputPladge > 0 ? inputPladge : ''}
            onChange={e => {
              if (parseInt(e.target.value) > 0) {
                setInputPladge(parseInt(e.target.value))
              }
            }}
          />
        </div>
        <Popover.Button
          onClick={() => {
            setBacked(backed + inputPladge)
            setBackers(backers + 1)
            if (setLeft) {
              setLeft(left - 1)
            }
            setOpenCloseSuccessModal(!openCloseSuccessModal)
          }}
        >
          Continue
        </Popover.Button>
      </div>
    </S.PladgeEnter>
  )
}
