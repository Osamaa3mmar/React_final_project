import { Link } from "react-router-dom";
import useFetch from "../../../hook/useFetch"
import Loading from "../loading/Loading";
import style from './hero.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
export default function Category() {
    const {loading ,data,error}=useFetch("https://ecommerce-node4.onrender.com/categories");
    console.log(data)

    if(loading){
      return <Loading/>
    }
    else
  return (
    <ul className={style.list}>
    {error?<div className="alert alert-danger">{error}</div>:" "}      
     {data?data.categories.map((cat)=>{
      return <li className={style.item} key={cat.id}><Link to={`/user/category/${cat.id}`} className={style.itemName}>{cat.name}</Link><FontAwesomeIcon className={style.itemIcon} icon={faCaretRight} /></li>
     }):''}
    </ul>
  )
}
