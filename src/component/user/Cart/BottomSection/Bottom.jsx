import Coupon from './Coupon/Coupon'
import style from './Bottom.module.css'
import Totals from './Totals/Totals'
export default function Bottom({data}) {
  return (
    <div className={style.CartCont}>
      <Coupon/>
      <Totals {...data}/>
    </div>
  )
}
