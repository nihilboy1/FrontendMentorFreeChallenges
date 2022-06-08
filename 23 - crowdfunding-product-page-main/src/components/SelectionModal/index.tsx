import * as S from './style'
import { Popover } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { SelectionModalOption } from './SelectionModalOption'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

import closeModalImg from '../../images/icon-close-modal.svg'

export function SelectionModal() {
  const [plan, setPlan] = useState('')

  const {
    resetInputPladge,
    bamboostandleft,
    setBamboostandleft,
    blackeditionleft,
    setBlackeditionleft,
    mahoganyditionleft,
    setMahoganyditionleft
  } = useContext(MyContext)

  useEffect(() => {
    resetInputPladge()
  }, [])

  return (
    <S.SelectionModal>
      <header className="modal_header">
        <div>
          <h2 className="modal_title">Back this project</h2>
          <Popover.Button>
            <img src={closeModalImg} alt="" />
          </Popover.Button>
        </div>
        <p className="modal_description">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </header>
      <RadioGroup value={plan} onChange={setPlan}>
        <RadioGroup.Option
          value="pledge_with_no_reward"
          className="radio_group_option"
        >
          {({ checked }) => (
            <SelectionModalOption
              description="Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email."
              title="Pledge with no reward"
              checked={checked}
              minpladge={1}
              left={null}
            />
          )}
        </RadioGroup.Option>

        <RadioGroup.Option value="bamboo_stand" className="radio_group_option">
          {({ checked }) => (
            <SelectionModalOption
              description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you'll be added to a special Backer member list."
              title="Bamboo Stand"
              left={bamboostandleft}
              setLeft={setBamboostandleft}
              minpladge={25}
              checked={checked}
            />
          )}
        </RadioGroup.Option>

        <RadioGroup.Option
          value="black_edition_stand"
          className="radio_group_option"
        >
          {({ checked }) => (
            <SelectionModalOption
              description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer 
              member list. Shipping is included."
              title="Black Edition Stand"
              left={blackeditionleft}
              setLeft={setBlackeditionleft}
              minpladge={75}
              checked={checked}
            />
          )}
        </RadioGroup.Option>

        <RadioGroup.Option
          value="mahogany_special_edition"
          className="radio_group_option"
        >
          {({ checked }) => (
            <SelectionModalOption
              description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added 
              to our Backer member list. Shipping is included."
              title="Mahogany Special Edition"
              left={mahoganyditionleft}
              setLeft={setMahoganyditionleft}
              minpladge={200}
              checked={checked}
            />
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </S.SelectionModal>
  )
}
