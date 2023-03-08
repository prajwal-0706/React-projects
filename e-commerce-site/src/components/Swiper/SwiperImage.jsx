import React from "react";
import "./SwiperImage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img_1 from "../../images/img_1.jpg";
import img_2 from "../../images/img_2.jpg";
import img_3 from "../../images/img_3.jpg";
import img_4 from "../../images/img_4.jpg";
import img_5 from "../../images/img_5.jpg";
import img_6 from "../../images/img_6.jpg";

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
          <img src={img_1} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_6} alt="6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImage;
