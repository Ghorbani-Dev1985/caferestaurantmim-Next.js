import React from "react";
import Image from "next/image";
import AboutUsTopImg from "@/Images/Other/aboutUsPre.webp";
import ChefImg from "@/Images/Other/Chef1.webp";
import AboutUsButtonImg from "@/Images/Other/aboutUsAfter.webp";
const AboutUS = () => {
  return (
    <>
      <div className="bg-paternBg flex-center mt-16">
        <Image
          alt="ghorbani-dev.ir"
          src={AboutUsTopImg}
          className="object-fill rounded-none"
        />
      </div>
      <div className="relative z-10 bg-[#F3F3F3] pt-12 flex flex-col md:flex-row md:flex md:justify-between gap-12 p-10">
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="font-bold text-2xl text-primary">
            درباره کافه رستوران میم
          </h2>
          <p className="text-primary-400">
            کافه رستوران میم افتخار دارد از سال 1399 همزمان با شروع فعالیت خود
            با نظارت کامل مدیریت و همراهی کادر مجرب در تهیه مواد اولیه و امور
            طبخ، همچنان کمیّت و کیفیت خاص خود را حفظ نماید.
          </p>
          <h3 className="font-bold">
            برخی از عواملی که کافه رستوران میم را شایسته انتخاب شما عزیزان کرده
            است:
          </h3>
          <ul className="child:list-disc mr-10">
            <li>
              استفاده از گوشت تازه گوساله در کشتارگاه‌های مورد تایید وزارت
              بهداشت
            </li>
            <li>
              استفاده از مرغ کشتار روز در بسته‌بندی‌های مورد تایید وزارت بهداشت
            </li>
            <li>
              استفاده از سبزیجات، فرنگی‌جات و سیفی‌جات به‌ صورت روزانه و ضدعفونی
              اصولی
            </li>
            <li>استفاده از ظروف آلومینیوم و P.P</li>
            <li>استفاده از روغن‌های مایع تایید شده</li>
            <li>طبخ سرخ‌کردنی‌ها فقط با روغن </li>
            <li>حضور پرسنل در کلاس‌های بهداشت محیط</li>
          </ul>
        </div>
        <div className="flex">
          <Image
            alt="ghorbani-dev.ir"
            src={ChefImg}
            className="object-fill mb-8 md:mb-0"
          />
        </div>
        <div className="absolute flex-center bottom-0 right-0 left-0 z-20 mx-auto">
          <Image
            alt="ghorbani-dev.ir"
            src={AboutUsButtonImg}
            className="object-fill rounded-none "
          />
        </div>
      </div>
    </>
  );
};

export default AboutUS;
