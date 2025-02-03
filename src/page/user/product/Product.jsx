import { useParams } from "react-router-dom";
import ProductContainer from "../../../component/user/ProducrContainer/ProductContainer";
import SectionHead from "../../../component/user/SectionHead/SectionHead";
import useFetch from "../../../hook/useFetch";
import Loading from "../../../component/user/loading/Loading";
import ProductDetaiels from "./ProductDetaiels";

export default function Product() {
  const {id}=useParams();
  
  const {data,loading,error}=useFetch(`https://ecommerce-node4.onrender.com/products/${id}`);
  console.log(data)


  if(loading){
    return <Loading/>
  }
  else
  return (
    <div className="container">
    {error?<div className="alert alert-dange">{error}</div>:<ProductDetaiels {...data.product}/>}      


  
     
    </div>
  )
}
