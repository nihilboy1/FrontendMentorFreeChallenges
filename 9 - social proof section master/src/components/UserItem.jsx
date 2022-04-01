import React from 'react'

const UserItem = props => {
  return (
    <div id={props.classpos} className="user_box">
      <div className="inner_top_user_box">
        <img className="avatar_image" src={props.image} alt="" />
        <div className="name_verified_box">
          <p className='name'>{props.name}</p>
          <p className='verified'>Verified Buyer</p>
        </div>
      </div>

      <div className="coment_box">{props.children}</div>
    </div>
  )
}

export default UserItem
