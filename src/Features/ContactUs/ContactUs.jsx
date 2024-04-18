import Image from "next/image";
import DividerImg from '@/Images/Main/title.webp'
import { AddressItems } from "@/UI/Footer";
import { Button, Input, Textarea } from "@nextui-org/react";
import AddressMap from "@/UI/AddressMap";
const ContactUs = () => {
    return ( 
        <section className='container flex flex-col md:flex-row justify-between gap-12 mt-8'>
        <div className='flex flex-1 flex-col items-center justify-center gap-y-12 border-1 border-gray-200 rounded-lg p-5'>
          <h2 className='font-extrabold text-xl'>ارتباط با رستوران</h2>
          <Image
          width="110"
          height="25"
        alt="ghorbani-dev.ir"
        src={DividerImg}
        className='object-fill'
        />
        <div className='space-y-10'><AddressItems /></div>
        <form className='w-full space-y-8'>
        <Input size="sm" type="text" label="نام و نام خانوادگی*" />
        <Input size="sm" type="tel" label="شماره موبایل*" />
        <Textarea
            variant="flat"
            placeholder="پیام خود را وارد نمایید*"
            minRows="10"
            maxRows="20"
          />
          <Button size="md" color='primary' className='w-full font-extrabold'>
          ارسال پیام
        </Button> 
        </form>
        </div>
        <div className='flex flex-1 border-1 border-gray-200 rounded-lg'>
        <AddressMap style="min-h-screen"/>
        </div>
      </section>
     );
}
 
export default ContactUs;