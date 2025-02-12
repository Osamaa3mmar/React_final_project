import React from 'react'
import CartHeadder from './CartHeadder/CartHeadder'
import style from './carttable.module.css'
import CartRow from './CartRow/CartRow'
export default function CartTable({data,removeItem}) {
  
  return (
    <div className={style.table}>
      <CartHeadder/>
      <div>
      {data.map((product ,index)=>{
        return <CartRow onClick={removeItem} key={index} {...product}/>
      })}
      </div>
    </div>
  )
}
