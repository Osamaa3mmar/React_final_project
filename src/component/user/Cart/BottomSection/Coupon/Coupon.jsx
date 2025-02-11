import style from './Coupon.module.css'
export default function Coupon() {
  return (
    <form className={'pt-5 '+ style.form }>
      <input type="text"className={style.input} placeholder='Coupon Code' />
        <input type="submit" value={"Apply Coupon"} className={style.submit} />
    </form>
  )
}
