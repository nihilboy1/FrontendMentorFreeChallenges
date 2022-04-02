import React, { useState } from 'react'
import imgheadermobile from './images/drawersmobile.jpg'
import avatar from './images/avatar-michelle.jpg'
import pinterest_icon from './images/icon-pinterest.svg'
import facebook_icon from './images/icon-facebook.svg'
import twitter_icon from './images/icon-twitter.svg'
import share_icon from './images/icon-share.svg'
import {ShareOptions, ImgBox, Image} from './styles'

function App() {
  const [state, setState] = useState(false)

  function showShareOptions(){
    setState(!state)
  }
  return (
    <div id="main_box_container">
      <div id="image_box">
        <img id="headerimgmobile" src={imgheadermobile} alt="headerimgmobile" />
      </div>
      <main id="content_box">
        <section id="texts_box">
          <p id="text_1">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p id="text_2">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </section>
        <section id="user_box">
          <img id="avatar" src={avatar} alt="avatar" />
          <div id="name_date_box">
            <p id="name">Michelle Appleton</p>
            <p id="date">28 Jun 2020</p>
          </div>
          <ImgBox isTrue={state} id="share_icon_box">
            <Image isTrue={state} onClick={showShareOptions} id="share_icon" src={share_icon} alt="share_icon" />
          </ImgBox>
          <ShareOptions isTrue={state} id="share_options">
            <div id="content">
              <div id="content_1">
                <p id="share">SHARE</p>
                <img src={facebook_icon} alt="facebook_icon" />
                <img src={twitter_icon} alt="twitter_icon" />
                <img src={pinterest_icon} alt="pinterest_icon" />
              </div>
              <ImgBox isTrue={state}  id="share_icon_box">
                <Image isTrue={state} onClick={showShareOptions} id="share_icon" src={share_icon} alt="share_icon" />
              </ImgBox>
            </div>
          </ShareOptions>
        </section>
      </main>
    </div>
  )
}

export default App
