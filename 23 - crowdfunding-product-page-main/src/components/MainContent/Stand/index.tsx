import * as S from './style'
import { SelectionModal } from '../../SelectionModal'
import { Popover } from '@headlessui/react'

interface StandProps {
  title: string
  minpladge: string
  description: string
  left: number
}

export function Stand({ title, minpladge, description, left }: StandProps) {
  return (
    <S.Stand left={left}>
      <Popover className="stand_box">
        <header>
          <h2>{title}</h2>
          <p>Pladge ${minpladge} or more</p>
        </header>
        <p className="description">{description}</p>
        <div className='leftandselect_box'>
          <div className="left_box">
            <span>{left}</span>
            <p>left</p>
          </div>
          <Popover.Button className="stand_button">
            {left > 0 ? 'Select Reward' : 'Out of Stock'}
          </Popover.Button>
        </div>
        <Popover.Overlay className="overlay" />
        <Popover.Panel>
          <SelectionModal />
        </Popover.Panel>
      </Popover>
    </S.Stand>
  )
}
