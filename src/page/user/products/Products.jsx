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
     
    </div>
  );
}
