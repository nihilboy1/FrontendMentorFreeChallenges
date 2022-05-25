import styled from 'styled-components'

export const SubHeader = styled.div`
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

  h1{
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    width: 90%;
  }

  p{
    font-size: 0.8rem;
    text-align: center;
    color: grey;
    line-height: 1.1rem;
  }

  .mastercraft-logo{
    width: 3.1rem;
    margin-top: -2.8rem;
  }

  .buttons_box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  

    .backthisproject{
      padding: 0.9rem;
      border-radius: 2rem;
      width: 11.9rem;
      background-color: hsl(176, 50%, 47%);
      font-size: 0.9rem;
      font-weight: 700;
      color: white;
    }

    .bookmark{
      display: flex;
      align-items: center;

      img{
        width: 3rem;
      }
      
    }
  }
`
