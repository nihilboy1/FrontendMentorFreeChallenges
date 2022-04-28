type Props = {
  title: string
  children?: React.ReactNode
  min_pledge: string
  left: number
  available: string
}
export const Stand = ({
  title,
  children,
  min_pledge,
  left,
  available
}: Props) => {
  return (
    <div className="stand_box">
      <h3>{title}</h3>
      <p className="pladge">Pledge ${min_pledge} or more</p>
      <p>{children}</p>
      <div className="left_box">
        <span>{left}</span>
        <p>left</p>
      </div>
      <button>{available}</button>
    </div>
  )
}
