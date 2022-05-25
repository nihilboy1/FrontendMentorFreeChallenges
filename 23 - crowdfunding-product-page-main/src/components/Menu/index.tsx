import * as S from './style'
import { Popover } from '@headlessui/react'
import { useEffect } from 'react'



export function Menu() {
  return (
    <S.Menu>
      <button>About</button>
      <button className="middle_button">Discover</button>
      <button>Get Started</button>
    </S.Menu>
  )
}
