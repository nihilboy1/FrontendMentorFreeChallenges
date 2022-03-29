import React from 'react'
import qrcode from './Images/image-qr-code.png'

function App() {
  return (
    <div className="main_container">
      <div className="img_container">
        <a id='a_container' href="https://www.frontendmentor.io/" target={'_blank'}>
          <img id='qrcode' src={qrcode} alt="" />
        </a>
      </div>
      <div>
        <h1 className="main_text">
          Improve your front-end skills by building projects
        </h1>
        <p className='text'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default App
