import S from './style.module.scss'

interface GraphBarProps {
  item: {
    day: string
    amount: number
    barHeight: string
  }
}

export function GraphBar({ item }: GraphBarProps) {
  return (
    <div className={S.graphBar}>
      <p className={S.amountPopover}>${item.amount}</p>
      <span
        className={S.spanBox}
        style={{
          height: item.barHeight,
          backgroundColor: item.day === 'wed' ? '#76b5bc' : '#ec775f'
        }}
      ></span>
      <p>{item.day}</p>
    </div>
  )
}
