import React, { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/react";
import { useAuth, useAuthActions } from "src/Context/AuthContext";
import { BiLogOut } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { NavlinkItems } from "./Sidebar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
   const { user} = useAuth();
  const dispatch = useAuthActions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <section className="w-full flex flex-col items-center md:flex-row md:flex-between md:h-12 gap-y-4 mb-10 md:mb-20">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "container rounded-lg border-none bg-transparent sm:hidden",
          wrapper: "",
        }}
      >
        <NavbarContent justify="start">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="sm:hidden"
          >
            <BiMenuAltRight className="size-8 text-primary" />
          </button>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarBrand>
            <Image
              width={116}
              height={55}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="/Logo/logo2.webp"
              src="/Logo/logo2.webp"
              className="object-fill"
            />
          </NavbarBrand>
        </NavbarContent>

        {isMenuOpen && (
          <NavbarMenu
            onClick={() => setIsMenuOpen(false)}
            className="px-0 gap-0 pt-28 top-0 !h-screen"
          >
            {NavlinkItems.map(({ id, title, link }) => (
              <React.Fragment key={id}>
                <NavbarItem className="bg-secondary text-primary child:p-5">
                  <Link
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={
                      pathname === link
                        ? "w-full block bg-primary text-white"
                        : "w-full block bg-secondary text-primary"
                    }
                    href={link}
                  >
                    {title}
                  </Link>
                </NavbarItem>
              </React.Fragment>
            ))}
          </NavbarMenu>
        )}
      </Navbar>
      <p className="flex-center flex-wrap gap-2">کاربر گرامی ؛<span className="block text-emerald-500 font-extrabold">{user?.name}</span>به پنل کاربری خوش آمدید</p>
           <Button onPress={() => dispatch({ type: "LOGOUT"})} color="danger" variant="light" startContent={<BiLogOut className="size-5"/>}>
        خروج از حساب 
              </Button>
    </section>
  );
};

export default Header;
