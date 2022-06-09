import S from './style.module.scss'
import data from '../../data.json'
import { GraphBar } from '../GraphBar'

export function Content() {
  return (
    <main className={S.contentBox}>
      <h1>Spending - Last 7 days</h1>
      <div className={S.graphBox}>
        {data.map(item => {
          return <GraphBar key={item.day} item={item} />
        })}
      </div>
      <footer>
        <div>
          <p className={S.lowerParagraph}>Total this month</p>
          <p className={S.totalAmount}>$478.33</p>
        </div>
        <div>
          <p className={S.lastMountPercent}>+2.4%</p>
          <p className={S.lowerParagraph}>from last month</p>
        </div>
      </footer>
    </main>
  )
}
