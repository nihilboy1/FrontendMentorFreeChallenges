import interactiveImage from '../../images/mobile/image-interactive.jpg'
import deepEarthImageMobile from '../../images/mobile/image-deep-earth.jpg'
import deepEarthImageDesktop from '../../images/desktop/image-deep-earth.jpg'
import nightArcadeImageMobile from '../../images/mobile/image-night-arcade.jpg'
import nightArcadeImageDesktop from '../../images/desktop/image-night-arcade.jpg'
import soccerTeamImageMobile from '../../images/mobile/image-soccer-team.jpg'
import soccerTeamImageDesktop from '../../images/desktop/image-soccer-team.jpg'
import gridImageMobile from '../../images/mobile/image-grid.jpg'
import gridImageDesktop from '../../images/desktop/image-grid.jpg'
import upAboveImageMobile from '../../images/mobile/image-from-above.jpg'
import upAboveImageDesktop from '../../images/desktop/image-from-above.jpg'
import pocketBorealisImageMobile from '../../images/mobile/image-pocket-borealis.jpg'
import pocketBorealisImageDesktop from '../../images/desktop/image-pocket-borealis.jpg'
import curiosityImageMobile from '../../images/mobile/image-curiosity.jpg'
import curiosityImageDesktop from '../../images/desktop/image-curiosity.jpg'
import fisheyeImageMobile from '../../images/mobile/image-fisheye.jpg'
import fisheyeImageDesktop from '../../images/desktop/image-fisheye.jpg'
import S from './style.module.scss'
import { useEffect } from 'react'

const creationsData = [
  {
    title: 'DEEP EARTH',
    mobileImage: deepEarthImageMobile,
    desktopImage: deepEarthImageDesktop
  },
  {
    title: 'NIGHT ARCADE',
    mobileImage: nightArcadeImageMobile,
    desktopImage: nightArcadeImageDesktop
  },
  {
    title: 'SOCCER TEAM VR',
    mobileImage: soccerTeamImageMobile,
    desktopImage: soccerTeamImageDesktop
  },
  {
    title: 'THE GRID',
    mobileImage: gridImageMobile,
    desktopImage: gridImageDesktop
  },
  {
    title: 'FROM UP ABOVE VR',
    mobileImage: upAboveImageMobile,
    desktopImage: upAboveImageDesktop
  },
  {
    title: 'POCKET BOREALIS',
    mobileImage: pocketBorealisImageMobile,
    desktopImage: pocketBorealisImageDesktop
  },
  {
    title: 'THE CURIOSITY',
    mobileImage: curiosityImageMobile,
    desktopImage: curiosityImageDesktop
  },
  {
    title: 'MAKE IT FISHEYE',
    mobileImage: fisheyeImageMobile,
    desktopImage: fisheyeImageDesktop
  }
]

export function MainContent() {
  useEffect(() => {}, [window.innerWidth])
  return (
    <>
      <main className={S.mainBox}>
        <div className={S.interactiveVRBox}>
          <img src={interactiveImage} alt="Image de um homem com óculos VR" />
          <div className={S.textBox}>
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <div className={S.ourCreations}>
          <h2>OUR CREATIONS</h2>
          {creationsData.map(item => {
            return (
              <div
                key={item.title}
                className={S.creationBox}
                style={{
                  backgroundImage: `url(${item.mobileImage})`
                }}
              >
                <p>{item.title}</p>
              </div>
            )
          })}
          <button>SEE ALL</button>
        </div>
      </main>
    </>
  )
}
