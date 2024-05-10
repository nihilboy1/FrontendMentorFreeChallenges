import React from 'react'
import './index.css'


interface props {
  number: string
  description: string
}

function Infos(props: props) {
  return (
    <div id='info_box'>
      <p id='number'>{props.number}</p>
      <p className='desc' id='names'>{props.description}</p>
    </div>
  )
}

export default Infos
