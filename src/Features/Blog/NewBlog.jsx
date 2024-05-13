"use client"
import Fieldset from "@/UI/Fieldset";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCloudUpload } from "react-icons/bi";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Http from "@/Services/HttpService";
import TextAreaField from "@/UI/TextAreaField";
import toast from "react-hot-toast";
import useTitle from "@/Hooks/useTitle";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [
    [{ header: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
const NewBlog = () => {
  const title = useTitle("افزودن مقاله | کافه رستوران میم ")
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [coverName, setCoverName] = useState("");
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const NewBlogHandler = async (data) => {
    console.log(data.cover[0])
    if (body.replace(/<(.|\n)*?>/g, "").trim().length !== 0) {
      setBodyError(false);
     let newBlogFormData = new FormData();
     newBlogFormData.append("title", data.title);
     newBlogFormData.append("description", data.description);
     newBlogFormData.append("shortName", data.shortName);
     newBlogFormData.append("cover", data.cover[0]);
     newBlogFormData.append("body", body);
     await Http.post("/articles/draft", newBlogFormData , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(({ data }) => {
          toast.success(data.message)
          reset()
          setBody("")
          setCoverName("")
        })
        .catch((err) => toast.error(err.message));
    } else {
      setBodyError(true);
    }
  };

  return (
    <Fieldset title="افزودن مقاله جدید">
      <form onSubmit={handleSubmit(NewBlogHandler)}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            name="title"
            placeholder="لطفا عنوان مقاله را وارد نمایید"
            label=" عنوان مقاله"
            required
            register={register}
            validationSchema={{
              required: "لطفا عنوان مقاله را وارد نمایید",
              minLength: {
                value: 3,
                message: "حداقل ۳ کاراکتر وارد نمایید  ",
              },
              maxLength: {
                value: 50,
                message: "حداکثر ۵۰ کاراکتر وارد نمایید",
              },
            }}
            errors={errors}
          />
          <TextField
            name="shortName"
            placeholder="لطفا لینک مقاله را وارد نمایید"
            label=" لینک مقاله"
            required
            register={register}
            validationSchema={{
              required: "لطفا لینک مقاله را وارد نمایید",
              minLength: {
                value: 3,
                message: "حداقل ۳ کاراکتر وارد نمایید  ",
              },
              maxLength: {
                value: 30,
                message: "حداکثر ۳۰ کاراکتر وارد نمایید",
              },
            }}
            errors={errors}
          />
          <TextAreaField
            name="description"
            placeholder="لطفا توضیح مقاله را وارد نمایید"
            label=" توضیح مقاله"
            required
            register={register}
            validationSchema={{
              required: "لطفا توضیح مقاله را وارد نمایید",
              minLength: {
                value: 3,
                message: "حداقل ۳ کاراکتر وارد نمایید  ",
              },
              maxLength: {
                value: 350,
                message: "حداکثر ۳۵۰ کاراکتر وارد نمایید",
              },
            }}
            errors={errors}
          />

          <div className="w-full">
            <div className="flex-center w-full relative">
              <label
                htmlFor="CoverUpload"
                className="flex-center flex-col w-full h-56 p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex-center flex-col pt-5 pb-6">
                  <BiCloudUpload className="size-10 text-gray-500 mb-2" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">انتخاب فایل</span> یا فایل
                    را بکشید و اینجا رها کنید
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    WEBP, PNG, JPG , JPEG (سایز 279x279px )
                  </p>
                  {coverName && (
                    <span className="my-3 text-emerald-500 bg-white px-2 py-1 rounded-lg">
                      {coverName}
                    </span>
                  )}
                </div>
                <input
                  id="cover"
                  type="file"
                  {...register("cover", {
                    required: "لطفا تصویر مقاله را انتخاب نمایید",

                    validate: {
                      fileSize: (file) =>
                         file[0].size / (1024 * 1024) < 1 ||
                       "حداکثر حجم فایل باید کمتر از یک مگابایت باشد",
                    },
                    })}
                  onChange={({ target }) => {
                    setCoverName(target.files[0].name)
                  }}
                  accept=".webp , .jpg , .png, .jpeg"
                  className="h-full absolute z-50 opacity-0"
                />
              </label>
            </div>
            <span className="block text-rose-500 text-sm my-2">
              {errors.cover?.message}
            </span>
          </div>
        </div>
        <ReactQuill
          modules={modules}
          formats={formats}
          required
          theme="snow"
          value={body}
          onChange={setBody}
        />
        <span className="block text-rose-500 text-sm my-2">
          {bodyError ? "لطفا متن کامل مقاله را وارد نمایید" : ""}
        </span>
        <div className="flex-center my-4">
          <Button
            type="submit"
            size="md"
            color="primary"
            className="font-extrabold"
          >
            ثبت مقاله جدید
          </Button>
        </div>
      </form>
    </Fieldset>
  );
};

export default NewBlog;
