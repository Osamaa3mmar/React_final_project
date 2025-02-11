import Bottom from "../../../component/user/Cart/BottomSection/Bottom";
import CartTable from "../../../component/user/Cart/Table/CartTable";
import style from './Cart.module.css'
export default function Cart() {
  return (
    <div className={"container "+ style.CartCont }>
     <CartTable/>
     <Bottom/>
    </div>
  )
}
