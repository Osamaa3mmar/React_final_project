import { useParams } from "react-router-dom"
import useFetch from "../../../hook/useFetch";
import Loading from "../../../component/user/loading/Loading";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../../component/user/ProductCard/ProductCard";
import style from './pwith.module.css';
export default function ProductWithCat() {
  const {catId}=useParams();
  const {data,loading,error}=useFetch(`https://ecommerce-node4.onrender.com/products/category/${catId}`);
  console.log(data);
  if(loading){
    return <Loading/>
  }
  else if(error){
    return <div className="alert alert-danger">{error}</div>
  }
  else
  return (
    <div className="container">
      <Row>
        {data?data.products.length==0?<div className={style.cont}><p className={style.text}>No product with this Category</p> </div>:data.products.map((product,index)=>{
          return <Col lg={3} md={4} sm={6} key={index}>
            <ProductCard {...product}/>
          </Col> 
        }):''}
        </Row>
    </div>
  )
}
