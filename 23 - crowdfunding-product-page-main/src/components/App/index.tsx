import * as S from './style'
import { Header } from '../Header'
import { SubHeader } from '../SubHeader'
import { Infos } from '../Infos'
import { MainContent } from '../MainContent'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'


export function App() {
  
  const {openCloseSuccessModal} = useContext(MyContext)
  return (
    <S.AppStyle openCloseSuccessModal={openCloseSuccessModal}>
      <Header/>
      <SubHeader/>
      <Infos/>
      <MainContent/>
      <div className='overlay2'></div>
    </S.AppStyle>
  )
}

