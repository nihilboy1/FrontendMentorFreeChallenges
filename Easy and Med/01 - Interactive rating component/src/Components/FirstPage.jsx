import { useState } from 'react'
import {
  ContainerCenter_div,
  Container_Image_div,
  Container_Text_main,
  Title_h1,
  Text_p,
  Submit_button,
  ContainerInputs_div,
  ImageBackgroud_div
} from './Styles/Styles'
import RateItem from './RateItem'
import iconstar from '../Images/icon-star.svg'
import '../Components/Styles/Style.css'
import SecondPage from './SecondPage'
function FirstPage() {
  const [state, setState] = useState(false)
  const [value, setValue] = useState('')

  function showUserRespose() {
    setState(true)
  }
  function handleValue(e) {
    setValue(e.target.value)
  }
  return (
    <>
      <ContainerCenter_div>
        <SecondPage Estado={state} valor={value} />
        <Container_Image_div Estado={state}>
          <ImageBackgroud_div>
            <img src={iconstar} alt="" width={14} />
          </ImageBackgroud_div>
        </Container_Image_div>
        <Container_Text_main Estado={state}>
          <Title_h1>How did we do?</Title_h1>
          <Text_p>
            Please, let us know how we did with your support request. All
            feedback is appreciated to help us impove our offering
          </Text_p>
        </Container_Text_main>
        <ContainerInputs_div Estado={state}>
          <RateItem handleValue={handleValue} />
          <Submit_button onClick={showUserRespose} className="submit">
            SUBMIT
          </Submit_button>
        </ContainerInputs_div>
      </ContainerCenter_div>
    </>
  )
}

export default FirstPage
