import React from "react";
import "./SwiperImage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperImage = () => {
  return (
    <div className="image-slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="https://www.pexels.com/photo/green-tree-268533/" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide-2</SwiperSlide>
        <SwiperSlide>Slide-3</SwiperSlide>
        <SwiperSlide>Slide-4</SwiperSlide>
        <SwiperSlide>Slide-5</SwiperSlide>
        <SwiperSlide>Slide-6</SwiperSlide>
        <SwiperSlide>Slide-7</SwiperSlide>
        <SwiperSlide>Slide-8</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImage;
