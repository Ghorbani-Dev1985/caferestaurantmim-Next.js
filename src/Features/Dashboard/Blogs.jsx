import DashboardLayout from "@/Containers/DashboardLayout";
import React, { useCallback, useMemo, useState } from "react";
import Alert from "@/UI/Alert";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  Pagination,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import Http from "@/Services/HttpService";
import { useRouter } from "next/router";
import RouterPush from "@/Hooks/RouterPush";
import Image from "next/image";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import DOMPurify from "isomorphic-dompurify";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ConfirmModal from "@/UI/ConfimModal";
import { HiOutlineTrash } from "react-icons/hi2";

const BlogsList = ({ blogsList }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(blogsList.length / rowsPerPage);
  const blogs = useMemo(() => {
   const start = (page - 1) * rowsPerPage;
   const end = start + rowsPerPage;
   return blogsList.slice(start, end);
 }, [page, blogsList]);
 const router = useRouter();
 const PublishBlogHandler = async (id) => {
   await Http.put("/articles", { id })
   .then(({ data }) => {
     toast.success(data.message);
       RouterPush(router);
     })
     .catch((err) => console.log(err));
   };
   const DeleteBlogHandler = async (id) => {
     await Http.delete(`/articles/${id}`)
     .then(({ data }) => {
       toast.success(data.message);
       RouterPush(router);
     })
     .catch((err) => toast.error(err.message));
 };
 const renderCell = useCallback((blog, columnKey) => {
   const cellValue = blog[columnKey];
   switch (columnKey) {
     case "cover":
       return (
         <Image
         width={100}
         height={100}
         alt="ghorbani-dev.ir"
         src={`${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${blog.cover}`}
         className="object-fill rounded-lg"
       />
       );
     case "title":
       return (
       
           blog.title
       
       );
     case "shortName":
       return (
          blog.shortName    
       );
        case "description":
       return (
         <ModalPlacement
         icon={<BiShow className="size-8 fill-sky-500" />}
         title="توضیحات"
       >
         {blog.description}
       </ModalPlacement>   
       );
       case "body" :
         return (
           <ModalPlacement
         icon={<BiShow className="size-8 fill-sky-500" />}
         title="بدنه"
       >
           <div
               dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.body) }}
             ></div>
         {blog.body}
       </ModalPlacement>  
         );
      case "publish" :
         return (
           blog.publish ? (
             <Chip
               startContent={<IoCheckmarkCircleSharp size={18} />}
               variant="faded"
               color="success"
               className="border border-emerald-500"
             >
               منتشر شده
             </Chip>
           ) : (
             <Chip
               startContent={<RiDraftFill size={18} />}
               variant="faded"
               color="warning"
               className="border border-amber-500 cursor-pointer"
               onClick={() => PublishBlogHandler(blog._id)}
             >
               پیش نویس
             </Chip>
           )
         );
         case "act" :
         return (
           <ConfirmModal
           btnIcon={<HiOutlineTrash className="size-5" />}
           confirmBtnText="حذف"
           titleText="حذف مقاله"
           confirmBtnHandler={() => DeleteBlogHandler(blog._id)}
         >
           آیا از حذف مقاله با عنوان
           {/* <span className="text-sky-500 mx-1">{blog.title}</span> مطمعن هستید؟ */}
         </ConfirmModal>
           
         );
     default:
       return cellValue;
   }
 }, []);
  return (
    <DashboardLayout>
      {blogsList.length ? (
        <Table
          aria-label="Example table with client async pagination"
          bottomContent={
              <div className="flex w-full justify-center">
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
                    prev: "rotate-180",
                    next: "rotate-180",
                    forwardIcon: "rotate-180",
                  }}
                />
                }
              </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
            th : "first:rounded-tl-none first:rounded-bl-none first:rounded-tr-lg first:rounded-br-lg last:rounded-tr-none last:rounded-br-none last:rounded-tl-lg last:rounded-bl-lg",
          }}
        >
          <TableHeader>
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
     {(blog) => (
              <TableRow key={blog._id}>
                 {(columnKey) => <TableCell>{renderCell(blog, columnKey)}</TableCell>}
                
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <Alert alertText="تاکنون مقاله ای ثبت نگردیده است" />
      )}
    </DashboardLayout>
  );
};

export default BlogsList;
