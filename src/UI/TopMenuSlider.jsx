import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay, A11y } from "swiper/modules";
const TopMenuSlider = ({ children }) => {
  return (
    <>
      <div className="w-full flex h-auto sticky top-20 inset-x-0 z-30 my-8">
        <Swiper
          loop={true}
          spaceBetween={7}
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, A11y]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default TopMenuSlider;
