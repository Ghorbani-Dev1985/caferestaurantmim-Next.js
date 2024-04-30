import React from "react";
import data from "@/Data/data.json";
import BlogsCard from "./BlogCard";
const Blogs = ({blogs}) => {
  const filteredBlog = blogs.filter(blog => blog.publish === true);
  return (
    <section className="container my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBlog.map((blog) => {
          return (
            <React.Fragment key={blog._id}>
              <BlogsCard blog={blog}/>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;


