import { Col, Row } from "react-bootstrap";
import style from './pdetaiels.module.css';
import Stars from "./Stars";
import { color } from "framer-motion";
export default function ProductDetaiels({subImages,mainImage,name,reviews,finalPrice,description,colors,sizes}) {
  console.log(subImages)
  return (
    <div>
      <Row className="g-4">
        <Col lg={7} md={12} sm={12}className={style.imgCont}>
        {subImages && subImages.length>0?<div className={style.subs}>
          {subImages.map((img)=>{
            return <div key={img.public_id}> <img src={img.secure_url} alt="" className="subImg" /></div>
          })}
        </div>:""}
        
        <div className="main">
          <img src={mainImage.secure_url} alt="" />
        </div>
        </Col>
        <Col lg={5} md={12} sm={12}>
        <h2 className={style.name}>{name}</h2>
        <div className={style.review}>
            <Stars/>
            <p className={style.reviewCount}>({reviews?reviews.length:0})</p>
            <p className={style.stock}>in stock </p>
        </div>
        <p className={style.price}>${finalPrice}</p>
        <p className="description">
          {description}      
            </p>
        <div className={style.line}>-----------</div>
        {colors?<div className={style.colors}>
            
            {colors.length>0?colors.map((col)=>{return <div className={style.color}></div> }):''}
        </div>:''}
        


        
        {sizes?<div className={style.sizes}>
            
            {sizes.length>0?sizes.map((col)=>{return <div className={style.size}></div> }):''}
        </div>:''}
        <div className={style.btns}>
            <button className={style.add}> Add To Cart</button>
            <div className={style.love}></div>
        </div>
        </Col>
      </Row>
    </div>
  )
}
