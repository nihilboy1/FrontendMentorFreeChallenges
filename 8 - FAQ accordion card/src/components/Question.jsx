import React, { useState } from 'react'
import arrow from '../images/icon-arrow-down.svg'
import { Arrow_img, Question_p, Answer_p } from '../styles'

const Question = props => {
  const [state, setState] = useState(false)
  function showAnswer() {
      setState(!state)
  }
  return (
    <div className="question_box">
      <div className="interactive_area">
        <Question_p isTrue={state} onClick={showAnswer} className="question">
          {props.question}
        </Question_p>
        <Arrow_img
          isTrue={state}
          onClick={showAnswer}
          id="arrow"
          src={arrow}
          alt=""
        />
      </div>
      <Answer_p isTrue={state} className="answer nada">{props.children}</Answer_p>
    </div>
  )
}

export default Question
