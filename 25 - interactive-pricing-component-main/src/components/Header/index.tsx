import S from './style.module.scss'
import backgroundImage from '../../images/bg-pattern.svg'
import innerBackgroundImage from '../../images/pattern-circles.svg'

export function Header() {
  return (
    <header className={S.header}>
      <div
        className={S.innerBackgroundImage}
        style={{ backgroundImage: `url(${innerBackgroundImage})` }}
      >
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
    </header>
  )
}
