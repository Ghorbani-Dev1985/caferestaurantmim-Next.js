import React, { useCallback } from "react";
import Table from "@/UI/Table";
import { Button, Chip, TableBody, TableCell, TableRow, getKeyValue } from "@nextui-org/react";
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmModal from "@/UI/ConfimModal";
import Http from "@/Services/HttpService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import RouterPush from "@/Hooks/RouterPush";
import DOMPurify from "isomorphic-dompurify";
const BlogsRow = ({ blogs }) => {
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

    let index = 0;
    switch (columnKey) {
      case "index":
        return (
          +index + 1
        );
      case "cover":
        return (
          <Image
          width={100}
          height={100}
          alt="ghorbani-dev.ir"
          src={`${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${cellValue.cover}`}
          className="object-fill rounded-lg"
        />
        );
      case "title":
        return (
        
            cellValue.title
        
        );
      case "shortName":
        return (
           cellValue.shortName    
        );
         case "description":
        return (
          <ModalPlacement
          icon={<BiShow className="size-8 fill-sky-500" />}
          title="توضیحات"
        >
          {cellValue.description}
        </ModalPlacement>   
        );
        case "body" :
          return (
            <ModalPlacement
          icon={<BiShow className="size-8 fill-sky-500" />}
          title="بدنه"
        >
            <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cellValue.body) }}
              ></div>
          {cellValue.body}
        </ModalPlacement>  
          );
       case "publish" :
          return (
            cellValue.publish ? (
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
                onClick={() => PublishBlogHandler(cellValue._id)}
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
            confirmBtnHandler={() => DeleteBlogHandler(cellValue._id)}
          >
            آیا از حذف مقاله با عنوان{" "}
            <span className="text-sky-500 mx-1">{cellValue.title}</span> مطمعن هستید؟
          </ConfirmModal>
            
          );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
     <TableBody
           items={blogs}
          >
     {(blog, index) => (
              <TableRow key={blog._id}>
                 {(columnKey) => <TableCell>{renderCell(blog, columnKey)}</TableCell>}
                
              </TableRow>
            )}
          </TableBody>
  
    </>
  );
};

export default BlogsRow;
