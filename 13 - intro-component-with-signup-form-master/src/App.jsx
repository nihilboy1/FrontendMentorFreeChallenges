import React from 'react'

const App = () => {
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
          <p id="advisor_text">
            <div id="advisor_box_2" className="text_size">
              <span id="advisor_text_strong" className="text_size">
                Try it free 7 days{' '}
              </span>
              then $20/mo. thereafter
            </div>
          </p>
        </div>
        <form id="form_box">
          <input className="form_item" type="text" placeholder="First Name" />
          <input className="form_item" type="text" placeholder="Last Name" />
          <input
            className="form_item"
            type="email"
            placeholder="Email Address"
          />
          <input className="form_item" type="password" placeholder="Password" />
          <button id="claim_item" className="form_item">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="infos" id="infos_box">
            By clicking the button, you are agreeing to our {''}
            <span className="infos" id="infos_red_text">
              Terms and Services
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default App
