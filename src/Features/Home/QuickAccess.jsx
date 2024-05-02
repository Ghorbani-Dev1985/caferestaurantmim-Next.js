import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/UI/Title";

const MainMenuItems = [
  {
    id: 1,
    src: "RestaurantMenu-01.webp",
    link: "appetizer",
  },
  {
    id: 2,
    src: "RestaurantMenu-02.webp",
    link: "pizza",
  },
  {
    id: 3,
    src: "RestaurantMenu-03.webp",
    link: "sandwich",
  },
  {
    id: 4,
    src: "RestaurantMenu-04.webp",
    link: "burger",
  },
  {
    id: 5,
    src: "RestaurantMenu-05.webp",
    link: "steak",
  },
  {
    id: 6,
    src: "RestaurantMenu-06.webp",
    link: "pasta",
  },
  {
    id: 7,
    src: "RestaurantMenu-10.webp",
    link: "appetizer",
  },
  {
    id: 8,
    src: "RestaurantMenu-07.webp",
    link: "appetizer",
  },
  {
    id: 9,
    src: "RestaurantMenu-08.webp",
    link: "appetizer",
  },
  {
    id: 10,
    src: "RestaurantMenu-09.webp",
    link: "appetizer",
  },
  {
    id: 11,
    src: "RestaurantMenu-11.webp",
    link: "drinks",
  },
  {
    id: 12,
    src: "RestaurantMenu-12.webp",
    link: "/cafeMenu#hot",
  },
];
function QuickAccess() {
  return (
    <section className="flex flex-col">
      <Title text="دسترسی سریع" />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {MainMenuItems.map(({ id, src, link }) => (
          <React.Fragment key={id}>
            <Link href={`/RestaurantMenu#${link}`}>
              <Image
                width={512}
                height={512}
                alt="ghorbani-dev.ir"
                src={`/RestaurantMenu/${src}`}
                className="object-fill hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default QuickAccess;
