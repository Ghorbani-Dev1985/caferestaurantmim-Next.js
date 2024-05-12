'use client';
import React, { useMemo, useState } from "react";
import BlogsCard from "./BlogCard";
import { Pagination } from "@nextui-org/react";
const Blogs = ({blogs}) => {
  const filteredBlog = blogs.filter(blog => blog.publish === true);
  const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil(filteredBlog.length / rowsPerPage);
    const blog = useMemo(() => {
     const start = (page - 1) * rowsPerPage;
     const end = start + rowsPerPage;
     return filteredBlog.slice(start, end);
   }, [page, filteredBlog]);
  return (
    <section className="container my-8">
              
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blog.map((blog) => {
          return (
            <React.Fragment key={blog._id}>
              <BlogsCard blog={blog}/>
            </React.Fragment>
          );
        })}
      </div>
        {
           pages > 1 &&
           
           <Pagination
             isCompact
             showControls
             showShadow
             color="primary"
             page={page}
             total={pages}
             onChange={(page) => setPage(page)}
             classNames={{
              base: "flex justify-center my-5",
               prev: "rotate-180",
               next: "rotate-180",
               forwardIcon: "rotate-180",
             }}
           />
        }
    </section>
  );
};

export default Blogs;


