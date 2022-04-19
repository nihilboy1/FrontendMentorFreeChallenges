import divisormobile from './images/pattern-divider-mobile.svg'
import divisordesktop from './images/pattern-divider-desktop.svg'
import dicebutton from './images/icon-dice.svg'
import { useEffect, useState } from 'react'

export default function Home() {
  const [advice, setAdvice] = useState({})

  useEffect(() => {
    callAdvice()
  }, [])

  async function callAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const res_json = await res.json()
    setAdvice({ id: res_json.slip.id, advice: res_json.slip.advice })
  }

  return (
    <>
      <main>
        <h2>ADVICE #{advice.id}</h2>
        <h1>
          {'"'}
          {advice.advice}
          {'"'}
        </h1>
        <div>
          <img
            id="divisormobile"
            src={divisormobile}
            alt="divisor mobile"
            width="100%"
            height="20px"
          />
        </div>
        <button id="dice_button" onClick={callAdvice}>
          <img src={dicebutton} alt="dice button" width="25px" height="25px" />
        </button>
      </main>
    </>
  )
}
