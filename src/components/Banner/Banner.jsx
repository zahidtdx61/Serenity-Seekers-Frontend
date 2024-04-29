import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./swiper.css";

const Banner = () => {
  const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
      swiper.slideTo(0, 1000, true);
    } else {
      swiper.slideNext(1000, true);
    }
  };

  return (
    <div className="w-[98%] lg:max-w-screen-xl mx-auto mt-6 mb-10 h-[350px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 1000 }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        speed={1000}
        effect="ease"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
