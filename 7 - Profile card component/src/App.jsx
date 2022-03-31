import './index.css'
import Status from './components/Status'
import bg1 from './images/bg-pattern-top.svg'
import bg2 from './images/bg-pattern-bottom.svg'
import headerimg from './images/bg-pattern-card.svg'
import avatarimg from "./images/avatar.png"

function App() {
  return (
    <>
      <div className="background">
        <img id="bg1" src={bg1} alt="" />
        <img id="bg2" src={bg2} alt="" />
        <div className="main_box">
          <img id="header_img" src={headerimg} alt="" />
          <img id="avatar_img" src={avatarimg} alt="" />
          <div className="content_box">
            <p id="name">
              Samuel Severiano{' '}
              <span className="grey" id="age">
                23
              </span>
            </p>
            <p id="city" className="grey">
              Brazil
            </p>
            <div className="infos_box">
              <Status number={'80K'} name={'Followers'} />
              <Status number={'803K'} name={'Likes'} />
              <Status number={'1.4K'} name={'Photos'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
