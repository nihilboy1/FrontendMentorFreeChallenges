import { InsertPladge } from './InsertPladge'
import { useEffect, useState } from 'react'
type Props = {
  title: string
  children?: React.ReactNode
  min_pledge?: string
  left?: number | any
  id: number
}

export const ModalStand = ({
  title,
  children,
  min_pledge,
  left,
  id
}: Props) => {
  const [showHideFirstModalInsertPladge, setShowHideFirstModalInsertPladge] =
    useState<boolean>(false)
  const [check, setCheck] = useState<boolean>(true)
  function openCloseFirstModalIsertPladge() {
    const element = document.getElementById(`id${id}`)
    if (showHideFirstModalInsertPladge !== true) {
      setShowHideFirstModalInsertPladge(!showHideFirstModalInsertPladge)
    }
  }

  return (
    <div className="modal_stand_box">
      <div className="header_modal_stand">
        <input
          type="radio"
          className="modal_checkbox"
          name="choice_stand"
          onClick={openCloseFirstModalIsertPladge}
          value={id}
          id={`id${id}`}
        />
        <div className="text_header_box">
          <label>{title}</label>
          <p className="modal_pledge">
            {min_pledge ? `Pledge $${min_pledge} or more` : ''}
          </p>
        </div>
      </div>
      <p>{children}</p>
      <div className="left_box">
        <span>{left}</span>
        <p>{left >= 0 ? 'left' : ''}</p>
      </div>
      <InsertPladge
        showHideFirstModalInsertPladge={showHideFirstModalInsertPladge}
      ></InsertPladge>
    </div>
  )
}
