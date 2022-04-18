import snaplogo from './images/logo.svg'
import menuicon from './images/icon-menu.svg'
import databizlogo from './images/client-databiz.svg'
import audiophilelogo from './images/client-audiophile.svg'
import meetlogo from './images/client-meet.svg'
import makerlogo from './images/client-maker.svg'
import mobilehero from './images/image-hero-mobile.png'
import desktophero from './images/image-hero-desktop.png'
import arrow from './images/icon-arrow-down.svg'
import x from './images/icon-close-menu.svg'
import todoicon from './images/icon-todo.svg'
import calendaricon from './images/icon-calendar.svg'
import remindersicon from './images/icon-reminders.svg'
import planningicon from './images/icon-planning.svg'
import {
  NavBar,
  Company,
  Features,
  Filter,
  ArrowFeatures,
  ArrowCompany
} from './styles/CSS/index.js'
import { useState } from 'react'

function App() {
  const [menuState, setMenuState] = useState(false)
  const [features, setShowFeatures] = useState(false)
  const [company, setShowCompany] = useState(false)

  function hideShowMenu() {
    setMenuState(!menuState)
  }
  function showMenuOption(e) {
    if (e.target.innerHTML === 'Features') setShowFeatures(!features)
    if (e.target.innerHTML === 'Company') {
      setShowCompany(!company)
    }
  }

  return (
    <main className="main_box">
      <Filter isTrue={menuState} id="filter"></Filter>
      <header isTrue={menuState}>
        <img id="snaplogo" src={snaplogo} alt="Snap image logo" />
        <img
          onClick={hideShowMenu}
          id="menuicon"
          src={menuicon}
          alt="Menu icon button"
        />
      </header>
      <NavBar isTrue={menuState}>
        <div id="menu_itens_box">
          <div onClick={hideShowMenu} id="x_box">
            <img src={x} alt="close menu icon" />
          </div>
          <div className="menu_option">
            <p onClick={showMenuOption}>Features</p>
            <ArrowFeatures
              features={features}
              src={arrow}
              alt="arrow down/up icon"
            />
          </div>
          <Features
            id="features_display"
            features={features}
            className="features_company_content"
          >
            <div className="item_box">
              <img src={todoicon} alt="todo icon" />
              <p>Todo List</p>
            </div>
            <div className="item_box">
              <img src={calendaricon} alt="todo icon" />
              <p>Calendar</p>
            </div>
            <div className="item_box">
              <img src={remindersicon} alt="todo icon" />
              <p>Reminders</p>
            </div>
            <div className="item_box">
              <img src={planningicon} alt="todo icon" />
              <p>Planning</p>
            </div>
          </Features>

          <div className="menu_option">
            <p onClick={showMenuOption}>Company</p>
            <ArrowCompany company={company} src={arrow} alt="" />
          </div>
          <Company
            company={company}
            id="company_display"
            className="features_company_content"
          >
            <p class="item_box">History</p>
            <p class="item_box">Our Team</p>
            <p class="item_box">Blog</p>
          </Company>

          <p className="menu_option">Careers</p>
          <p className="menu_option">About</p>
        </div>
        <div id="new_buttons">
          <button id="login">Login</button>
          <button id="register">Register</button>
        </div>
      </NavBar>
      <div id="central_desktop_box">
        <div className="background_div">
          <img id="imgmobile" src={mobilehero} alt="mobile hero" />~
          <img id="imgdesktop" src={desktophero} alt="mobile hero" />
        </div>
        <div id="content_box">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <footer>
        <img id="databizlogo" src={databizlogo} alt="databiz logo" />
        <img id="audiophilelogo" src={audiophilelogo} alt="audiophile logo" />
        <img id="meetlogo" src={meetlogo} alt="meet logo" />
        <img id="makerlogo" src={makerlogo} alt="maker logo" />
      </footer>
    </main>
  )
}

export default App
