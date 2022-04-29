import * as S from '../styles/STYLED/style'
type Props = {
  showHideFirstModalInsertPladge: any
}

export const InsertPladge = ({ showHideFirstModalInsertPladge }: Props) => {
  return (
    <>
      <S.InsertPladgeBox
        showHideFirstModalInsertPladge={showHideFirstModalInsertPladge}
        className="insertvalue_div"
      >
        <h2>Enter your pledge</h2>
        <div className="intern_inservalue_div">
          <div className="input_div">
            <p>$</p>
            <input maxLength={3} step="1" type="text" placeholder="..." />
          </div>
          <button>Continue</button>
        </div>
      </S.InsertPladgeBox>
    </>
  )
}
