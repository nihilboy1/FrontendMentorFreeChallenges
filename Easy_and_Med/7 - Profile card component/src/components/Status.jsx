import React from 'react'

const Status = props => {
  return (
    <div>
      <p id="number">{props.number}</p>
      <p className='grey' id="desc">{props.name}</p>
    </div>
  )
}

export default Status
