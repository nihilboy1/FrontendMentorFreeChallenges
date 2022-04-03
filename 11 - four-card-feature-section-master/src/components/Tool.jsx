import React from 'react'

const Tool = (props) => {
  return (
    <section id="tool_box">
      <div id="tool_text_box">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div id="tool_img_box">
        <img src={props.img} alt="" />
      </div>
    </section>
  )
}

export default Tool
