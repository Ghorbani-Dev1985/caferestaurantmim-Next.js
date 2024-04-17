import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Image, Divider} from "@nextui-org/react";
import Logo from '@/Images/Assets/Images/Logo/logo2.webp';
import { HiPhone } from "react-icons/hi";
import { HiDeviceMobile } from "react-icons/hi";
import { BiLogoInstagram } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { BiCircle } from "react-icons/bi";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
   {
    id: 1,
    title: "خانه",
    link: "/",
   },
   {
    id: 2,
    title: "درباره رستوران",
    link: "/aboutUs",
   },
   {
    id: 3,
    title: "رستوران میم",
    link: "/restaurantMenu",
   },
   {
    id: 4,
    title: "کافه میم",
    link: "/cafeMenu",
   },
   {
    id: 5,
    title: "گالری",
    link: "/imageGallery",
   },
   {
    id: 6,
    title: "ارتباط با ما",
    link: "/contactUs",
   },
  ];
  console.log(isMenuOpen)
  return (
    <>
    <section className='bg-secondary p-5'>
        <div className='container flex-between'>
         <div className='flex-center gap-6 text-white'>        
           <Link href="tel:01332265593" className='flex-center gap-1 text-white'> <HiPhone className="size-5 text-primary-500 rotate-[265deg]"/> 32265593</Link>
           <Link href="tel:01332231879" className='flex-center gap-1 text-white'> <HiPhone className="size-5 text-primary-500 rotate-[265deg]"/> 32231879</Link>
           <Link href="tel:09124366107" className='flex-center gap-1 text-white'> <HiDeviceMobile className="size-5 text-primary-500"/> 0912436610</Link>
         </div>
         <Link href="https://www.instagram.com/cafe_rest" isExternal> <BiLogoInstagram className="size-7 text-primary-500"/></Link>
         
        </div>
    </section>

<Navbar onMenuOpenChange={setIsMenuOpen} classNames={{base:"container rounded-lg top-5" , wrapper: "lg:max-w-[1280px] px-0"}}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Open menu" : "Close menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
      <Image
      width={116}
      height={55}
      alt="ghorbani-dev.ir"
      src={Logo}
      className='object-fill'
      />
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-10" justify="center">
      {
        menuItems.map(({id , title , link}) => (
            <React.Fragment key={id}>
            <NavbarItem>
            <NavLink className={({isActive}) => isActive ? "text-primary-700" : "text-secondary"} to={link}>
              {title}
            </NavLink>
          </NavbarItem>
            </React.Fragment>
        ))
      }
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
      <Button as={Link} color="primary" href="/menus" radius='full' className='px-6' startContent={<BiCircle />}>
           منوها
          </Button>
      </NavbarItem>
    </NavbarContent>

        {
          isMenuOpen &&
        <NavbarMenu onClick={() => setIsMenuOpen((prev) => !prev)} className='px-0 gap-0 pt-16'>
          {
            menuItems.map(({id , title , link}) => (
                <React.Fragment key={id}>
                <NavbarItem  className='bg-secondary text-primary child:p-5'>
                <NavLink onClick={() => setIsMenuOpen((prev) => !prev)} className={({isActive}) => isActive ? "w-full block bg-primary text-white" : "w-full block bg-secondary text-primary"} to={link}>
                  {title}
                </NavLink>
              </NavbarItem>
                </React.Fragment>
            ))
          }
        </NavbarMenu>
          }
    
  </Navbar>
  <Divider className="mt-4 bg-primary/50" />
</>
  )
}

export default Header