import React from 'react'
import {ContentBox, ButtonBox} from '../styles'

const Card = props => {
  return (
    <ContentBox className="content_box" title={props.title}>
      <div className="image_box">
        <img id="image" src={props.image} alt="" />
      </div>
      <h1 id='title'>{props.title}</h1>
      <p id='description'>{props.children}</p>
      <ButtonBox title={props.title} id='button'>Learn More</ButtonBox>
    </ContentBox>
  )
}

export default Card
