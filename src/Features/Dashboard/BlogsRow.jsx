import React from "react";
import Table from "@/UI/Table";
import { Button, Chip } from "@nextui-org/react";
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
const BlogsRow = ({ blog, index }) => {
  const router = useRouter()
  const {_id , body, cover, description, publish, shortName, title } = blog;
  const src = `${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${cover}`;
  const PublishBlogHandler = async (id) => {
      await Http.put('/articles' , {id})
      .then(({data}) => {
        toast.success(data.message)
        RouterPush(router)
      })
      .catch((err) => console.log(err))
  }
  const DeleteBlogHandler = async (id) => {
    await Http.delete(`/articles/${id}`)
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
          <td className="px-6 py-4">
            <Image
              width={100}
              height={100}
              alt="ghorbani-dev.ir"
              src={src}
              className="object-fill rounded-lg"
            />
          </td>
          <td className="px-6 py-4">{title}</td>
          <td className="px-6 py-4">{shortName}</td>
          <td>
            <ModalPlacement
              icon={<BiShow className="size-8 fill-sky-500" />}
              title="توضیحات"
            >
              {description}
            </ModalPlacement>
          </td>
          <td>
            <ModalPlacement
              icon={<BiShow className="size-8 fill-sky-500" />}
              title="بدنه"
            >
             <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}></div>
            </ModalPlacement>
          </td>
          <td className="px-6 py-4">
            {publish ? (
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
                onClick={() => PublishBlogHandler(_id)}
              >
                پیش نویس
              </Chip>
            )}
          </td>
          <td>
            <ConfirmModal btnIcon={<HiOutlineTrash className="size-5" />} confirmBtnText="حذف" titleText="حذف مقاله" confirmBtnHandler={() => DeleteBlogHandler(_id)}>
              آیا از حذف مقاله با عنوان <span className="text-sky-500 mx-1">{title}</span> مطمعن هستید؟
           </ConfirmModal>
          </td>
        </tr>
      </Table.Row>
    </>
  );
};

export default BlogsRow;
