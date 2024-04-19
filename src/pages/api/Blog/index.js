import DBConnect from "@/Server/Utils/DBConnect"
import Blog from '@/Server/Models/Blog'
DBConnect();
export default async function BlogHandler(req , res){
    const {method , body} = req;
    if(method === "POST"){
       await Blog.create({title: body.Title , image: body.Image , content: body.Content});
       const BlogMessages = await Blog.find({});
        return res.status(201).json({message : "مقاله جدید با موفقت ثبت گردید" , BlogMessages})
    }else if(method === "GET"){
        const BlogMessages = await Blog.find({})
        return res.status(200).json({BlogMessages})
    }
}