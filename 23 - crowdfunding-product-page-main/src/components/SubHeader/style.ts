import styled from 'styled-components'

interface SubHeaderProps {
  markState: boolean
}

export const SubHeader = styled.div<SubHeaderProps>`
  width: 18rem;
  height: 15.7rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: -3rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.2rem 1.2rem 2.2rem 1.2rem;
  border: 1px solid hsl(0, 0%, 90%);

  h1 {
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    width: 90%;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
    color: grey;
    line-height: 1.1rem;
  }

  .mastercraft-logo {
    width: 3.1rem;
    margin-top: -2.8rem;
  }

  .buttons_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .backthisproject {
      padding: 0.9rem;
      border-radius: 2rem;
      width: 11.9rem;
      background-color: hsl(176, 50%, 47%);
      font-size: 0.9rem;
      font-weight: 700;
      color: white;
    }

    .bookmark {
      display: flex;
      align-items: center;

      .img_bookmark {
        width: 3rem;
      }
    }
  }

  @media (min-width: 800px) {
    width: 43rem;
    margin-top: -5rem;

    h1 {
      font-size: 1.65rem;
      margin-top: -1.5rem;
    }

    .mastercraft-logo {
      width: 3.35rem;
    }

    p {
      font-size: 0.93rem;
      margin-top: -2rem;
    }

    .buttons_box {
      width: 92%;
      margin-bottom: 0.5rem;

      .backthisproject {
        padding: 1rem;
        &:hover {
          background-color: hsl(176, 50%, 35%);
        }
      }
    }

    .bookmark {
      width: 10rem;
      justify-content: space-between;
      align-items: center;
      border-radius: 1.5rem;
      background-color: #dedede;
      color: #707070;


      &::after {
        content: 'Bookmark';
        color: ${({ markState }) => {
          return markState ? 'hsl(176, 50%, 47%)' : '#2F2F2F'
        }};
        margin-top: 0rem;
        margin-right: 1rem;
        font-weight: 600;
      }
    }
  }
`
