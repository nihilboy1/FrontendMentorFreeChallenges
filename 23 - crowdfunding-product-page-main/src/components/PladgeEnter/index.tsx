import * as S from './style'

interface PladgeEnterProps {
  checked: boolean
}

export function PladgeEnter({ checked }: PladgeEnterProps) {
  return (
    <S.PladgeEnter className="pladge_box" checked={checked} >
      <h2>Enter your pledge</h2>
      <div className="input_box">
        <div className="dollar_box">
          <p>$</p>
          <input type="number" />
        </div>
        <button>Continue</button>
      </div>
    </S.PladgeEnter>
  )
}
