import Fieldset from "@/UI/Fieldset";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiCloudUpload } from "react-icons/bi";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Http from "@/Services/HttpService";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
    toolbar: [
      [{ header: []} ],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];
const NewBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [blogImage, setBlogImage] = useState("");
  const [content , setContent] = useState("")
  const [selectedImage , setSelectedImage] = useState("")
  const [selectedFile , setSelectedFile] = useState("")
  const NewBlogHandler = async (data) => {
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image[0].name);
    formData.append("content", content);
    formData.append("imageFile" , selectedFile)
    await Http.post('/blog' , formData)
    .then(({data}) => {
      console.log(data.message)
    })
    .catch((err) => console.log(err))
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
                value: 30,
                message: "حداکثر ۳۰ کاراکتر وارد نمایید",
              },
            }}
            errors={errors}
          />
          <div className="flex-center w-full mx-auto">
            <div className="w-full">
              <div className="flex-center w-full relative">
                <label
                  htmlFor="CoverUpload"
                  className="flex-center flex-col w-full md:h- p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                    {
                        blogImage &&
                    <span className="my-3 text-emerald-500 bg-white px-2 py-1 rounded-lg">{blogImage}</span>
                    }
                  </div>
                  <input
                    id="image"
                    type="file"
                    {...register("image", {
                      required: "لطفا تصویر مقاله را انتخاب نمایید",
                      validate: {
                        fileSize: (file) =>
                          file[0].size / (1024 * 1024) < 1 ||
                          "حداکثر حجم فایل باید کمتر از یک مگابایت باشد",
                      },
                    })}
                    onChange={({target}) => {
                     if(target.files) {
                      const file = target.files[0];
                      setSelectedImage(URL.createObjectURL(file));
                      setSelectedFile(file)
                      setBlogImage(target.files[0].name);
                     }
                    }}
                      
                    accept=".webp , .jpg , .png, .jpeg"
                    className="h-full absolute z-50 opacity-0"
                  />
                </label>
              </div>
              <span className="block text-rose-500 text-sm my-2">
                {errors.image?.message}
              </span>
            </div>
        </div>
          </div>
          <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow"
      name="content"
       value={content}
      onChange={setContent}
    />

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
