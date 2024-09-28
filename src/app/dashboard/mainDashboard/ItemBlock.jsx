import React from "react";

export default function ItemBlock({ MdBusiness, text, num }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 bg-bgPop p-5 rounded-md">
      {MdBusiness}
      <div className="flex items-center gap-2 font-bold text-[1.1rem]">
        <p>{num}</p>
        <p className="text-oneTextHeader">{text}</p>
      </div>
    </div>
  );
}
