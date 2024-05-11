import Image from "next/image";
import DividerImg from '@/Images/Main/title.webp'
import { AddressItems } from "@/UI/Footer";
import { Button, Input, Textarea } from "@nextui-org/react";
import AddressMap from "@/UI/AddressMap";
import { useForm } from "react-hook-form";
import TextField from "@/UI/TextField";
import TextAreaField from "@/UI/TextAreaField";
import Http from "@/Services/HttpService";
import toast from "react-hot-toast";
const ContactUs = () => {
  const {register , formState: {errors} , handleSubmit , reset} = useForm()
  const NewContactUsMsgHandler = (data) => {
    console.log(data)
    Http.post("/contact" , data)
    .then(({data}) => {
        console.log(data)
      toast.success(`${data.message}`)
      reset()
    })
    .catch(err => console.log(err))
  }
    return ( 
        <>
        <section className='container flex flex-col md:flex-row justify-between gap-12 mt-8'>
        <div className='flex flex-1 flex-col items-center justify-center gap-y-12 border-1 border-gray-200 rounded-lg p-5'>
          <h2 className='font-extrabold text-xl'>ارتباط با رستوران</h2>
          <Image
          width="110"
          height="25"
          alt="ghorbani-dev.ir"
          placeholder="blur"
          src={DividerImg}
          className='object-fill'
          />
        <div className='space-y-10'><AddressItems /></div>
        <form onSubmit={handleSubmit(NewContactUsMsgHandler)} className='w-full space-y-8'>
        <TextField name="name" placeholder="لطفا نام و نام خانوادگی را وارد نمایید" label="نام و نام خانوادگی" required register={register} validationSchema={
            {
                required: "لطفا نام و نام خانوادگی را وارد نمایید",
                minLength:{
                    value: 3,
                    message: "حداقل ۳ کاراکتر وارد نمایید  "
                },
                maxLength: {
                    value: 30,
                    message: "حداکثر ۳۰ کاراکتر وارد نمایید"
                }
            }
        } errors={errors}/>
        <TextField name="phone" type="tel" placeholder="لطفا شماره موبایل خود را وارد نمایید" label="شماره موبایل" required register={register} validationSchema={
            {
                required: "لطفا شماره موبایل را وارد نمایید",
                minLength:{
                    value: 10,
                    message: "حداقل ۱۰ کاراکتر وارد نمایید  "
                },
                maxLength: {
                    value: 11,
                    message: "حداکثر ۱۱ کاراکتر وارد نمایید"
                }
            }
        } errors={errors}/>
        <TextAreaField name="body" placeholder="پیام خود را وارد نمایید" label="پیام شما" required register={register} validationSchema={
            {
                required: "لطفا پیام خود را وارد نمایید",
                minLength:{
                    value: 25,
                    message: "حداقل ۲۵ کاراکتر وارد نمایید  "
                },
                maxLength: {
                    value: 350,
                    message: "حداکثر ۳۵۰ کاراکتر وارد نمایید"
                }
            }
        } errors={errors}/>
          <Button type="submit" size="md" color='primary' className='w-full font-extrabold'>
          ارسال پیام
        </Button> 
        </form>
        </div>
        <div className='flex flex-1 border-1 border-gray-200 rounded-lg'>
        <AddressMap style="min-h-screen"/>
        </div>
      </section>
     </>
     );
}
 
export default ContactUs;