import logosunnyside from './images/logo.svg'
import menuicon from './images/icon-hamburger.svg'
import jennieavatar from './images/image-jennie.jpg'
import thomasavatar from './images/image-thomas.jpg'
import emilyavatar from './images/image-emily.jpg'
import suggarimage from './images/mobile/image-gallery-sugar-cubes.jpg'
import orangeimage from './images/mobile/image-gallery-orange.jpg'
import milkimg from './images/mobile/image-gallery-milkbottles.jpg'
import coneimage from './images/mobile/image-gallery-cone.jpg'
import facebook_icon from './images/icon-facebook.svg'
import instagram_icon from './images/icon-instagram.svg'
import twitter_icon from './images/icon-twitter.svg'
import pinterest_icon from './images/icon-pinterest.svg'
import arrow_down from './images/icon-arrow-down.svg'

import { MenuBox, MenuIcon } from './styles/STYLED/index'
import { useState } from 'react'
function App() {
  const [active, setActive] = useState(false)
  function reloadPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showHideMenu() {
    setActive(!active)
    console.log(active)
  }
  return (
    <main>
      <div id="header_orange_div">
        <header>
          <img
            id="sunnyside_img"
            src={logosunnyside}
            alt="Logo Sunnyside Icon"
          />
          <MenuIcon
            active={active}
            onClick={showHideMenu}
            id="menuicon_img"
            src={menuicon}
            alt="Menu Icon"
          />
        </header>
        <h1>WE ARE CREATIVES</h1>
        <img id="arrow_down" src={arrow_down} alt="arrow down" />
        <MenuBox active={active} id="menu">
          <div id="pontinha"></div>
          <ul id="menu_content">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </MenuBox>
      </div>
      <div id="egg_div" className="solo_img_div"></div>
      <div className="infos_div">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className="lernmore_button">LEARN MORE</button>
      </div>
      <div id="cup_div" className="solo_img_div"></div>
      <div className="infos_div">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <button id="second_lernmore_button" className="lernmore_button">
          LEARN MORE
        </button>
      </div>
      <div id="cereja_div" className="image_infos_div">
        <h2>Graphic design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
      <div id="orange_div" className="image_infos_div">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
      <div id="client_testimonials_title_div">
        <h2>CLIENT TESTIMONIALS</h2>
      </div>
      <div className="client_testimonials_div">
        <img src={emilyavatar} alt="Emily R. avatar" />
        <blockquote>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </blockquote>
        <div className="person_infos_div">
          <p className="testimonials_name">Emily R.</p>
          <p className="testimonials_job">Marketing Director</p>
        </div>
      </div>
      <div className="client_testimonials_div">
        <img src={thomasavatar} alt="Thomas S. avatar" />
        <blockquote>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </blockquote>
        <div className="person_infos_div">
          <p className="testimonials_name">Thomas S.</p>
          <p className="testimonials_job">Chief Operating Officer</p>
        </div>
      </div>
      <div className="client_testimonials_div">
        <img src={jennieavatar} alt="Jennie F. avatar" />
        <blockquote>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </blockquote>
        <div className="person_infos_div">
          <p className="testimonials_name">Jennie F.</p>
          <p className="testimonials_job">Business Owner</p>
        </div>
      </div>
      <div id="grid_gallery_images">
        <img id="milk_image" src={milkimg} alt="milk bottles image" />
        <img id="orange_image" src={orangeimage} alt="plate and orange image" />
        <img id="cone_image" src={coneimage} alt="ice cream cone image" />
        <img id="suggar_image" src={suggarimage} alt="suggar cubes image" />
      </div>
      <footer>
        <img
          onClick={reloadPage}
          id="logosunnyside_footer"
          src={logosunnyside}
          alt="logo sunnyside"
        />
        <div id="links_div">
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
        </div>
        <div id="socialmedia_div">
          <img id="facebook_icon" src={facebook_icon} alt="facebook_icon" />
          <img id="instagram_icon" src={instagram_icon} alt="instagram_icon" />
          <img id="twitter_icon" src={twitter_icon} alt="twitter_icon" />
          <img id="pinterest_icon" src={pinterest_icon} alt="pinterest_icon" />
        </div>
      </footer>
    </main>
  )
}

export default App
