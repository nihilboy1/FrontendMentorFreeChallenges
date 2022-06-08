import styled from 'styled-components'

interface StandTypes {
  left: number
}

export const Stand = styled.div<StandTypes>`
  padding: 1rem;
  margin-top: -0.5rem;

  .stand_box {
    opacity: ${props => {
      return props.left > 0 ? 1 : 0.6
    }};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1.2rem;
    height: 20rem;
    border-radius: 0.5rem;
    border: 1px solid hsl(0, 0%, 90%);

    header {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 1rem;
      h2 {
        font-size: 0.8rem;
        font-weight: 700;
      }
      p {
        font-size: 0.8rem;
        color: hsl(176, 50%, 47%);
      }
    }

    .description {
      font-size: 0.8rem;
      line-height: 1.3rem;
      color: grey;
      margin-bottom: 1.2rem;
    }

    .left_box {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      span {
        font-size: 1.6rem;
        font-weight: 700;
        margin-right: 0.4rem;
      }
      p {
        font-size: 0.9rem;
        color: grey;
      }
    }

    .stand_button {
      border-radius: 1.5rem;
      padding: 0.7rem 1.5rem;
      font-size: 0.8rem;
      font-weight: 700;
      color: white;
      background-color: ${props => {
        return props.left > 0 ? 'hsl(176, 50%, 47%)' : 'grey'
      }};
      width: 8.8rem;
      cursor: ${props => {
        return props.left > 0 ? 'pointer' : 'not-allowed'
      }};

      &:hover{
        filter: brightness(90%);
      }
    }
  }

  @media (min-width: 1000px) {
      .stand_box{
        height: 14.1rem;
        padding: 1.55rem 2rem;

        header{
          flex-direction: row;
          justify-content: space-between;

          h2{
            font-size: 1.1rem;
          }

          p{
            font-size: 0.9rem;
          }
        }

        .description{
          font-size: 0.92rem;
          line-height: 1.8rem;
        }

        .leftandselect_box{
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .left_box{
            margin: 0;

            span{
              font-size: 1.9rem;
            }
          }
        }

        .stand_button{
          padding: 0.9rem;
        }
      }
    }
`
