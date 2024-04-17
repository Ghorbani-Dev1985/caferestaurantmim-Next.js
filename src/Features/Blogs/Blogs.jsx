import React from "react";
import data from "@/Data/data.json";
import Image from 'next/image'
import Link from 'next/link';
import { HiArrowNarrowLeft } from "react-icons/hi";
const Blogs = () => {
  return (
    <section className="container my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.blogs.map(({ id, src, title }) => {
          return (
            <React.Fragment key={id}>
              <BlogsCard id={id} src={src} title={title}/>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;


const BlogsCard = ({id , title , src}) => {
    return(
        <div className="w-full flex flex-col gap-8 items-center border border-gray-200 rounded-xl p-5">
        <div className="min-h-[279px]">      
        <Image
          width={279}
          height={279}
          alt="ghorbani-dev.ir"
          src={src}
          isZoomed
          className="object-fill rounded-xl"
        />
        </div>
         <h2 className="text-xl line-clamp-1">{title}</h2>
         <Link href={`/blog/${id}`} className="flex-center gap-1 bg-primary-300 hover:bg-primary-500 text-primary-800 px-2 py-1 rounded-full transition-colors">مطالعه کنید <HiArrowNarrowLeft /></Link>
      </div>
    )
}

export {BlogsCard}