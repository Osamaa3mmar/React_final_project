import { Link } from 'react-router-dom'
import style from './sectionHead.module.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function SectionHead({title ,type,subtitle}) {
  return (
    <div className={style.container}>
        <div className={style.start}>
            <div className={style.titleContainer}>
            <div className={style.block}></div>
            <div className={style.title}>
                {title}
                </div>
            </div>
            <div className={style.subTitle}>
                <h3>{subtitle}</h3>
            </div>
        </div>
        <div className={style.end}>
            {type=="btn"?<Link to={"/user/products"} className={style.btn}>View All</Link>:
            ""}
            {type=="arrow"?<div className={style.arrows}>
                <FontAwesomeIcon className={style.arrow} icon={faArrowLeft} />
                <FontAwesomeIcon className={style.arrow} icon={faArrowRight} />
                </div>:''}
        </div>
    
    </div>
  )
}
