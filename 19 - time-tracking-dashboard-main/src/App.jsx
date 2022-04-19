import Card from './components/Card'
import workimage from './images/icon-work.svg'
import studyimage from './images/icon-study.svg'
import selfcareimage from './images/icon-self-care.svg'
import playimage from './images/icon-play.svg'
import exerciseimage from './images/icon-exercise.svg'
import socialimage from './images/icon-social.svg'
import avatar from './images/image-jeremy.png'
import { useState, useEffect } from 'react'
import {
  ButtonColorDaily,
  ButtonColorWeekly,
  ButtonColorMonthly
} from './styles/STYLED/index'

function App() {
  const [activeButton, setActiveButton] = useState('1')
  const [time, setTime] = useState('daily')

  function setActive(e) {
    if (e.target.innerHTML === 'Daily') {
      setActiveButton('1')
      setTime('daily')
    } else if (e.target.innerHTML === 'Weekly') {
      setActiveButton('2')
      setTime('weekly')
    } else if (e.target.innerHTML === 'Monthly') {
      setActiveButton('3')
      setTime('monthly')
    }
  }
  return (
    <main>
      <div id="profile_container">
        <div id="perfil_container">
          <img id="avatar_image" src={avatar} alt="avatar image" />
          <div id="text_box">
            <p className="text_perfil">Report for</p>
            <h1 className="text_perfil">Jemery Robson</h1>
          </div>
        </div>
        <div id="buttons_div">
          <ButtonColorDaily active={activeButton} onClick={setActive}>
            Daily
          </ButtonColorDaily>
          <ButtonColorWeekly active={activeButton} onClick={setActive}>
            Weekly
          </ButtonColorWeekly>
          <ButtonColorMonthly active={activeButton} onClick={setActive}>
            Monthly
          </ButtonColorMonthly>
        </div>
      </div>
      <Card
        id={'work'}
        title={'Work'}
        image={workimage}
        chave={0}
        time={time}
      />
      <Card
        id={'play'}
        title={'Play'}
        image={playimage}
        chave={1}
        time={time}
      />
      <Card
        id={'study'}
        title={'Study'}
        image={studyimage}
        chave={2}
        time={time}
      />
      <Card
        id={'exercise'}
        title={'Exercise'}
        image={exerciseimage}
        chave={3}
        time={time}
      />
      <Card
        id={'social'}
        title={'Social'}
        image={socialimage}
        chave={4}
        time={time}
      />
      <Card
        id={'selfcare'}
        title={'Self Care'}
        image={selfcareimage}
        chave={5}
        time={time}
      />
    </main>
  )
}

export default App
