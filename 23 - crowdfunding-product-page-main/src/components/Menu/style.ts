import styled from 'styled-components'

interface MenuProps {
  openCloseMenu: boolean
}

export const Menu = styled.div<MenuProps>`
  display: ${props => {
    return props.openCloseMenu ? 'flex' : 'none'
  }};
  width: 18rem;
  position: absolute;
  top: 4.5rem;
  left: 1.1rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;

  button {
    padding: 1rem;
    font-weight: 500;
    width: 100%;
    text-align: left;
    &:hover {
      background-color: hsl(0, 0%, 90%);
    }
  }

  .middle_button {
    border-bottom: 1px solid hsl(0, 0%, 90%);
    border-top: 1px solid hsl(0, 0%, 90%);
  }

  @media (min-width: 1000px) {
    display: flex;
    background-color: transparent;
    flex-direction: row;
    left: 72%;
    top: 2.5rem;
    width: 14rem;

    button {
      padding: 0;
      color: white;
      font-size: 0.8rem;
      width: 4.5rem;
      &:hover{
        background-color: transparent;
      }
    }

    .middle_button {
      border-bottom: none;
      border-top: none;
    }
  }
`
