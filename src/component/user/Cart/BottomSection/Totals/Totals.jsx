import style from './Totalse.module.css'
export default function Totals({products}) {

  let total=0;
  let discount=0; 
  let final=0;
  console.log(products)
  products.forEach((item)=>{
    total+=item.quantity*item.details.price;
    final+=item.quantity*item.details.finalPrice;
    discount+=item.quantity*item.details.price*(item.details.discount/100);
  })
console.log(total);
console.log(discount);


  return (
    <div className={style.totalsCont}>
      <h3 className={style.head}>Cart Total</h3>
      <div className={style.priceInfo}>
        <p className={style.text}>Subtotal:</p>
        <p className={style.price}>${total}</p>
      </div>
      <div className={style.line}></div>
      <div className={style.priceInfo}>
        <p className={style.text}>Discounts:</p>
        <p className={style.price}>${discount}</p>
      </div>
      <div className={style.line}></div>
      <div className={style.priceInfo}>
        <p className={style.text}>Total:</p>
        <p className={style.price}>${final}</p>
      </div>
      {/* <button className={style.submit}>Procees to checkout</button> */}
    </div>
  )
}
