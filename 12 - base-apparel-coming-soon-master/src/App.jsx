import model_img from './images/hero-mobile.jpg'
import logo_img from './images/logo.svg'
import arrow from './images/icon-arrow.svg'

function App() {
  return (
    <div id="main_container">
      <div id="logo_image_box">
        <img id="image" src={logo_img} alt="logo_image" />
      </div>
      <div id="model_image_box">
        <img id="model_image" src={model_img} alt="model_image" />
      </div>
      <main id="content_box">
        <div id="text_container">
          <h1 className="title">
            <span id="red_title" className="title">
              WE'RE
            </span>
            <br /> COMING SOON
          </h1>
          <p id="apresentation">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <form id="form_box">
          <input id="input" type="email" placeholder="Email Address" />
          <input id="button" type="submit" value="" />
          <img id="arrow" src={arrow} alt="arrow" />
        </form>
      </main>
    </div>
  )
}

export default App
