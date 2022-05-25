import * as S from './style'

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
    <S.SelectionModalOption className={checked ? 'black' : ''}>
      <header className="modal_option_header">
        <div className="signal_circle"></div>
        <div className="modal_option_text">
          <p>{title}</p>
          <p>Pledge ${minpladge} or more</p>
        </div>
      </header>
      <p>{description}</p>
      <div>
        <span>{left}</span>
        <p>{left ? 'left' : ''}</p>
      </div>
    </S.SelectionModalOption>
  )
}
