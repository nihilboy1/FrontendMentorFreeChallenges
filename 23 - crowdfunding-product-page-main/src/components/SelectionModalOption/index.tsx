import * as S from './style'
import { PladgeEnter } from '../PladgeEnter'

interface SelectionModalOptionProps {
  checked: boolean
  title: string
  description: string
  minpladge?: string
  left?: number
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
            {minpladge ? `Pledge ${minpladge} or more` : ''}
          </p>
        </div>
      </header>
      <p className="option_description">{description}</p>
      <div className="left_option_box">
        <span>{left}</span>
        <p>{left ? 'left' : ''}</p>
      </div>
      <PladgeEnter/>
    </S.SelectionModalOption>
  )
}
