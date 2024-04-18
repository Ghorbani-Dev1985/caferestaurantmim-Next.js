import DBConnect from "@/Server/Utils/DBConnect"
import ContactUs from '@/Server/Models/ContactUs'
DBConnect();
export default async function ContactUsHandler(req , res){
    const {method , body} = req;
    if(method === "POST"){
       await ContactUs.create({fullName: body.FullName , phoneNumber: body.PhoneNumber , message: body.Message});
       const ContactUsMessages = await ContactUs.find({});
        return res.status(201).json({message : "پیام شما با موفقیت ثبت گردید و با شما تماس خواهیم گرفت" , ContactUsMessages})
    }else if(method === "GET"){
        const ContactUsMessages = await ContactUs.find({})
        return res.status(200).json({ContactUsMessages})
    }
}