import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import TopMenuSlider from "@/UI/TopMenuSlider";

const topMenuItems = [
  {
    id: 1,
    src: "/RestaurantMenu/RestaurantMenu-01.webp",
    link: "appetizer",
  },
  {
    id: 2,
    src: "/RestaurantMenu/RestaurantMenu-02.webp",
    link: "pizza",
  },
  {
    id: 3,
    src: "/RestaurantMenu/RestaurantMenu-03.webp",
    link: "sandwich",
  },
  {
    id: 4,
    src: "/RestaurantMenu/RestaurantMenu-04.webp",
    link: "burger",
  },
  {
    id: 5,
    src: "/RestaurantMenu/RestaurantMenu-05.webp",
    link: "steak",
  },
  {
    id: 6,
    src: "/RestaurantMenu/RestaurantMenu-06.webp",
    link: "pasta",
  },
  {
    id: 7,
    src: "/RestaurantMenu/RestaurantMenu-07.webp",
    link: "#",
  },
  {
    id: 8,
    src: "/RestaurantMenu/RestaurantMenu-08.webp",
    link: "#",
  },
  {
    id: 9,
    src: "/RestaurantMenu/RestaurantMenu-09.webp",
    link: "#",
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
