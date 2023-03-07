import React from "react";
import "./SwiperImage.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const SwiperImage = () => {
  return (
    <div className="image-slider">
      <Swiper>
        <SwiperSlide>Slide-1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImage;
