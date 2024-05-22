import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import * as S from './style'
import { formatPrice } from '../../util/format'

export function Infos() {
  const { backed, backers } = useContext(MyContext)
  const percentBacked = parseInt(
    ((backed / 100000) * 100).toString().split('.')[0]
  )

  return (
    <S.Infos percentBacked={percentBacked}>
      <div className="main_infos_box">
        <div>
          <h2>
            $
            {parseFloat(
              formatPrice(backed).toString().replace('US', '').replace('$', '')
            )}
          </h2>
          <p>of $100,000 backed</p>
        </div>
        <div className='center_info'>
          <h2>{backers}</h2>
          <p>total backers</p>
        </div>
        <div className='last_info'>
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
