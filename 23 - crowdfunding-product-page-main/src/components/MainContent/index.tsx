import { About } from './About'
import { Stand } from './Stand'
import * as S from './style'

export function MainContent() {
  return (
    <S.MainContent>
      <About />
      <Stand
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you'll be added to a special Backer member list."
        title="Bamboo Stand"
        left={101}
        minplage="25"
      />
      <Stand
        description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer 
        member list. Shipping is included."
        title="Black Edition Stand"
        left={64}
        minplage="75"
      />
      <Stand
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included."
        title="Mahogany Special Edition"
        left={0}
        minplage="200"
      />
    </S.MainContent>
  )
}
