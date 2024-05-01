import React from "react";
import Link from "next/link";
import Title from "@/UI/Title";
import BlogsCard from "../Blogs/BlogCard";
const BlogsList = ({blogs}) => {
  const filteredBlog = blogs.filter(blog => blog.publish === true);
  return (
    <>
      <Title text=" خواندنی ها" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBlog.slice(0,3).map((blog) => {
          return (
            <React.Fragment key={blog._id}>
              <BlogsCard blog={blog} />
            </React.Fragment>
          );
        })}
      </div>
      <Link href="/articles">
        <Title text="نمایش بیشتر..." />
      </Link>
    </>
  );
};

export default BlogsList;
