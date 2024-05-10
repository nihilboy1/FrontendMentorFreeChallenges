import React from 'react'
import StarItem from './components/StarItem'
import UserItem from './components/UserItem'
import colton from './images/image-colton.jpg'
import irene from './images/image-irene.jpg'
import anne from './images/image-anne.jpg'

function App() {
  return (
    <div className="main_box">
      <div className='desktop_top_container'>
        <div className="text_box_container">
          <h1 className="title">10,000+ of our users love our products.</h1>
          <p className="desc">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="stars_box_container">
          <StarItem classpos={'Reviews'}>Reviews</StarItem>
          <StarItem classpos={'Report_Guru'}>Report Guru</StarItem>
          <StarItem classpos={'BestTech'}>BestTech</StarItem>
        </div>
      </div>
      <div className="users_box_container">
        <UserItem classpos={'colton'} image={colton} name={'Colton Smith'}>
          " We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </UserItem>
        <UserItem classpos={'irene'} image={irene} name={'Irene Roberts'}>
          " Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </UserItem>
        <UserItem classpos={'anne'} image={anne} name={'Anne Wallace'}>
          " Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </UserItem>
      </div>
    </div>
  )
}

export default App
