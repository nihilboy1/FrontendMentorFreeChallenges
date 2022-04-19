import Head from 'next/head'
import Image from 'next/image'
import divisormobile from '../../public/images/pattern-divider-mobile.svg'
import divisordesktop from '../../public/images/pattern-divider-desktop.svg'
import dicebutton from '../../public/images/icon-dice.svg'
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
      <Head>
        <meta charSet="UTF-8" />
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Desafio 18</title>
      </Head>
      <main>
        <h2>ADVICE #{advice.id}</h2>
        <h1>
          {'"'}
          {advice.advice}
          {'"'}
        </h1>
        <div>
          <Image id="divisormobile" src={divisormobile} alt="divisor mobile" width="350px" height="20px" />
        </div>
        <button id="dice_button" onClick={callAdvice}>
          <Image
            src={dicebutton}
            alt="dice button"
            width="25px"
            height="25px"
          />
        </button>
      </main>
    </>
  )
}
