import { AiOutlineRight } from 'react-icons/ai'
import S from './style.module.scss'

export function Header() {
  return (
    <header className={S.header}>
      <h1>IP Address Tracker</h1>
      <form>
        <input type="text" />
        <button type="submit">
          <AiOutlineRight color="white" />
        </button>
      </form>
    </header>
  )
}
