import * as S from './style'

interface StandProps {
  title: string
  minplage: string
  description: string
  left: number
}

export function Stand({ title, minplage, description, left }: StandProps) {
  return (
    <S.Stand left={left}>
      <div className='stand_box'>
        <header>
          <h2>{title}</h2>
          <p>Pladge ${minplage} or more</p>
        </header>
        <p className='description'>{description}</p>
        <div className='left_box'>
          <span>{left}</span>
          <p>left</p>
        </div>
        <button>{left > 0 ? 'Select Reward' : 'Out of Stock'}</button>
      </div>
    </S.Stand>
  )
}
