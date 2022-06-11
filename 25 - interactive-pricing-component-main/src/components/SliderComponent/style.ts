import { styled } from '@mui/system'
import { Slider } from '@mui/material'

export const StyledSlider = styled(Slider)`
  padding: 2.4rem 0rem;
  .MuiSlider-track,
  .MuiSlider-rail {
    padding: 0px;
    height: 7px;
    color: var(--lightGrayishBlue);
  }

  .MuiSlider-track {
    opacity: 1;
    color: var(--strongCyan);
  }

  .MuiSlider-thumb {
    width: 32px;
    height: 32px;
    color: var(--strongCyan);

    &::before {
      background-color: transparent;
      box-shadow: 0px 0px 25px var(--strongCyan);
    }
  }
`
