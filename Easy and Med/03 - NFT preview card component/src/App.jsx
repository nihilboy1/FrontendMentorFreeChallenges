import React from 'react'
import './index.css'
import clock from './images/icon-clock.svg'
import user from './images/image-avatar.png'
import nftimage from './images/image-equilibrium.jpg'
import ethe from './images/icon-ethereum.svg'
import view from './images/icon-view.svg'

function App() {
  return (
    <div className="container_center_div">
      <div className="image_div">
        <img id="nftimage" src={nftimage} alt="" />
        <div className="overlay_box">
          <img id='overlay_img' src={view} alt="" />
        </div>
      </div>
      <div>
        <h1 id="title">Equilibrium #3429</h1>
        <p className="grey_text">
          Our Equilibrium collection promotes balance and calm
        </p>
      </div>
      <div className="info_div">
        <div className="content_div">
          <div id="left">
            <img id="ether" src={ethe} alt="icon_ether" />
            <p id="price_text">0.041 ETH</p>
          </div>
          <div id="rigth">
            <img id="clock" src={clock} alt="" />
            <p className="grey_text">3 days left</p>
          </div>
        </div>
      </div>
      <div className="user_div grey_text">
        <img id="user_img" src={user} width={25} alt="" />
        <p>
          Created by{' '}
          <a
            id="link"
            target={'_blank'}
            href="https://github.com/nihilboy1/ALL-FREE-FRONT-END-MENTOR-CHALLENGES"
          >
            Nihilboy
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
