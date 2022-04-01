import React from 'react'
import star from '../images/icon-star.svg'

const StarItem = props => {
  const x = ['1', '2', '3', '4', '5']
  return (
    <div className={`stars_box_1`} id={props.classpos}>
      <div className="stars_box_2">
        {x.map(object => {
          return <img className="star" src={star} alt="" />
        })}
      </div>
      <div className="text">Rated 5 Stars in {props.children}</div>
    </div>
  )
}

export default StarItem
