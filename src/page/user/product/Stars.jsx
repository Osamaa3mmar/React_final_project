import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import style from './pdetaiels.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function Stars({type,number,setReturn}) {
  const [star,setStar]=useState(Math.round(number));
  

  const staring=(count)=>{
    setStar(count)
    setReturn(count);
  }
  const nothing=()=>{
  }
  return (
      
    <div className={style.starCont} >
    <FontAwesomeIcon className={type=='static' || star>=1?style.static:style.dynamic} onMouseMove={type=='static'?nothing:()=>staring(1)} icon={star>=1?solid:regular} />
    <FontAwesomeIcon className={type=='static' || star>=2?style.static:style.dynamic} onMouseMove={type=='static'?nothing:()=>staring(2)} icon={star>=2?solid:regular} />
    <FontAwesomeIcon className={type=='static' || star>=3?style.static:style.dynamic} onMouseMove={type=='static'?nothing:()=>staring(3)} icon={star>=3?solid:regular} />
    <FontAwesomeIcon className={type=='static' || star>=4?style.static:style.dynamic} onMouseMove={type=='static'?nothing:()=>staring(4)} icon={star>=4?solid:regular} />
    <FontAwesomeIcon className={type=='static' || star>=5?style.static:style.dynamic} onMouseMove={type=='static'?nothing:()=>staring(5)} icon={star>=5?solid:regular} />
    </div>
  )
}
