import React from "react";
import Table from "@/UI/Table";
import { Button, Chip } from "@nextui-org/react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import ToLocalDateStringShort from "@/Server/Utils/ToLocalDateStringShort";
import Http from "@/Services/HttpService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import RouterPush from "@/Hooks/RouterPush";
import ConfirmModal from "@/UI/ConfimModal";
const ContactUSRow = ({ contact, index }) => {
  const router = useRouter()
  const {_id, answer, body, createdAt, name, phone } = contact;
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
  return (
    <>
      <Table.Row>
        <tr className="bg-secondary-50/50 text-center border-b last:border-b-0 text-secondary-700 hover:bg-slate-100 dark:hover:bg-secondary-500 px-6 py-4 transition-colors">
          <th className="px-6 py-4">{index + 1}</th>
          <td className="px-6 py-4">{ToLocalDateStringShort(createdAt)}</td>
          <td className="px-6 py-4">{name}</td>
          <td className="px-6 py-4">{phone}</td>
          <td>
            <ModalPlacement
              icon={<BiShow className="size-8 fill-sky-500" />}
              title="متن کامل"
            >
              {body}
            </ModalPlacement>
          </td>
          <td className="px-6 py-4">
            {answer ? (
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
                onClick={() => AnsweredHandler(_id)}
              >
                بی پاسخ
              </Chip>
            )}
          </td>
          <td>
           <ConfirmModal btnIcon={<HiOutlineTrash className="size-5" />} confirmBtnText="حذف" titleText="حذف پیام" confirmBtnHandler={() => DeleteContactUsHandler(_id)}>
              آیا از حذف پیام <span className="text-sky-500 mx-1">{name}</span> مطمعن هستید؟
           </ConfirmModal>
          </td>
        </tr>
      </Table.Row>
    </>
  );
};

export default ContactUSRow;
