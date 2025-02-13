import { useContext, useEffect, useState } from "react";
import Bottom from "../../../component/user/Cart/BottomSection/Bottom";
import CartTable from "../../../component/user/Cart/Table/CartTable";
import style from './Cart.module.css'
import Loading from "../../../component/user/loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import empty from '../.././../public/cart/empty-cart.png'
import { CartContext } from "../../../component/user/Cart/CartContext/CartContext";
export default function Cart() {
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  const {cartCount,setCartCount}=useContext(CartContext);
  const removeItem=async(id)=>{
    
    try{
     const tId=toast.loading("Removing Item . . .");
      await axios.patch(
        'https://ecommerce-node4.onrender.com/cart/removeItem',
        {
          productId:id
        },
        {
            headers: {
                Authorization: `Tariq__${localStorage.getItem('token')}`
            }
        }
        

    );
    setCartCount(prev=>prev==0?0:prev-1);
      setData(prevdata=>({...prevdata,products:prevdata.products.filter((item)=>{return item.productId !=id})}));
      toast.dismiss(tId);
      toast.success("Item Deleted !");
    }
    catch(e){
      toast.error(e.message);
    }
    finally{
      setLoading(false);
    }
  }
  const clearCart=async ()=>{
    setLoading(true);
    try{
     
      await axios.patch(
        'https://ecommerce-node4.onrender.com/cart/clear',
        {},
        {
            headers: {
                Authorization: `Tariq__${localStorage.getItem('token')}`
            }
        }
    );
      setCartCount(0);
      toast.success("Cart Empty Now ")
      setData({count:0,products:[]});
      setError(null);
    }
    catch(e){
      setData(null);
      setError(e.message);
    }
    finally{
      setLoading(false);
    }
  }
  const getCart=async ()=>{
    try{
      const {data}= await axios.get('https://ecommerce-node4.onrender.com/cart',{
        headers:{
          Authorization:`Tariq__${localStorage.getItem('token')}`
        }
      });
      console.log(data)
      setData(data);
      setError(null);
    }
    catch(e){
      setData(null);
      setError(e.message);
    }
    finally{
      setLoading(false);
    }
  }

  


  useEffect(()=>{
    getCart();
  },[]);

  if(loading){
    return <div className={style.lod}><Loading/></div>
  }
  else
  return (
    <div className={"container "+ style.CartCont }>
      {error?<div className="alert alert-danger">{error}</div>:''}
      {data && data.products.length>0?
      <span>
        <CartTable removeItem={removeItem} data={data.products}/>
        <div className={style.btns}>
          <Link className={style.btn}to={'/user'}>Return To Shop</Link>
          <button className={style.btn} onClick={clearCart} >Clear Cart</button>
        </div>
        
      </span>
      :data.products.length==0?<div className={style.empty}><img src={empty}/>
      <p> Your Cart <span>Empty</span> </p>
      <Link className={style.btn}to={'/user'}>Return To Shop</Link>

      </div>:''}
     
     
    </div>
  )
}
