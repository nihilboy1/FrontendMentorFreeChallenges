import logo from './images/logo.svg'
import open_menu from './images/icon-hamburger.svg'
import mastercraft_logo from './images/logo-mastercraft.svg'
import close_menu from './images/icon-close-menu.svg'
import * as S from './styles/STYLED/style'
import { Stand } from './components/Stand'
import { useState } from 'react'

export default function App() {
  const [showHideMenu, setShowHideMenu] = useState<boolean>(false)
  const [activeBookmark, setactiveBookmark] = useState<boolean>(true)

  function OpenCloseMenu() {
    setShowHideMenu(!showHideMenu)
  }
  return (
    <>
      <S.MobileMenu showHideMenu={showHideMenu} id="mobile_menu">
        <img
          onClick={OpenCloseMenu}
          id="close_menu"
          src={close_menu}
          alt="Close Menu Icon"
        />
        <button>About</button>
        <button id="middle_button">Discover</button>
        <button>Get Started</button>
      </S.MobileMenu>
      <main>
        <S.Overlay showHideMenu={showHideMenu} id="overlay" />
        <header>
          <nav>
            <img id="logo_header" src={logo} alt="Crowdfund logo" />
            <S.OpenIcon
              showHideMenu={showHideMenu}
              id="open_menu"
              src={open_menu}
              alt="Open Menu Icon"
              onClick={OpenCloseMenu}
            />
          </nav>
        </header>
        <div id="sections_area">
          <section id="first_content_section" className="content_section">
            <img
              id="mastercraft_logo"
              src={mastercraft_logo}
              alt="mastercraft logo"
            />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautifuly handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div id="back_and_bookmark_box">
              <button>Back this project</button>
              <S.Bookmark activeBookmark={activeBookmark}id="bookmark_div" />
            </div>
          </section>
          <section id="second_content_section" className="content_section">
            <div className="stats_div">
              <h2>$89,914</h2>
              <p>of $100,000 backed</p>
            </div>
            <div className="stats_div">
              <h2>5,007</h2>
              <p>total backers</p>
            </div>
            <div className="stats_div">
              <h2>56</h2>
              <p>days left</p>
            </div>
            <div id="progress_bar_box">
              <div id="progress_bar_line"></div>
            </div>
          </section>
          <section id="third_content_section" className="content_section">
            <div id="text_area">
              <h2>About this project</h2>
              <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </div>
            <Stand
              title="Bamboo Stand"
              left={101}
              min_pledge="25"
              available="Select Reward"
            >
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you'll be added to a
              special Backer member list.
            </Stand>
            <Stand
              title="Black Edition Stand"
              left={64}
              min_pledge="75"
              available="Select Reward"
            >
              You get a Black Special Edition computer stand and a personal
              thank you. You'll be added to our Backer member list. Shipping is
              included.
            </Stand>
            <Stand
              title="Mahogany Special Edition"
              left={0}
              min_pledge="200"
              available="Out of Stock"
            >
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You'll be added to our Backer member list.
              Shipping is included.
            </Stand>
          </section>
        </div>
      </main>
    </>
  )
}
