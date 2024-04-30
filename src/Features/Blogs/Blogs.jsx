import React from "react";
import data from "@/Data/data.json";
import BlogsCard from "./BlogCard";
const Blogs = ({blog}) => {
  console.log(blog)
  const {} = blog
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


