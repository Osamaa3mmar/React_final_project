import { useEffect, useState } from "react";
import Totals from "../../../component/user/Cart/BottomSection/Totals/Totals";
import Detailes from "../../../component/user/placeOrder/Detailes";
import Loading from "../../../component/user/loading/Loading";
import axios from "axios";
import style from './p.module.css'
export default function PlaceOrder() {
  const [products,setProducts]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

const getProducts=async ()=>{
  try{
    const {data}=await axios.get('https://ecommerce-node4.onrender.com/cart',{
      headers:{
        Authorization:`Tariq__${localStorage.getItem('token')}`
      }
    })
    console.log(data)
    setProducts(data.products);
  }
  catch(e){
    setError(e.message);
  }
  finally{
    setLoading(false);
  }
}

  useEffect(()=>{
  getProducts();
  },[])
  if(loading){
    return <Loading />;
  }
  return (
    <div className={`container ${style.cont}`}>
    {error?<div className="alert alert-danger">{error}</div>:
    <div className={style.inCont}>
      <Detailes className={style.detailes}/>
      <Totals products={products}/>
    </div>}  
    </div>
  )
}
