import React from 'react'
import resultimg from '../Images/illustration-thank-you.svg'
import { Container_Center_Page2 } from './Styles/Styles'
import './Styles/Secondpage.css'

const SecondPage = props => {
  return (
    <Container_Center_Page2 Estado={props.Estado}>
      <div className="top_div">
        <div className="box_img">
          <img src={resultimg} alt="resultimg" width={130} />
        </div>
        <div className="box_p">
          <p id="top_p">{`You selected ${props.valor} out of 5`}</p>
        </div>
      </div>
      <div className="bottom_div">
        <h1 id="thank">Thank you!</h1>
        <p id="bot_p">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Container_Center_Page2>
  )
}

export default SecondPage
