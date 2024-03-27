// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import style from "./Swiper.module.scss";

// USER_STORY_DATA = [
//   { id: 1, first_name: "Erma" },
//   { id: 2, first_name: "Graeme" },
//   { id: 3, first_name: "Serge" },
//   { id: 4, first_name: "Harman" },
//   { id: 5, first_name: "Wandie" },
//   { id: 6, first_name: "Lauraine" },
//   { id: 7, first_name: "Katrinka" },
//   { id: 8, first_name: "Orly" },
//   { id: 9, first_name: "Josy" },
// ];

const Slider = () => {
  return (
    <>
      <Swiper
        className={style.slider}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};
export default Slider;
