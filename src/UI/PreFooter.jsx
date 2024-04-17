import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BiAlarmExclamation, BiFoodMenu } from "react-icons/bi";
import TopPreFooter from "@Images/Footer/topPreFooter.webp";
const PreFooter = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-paternBg flex-center mt-16">
        <Image
          alt="ghorbani-dev.ir"
          src={TopPreFooter}
          className="object-fill rounded-none"
        />
      </div>
      <div className="bg-primary p-12">
        <div className="container flex flex-col items-center gap-y-8 font-bold">
          <h3 className="font-extrabold text-2xl">
            ساعات فعالیت کافه رستوران میم
          </h3>
          <p className="flex-center gap-1">
            <BiAlarmExclamation className="size-5" />
            <span> نهار و شام ساعت 12:00 الی 24:00</span>
          </p>
          <Button
            onPress={() => navigate("/menus")}
            color="secondary"
            size="lg"
            variant="bordered"
            startContent={<BiFoodMenu />}
          >
            منو کافه رستوران میم
          </Button>
          <p className="mb-10">
            جهت مشاهده منو کافه ، رستوران میتوانید از لینک بالا استفاده نمایید
          </p>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
