import Image from "next/image";
import React from "react";
import { BiAlarmExclamation, BiFoodMenu } from "react-icons/bi";
import TopPreFooter from "@/Images/Footer/topPreFooter.webp";
import Link from "next/link";
const PreFooter = () => {
  return (
    <>
      <div className="bg-paternBg flex-center mt-16">
        <Image
          alt="ghorbani-dev.ir"
          placeholder="blur"
          src={TopPreFooter}
          className="object-fill rounded-none"
        />
      </div>
      <div className="bg-primary p-12">
        <div className="container flex flex-col items-center gap-y-8 font-bold">
          <h3 className="font-extrabold md:text-2xl">
            ساعات فعالیت کافه رستوران میم
          </h3>
          <p className="flex-center gap-1">
            <BiAlarmExclamation className="size-5" />
            <span> نهار و شام ساعت 12:00 الی 24:00</span>
          </p>
          <Link
              href="/Menus"
              className="flex justify-normal items-center gap-1 bg-transparent hover:bg-secondary/10 border border-secondary rounded-lg cursor-pointer px-9 py-1.5 transition-colors"
            >
              <BiFoodMenu /> منو کافه رستوران میم
            </Link>
          <p className="mb-10">
            جهت مشاهده منو کافه ، رستوران میتوانید از لینک بالا استفاده نمایید
          </p>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
