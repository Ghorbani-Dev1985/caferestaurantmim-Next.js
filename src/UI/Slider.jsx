import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SlideImageItems = [
  {
    id: 1,
    href: "/Sliders/slide-1.webp",
  },
  {
    id: 2,
    href: "/Sliders/slide-2.webp",
  },
  {
    id: 3,
    href: "/Sliders/slide-3.webp",
  },
  {
    id: 4,
    href: "/Sliders/slide-4.webp",
  },
  {
    id: 5,
    href: "/Sliders/slide-5.webp",
  },
  {
    id: 6,
    href: "/Sliders/slide-6.webp",
  },
  {
    id: 7,
    href: "/Sliders/slide-7.webp",
  },
];

const Slider = () => {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay, A11y]}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          prevEl: "#SwiperPrevBtnID",
          nextEl: "#SwiperNextBtnID",
          disabledClass: ".swiper-button-disabled",
        }}
        allowSlidePrev
        allowSlideNext
        onReachBeginning={() => {
          setIsStart(true);
        }}
        onReachEnd={() => {
          setIsEnd(true);
        }}
        className="mySwiper mb-5 relative"
      >
        {SlideImageItems.map(({ id, href }) => (
          <SwiperSlide key={id}>
            <Image
              width="1920"
              height="700"
              alt="ghorbani-dev.ir"
              src={href}
              className="object-fill rounded-none"
            />
          </SwiperSlide>
        ))}
        <button
          type="button"
          disabled={isStart}
          id="SwiperPrevBtnID"
          className="size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-10 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 right-10"
        >
          <BiChevronRight />
        </button>
        <button
          type="button"
          disabled={isEnd}
          id="SwiperNextBtnID"
          className="size-10 flex-center bg-white disabled:bg-slate-400 disabled:opacity-50 z-10 text-4xl rounded-full absolute top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 left-10"
        >
          <BiChevronLeft />
        </button>
      </Swiper>
    </>
  );
};

export default Slider;
