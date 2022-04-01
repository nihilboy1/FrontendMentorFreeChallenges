import './styles/index.css'
import mobilegirlimage from './images/illustration-woman-online-mobile.svg'
import mobileshadow from './images/bg-pattern-mobile.svg'
import desktopshadow from './images/bg-pattern-desktop.svg'
import desktopgirlimage from './images/illustration-woman-online-desktop.svg'
import box_box from './images/illustration-box-desktop.svg'
import Question from './components/Question'

function App() {
  return (
    <>
      <div className="caixa_da_caixa">
        <img src={box_box} className="box_box" alt="" />
        </div>


        <div className="main_box">
          <img
            src={mobileshadow}
            alt="mobile shadow"
            className="mobile_shadow"
          />
          <img
            id="mobile_girl_image"
            src={mobilegirlimage}
            alt="mobile girl image"
          />
          <img
            src={desktopgirlimage}
            alt="desktopgirlimage"
            className="desktopgirlimage"
          />
          <img
            className="desktopshadow"
            src={desktopshadow}
            alt="desktopshadow"
          />
          <section className="content_box">
            <h1 id="faq" className="darkcolor">
              FAQ
            </h1>
            <Question
              pos={'0'}
              question={`How many team members can i invite?`}
            >
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </Question>
            <Question
              pos={'1'}
              question={`What is the maximum file upload size?`}
            >
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </Question>
            <Question pos={'2'} question={`How do i reset my password?`}>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </Question>
            <Question pos={'3'} question={`Can i cancel my subscription?`}>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </Question>
            <Question pos={'4'} question={`Do you provide additional support?`}>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </Question>
          </section>
      </div>
    </>
  )
}

export default App
