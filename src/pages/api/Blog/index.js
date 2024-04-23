import DBConnect from "@/Server/Utils/DBConnect"
import Blog from '@/Server/Models/Blog'
DBConnect();
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";


const readFile = (req, saveLocally) => {
    const options = {};
    if (saveLocally) {
      options.uploadDir = path.join(process.cwd(), "/public/Blogs");
      options.filename = (name, ext, path, form) => {
        return Date.now().toString() + "_" + path.originalFilename;
      };
    }
    options.maxFileSize = 4000 * 1024 * 1024;
    const form = formidable(options);
    return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });
  };

export default async function BlogHandler(req , res){
    const {method , body} = req;
    if(method === "POST"){
       await Blog.create({title: body.Title , image: body.Image , content: body.Content});
       await fs.readdir(path.join(process.cwd() + "/public", "/Blogs"));
      await readFile( body.Image, true);
      res.json({ done: "ok" });
       const BlogMessages = await Blog.find({});
        return res.status(201).json({message : "مقاله جدید با موفقت ثبت گردید" , BlogMessages})
    }else if(method === "GET"){
        const BlogMessages = await Blog.find({})
        return res.status(200).json({BlogMessages})
    }
}