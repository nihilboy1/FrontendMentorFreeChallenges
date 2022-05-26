import * as S from './style'
import { PladgeEnter } from '../PladgeEnter'
import { Popover } from '@headlessui/react'


interface SelectionModalOptionProps {
  checked: boolean
  title: string
  description: string
  minpladge?: string
  left?: number | null | undefined
}

export function SelectionModalOption({
  checked,
  title,
  minpladge,
  left,
  description
}: SelectionModalOptionProps) {
  return (
    <S.SelectionModalOption checked={checked}>
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
        <span>{left >= 0 ? left : ''}</span>
        <p>{left >= 0 ? 'left' : ''}</p>
      </div>
      <PladgeEnter checked={checked}/>
    </S.SelectionModalOption>
  )
}
