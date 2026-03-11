import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
       loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
    >
      <SwiperSlide>
        <img
          className="min-h-65 rounded h-[55vh] sm:h-[60vh] md:h-[90vh] lg:h-[80vh] w-full md:w-6xl mx-auto"
          src="3.jpg"
          alt="HeroImg 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="min-h-65 rounded h-[55vh] sm:h-[60vh] md:h-[90vh] lg:h-[80vh] w-full md:w-6xl mx-auto"
          src="2.jpg"
          alt="HeroImg 2"
        />
      </SwiperSlide>
      <SwiperSlide className="mb-8">
        <img
          className="min-h-65 rounded h-[55vh] sm:h-[60vh] md:h-[90vh] lg:h-[80vh] w-full md:w-6xl mx-auto"
          src="1.jpg"
          alt="HeroImg 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
