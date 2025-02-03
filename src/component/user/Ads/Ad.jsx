import { Link } from "react-router-dom";
import style1 from '../HeroSection/hero.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import style from './ad.module.css'
export default function Ad({img,title,description}) {
  return (
    <div className={style.container}>
      

    <img src={img} alt="" className="img-fluid" />

      <div className={style.float}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link className={style1.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
      </div>







    </div>
  )
}
