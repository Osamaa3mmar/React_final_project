import { useParams } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
import Loading from "../../../component/user/loading/Loading";
import ProductDetaiels from "./ProductDetaiels";
import CommentContainer from "../../../component/user/Comments/CommentContainer";

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
    {error?<div className="alert alert-danger">{error}</div>:<ProductDetaiels {...data.product} rate={data.avgRating}/>}      
    {error?<div className="alert alert-danger">{error}</div>:<CommentContainer reviews={data.product.reviews}/>}

  
     
    </div>
  )
}
