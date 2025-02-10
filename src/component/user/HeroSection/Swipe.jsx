import iphone from '../../../public/homepage/iphone.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-flip'
import style from './hero.module.css'
import { EffectFlip, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Swipe() {
  return (
    <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}

      
      className={style.swiper}
    >
      
      <SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide><SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide><SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide><SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide><SwiperSlide className={style.swipeElement}>
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className={style.content}>
            <div className={style.logo}>
            <FontAwesomeIcon className={style.apple} icon={faApple} />
              <p>iPhone 14 Series</p>
            </div>
            <h2>Up to 10% off Voucher</h2>
            <Link className={style.shop} >Shop Now <FontAwesomeIcon icon={faRightLong} /></Link>
          </div>
          </div>
          <div className={"col-lg-7 "+ style.img}>
            <img src={iphone} className={'img-fluied img-fluid '} alt="" />
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}
