import React from 'react'
import { useState } from 'react'
import '../Components/Styles/Style.css'

const RateItem = props => {
  return (
    <div className="radio-toolbar">
      <div>
        <input
          onClick={props.handleValue}
          type="radio"
          id="radio1"
          name="radioFruit"
          value="1"
        />
        <label htmlFor="radio1">1</label>
      </div>

      <div>
        <input
          onClick={props.handleValue}
          type="radio"
          id="radio2"
          name="radioFruit"
          value="2"
        />
        <label htmlFor="radio2">2</label>
      </div>

      <div>
        <input
          onClick={props.handleValue}
          type="radio"
          id="radio3"
          name="radioFruit"
          value="3"
        />
        <label htmlFor="radio3">3</label>
      </div>
      <div>
        <input
          onClick={props.handleValue}
          type="radio"
          id="radio4"
          name="radioFruit"
          value="4"
        />
        <label htmlFor="radio4">4</label>
      </div>
      <div>
        <input
          onClick={props.handleValue}
          type="radio"
          id="radio5"
          name="radioFruit"
          value="5"
        />
        <label htmlFor="radio5">5</label>
      </div>
    </div>
  )
}

export default RateItem
