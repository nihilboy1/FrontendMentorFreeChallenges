import './global.scss'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { FooterComponent } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <MainContent />
      <FooterComponent />
    </>
  )
}
