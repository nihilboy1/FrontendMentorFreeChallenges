import { ChangeEvent, MouseEvent, useState } from 'react'
import { StyledSwitch } from './style'

interface SwitchComponentProps {
  setDiscountState: (value: boolean) => void
  discountState: boolean
}

export function SwitchComponent({
  setDiscountState,
  discountState
}: SwitchComponentProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscountState(event.target.checked)
  }
  return (
    <StyledSwitch
      inputProps={{ 'aria-label': 'controlled' }}
      checked={discountState}
      onChange={handleChange}
    />
  )
}
