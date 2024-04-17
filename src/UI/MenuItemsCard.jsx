import React from "react";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
const MenuItemsCard = ({ src, title, price, subTitle }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div>
          <Image
            width={171}
            height={171}
            alt="ghorbani-dev.ir"
            src={src}
            className="object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
          />
        </div>
        <div className="flex flex-col flex-1 font-extrabold ">
          <div className="flex items-center">
            <span className="flex flex-1 text-nowrap">{title}</span>
            <Divider className="mx-3 shrink" />
            <p className="flex-center">
              {price && price.toLocaleString()}
              <span>تومان</span>
            </p>
          </div>
          {subTitle && (
            <p className="font-normal text-base text-gray-400">{subTitle}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuItemsCard;
