import * as S from "./style"

export function Infos() {
  return (
    <S.Infos>
      <div className="main_infos_box">
        <div>
          <h2>$89,914</h2>
          <p>of $100,000 backed</p>
        </div>
        <div>
          <h2>5,007</h2>
          <p>total backers</p>
        </div>
        <div>
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <div className="loading_box">
        <div className="loading_bar"></div>
      </div>
    </S.Infos>
  )
}
