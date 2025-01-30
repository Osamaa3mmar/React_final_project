import { Link } from 'react-router-dom'
import style from './sectionHead.module.css'
export default function SectionHead({title ,type,subtitle,url}) {
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
            {type=="btn"?<Link to={url} className={style.btn}>View All</Link>:''}
        </div>
    
    </div>
  )
}
