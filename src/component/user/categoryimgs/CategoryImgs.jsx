import { Link } from 'react-router-dom';
import useFetch from '../../../hook/useFetch'
import Loading from '../loading/Loading';
import style from './cat.module.css'
export default function CategoryImgs() {
    const {data,loading ,error}=useFetch("https://ecommerce-node4.onrender.com/categories/active");
    console.log(data)

    if(loading){
        return <Loading/>
    }
  return (
    <div className="row">
        {error?<div className='alert alert-danger'>{error}</div>:""}
        {data?
        data.categories.map((item)=>{
            return <div key={item.id} className="col-lg-2 col-sm-3">
                <Link to={'/user/'}>
            <img className={style.img+ " img-fluid"} src={item.image.secure_url} alt="" />
            
            </Link>
        </div>
        })
        :' '}
        
      
    </div>
  )
}




