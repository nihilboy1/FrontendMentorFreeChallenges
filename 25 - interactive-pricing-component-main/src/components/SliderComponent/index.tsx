import { StyledSlider } from './style'

interface SliderComponentProps {
  setCurrentSliderPrice: (e: number) => void
  setCurrentSliderPageViewsAmount: (e: string) => void
}

export function SliderComponent({
  setCurrentSliderPrice,
  setCurrentSliderPageViewsAmount
}: SliderComponentProps) {
  function scaleValues(value: number): number {
    switch (value) {
      case 1:
        setCurrentSliderPrice(8)
        setCurrentSliderPageViewsAmount('10K')
        return value
      case 2:
        setCurrentSliderPrice(12)
        setCurrentSliderPageViewsAmount('50K')
        return value
      case 3:
        setCurrentSliderPrice(16)
        setCurrentSliderPageViewsAmount('100K')
        return value
      case 4:
        setCurrentSliderPrice(24)
        setCurrentSliderPageViewsAmount('500K')
        return value
      case 5:
        setCurrentSliderPrice(36)
        setCurrentSliderPageViewsAmount('1M')
        return value
      default:
        return value
    }
  }
  return (
    <StyledSlider
      scale={scaleValues}
      defaultValue={3}
      step={1}
      min={1}
      max={5}
    />
  )
}
