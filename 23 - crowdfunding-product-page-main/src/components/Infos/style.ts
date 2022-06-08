import styled from 'styled-components'

interface InfosProps {
  percentBacked: number
}

export const Infos = styled.div<InfosProps>`
  width: 18rem;
  height: 23.6rem;
  align-self: center;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  padding: 1.8rem 1.2rem;
  text-align: center;
  border: 1px solid hsl(0, 0%, 90%);
  background-color: white;

  .main_infos_box {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 1rem;
      border-bottom: 1px solid hsl(0, 0%, 90%);
    }

    h2 {
      font-size: 1.7rem;
      font-weight: 700;
    }

    p {
      font-size: 0.7rem;
      color: grey;
      margin-top: 0.5rem;
      padding-bottom: 1.5rem;
    }
  }

  .loading_box {
    height: 0.7rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    background-color: hsl(0, 0%, 90%);

    .loading_bar {
      height: 100%;
      border-radius: 0.5rem;
      width: ${props => {
        return `${props.percentBacked}%`
      }};
      background-color: hsl(176, 50%, 47%);
    }
  }

  @media (min-width: 800px) {
    width: 43rem;
    height: 12.8rem;
    padding: 2.8rem 3.2rem;

    .main_infos_box {
      flex-direction: row;
      width: 100%;

      div {
        width: 28%;
        border-bottom: none;
        border-right: 1px solid hsl(0, 0%, 90%);
        height: 4rem;
        margin-bottom: 2rem;
      }
      .last_info{
        padding-left: 2.5rem;
        border: none;
      }
      .center_info {
        padding-left: 3rem;
        width: 14rem;
      }

      h2 {
        font-size: 1.8rem;
        text-align: left;
      }

      p {
        font-size: 0.9rem;
        text-align: left;
      }
    }
  }
`
