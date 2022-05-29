import { About } from '../About'
import { Stand } from '../Stand'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import { SuccessModal } from '../SuccessModal'

import * as S from './style'

export function MainContent() {
  const { bamboostandleft, blackeditionleft, mahoganyditionleft } = useContext(MyContext)
  return (
    <S.MainContent>
      <About />
      <Stand
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you'll be added to a special Backer member list."
        title="Bamboo Stand"
        left={bamboostandleft}
        minpladge="25"
      />
      <Stand
        description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer 
        member list. Shipping is included."
        title="Black Edition Stand"
        left={blackeditionleft}
        minpladge="75"
      />
      <Stand
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added 
        to our Backer member list. Shipping is included."
        title="Mahogany Special Edition"
        left={mahoganyditionleft}
        minpladge="200"
      />
      <SuccessModal></SuccessModal>
    </S.MainContent>
  )
}
