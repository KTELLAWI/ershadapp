import React from "react";

export default function BenefitBlock({ number, header, text }) {
  return (
    <div className="flex gap-1 items-center">
      <h1 className="font-bold">{number}</h1>
      <div className="w-[1px] h-[35px] bg-gray-500"></div>
      <div className="flex flex-col mr-[2px]">
        <h1 className="font-bold text-[0.9rem]"> {header}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
