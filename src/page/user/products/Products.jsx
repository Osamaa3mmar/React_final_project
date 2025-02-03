import { useEffect, useState } from "react";
import { Navigation, A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ScrollReveal from 'scrollreveal'

export default function Products() {
  const [swiperRef, setSwiperRef] = useState(null);
  useEffect(() => {
    ScrollReveal().reveal(".osama");
  }, []);  

  return (
    <div>
      <Swiper
        
        spaceBetween={50}
        slidesPerView={3}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSwiperRef(swiper)} // Store Swiper instance
      >
        <SwiperSlide><div className="osama">slide1</div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => swiperRef?.slidePrev()}>Previous Slide</button>
        <button onClick={() => swiperRef?.slideNext()}>Next Slide</button>
      </div>
    </div>
  );
}
