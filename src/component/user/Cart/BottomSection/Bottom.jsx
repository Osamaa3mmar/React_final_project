import React from 'react'
import Coupon from './Coupon/Coupon'
import style from './Bottom.module.css'
import Totals from './Totals/Totals'
export default function Bottom() {
  return (
    <div className={style.CartCont}>
      <Coupon/>
      <Totals/>
    </div>
  )
}
