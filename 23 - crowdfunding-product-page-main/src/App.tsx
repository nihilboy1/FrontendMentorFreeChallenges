import * as S from './globals'
import { Header } from './components/Header'
import { SubHeader } from './components/SubHeader'
import { Infos } from './components/Infos'
import { MainContent } from './components/MainContent'

function App() {
  return (
    <S.AppStyle>
      <Header/>
      <SubHeader/>
      <Infos/>
      <MainContent/>
    </S.AppStyle>
  )
}

export default App
