const yup = require("yup");

//* article schema
exports.articleValidator = yup.object().shape({
  title: yup.string().trim().required("عنوان (title) مقاله الزامی می باشد"),
  description: yup
    .string()
    .required("توضیحات (description) مقاله الزامی می باشد"),
  body: yup.string().required("محتوای مقاله (body) الزامی می باشد"),
  shortName: yup
    .string()
    .trim()
    .required("اسم کوتاه (shortName) مقاله الزامی می باشد"),

  cover: yup.object().shape({
    size: yup
      .number()
      .max(1 * 1024 * 1024, "حجم تصویر نباید بیشتر از ۱ مگابایت باشد"),
    mimetype: yup
      .string()
      .oneOf(
        ["image/jpeg", "image/jpg", "image/png", "image/webp"],
        "فرمت تصویر باید JPEG یا PNG یا WebP باشد"
      )
      .required("تصویر الزامی می باشد"),
  }),

});
