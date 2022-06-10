import { styled } from '@mui/system'
import { Switch } from '@mui/material'

export const StyledSwitch = styled(Switch)`
  padding: 10px;

  .MuiSwitch-switchBase {
    position: absolute;
    top: 4px;
    left: 4px;
    &:checked {
      color: red;
    }
  }
  .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }

  .Mui-checked {
    color: var(--strongCyan);
  }
  .Mui-checked + .MuiSwitch-track {
    border: 1px solid var(--darkGrayishBlue);
    opacity: 0.3;
    background-color: var(--strongCyan);
  }
`
