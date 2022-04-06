import React, { useState } from 'react'
import error_alert from './images/icon-error.svg'

const App = () => {
  function verifyFields() {
    const name = document.getElementById('name_field')
    const last_name = document.getElementById('last_name_field')
    const email = document.getElementById('email_field')
    const password = document.getElementById('password_field')
    if (name.value === '') {
      setErrorFor(name, 'First Name cannot be empty')
    } else {
      setSuccessFor(name)
    }
    if (last_name.value === '') {
      setErrorFor(last_name, 'Last Name cannot be empty')
    } else {
      setSuccessFor(last_name)
    }
    if (email.value === '') {
      setErrorFor(email, 'Email field cannot be empty')
    } else if (!checkEmail(email.value)) {
      setErrorFor(email, 'Looks like this is not an email')
    } else {
      setSuccessFor(email)
    }
    if (password.value === '') {
      setErrorFor(password, 'Password field cannot be empty')
    } else if (password.value.length < 7) {
      setErrorFor(password, 'Password must have a minimum of 7 characters')
    } else {
      setSuccessFor(password)
    }

    const allfields = document.getElementsByClassName('form_item success')
    if (allfields.length === 4) {
      setTimeout(function () {
        alert('Registered successfully')
      }, 500)
    }
  }

  function setErrorFor(input, message) {
    const input_Container = input.parentElement
    const error_Message =
      input_Container.getElementsByClassName('error_message')
    input_Container.className = 'input_container error'
    error_Message[0].innerHTML = message
    input.className = 'form_item error_style'
  }
  function setSuccessFor(input) {
    const input_Container = input.parentElement
    input_Container.className = 'input_container'
    input.className = 'form_item success'
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  }

  return (
    <div id="main_container">
      <section id="text_box">
        <h1 id="title">Learn to code by watching others</h1>
        <p id="description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <div id="right_box">
        <div id="advisor_box">
          <div id="advisor_text">
            <div id="advisor_box_2" className="text_size">
              <span id="advisor_text_strong" className="text_size">
                Try it free 7 days{' '}
              </span>
              then $20/mo. thereafter
            </div>
          </div>
        </div>
        <div id="form_box">
          <div className="input_container">
            <input
              id="name_field"
              className="form_item"
              type="text"
              placeholder="First Name"
            />
            <img className="error_alert" src={error_alert} alt="error_alert" />
            <p className="error_message"></p>
          </div>
          <div className="input_container">
            <input
              id="last_name_field"
              className="form_item"
              type="text"
              placeholder="Last Name"
            />
            <img className="error_alert" src={error_alert} alt="error_alert" />
            <p className="error_message"></p>
          </div>
          <div className="input_container">
            <input
              id="email_field"
              className="form_item"
              type="email"
              placeholder="Email Address"
            />
            <img className="error_alert" src={error_alert} alt="error_alert" />
            <p className="error_message"></p>
          </div>
          <div className="input_container">
            <input
              id="password_field"
              className="form_item"
              type="password"
              placeholder="Password"
            />
            <img className="error_alert" src={error_alert} alt="error_alert" />
            <p className="error_message"></p>
          </div>
          <button onClick={verifyFields} type="submit" id="claim_item">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="infos" id="infos_box">
            By clicking the button, you are agreeing to our {''}
            <span className="infos" id="infos_red_text">
              Terms and Services
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
