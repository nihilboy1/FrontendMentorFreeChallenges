import logoblogr from './images/logo.svg'
import arrowdown from './images/icon-arrow-light.svg'
import {
  MenuProductItens,
  MenuCompanyItens,
  MenuConnectItens,
  Menu,
  OpenClose,
  ArrowProduct,
  ArrowConnect,
  ArrowCompany
} from './styles/STYLED/index'
import { useState } from 'react'

function App() {
  const [activeProduct, setActiveProduct] = useState('0')
  const [showHideMenuState, setShowHideMenuState] = useState(false)
  function showHideMenu() {
    setShowHideMenuState(!showHideMenuState)
    setActiveProduct('0')
  }
  function showHideMenuOptions(e) {
    const option = e.target.id
    if (option === 'product') {
      if (activeProduct === '1') {
        setActiveProduct('0')
      } else {
        setActiveProduct('1')
      }
    } else if (option === 'company') {
      if (activeProduct === '2') {
        setActiveProduct('0')
      } else {
        setActiveProduct('2')
      }
    } else if (option === 'connect') {
      if (activeProduct === '3') {
        setActiveProduct('0')
      } else {
        setActiveProduct('3')
      }
    } else if (option === 'menu' || 'menu_options_box') {
      setActiveProduct('0')
    }
  }
  return (
    <main>
      <section id="header_section">
        <header>
          <img id="blogr_logo" src={logoblogr} alt="Logo Blogr" />
          <OpenClose
            showhide={showHideMenuState}
            onClick={showHideMenu}
            id="open_menu"
          ></OpenClose>
          <Menu showhide={showHideMenuState} id="menu">
            <ul id="menu_options_box">
              <div class="relative">
                <li className="menu_option">
                  <p id="product" onClick={showHideMenuOptions}>
                    Product
                  </p>
                  <ArrowProduct
                    active={activeProduct}
                    src={arrowdown}
                    alt="Arrow icon"
                  />
                </li>

                <MenuProductItens
                  active={activeProduct}
                  id="product_options"
                  className="inter_menu_list"
                >
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </MenuProductItens>
              </div>
              <div className="relative">
                <li className="menu_option">
                  <p id="company" onClick={showHideMenuOptions}>
                    Company
                  </p>{' '}
                  <ArrowCompany
                    active={activeProduct}
                    src={arrowdown}
                    alt="Arrow icon"
                  />
                </li>
                <MenuCompanyItens
                  active={activeProduct}
                  id="company_options"
                  className="inter_menu_list"
                >
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </MenuCompanyItens>
              </div>
              <div class="relative">
                <li className="menu_option">
                  <p id="connect" onClick={showHideMenuOptions}>
                    Connect
                  </p>{' '}
                  <ArrowConnect
                    active={activeProduct}
                    src={arrowdown}
                    alt="Arrow icon"
                  />
                </li>
                <MenuConnectItens
                  active={activeProduct}
                  id="connect_options"
                  className="inter_menu_list"
                >
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </MenuConnectItens>
              </div>
            </ul>
            <ul id="menu_access_box">
              <li id="login" className="login_option">
                Login
              </li>
              <li id="sign_in" className="login_option">
                Sign Up
              </li>
            </ul>
          </Menu>
        </header>
        <div id="header_content">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div id="header_buttons">
            <button id="start">Start for Free</button>
            <button id="learn">Learn More</button>
          </div>
        </div>
      </section>
      <section id="title_section">
        <h1>Designed for the future</h1>
      </section>
      <section id="first_content_section">
        <div id="first_content_image"></div>
        <h2 className="h2_content">Introducing an extensible editor</h2>
        <p className="p_content">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h2 className="h2_content">Robust content management</h2>
        <p className="p_content">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you're
          in full control.
        </p>
      </section>
      <section id="second_section">
        <div id="blog_cellphone"></div>
        <div id="second_content_section">
          <h1>State of the Art Infrastructure</h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
      <section id="third_content_section">
        <div id="third_content_image"></div>
        <h2 className="h2_content h2_third">Free, open, simple</h2>
        <p className="p_content p_third">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h2 className="h2_content h2_third">Powerful tooling</h2>
        <p className="p_content p_third">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </section>
      <section id="footer_sections">
        <img id="logo_footer" src={logoblogr} alt="" />
        <ul id="footer_product_box">
          <h2>Product</h2>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
        <ul id="footer_company_box">
          <h2>Company</h2>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <ul id="footer_connect_box">
          <h2>Connect</h2>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </section>
    </main>
  )
}

export default App
