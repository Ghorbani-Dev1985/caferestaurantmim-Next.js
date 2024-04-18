import React from "react";

const TextAreaField = ({
  label,
  name,
  register,
  placeholder,
  ltr,
  type = "text",
  required,
  validationSchema = {},
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="flex mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        {...register(name, validationSchema)}
        type={type}
        id={name}
        rows="10"
        autoComplete="off"
        placeholder={placeholder}
        className={`${ltr && "dir-ltr placeholder:text-right"} textField-input`}
      ></textarea>
      {errors && errors[name] && (
        <span className="block text-right text-rose-500 my-3 text-base">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
