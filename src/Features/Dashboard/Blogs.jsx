import DashboardLayout from "@/Containers/DashboardLayout";
import React, { useMemo, useState } from "react";
import BlogsRow from "./BlogsRow";
import Alert from "@/UI/Alert";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  Pagination,
  Spinner,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const BlogsList = ({ blogsList }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(blogsList.length / rowsPerPage);
  const blogs = React.useMemo(() => {
   const start = (page - 1) * rowsPerPage;
   const end = start + rowsPerPage;
   return blogsList.slice(start, end);
 }, [page, blogsList]);
 console.log(blogs)
  return (
    <DashboardLayout>
      {blogsList.length ? (
        <Table
          aria-label="Example table with client async pagination"
          bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader>
            <TableColumn key="index">ردیف</TableColumn>
            <TableColumn key="cover">تصویر</TableColumn>
            <TableColumn key="title">عنوان</TableColumn>
            <TableColumn key="shortName">لینک</TableColumn>
            <TableColumn key="description">توضیحات</TableColumn>
            <TableColumn key="body">بدنه</TableColumn>
            <TableColumn key="publish"> وضعیت انتشار</TableColumn>
            <TableColumn key="act"> عملیات</TableColumn>
          </TableHeader>
          <TableBody
           items={blogs}
          >
            {
               console.log(blogs)             
               // blogs.map(({blog , index}) => {
               //    return(
               //       <React.Fragment key={blog._id}>
               //          <BlogsRow blog={blog} index={index}/>
               //       </React.Fragment>
               //    )
               // })
            }
            {/* {(blog, index) => (
              <TableRow key={blog._id}>
                 {(columnKey) => {<TableCell>{getKeyValue(blog, columnKey)}</TableCell>}}
                
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      ) : (
        <Alert alertText="تاکنون مقاله ای ثبت نگردیده است" />
      )}
    </DashboardLayout>
  );
};

export default BlogsList;
