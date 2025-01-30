import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import style from './productCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import img from '../../../assets/react.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function ProductCard({name,price,discount,mainImage,finalPrice,reviews,_id,avgRating}) {
  var rate=Math.round(avgRating);
  const stars=[];
  
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        className={i < rate ? style.coloredStar : style.star}
        icon={faStar}
      />
    );
  }
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
    <div className={"shadow "+style.card}>
      <div className={style.imageCard}>
        <img  src={mainImage.secure_url} alt="" />
        <div className={style.btnContainer}>
          <button className={style.btn}>Add To Cart</button>
        </div>
        {discount>0?
        <div className={style.discount}>
            <p>-{discount<10?"0"+discount:discount}%</p>
        </div>:""}
        <div className={style.hoverdIcon}>
        <div className={style.iconContainer}>
        <FontAwesomeIcon className={style.icon} icon={faHeart} />
        </div>
        <Link  to={`/products/product/${_id}`}>
        <div className={style.iconContainer}>
        <FontAwesomeIcon className={style.icon} icon={faEye} />
        </div>
        </Link>
        </div>
      </div>
      <div className={style.cardBody}>
        <p className={style.title}>
        {name.split(/\s+/).slice(0, 2).join(" ")}
        </p>
        <div className={style.price}>
            <p className={style.after}>${finalPrice}</p>
            <p className={style.before}>${price}</p>
        </div>
        <div className={style.rate}>
            <div className={style.stars}>
              {stars}
            </div>
            <p className={style.rateNumber}>
                ({reviews.length})
            </p>
        </div>
      </div>
    </div>
    </div>
  )
}
