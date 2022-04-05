import model_img from './images/hero-mobile.jpg'
import logo_img from './images/logo.svg'
import arrow from './images/icon-arrow.svg'
import alert_icon from './images/icon-error.svg'
import background from "./images/bg-pattern-desktop.svg"
import React, { useRef, useState } from 'react'
import { AlertIcon, AlertMessage } from './styles/index'


function App() {
  const inputElement = useRef(null)
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  function emailChecker() {
    const email = inputElement.current.value
    if (email === '') {
      setMessage('Empty fields')
      setError(false)
    } else if (
      email.includes('@') &&
      email.length > 3 &&
      email[email.indexOf('@') + 1] !== undefined
    ) {
      setMessage('Email Successfully Registered')
      setValid(true)
      setError(false)
      inputElement.current.value = ''
    } else {
      setValid(false)
      setError(true)
      setMessage('Please, provide a valid email')
    }
  }

  return (
    <div id="main_container">
      <img id='background_desktop' src={background} alt="background" />
      <div id="logo_image_box">
        <img id="image" src={logo_img} alt="logo_image" />
      </div>
      <div id="model_image_box">
        <img id="model_image" src={model_img} alt="model_image" />
      </div>
      <main id="content_box">
        <div id="text_container">
          <h1 className="title">
            <span id="red_title" className="title">
              WE'RE
            </span>
            <br /> COMING SOON
          </h1>
          <p id="apresentation">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <form id="form_box">
          <input
            ref={inputElement}
            id="input"
            type="email"
            placeholder="Email Address"
          />
          <div onClick={emailChecker} id="button">
            <input type="submit" value="" />
            <img id="arrow" src={arrow} alt="arrow" />
            <AlertIcon id='alert_icon' isTrue={error} src={alert_icon} alt="alert_icon" />
            <AlertMessage>{message}</AlertMessage>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
