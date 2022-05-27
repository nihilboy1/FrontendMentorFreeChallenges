import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
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
    &:hover{
      background-color: hsl(0, 0%, 90%) ;
    }
  }

  .middle_button {
    border-bottom: 1px solid hsl(0, 0%, 90%);
    border-top: 1px solid hsl(0, 0%, 90%);
  }
`
