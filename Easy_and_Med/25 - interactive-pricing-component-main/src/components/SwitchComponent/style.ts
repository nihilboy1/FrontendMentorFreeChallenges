import { styled } from '@mui/system'
import { Switch } from '@mui/material'

export const StyledSwitch = styled(Switch)`
  padding: 10px;

  .MuiSwitch-switchBase {
    position: absolute;
    top: 4px;
    left: 4px;
  }
  .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }
`
