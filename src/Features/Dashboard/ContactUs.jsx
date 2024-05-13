"use client"
import Alert from "@/UI/Alert";
import React, { useCallback } from "react";
import CustomTable from "@/UI/CustomTable";
import { Chip, TableColumn } from "@nextui-org/react";
import ToLocalDateStringShort from "@/Server/Utils/ToLocalDateStringShort";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ConfirmModal from "@/UI/ConfimModal";
import { BiTrash } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Http from "@/Services/HttpService";
import DOMPurify from "isomorphic-dompurify";
import useTitle from "@/Hooks/useTitle";
import useProtectRoute from "@/Hooks/useProtectRoute";

const ContactUsList = ({contacts}) => {
  const title = useTitle(" پیام ها | کافه رستوران میم");
  const protect = useProtectRoute()
   const router = useRouter()
   const AnsweredHandler = async (id) => {
      await Http.put('/contact/answered' , {id})
      .then(({data})=> {
       toast.success(data.message)
       RouterPush(router)
      })
      .catch((err) => {
       toast.error(err.message)
      })
   }
   const DeleteContactUsHandler = async (id) => {
     await Http.delete(`/contact/${id}`)
     .then(({data}) => {
       toast.success(data.message)
       RouterPush(router)
     })
     .catch((err) => toast.error(err.message))
   }
   const renderCell = useCallback((item, columnKey) => {
      const cellValue = item[columnKey];
      switch (columnKey) {
        case "createdDate":
          return (
            ToLocalDateStringShort(item.createdAt)
          );
        case "name":
          return (    
              item.name
          );
        case "phone":
          return (
             item.phone    
          );
          case "body" :
            return (
              <ModalPlacement
            icon={<BiShow className="size-8 fill-sky-500" />}
            title="متن کامل"
          >
              <div
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.body) }}
                ></div>
            {item.body}
          </ModalPlacement>  
            );
         case "answer" :
            return (
               item.answer ? (
                  <Chip
                    startContent={<IoCheckmarkCircleSharp size={18} />}
                    variant="faded"
                    color="success"
                    className="border border-emerald-500"
                  >
                    پاسخ داده شده
                  </Chip>
                ) : (
                  <Chip
                    startContent={<RiDraftFill size={18} />}
                    variant="faded"
                    color="warning"
                    className="border border-amber-500 cursor-pointer"
                    onClick={() => AnsweredHandler(item._id)}
                  >
                    بی پاسخ
                  </Chip>
                )
            );
            case "act" :
            return (
              <ConfirmModal
              btnIcon={<BiTrash className="size-5" />}
              confirmBtnText="حذف"
              titleText="حذف پیام"
              confirmBtnHandler={() => DeleteContactUsHandler(item._id)}
            >
             <p className="flex-center gap-1.5"> آیا از حذف پیام کاریز  
              <span className="text-sky-500">{item.name}</span> مطمعن هستید؟</p>
            </ConfirmModal>
            );
        default:
          return cellValue;
      }
    }, []);
    return ( 
            contacts.length ?  
            <CustomTable itemsArray={contacts} renderCell={renderCell}>
                <TableColumn key="createdDate">تاریخ</TableColumn>
                <TableColumn key="name"> نام و نام خانوادگی</TableColumn>
                <TableColumn key="phone">  تلفن تماس</TableColumn>
                <TableColumn key="body"> متن کامل </TableColumn>
                <TableColumn key="answer">  وضعیت پاسخ</TableColumn>
                <TableColumn key="act"> عملیات</TableColumn>
            </CustomTable>
        :  <Alert alertText="تاکنون پیامی ثبت نگردیده است"/>
     );
}
 
export default ContactUsList;