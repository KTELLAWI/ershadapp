"use client"
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
export default function Input({
  type,
  name,
  placeholder,
  register,
  validation,
}) {
  if (type === "file")
    return (
      <>
        <label
          htmlFor={name}
          className=" p-[7px] outline-none border border-gray-400 text-sm flex justify-between  text-textInput rounded-md w-full bg-white cursor-pointer"
        >
          <div>{placeholder}</div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register(name, validation)}
          className=" hidden"
        />
      </>
    );
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, validation)}
      className="p-[7px] outline-none border text-sm border-gray-400 text-textInput rounded-md w-full "
    />
  );
}
