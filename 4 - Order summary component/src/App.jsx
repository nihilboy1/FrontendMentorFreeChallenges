import './index.css'
import headerimg from './images/illustration-hero.svg'
import musicicon from './images/icon-music.svg'

function App() {
  return (
    <div className="container_center">
      <div id='image_container'>
        <img id='headerimg' src={headerimg} alt="" />
      </div>
      <div className='content_container'>
        <div className="text_container">
          <h1 id='title'>Order Summary</h1>
          <p id='description'>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className='infos_container'>
          <img id='musicicon' src={musicicon} alt="" />
          <div>
            <p id='annualplan'>Annual Plan</p>
            <p id='price'>$59.99/year</p>
          </div>
          <p id='change'>Change</p>
        </div>
        <button id='proceed'>Proceed to Payment</button>
        <p id='cancel'>Cancel Order</p>
      </div>
    </div>
  )
}

export default App
