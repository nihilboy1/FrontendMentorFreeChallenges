import { ChangeEvent, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import S from './style.module.scss'

interface HeaderProps {
  setMapPosition: (value: string) => void
}

export function Header({ setMapPosition }) {
  const [addressInput, setAddressInput] = useState('')

  function handleNewAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setAddressInput(e.target.value)
  }

  return (
    <header className={S.header}>
      <h1>IP Address Tracker</h1>
      <div>
        <input
          type="text"
          onChange={handleNewAddressChange}
          value={addressInput}
        />
        <button
          onClick={() => {
            setMapPosition(addressInput)
          }}
        >
          <AiOutlineRight color="white" />
        </button>
      </div>
    </header>
  )
}
