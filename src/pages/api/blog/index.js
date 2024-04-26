import DBConnect from "@/Server/Utils/DBConnect";
import Blog from "@/Server/Models/Blog";
DBConnect();
import path, { join } from "path";
import formidable from "formidable";
import fs from "fs";


import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const POST = async (req, res) => {
  const form = formidable({ multiples: true });

      const formData = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          if (err) {
            reject("error");
          }
          resolve({ fields, files });
        });
      });
      const { fields, files } = await formData;
       console.log(files.imageFile[0] , fields)

  const file = files.imageFile[0];
  console.log(file)
  // if (!file) {
  //   return NextResponse.json({ error: "No files received." }, { status: 400 });
  // }

  // const buffer = Buffer.from(await file.arrayBuffer());
  // const filename = Date.now() + file.name.replaceAll(" ", "_");
  // console.log(filename);
  // try {
  //   await writeFile(
  //     path.join(process.cwd(), "public/Blogs/" + filename),
  //     buffer
  //   );
  //   return NextResponse.json({ Message: "Success", status: 201 });
  // } catch (error) {
  //   console.log("Error occured ", error);
  //   return NextResponse.json({ Message: "Failed", status: 500 });
  //}
};
export default POST;




// export default async function BlogHandler(req, res) {
//   if (req.method == "POST") {
//     const form = formidable({ multiples: true });

//     const formData = new Promise((resolve, reject) => {
//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           reject("error");
//         }
//         resolve({ fields, files });
//       });
//     });
//     const { fields, files } = await formData;
//      console.log(files.imageFile[0] , fields)
//      await fs.readdir(path.join(process.cwd() + "/public", "/Blogs"));
//      await readFile(files.imageFile[0], true);
//      return res.json()
    // await Blog.create({
    //   title: fields.title[0],
    //   image: fields.image[0],
    //   content: fields.content[0],
    // });
   // await fs.readdir(path.join(process.cwd() + "/public", "/Blogs"));
    //await readFile(files.imageFile[0], true);
   // return res.json()
    // const BlogMessages = await Blog.find({});
    // return res
    //   .status(201)
    //   .json({ message: "مقاله جدید با موفقت ثبت گردید", BlogMessages });
//   } else if (method === "GET") {
//     const BlogMessages = await Blog.find({});
//     return res.status(200).json({ BlogMessages });
//   }
// }


