import styled from "styled-components";

export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.9rem 1rem 1rem 1rem;
  gap: 1.2rem;
  

  h2{
    font-weight: 700;
  }

  p{
    font-size: 0.8rem;
    color: grey;
    line-height: 1.4rem;
  }

  @media (min-width: 1000px) {
    h2{
      font-size: 1.25rem;
    }

    p{
      margin-top: 1rem;
      font-size: 0.93rem;
      line-height: 1.6rem;
    }
  }
`