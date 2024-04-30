import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";
import "./swiper.css";

const bannerImages = [
  "https://i.postimg.cc/YqnCPFMf/beautiful-natural-view-landscape-23-2150788100.jpg",
  "https://i.postimg.cc/rwDw2pp6/person-traveling-enjoying-their-vacation-23-2151383050.jpg",
  "https://i.postimg.cc/59m0wGrr/landmark-camera-architecture-view-woman-1150-1218.jpg",
  "https://i.postimg.cc/YSg2jygb/cityscape-1127-4174.jpg",
  "https://i.postimg.cc/vBtQtg0n/may-courtyard-narrow-city-china-1417-245.jpg",
  "https://i.postimg.cc/pL3XWt9m/back-view-traveller-with-hat-enjoying-holiday-23-2148588497.jpg",
  "https://i.postimg.cc/W3vNZ6wj/ancient-hut-decoration-multi-colored-craft-souvenir-generated-by-ai-188544-53308.jpg",
];

const Banner = () => {
  return (
    <div className="w-[98%] lg:max-w-screen-xl mx-auto mt-6 mb-10 h-[350px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper rounded-lg overflow-hidden w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Slide image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
