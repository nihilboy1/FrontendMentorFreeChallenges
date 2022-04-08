import React from 'react'
import logo from './images/logo.svg'
import mockup from './images/illustration-mockups.svg'
import face from './images/facebook.png'
import twi from './images/twitter.png'
import insta from './images/instagram.png'

function App() {
  return (
    <main id="main_container">
      <header id="header_box">
        <img id="logo_img" src={logo} alt="logo_img" />
      </header>
      <div id="center_box">
        <img id="mockup_image" src={mockup} alt="mockup_image" />
      </div>
      <div id='center'>
        <section id="text_container">
          <h1 id="text_title">Build The Community Your Fans Will Love</h1>
          <p id="text_description">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{' '}
          </p>
          <button id="register_button">Register</button>
        </section>
      </div>
      <footer id="footer_box">
        <div id="social_icons_box">
          <img className="social_icon" src={face} alt="facebook_icon" />
          <img className="social_icon" src={twi} alt="twitter_icon" />
          <img className="social_icon" src={insta} alt="insta_icon" />
        </div>
      </footer>
    </main>
  )
}

export default App
