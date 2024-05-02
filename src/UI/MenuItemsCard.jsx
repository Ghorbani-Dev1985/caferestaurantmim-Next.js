import React from "react";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
const MenuItemsCard = ({ src, title, price, subTitle }) => {
  return (
    <>
      <div className="flex items-center gap-x-2 border-b border-slate-100 pb-4 md:border-none">
        <div>
          <Image
            width={171}
            height={171}
            alt="ghorbani-dev.ir"
            src={src}
            className="size-20 md:size-32 object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
          />
        </div>
        <div className="flex flex-col flex-1 font-extrabold ">
          <div className="flex items-center flex-col gap-y-3 md:flex-row">
            <span className="flex flex-1 text-wrap md:text-nowrap">{title}</span>
            <Divider className="hidden md:block mx-3 shrink" />
            <p className="flex-center">
              {price && price.toLocaleString()}
              <span>تومان</span>
            </p>
          </div>
          {subTitle && (
            <div className="max-w-96 md:max-w-full flex justify-center md:justify-start overflow-hidden">
              <p className="flex flex-wrap font-normal text-wrap text-sm text-center md:text-right md:text-base text-gray-400">{subTitle}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuItemsCard;
