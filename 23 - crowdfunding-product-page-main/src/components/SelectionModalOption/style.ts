import styled from 'styled-components'

interface SelectionModalOptionTypes {
  checked: boolean
  left?: number
}

export const SelectionModalOption = styled.div<SelectionModalOptionTypes>`
  opacity: ${props => {
    return props.left != null && props.left <= 0 ? '0.4' : '1'
  }};
  padding: 1.8rem 1.2rem;
  border: ${props => {
    return props.checked
      ? '1px solid hsl(176, 50%, 47%)'
      : '1px solid hsl(0, 0%, 90%)'
  }};
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  pointer-events: ${props => {
    return props.left != null && props.left <= 0 ? 'none' : ''
  }};
  position: relative;

  .modal_option_header {
    display: flex;
    position: relative;

    .signal_circle {
      width: 1.3rem;
      height: 1.3rem;
      background-color: ${props => {
        return props.checked ? 'hsl(176, 50%, 47%)' : ''
      }};
      border-radius: 1rem;
      position: absolute;
      top: 51%;
      left: 0.7rem;
      transform: translate(-50%, -50%);
      border: 1px solid hsl(0, 0%, 90%);
      cursor: pointer;
    }
  }

  .modal_option_text {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 11rem;
    align-self: flex-end;
    .stand_title {
      font-weight: 700;
      font-size: 0.8rem;
      color: black;
    }
  }

  .option_description {
    font-size: 0.8rem;
    color: grey;
    line-height: 1.3rem;
    padding-top: 0.5rem;
  }

  .left_option_box {
    display: flex;
    margin-top: 1rem;

    span {
      font-size: 1rem;
      font-weight: 700;
    }
    p {
      font-size: 0.9rem;
      color: grey;
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1000px) {
    padding-left: 4.5rem;
    padding-top: 1.8rem;
    .modal_option_text {
      flex-direction: row;
      width: 100%;
      gap: 1rem;
      .stand_title {
        font-size: 0.9rem;
      }

      .stand_pladge {
        font-weight: 600;
      }
    }
    .modal_option_header {
      .signal_circle {
        width: 1.5rem;
        height: 1.5rem;
        left: -2rem;
      }
    }

    .left_option_box {
      position: absolute;
      right: 1.2rem;
      top: 0.8rem;
    }

    .option_description {
      font-size: 0.86rem;
      line-height: 1.4rem;
    }
  }
`
