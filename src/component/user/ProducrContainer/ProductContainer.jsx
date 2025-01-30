import useFetch from '../../../hook/useFetch';
import Loading from '../loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
export default function ProductContainer({url}) {
  const {data,loading,error}=useFetch(url);
  console.log(data)

  if(loading){
    return<Loading/>
  }
  return (
    <div className='container'>
    <div className='row '>
        {error?<div className='alert alert-danger'>{error}</div>:""}
        {data?data.products.map((product)=>{
          return <ProductCard key={product._id} {...product}/>
        }):""}
    </div>
    </div>
  )
}
