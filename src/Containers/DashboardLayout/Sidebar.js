import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/Images/Logo/logo2.webp";
import { Divider } from "@nextui-org/react";
import { BiEnvelopeOpen, BiListPlus } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { useRouter } from "next/router";

export const NavlinkItems = [
  {
    id: 1,
    title: "مقاله ها",
    icon: <HiOutlineNewspaper />,
    link: "/dashboard/blogs",
  },
  {
    id: 2,
    title: " افزودن مقاله",
    icon: <BiListPlus />,
    link: "/dashboard/NewBlog",
  },
  {
    id: 3,
    title: "پیام‌ها",
    icon: <BiEnvelopeOpen />,
    link: "/dashboard/contactUs",
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <section className="hidden md:flex flex-col items-center p-6">
      <Link href="/">
        <Image
          width={279}
          height={279}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          src={Logo}
          className="object-fill rounded-xl"
        />
      </Link>
      <Divider className="my-5" />
      <div className="w-full self-start space-y-6">
        {NavlinkItems.map(({ id, title, icon, link }) => {
          return (
            <React.Fragment key={id}>
              <Link
                href={link}
                className={`${
                  pathname === link
                    ? "bg-gradient-to-r from-primary-100 to-primary-600 text-white font-extrabold"
                    : "bg-slate-50"
                } hover:bg-slate-100 flex items-center gap-1 p-2 rounded-lg transition-colors`}
              >
                {icon}
                {title}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
