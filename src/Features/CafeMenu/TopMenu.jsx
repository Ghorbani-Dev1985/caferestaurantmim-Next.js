import React from "react";
import TopMenuSlider from "@/UI/TopMenuSlider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const topMenuItems = [
  {
    id: 1,
    src: "/CafeMenu/cafeMenu-01.webp",
    link: "coffee",
  },
  {
    id: 2,
    src: "/CafeMenu/cafeMenu-02.webp",
    link: "hot",
  },
  {
    id: 3,
    src: "/CafeMenu/cafeMenu-03.webp",
    link: "damnosh",
  },
  {
    id: 4,
    src: "/CafeMenu/cafeMenu-04.webp",
    link: "milkShake",
  },
  {
    id: 5,
    src: "/CafeMenu/cafeMenu-05.webp",
    link: "smoothie",
  },
  {
    id: 6,
    src: "/CafeMenu/cafeMenu-06.webp",
    link: "iceCoffee",
  },
  {
    id: 7,
    src: "/CafeMenu/cafeMenu-07.webp",
    link: "cake",
  },
  {
    id: 8,
    src: "/CafeMenu/cafeMenu-08.webp",
    link: "vafel",
  },
  {
    id: 9,
    src: "/CafeMenu/cafeMenu-09.webp",
    link: "makatel",
  },
];
const TopMenu = () => {
  return (
    <>
      <TopMenuSlider>
        {topMenuItems.map(({ id, src, link }) => (
          <SwiperSlide key={id} className="rounded-full">
            <Link href={`#${link}`}>
              <Image
                width={512}
                height={512}
                alt="ghorbani-dev.ir"
                placeholder="blur"
                blurDataURL={src}
                src={src}
                className="object-fill rounded-lg"
              />
            </Link>
          </SwiperSlide>
        ))}
      </TopMenuSlider>
    </>
  );
};

export default TopMenu;
