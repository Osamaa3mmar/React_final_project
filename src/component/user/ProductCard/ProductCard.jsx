import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './productCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function ProductCard({ dellay, name, price, discount, mainImage, finalPrice, reviews, _id, avgRating }) {
  const rate = Math.round(avgRating);
  const stars = [];
  const [click,setClick]=useState(false);
  const addToCart=async()=>{
    setClick(true);
    const toastid=toast.loading(" adding to cart . . . ");
    const token=localStorage.getItem("token");
    try{
      const {data}=await axios.post('https://ecommerce-node4.onrender.com/cart',{
        productId:_id
      },
      {
        headers:{
          Authorization:`Tariq__${token}`
        }
      }
    )
      toast.success("Added to cart successfully!");
      console.log(data)
    }
    catch(e){
      toast.error(e.response.data.message);
      
    }
    finally{
      setClick(false);
      toast.dismiss(toastid);
    }
  }

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
   
      <div className={'shadow ' + style.card}>
        <div className={style.imageCard}>
          <img src={mainImage.secure_url} alt="" />
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={click? null:addToCart}>Add To Cart</button>
          </div>
          {discount > 0 ? (
            <div className={style.discount}>
              <p>-{discount < 10 ? '0' + discount : discount}%</p>
            </div>
          ) : (
            ''
          )}
          <div className={style.hoverdIcon}>
            <div className={style.iconContainer}>
              <FontAwesomeIcon className={style.icon} icon={faHeart} />
            </div>
            <Link to={`/user/product/${_id}`}>
              <div className={style.iconContainer}>
                <FontAwesomeIcon className={style.icon} icon={faEye} />
              </div>
            </Link>
          </div>
        </div>
        <div className={style.cardBody}>
          <p className={style.title}>
            {name.split(/\s+/).slice(0, 2).join(' ')}
          </p>
          <div className={style.price}>
            <p className={style.after}>${finalPrice}</p>
            <p className={style.before}>${price}</p>
          </div>
          <div className={style.rate}>
            <div className={style.stars}>{stars}</div>
            <p className={style.rateNumber}>({reviews.length})</p>
          </div>
        </div>
      </div>
   
  );
}
