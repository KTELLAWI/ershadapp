import Image from "next/image";
import React from "react";
import { RxAvatar } from "react-icons/rx";
export default function Avatar({ imgUrl, name, width, text, img }) {
  let initials = "";
  if (name) {
    const nameSplit = name.split(" ");
    if (nameSplit.length > 1) {
      initials = nameSplit[0][0]?.toUpperCase() + nameSplit[1][0]?.toUpperCase();
    } else if (nameSplit.length === 1) {
      initials = nameSplit[0][0]?.toUpperCase();
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer bg-white shadow-black  shadow-lg rounded-full">
      {img ? (
        <div className="flex flex-col justify-center items-center gap-1">
          <Image
            src={imgUrl}
            alt="imgUrl"
            className="rounded-full p-1 shadow-md"
            width={width}
            height={width}
            style={{ width: width, height: width }}
            priority
            objectFit="full"
          />
        </div>
      ) : name ? (
        <div className="flex flex-col gap-2 justify-center items-center text-black">
          <div
            className={`bg-slate-400 flex items-center text-white justify-center rounded-full text-center font-semibold shadow-md`}
            style={{ width: width + "px", height: width, fontSize: text }}
          >
            {initials}
          </div>
        </div>
      ) : (
        <RxAvatar size={width} color="blue" />
      )}
    </div>
  );
}
