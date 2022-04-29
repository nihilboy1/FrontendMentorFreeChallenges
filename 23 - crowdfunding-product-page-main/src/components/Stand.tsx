import * as S from '../styles/STYLED/style'

type Props = {
  title: string
  children?: React.ReactNode
  min_pledge: string
  left: number
  available: string
  openCloseFirstModal: any
}
export const Stand = ({
  title,
  children,
  min_pledge,
  left,
  available,
  openCloseFirstModal
}: Props) => {
  return (
    <S.StandDiv left={left} className="stand_box">
      <h3>{title}</h3>
      <p className="pladge">Pledge ${min_pledge} or more</p>
      <p>{children}</p>
      <div className="left_box">
        <span>{left}</span>
        <p>left</p>
      </div>
      <button onClick={left ? openCloseFirstModal : ''}>{available}</button>
    </S.StandDiv>
  )
}
