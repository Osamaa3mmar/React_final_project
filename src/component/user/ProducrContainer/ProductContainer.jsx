import useFetch from '../../../hook/useFetch';
import Loading from '../loading/Loading';
import ProductCard from '../ProductCard/ProductCard'; 

export default function ProductContainer({url}) {
  const {data,loading,error}=useFetch(url);
  
  if(loading){
    return<Loading/>
  }
  return (
    <div className='container'>
    <div className='row '>
        {error?<div className='alert alert-danger'>{error}</div>:""}
        {data&&data.products.length>0?data.products.map((product,index)=>{
          return <ProductCard key={product._id} dellay={index} {...product}/>
        }):<div className='alert alert-info'>there is no related product or there is an erorr</div>}
    </div>
    </div>
  )
}
