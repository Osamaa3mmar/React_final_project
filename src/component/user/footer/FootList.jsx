import React from 'react'
import style from "./footer.module.css";

export default function FootList({headder,content}) {
  return (

    <div className='col-lg-2 col-md-4 col-sm-6'>
        <h3 className={style.subLogo}>{headder}</h3>
    <ul className={style.list}>
      {content.map((cont)=>{
        return <li className={style.item} key={cont}>{cont}</li>
      })}
    </ul>
    </div>
  )
}
