import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
export default function InputOpenWork({
  name,
  text,
  type,
  label,
  option,
  register,
  validation,
}) {
  if (type === "file")
    return (
      <>
        <label
          htmlFor={name}
          className="p-[7px] pt-[10px] mt-4 outline-none border border-gray-400 text-sm flex justify-between  text-textInput rounded-md w-full bg-white cursor-pointer"
        >
          <div>{text}</div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className=" hidden"
          {...register(name, validation)}
        />
      </>
    );
  if (type === "textarea")
    return (
      <div className="relative mt-5">
        <label
          htmlFor=""
          className=" absolute -top-[13px] bg-white right-3 px-2  text-NavbarBackground"
        >
          {text}
        </label>
        <textarea
          name={name}
          className="rounded-md border p-4 w-full border-gray-300 outline-none h-28"
          {...register(name, validation)}
        ></textarea>
      </div>
    );
  if (type === "select")
    return (
      <div className="flex flex-col gap-1 mt-4">
        <select
          className="border border-gray-400 rounded-md p-1 outline-none scrollbar"
          {...register(name, validation)}
        >
          <option value="">{label}</option>
          {option?.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  return (
    <div className="relative mt-4 w-full ">
      <label
        htmlFor=""
        className=" absolute -top-[13px] bg-white right-3 px-2 text-[0.8rem] text-NavbarBackground"
      >
        {text}
      </label>
      <input
        type={type}
        className="rounded-md border p-2 w-full border-gray-500 outline-none"
        name={name}
        {...register(name, validation)}
      />
    </div>
  );
}
