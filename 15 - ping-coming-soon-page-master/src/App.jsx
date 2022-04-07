import React from 'react'
import logo from './images/logo.svg'
import dashboard from './images/illustration-dashboard.png'
import face from './images/facebook_icon.png'
import insta from './images/insta_icon.png'
import twitter from './images/twitter_icon.png'

function App() {
  function verifyFields() {
    const email = document.getElementById('email_box')
    if (email.value === '') {
      setErrorFor(email, 'Email field cannot be empty')
    } else if (!checkEmail(email.value)) {
      setErrorFor(email, 'Please, provide a valid email address')
    } else {
      setSuccessFor(email)
    }
  }

  function setErrorFor(input, message) {
    const form_Box = input.parentElement
    const error_Message = form_Box.getElementsByClassName('error_message')
    form_Box.className = 'form_box error'
    error_Message[0].innerHTML = message
    input.className = 'input_styles error_style'
  }
  function setSuccessFor(input) {
    const form_Box = input.parentElement
    const error_Message = form_Box.getElementsByClassName('error_message')

    form_Box.className = 'form_box'
    input.className = 'input_styles success'
    error_Message[0].innerHTML = ""
  }
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  }
  return (
    <main id="main_container">
      <header id="header_box">
        <img id="logo_image" src={logo} alt="ping_logo" />
        <h1 className="header_title">
          We are launching{' '}
          <span id="title_span" className="header_title">
            soon!
          </span>
        </h1>
        <p id="info">Subscribe and get notified</p>
      </header>
      <div id="form_box">
        <input
          id="email_box"
          className="input_styles email_box_border"
          type="email"
          placeholder="Your email address..."
        />
        <p className="error_message"></p>
        <button
          onClick={verifyFields}
          className="input_styles"
          id="button_box"
          type="submit"
        >
          Notify Me
        </button>
      </div>
      <section id="center_image_box">
        <img id="dashboard_image" src={dashboard} alt="dashboard" />
      </section>
      <footer id="footer_box">
        <div id="social_icons">
          <img className="social_icon" src={face} alt="" />
          <img className="social_icon" src={twitter} alt="" />
          <img className="social_icon" src={insta} alt="" />
        </div>
        <p id="copyright">&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
