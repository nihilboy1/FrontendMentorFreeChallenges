import styled from 'styled-components'

export const ToolBox_section = styled.section`
  border-top: ${props => {
    return props.bordercolor === 'blue'
      ? '3px solid #49CFD0'
      : props.bordercolor === 'red'
      ? '3px solid #DB5B5F'
      : props.bordercolor === 'yellow'
      ? '3px solid #F5AE56'
      : '3px solid #579DEA'
  }};
`
