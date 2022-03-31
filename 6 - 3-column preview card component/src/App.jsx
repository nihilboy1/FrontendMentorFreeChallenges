import React from 'react'
import './styles/index.css'
import Card from './components/Card'
import sedans from './images/icon-sedans.svg'
import suvs from './images/icon-suvs.svg'
import luxury from './images/icon-luxury.svg'

function App() {
  return (
    <div className="main_box">
      <Card image={sedans} title={'SEDANS'}>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </Card>
      <Card image={suvs} title={'SUVS'}>
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </Card>
      <Card image={luxury} title={'LUXURY'}>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </Card>
    </div>
  )
}

export default App
