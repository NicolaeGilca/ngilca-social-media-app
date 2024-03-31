// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import style from "./Swiper.module.scss";
import { useState } from "react";

import story2 from "../../../../assets/story/story2.jpg";
import story3 from "../../../../assets/story/story3.jpg";
import story4 from "../../../../assets/story/story4.jpg";
import story1 from "../../../../assets/story/story1.jpg";
import story5 from "../../../../assets/story/story5.jpg";

import profile2 from "../../../../assets/profile/profile2.jpg";
import profile3 from "../../../../assets/profile/profile3.jpg";
import profile4 from "../../../../assets/profile/profile4.jpg";
import profile1 from "../../../../assets/profile/profile1.jpg";
import profile5 from "../../../../assets/profile/profile5.jpg";
import { NavLink } from "react-router-dom";

const USER_STORY_DATA = [
  {
    id: 1,
    first_name: "Katti",
    profile_image: profile1,
    story_image: story1,
  },
  {
    id: 2,
    first_name: "Ruby",
    profile_image: profile2,
    story_image: story2,
  },
  {
    id: 3,
    first_name: "Kerrill",
    profile_image: profile3,
    story_image: story3,
  },
  {
    id: 4,
    first_name: "Carling",
    profile_image: profile4,
    story_image: story4,
  },
  {
    id: 5,
    first_name: "Dredi",
    profile_image: profile5,
    story_image: story5,
  },
  {
    id: 6,
    first_name: "Katti",
    profile_image: profile1,
    story_image: story1,
  },
  {
    id: 7,
    first_name: "Ruby",
    profile_image: profile2,
    story_image: story2,
  },
  {
    id: 8,
    first_name: "Kerrill",
    profile_image: profile3,
    story_image: story3,
  },
  {
    id: 9,
    first_name: "Carling",
    profile_image: profile4,
    story_image: story4,
  },
  {
    id: 10,
    first_name: "Dredi",
    profile_image: profile5,
    story_image: story5,
  },
];

const Slider = () => {
  const [listOfStory] = useState(USER_STORY_DATA);
  return (
    <>
      <Swiper
        className={style.slider}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
      >
        {listOfStory &&
          listOfStory.map((story) => {
            return (
              <SwiperSlide className={style.slideItem} key={story.id}>
                <div className={styles.storyContainer}>
                  <div className={styles.storyMainImage}>
                    <img
                      className={style.storyImg}
                      width="100"
                      src={story.story_image}
                      alt="img"
                    />
                    <NavLink to="/user" className={style.storyProfileImage}>
                      <img
                        className={style.storyProfile}
                        width="100"
                        src={story.profile_image}
                        alt="img"
                      />
                      <span className={style.storyProfileName}>
                        {story.first_name}
                      </span>
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default Slider;
