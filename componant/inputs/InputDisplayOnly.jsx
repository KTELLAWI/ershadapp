import React from "react";

export default function InputDisplayOnly({
  name,
  text,
  type,
  label,
  option,
  value,
}) {
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
          value={ value || ""}
          readOnly
        ></textarea>
      </div>
    );
  if (type === "select")
    return (
      <div className="flex flex-col gap-1 ">
        <label className="text-textLabelSelect text-[1.1rem]">{label}</label>
        <select className="border border-gray-400 rounded-md p-1 outline-none">
          {option?.map((e, i) => (
            <option key={i}>{e}</option>
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
        value={ value || ""}
        readOnly
      />
    </div>
  );
}
