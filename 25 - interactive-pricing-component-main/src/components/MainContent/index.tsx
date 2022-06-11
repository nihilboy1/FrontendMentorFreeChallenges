import { Check } from 'phosphor-react'
import { useState } from 'react'
import { SliderComponent } from '../SliderComponent'

import { SwitchComponent } from '../SwitchComponent'
import S from './style.module.scss'

export function MainContent() {
  const [discountState, setDiscountState] = useState(false)
  const [currentSliderPrice, setCurrentSliderPrice] = useState(16)
  const [currentSliderPageViewsAmount, setCurrentSliderPageViewsAmount] =
    useState('100K')
  const sliderPriceWithDiscount =
    currentSliderPrice - (currentSliderPrice * 25) / 100

  return (
    <main className={S.mainContainer}>
      <h2>{currentSliderPageViewsAmount} PAGEVIEWS</h2>
      <SliderComponent
        setCurrentSliderPrice={setCurrentSliderPrice}
        setCurrentSliderPageViewsAmount={setCurrentSliderPageViewsAmount}
      />
      <div className={S.priceBox}>
        <p>
          ${discountState ? sliderPriceWithDiscount : currentSliderPrice}.00
        </p>
        <span>/ month</span>
      </div>
      <div className={S.billingBox}>
        <div>
          <p>Monthly Billing</p>
          <SwitchComponent
            setDiscountState={setDiscountState}
            discountState={discountState}
          />
        </div>
        <div>
          <p>Yearly Billing</p>
          <span className={S.discountBox}>-25%</span>
        </div>
      </div>
      <footer>
        <div>
          <Check size={10} color="#008b7e" weight="bold" />
          <p>Unlimited websites</p>
        </div>
        <div>
          <Check size={10} color="#008b7e" weight="bold" />
          <p>100% data ownership</p>
        </div>
        <div>
          <Check size={10} color="#008b7e" weight="bold" />
          <p>Email reports</p>
        </div>
        <button>Start my trial</button>
      </footer>
    </main>
  )
}
