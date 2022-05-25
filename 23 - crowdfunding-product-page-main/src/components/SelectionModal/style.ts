import styled from 'styled-components'

export const SelectionModal = styled.div`
  position: absolute;
  left: 1.1rem;
  background-color: white;
  width: 18rem;
  height: 18rem;
  border-radius: 0.5rem;
  z-index: 1;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;

  .radio_group_option{
  }

  .black {
    border: 1px solid green;
  }

  .modal_header {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .modal_title {
        font-size: 1rem;
      }
      img {
        width: 0.9rem;
      }
    }

    .modal_description {
      margin-top: 1rem;
      color: grey;
    }
  }
`
