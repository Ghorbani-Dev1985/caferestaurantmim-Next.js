import DashboardLayout from "@/Containers/DashboardLayout";
import React, { useCallback } from "react";
import Alert from "@/UI/Alert";
import {TableColumn,Chip,} from "@nextui-org/react";
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
import toast from "react-hot-toast";
import CustomTable from "@/UI/CustomTable";

const BlogsList = ({ blogsList }) => {
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
 const renderCell = useCallback((item, columnKey) => {
   const cellValue = item[columnKey];
   switch (columnKey) {
     case "cover":
       return (
         <Image
         width={100}
         height={100}
         alt="ghorbani-dev.ir"
         src={`${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${item.cover}`}
         className="object-fill rounded-lg"
       />
       );
     case "title":
       return (    
           item.title
       );
     case "shortName":
       return (
          item.shortName    
       );
        case "description":
       return (
         <ModalPlacement
         icon={<BiShow className="size-8 fill-sky-500" />}
         title="توضیحات"
       >
         {item.description}
       </ModalPlacement>   
       );
       case "body" :
         return (
           <ModalPlacement
         icon={<BiShow className="size-8 fill-sky-500" />}
         title="بدنه"
       >
           <div
               dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.body) }}
             ></div>
         {item.body}
       </ModalPlacement>  
         );
      case "publish" :
         return (
           item.publish ? (
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
               onClick={() => PublishBlogHandler(item._id)}
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
           confirmBtnHandler={() => DeleteBlogHandler(item._id)}
         >
          <p className="flex-center gap-1.5"> آیا از حذف مقاله با عنوان  
           <span className="text-sky-500">{item.title}</span> مطمعن هستید؟</p>
         </ConfirmModal>
           
         );
     default:
       return cellValue;
   }
 }, []);
  return (
    <DashboardLayout>
      {blogsList.length ? (
       <CustomTable itemsArray={blogsList} renderCell={renderCell}>
            <TableColumn key="cover">تصویر</TableColumn>
            <TableColumn key="title">عنوان</TableColumn>
            <TableColumn key="shortName">لینک</TableColumn>
            <TableColumn key="description">توضیحات</TableColumn>
            <TableColumn key="body">بدنه</TableColumn>
            <TableColumn key="publish"> وضعیت انتشار</TableColumn>
            <TableColumn key="act"> عملیات</TableColumn>
       </CustomTable>
      ) : (
        <Alert alertText="تاکنون مقاله ای ثبت نگردیده است" />
      )}
    </DashboardLayout>
  );
};

export default BlogsList;
