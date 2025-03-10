import { Col, Row } from "react-bootstrap";
import style from './pdetaiels.module.css';
import Stars from "./Stars";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CartContext } from "../../../component/user/Cart/CartContext/CartContext";
export default function ProductDetaiels({_id,subImages,mainImage,name,reviews,finalPrice,description,rate}) {
  console.log(subImages)
  const [current ,setCurrent]=useState(mainImage.secure_url);
  const changeCurrent=(img)=>{
    setCurrent(img);
  }
  const {cartCount,setCartCount}=useContext(CartContext);
  const addToCart=async()=>{
    const toastid=toast.loading(" adding to cart . . . ");
    const token=localStorage.getItem("token");
    try{
      const {data}=await axios.post('https://ecommerce-node4.onrender.com/cart',{
        productId:_id
      },
      {
        headers:{
          Authorization:`Tariq__${token}`
        }
      }
    )
    setCartCount(cartCount+1);
      toast.success("Added to cart successfully!");
      console.log(data)
    }
    catch(e){
      toast.error(e.response.data.message);
      
    }
    finally{
      toast.dismiss(toastid);
    }
  }
  return (
    <div className={style.cont}>
      <Row className="g-4">
        <Col lg={7} md={12} sm={12}className={style.imgCont}>
        {subImages && subImages.length>0?<div className={style.subs}>
          {subImages.map((img)=>{
            return <div key={img.public_id} className={style.imgg}> <img src={img.secure_url} onClick={()=>changeCurrent(img.secure_url)} alt="" className="subImg" /></div>
          })}
        </div>:""}
        
        <div className={style.main}>
          <img src={current} alt="" />
        </div>
        </Col>
        <Col lg={5} md={12} sm={12} className={style.infoCont}>
        <h2 className={style.name}>{name}</h2>
        <div className={style.review}>
            <Stars type={'static'} number={rate} />
            <p className={style.reviewCount}>({reviews?reviews.length:0})</p>
            <p className={style.stock}>in stock </p>
        </div>
        <p className={style.price}>$ {finalPrice}</p>
        <p className="description">
          {description.split(/\s+/).slice(0, 110).join(' ')}      
            </p>
        <div className={style.line}></div>
        <div className={style.btns}>
            <button className={style.add} onClick={addToCart}> Add To Cart</button>
            <div className={style.love}></div>
        </div>
        </Col>
      </Row>
    </div>
  )
}
