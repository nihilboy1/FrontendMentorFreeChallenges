import React from 'react'
import { ToolBox_section } from './styles/styles'

const Tool = props => {
  return (
    <ToolBox_section bordercolor={props.bordercolor} id="tool_box">
      <div id="tool_text_box">
        <h2 id="tool_title">{props.title}</h2>
        <p id="tool_desc">{props.desc}</p>
      </div>
      <div id="tool_img_box">
        <img id="tool_img" src={props.img} alt="" />
      </div>
    </ToolBox_section>
  )
}

export default Tool
