import { createContext, ReactNode, useState } from 'react'

type MyContextProps = {
  children: ReactNode
}

type MyContextType = {
  resetInputPladge: () => void
  setInputPladge: (value: number) => void
  setBackers: (value: number) => void
  setBacked: (value: number) => void
  setBamboostandleft: (value: number) => void
  setBlackeditionleft: (value: number) => void
  setMahoganyditionleft: (value: number) => void
  setOpenCloseSuccessModal: (value: boolean) => void
  inputPladge: number
  backers: number
  backed: number
  bamboostandleft: number
  blackeditionleft: number
  mahoganyditionleft: number
  openCloseSuccessModal: boolean
}

const initialValue = {
  setInputPladge: () => {},
  resetInputPladge: () => {},
  setBackers: () => {},
  setBacked: () => {},
  setBamboostandleft: () => {},
  setBlackeditionleft: () => {},
  setMahoganyditionleft: () => {},
  setOpenCloseSuccessModal: () => {},
  inputPladge: 0,
  backers: 5007,
  backed: 89914,
  bamboostandleft: 101,
  blackeditionleft: 64,
  mahoganyditionleft: 0,
  openCloseSuccessModal: false,
}

export const MyContext = createContext<MyContextType>(initialValue)

export const MyContextProvider = ({ children }: MyContextProps) => {
  const [inputPladge, setInputPladge] = useState(initialValue.inputPladge)
  const [backers, setBackers] = useState(initialValue.backers)
  const [backed, setBacked] = useState(initialValue.backed)
  const [bamboostandleft, setBamboostandleft] = useState(
    initialValue.bamboostandleft
  )
  const [blackeditionleft, setBlackeditionleft] = useState(
    initialValue.blackeditionleft
  )
  const [mahoganyditionleft, setMahoganyditionleft] = useState(
    initialValue.mahoganyditionleft
  )

  const [openCloseSuccessModal, setOpenCloseSuccessModal] = useState(
    initialValue.openCloseSuccessModal
  )

  function resetInputPladge() {
    setInputPladge(0)
  }


  return (
    <MyContext.Provider
      value={{
        openCloseSuccessModal,
        inputPladge,
        backers,
        backed,
        bamboostandleft,
        blackeditionleft,
        mahoganyditionleft,
        setInputPladge,
        resetInputPladge,
        setBacked,
        setBackers,
        setBamboostandleft,
        setBlackeditionleft,
        setMahoganyditionleft,
        setOpenCloseSuccessModal
      }}
    >
      {children}
    </MyContext.Provider>
  )
}
