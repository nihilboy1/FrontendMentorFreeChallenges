import * as S from './style'
import { PladgeEnter } from '../PladgeEnter'
import { Popover } from '@headlessui/react'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

interface SelectionModalOptionProps {
  checked: boolean
  title: string
  description: string
  minpladge: number
  left?: any
  setLeft?: (value: number) => void
}

export function SelectionModalOption({
  checked,
  title,
  minpladge,
  left,
  description,
  setLeft
}: SelectionModalOptionProps) {
  const { resetInputPladge } = useContext(MyContext)
  return (
    <S.SelectionModalOption
      onClick={() => {
        resetInputPladge()
      }}
      checked={checked}
      left={left}
    >
      <header className="modal_option_header">
        <div className="signal_circle"></div>
        <div className="modal_option_text">
          <p className="stand_title">{title}</p>
          <p className="stand_pladge">
            {minpladge ? `Pledge $${minpladge} or more` : ''}
          </p>
        </div>
      </header>
      <p className="option_description">{description}</p>
      <div className="left_option_box">
        <span>{left}</span>
        <p>{left >= 0 && left != null ? 'left' : ''}</p>
      </div>
      <PladgeEnter setLeft={setLeft} left={left} minpladge={minpladge} checked={checked} />
    </S.SelectionModalOption>
  )
}
