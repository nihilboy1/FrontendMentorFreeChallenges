import { useEffect, useState } from 'react'
import * as S from '../styles/STYLED/style'

type Props = {
  openCloseFirstModal: (e: any) => void
}

export const ModalStand = ({ openCloseFirstModal }: Props) => {
  const [secondLeft, setSecondLeft] = useState<number>(101)
  const [thirdLeft, setThirdLeft] = useState<number>(64)
  const [fourLeft, setFourLeft] = useState<number>(0)
  const [openClosePladge, setOpenClosePladge] = useState<number>(0)

  function openClosePledgeBoxes(e: any) {
    setOpenClosePladge(parseInt(e.target.value))
  }

  return (
    <>
      <S.FirstStandBox
        openClosePladge={openClosePladge}
        className="modal_stand_box"
      >
        <div className="header_modal_stand">
          <input
            type="radio"
            className="modal_checkbox"
            name="choice_stand"
            value={1}
            onClick={secondLeft > 0 ? openClosePledgeBoxes : undefined}
          />
          <div className="text_header_box">
            <label>Pledge with no reward</label>
            <p className="modal_pledge"></p>
          </div>
        </div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        <div className="left_box">
          <span></span>
          <p></p>
        </div>
        <section id="first_insert_value_div" className="insertvalue_div">
          <h2>Enter your pledge</h2>
          <div className="intern_insertvalue_div">
            <div className="input_div">
              <p>$</p>
              <input maxLength={3} step="1" type="text" placeholder="..." />
            </div>
            <button>Continue</button>
          </div>
        </section>
      </S.FirstStandBox>
      <S.SecondStandBox
        secondLeft={secondLeft}
        openClosePladge={openClosePladge}
        className="modal_stand_box"
      >
        <div className="header_modal_stand">
          <input
            type="radio"
            className="modal_checkbox"
            name="choice_stand"
            value={2}
            onClick={secondLeft > 0 ? openClosePledgeBoxes : undefined}
          />
          <div className="text_header_box">
            <label>Bamboo Stand</label>
            <p className="modal_pledge">Pledge $25 or more</p>
          </div>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div className="left_box">
          <span>{secondLeft}</span>
          <p>left</p>
        </div>
        <section className="insertvalue_div">
          <h2>Enter your pledge</h2>
          <div className="intern_insertvalue_div">
            <div className="input_div">
              <p>$</p>
              <input maxLength={3} step="1" type="text" placeholder="..." />
            </div>
            <button>Continue</button>
          </div>
        </section>
      </S.SecondStandBox>
      <S.ThirdStandBox
        thirdLeft={thirdLeft}
        openClosePladge={openClosePladge}
        className="modal_stand_box"
      >
        <div className="header_modal_stand">
          <input
            type="radio"
            className="modal_checkbox"
            name="choice_stand"
            value={3}
            onClick={thirdLeft > 0 ? openClosePledgeBoxes : undefined}
          />
          <div className="text_header_box">
            <label>Black Edition Stand</label>
            <p className="modal_pledge">Pledge $75 or more</p>
          </div>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div className="left_box">
          <span>{thirdLeft}</span>
          <p>left</p>
        </div>
        <section className="insertvalue_div">
          <h2>Enter your pledge</h2>
          <div className="intern_insertvalue_div">
            <div className="input_div">
              <p>$</p>
              <input maxLength={3} step="1" type="text" placeholder="..." />
            </div>
            <button>Continue</button>
          </div>
        </section>
      </S.ThirdStandBox>
      <S.FourStandBox
        fourLeft={fourLeft}
        openClosePladge={openClosePladge}
        className="modal_stand_box"
      >
        <div className="header_modal_stand">
          <input
            type="radio"
            className="modal_checkbox"
            name="choice_stand"
            value={4}
            onClick={fourLeft > 0 ? openClosePledgeBoxes : undefined}
          />
          <div className="text_header_box">
            <label>Mahogany Special Edition</label>
            <p className="modal_pledge">Pledge $200 or more</p>
          </div>
        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="left_box">
          <span>{fourLeft}</span>
          <p>left</p>
        </div>
        <section className="insertvalue_div">
          <h2>Enter your pledge</h2>
          <div className="intern_insertvalue_div">
            <div className="input_div">
              <p>$</p>
              <input maxLength={3} step="1" type="text" placeholder="..." />
            </div>
            <button>Continue</button>
          </div>
        </section>
      </S.FourStandBox>
    </>
  )
}
