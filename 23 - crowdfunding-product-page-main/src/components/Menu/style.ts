import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  width: 18rem;
  height: 12rem;
  position: absolute;
  top: 4.5rem;
  left: 1.1rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.5rem;

  button {
    padding: 1.2rem;
    font-weight: 500;
    height: 1fr;
    width: 100%;
    text-align: left;
  }

  .middle_button {
    border-bottom: 1px solid hsl(0, 0%, 90%);
    border-top: 1px solid hsl(0, 0%, 90%);
  }
`
