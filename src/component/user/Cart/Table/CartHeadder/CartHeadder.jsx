import style from './Headder.module.css'
export default function CartHeadder() {
  return (
    <div className={style.headderContainer}>
      <p className={style.headderTitle}>Product</p>
      <p className={style.headderTitle}>Price</p>
      <p className={style.headderTitle}>Quantity</p>
      <p className={style.headderTitle}>Subtotal</p>
    </div>
  )
}
