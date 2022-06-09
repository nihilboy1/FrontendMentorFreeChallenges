import { Header } from '../Header'
import { Content } from '../Content'
import S from './style.module.scss'

export function App() {
  return (
    <main className={S.mainBox}>
      <Header />
      <Content />
    </main>
  )
}
