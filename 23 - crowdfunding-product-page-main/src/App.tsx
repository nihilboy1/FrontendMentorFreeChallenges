import * as S from './globals'
import { Header } from './components/Header'
import { SubHeader } from './components/SubHeader'
import { Infos } from './components/Infos'
import { MainContent } from './components/MainContent'
import { useContext } from 'react'
import { MyContext } from './context/MyContext'


function App() {
  
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

export default App
