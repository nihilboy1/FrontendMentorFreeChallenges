import styled from 'styled-components'

export const ContainerCenter_div = styled.div`
  padding: 20px;
  width: 310px;
  height: 310px;
  border-radius: 20px;
  background-color: hsl(213, 35%, 12%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const Container_Image_div = styled.div`
  display: ${props => {
    return props.Estado ? 'none' : 'flex'
  }};
  flex-direction: column;
  margin-bottom: 5px;
  height: 22%;
`

export const Container_Text_main = styled.main`
  display: ${props => {
    return props.Estado ? 'none' : 'flex'
  }};
  flex-direction: column;
  margin-bottom: 5px;
  height: 35%;
  margin-bottom: 25px;
`
export const Container_Center_Page2 = styled.div`
  display: ${props => {
    return props.Estado ? 'flex' : 'none'
  }};
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ContainerInputs_div = styled.div`
  display: ${props => {
    return props.Estado ? 'none' : 'flex'
  }};
  flex-direction: column;
  height: 40%;
`

export const ImageBackgroud_div = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: hsl(216, 12%, 21%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title_h1 = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const Text_p = styled.p`
  color: hsl(217, 12%, 63%);
  font-size: 12px;
`
export const Submit_button = styled.button`
  &:hover.submit {
    width: 105%;
  }

  &:active.submit {
    color: hsl(25, 97%, 53%);
    background-color: white;
  }

  background-color: hsl(25, 97%, 53%);
  padding: 10px;
  border-radius: 20px;
  color: white;
  letter-spacing: 2px;
  align-self: center;
  width: 100%;
  transition: width 400ms, color 400ms, background-color 400ms;
  cursor: pointer;
`
