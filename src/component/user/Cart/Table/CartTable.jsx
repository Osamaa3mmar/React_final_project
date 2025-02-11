import React from 'react'
import CartHeadder from './CartHeadder/CartHeadder'
import style from './carttable.module.css'
export default function CartTable() {
  return (
    <div className={style.table}>
      <CartHeadder/>
    </div>
  )
}
