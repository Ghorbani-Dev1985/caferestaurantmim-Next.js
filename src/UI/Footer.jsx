import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopFooter from "@/Images/Footer/topFooter.webp";
import Logo from "@/Images/Logo/logo2.webp";
import { BiMobileAlt } from "react-icons/bi";
import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <footer>
      <div className="bg-Footer min-h-96 relative">
        <div className="container flex flex-col items-center gap-y-10">
          <div className="absolute z-20 -top-[4.3rem]">
            <Image
              alt="ghorbani-dev.ir"
              placeholder="blur"
              src={TopFooter}
              className="object-fill rounded-none"
            />
          </div>

          <Image
            alt="ghorbani-dev.ir"
            placeholder="blur"
            src={Logo}
            className="object-fill rounded-none mt-6"
          />
          <div className="text-white space-y-10">
            <AddressItems />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function AddressItems() {
  return (
    <>
      <Link
        href="tel:09124366107"
        size="lg"
        className="flex-center text-base md:text-xl gap-1 text-inherit"
      >
        <BiMobileAlt className="size-6 text-primary-500" />
        میلاد نیک سرشت 09124366107 ( مدیریت )
      </Link>
      <div className="flex-between gap-x-20 md:gap-x-36">
        <Link
          href="tel:01332265593"
          className="flex-center text-xl gap-1 text-inherit"
        >
          <HiPhone className="size-5 text-primary-500 rotate-[265deg]" />
          32265593
        </Link>
        <Link
          href="tel:01332231879"
          className="flex-center text-xl gap-1 text-inherit"
        >
          <HiPhone className="size-5 text-primary-500 rotate-[265deg]" />
          32231879
        </Link>
      </div>
      <p className="flex-center gap-x-1 text-xl">
        <HiOutlineLocationMarker className="size-6 text-primary-500" />
        <span>رشت ،خیابان لاکانی نبش بن بست شاد</span>
      </p>
    </>
  );
}
export { AddressItems };
