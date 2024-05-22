import './index.css'
import imagemobile from './images/image-header-mobile.jpg'
import imagedesktop from './images/image-header-desktop.jpg'
import Infos from './Infos'

function App() {
  return (
    <div className="main_box">
      <picture id="image_box">
        <div id="color"></div>
      </picture>
      <div className="content_box">
        <h1 id="title">
          Get <span>Insights</span> that help your business grow.
        </h1>
        <p id="text" className="desc">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall officiency.
        </p>
        <div className="infos_box">
          <Infos number="10k+" description="COMPANIES"></Infos>
          <Infos number="314" description="TEMPLATES"></Infos>
          <Infos number="12M+" description="QUERIES"></Infos>
        </div>
      </div>
    </div>
  )
}

export default App
