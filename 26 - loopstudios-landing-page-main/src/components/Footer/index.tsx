import loopstudiosLogo from '../../images/logo.svg'
import S from './style.module.scss'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

export function FooterComponent() {
  return (
    <footer className={S.footer}>
      <img src={loopstudiosLogo} alt="loopstudios Logo" />
      <div className={S.linksBox}>
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </div>
      <div className={S.socialBox}>
        <AiFillFacebook color="white" size={28} />
        <FaTwitter color="white" size={28} />
        <FaPinterest color="white" size={28} />
        <FaInstagram color="white" size={28} />
      </div>
      <p>&copy; 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}
