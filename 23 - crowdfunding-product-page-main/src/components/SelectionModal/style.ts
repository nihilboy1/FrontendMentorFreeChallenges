import styled from 'styled-components'

export const SelectionModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1.1rem;
  background-color: white;
  width: 18rem;
  min-height: 77rem;
  border-radius: 0.5rem;
  z-index: 1;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  top: 60rem;

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
      padding: 0.2rem 0rem;
      line-height: 1.3rem;
    }
  }

  @media (min-width: 1000px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 43rem;
    padding: 2.2rem 2.8rem;
    min-height: 48rem;

    .modal_header {
      flex-wrap: wrap;
      height: 5rem;
      div {
        align-items: flex-start;

        .modal_title {
          font-size: 1.4rem;
        }
        img {
          position: absolute;
          width: 1.1rem;
          right: 1.7rem;
          top: 1.2rem;
        }
      }

      .modal_description {
        margin-top: 0rem;
        line-height: inherit;
        font-size: 0.94rem;
      }
    }
  }
`
