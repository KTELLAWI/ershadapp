import React, { useContext, useEffect, useRef, useState } from "react";
import { ContextSimple } from "../../../context/simpleContext";
import Avatar from "../../../componant/Avatar";
import { url } from "../../../axios/axios";
import IframCv from "../../../componant/BlocksBobab/IframCv";
export default function OpenWorkBlock({ user }) {
  const { openIframeCv, setOpenIframeCv, valueCv, setValueCv } =
    useContext(ContextSimple);

  const [all, setAll] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const bioRef = useRef(null);
  useEffect(() => {
    const bioElement = bioRef.current;

    if (bioElement) {
      const lineHeight = parseFloat(getComputedStyle(bioElement).lineHeight);
      const maxHeight = lineHeight * 4;

      if (bioElement.scrollHeight > maxHeight) {
        setIsClamped(true);
      } else {
        setIsClamped(false);
      }
    }
  }, [user?.bio]);
  
  return (
    <div className="relative bg-bgKnowUs min-h-[280px] rouded-md pt-[70px] p-5 rounded-md">
      <div className="border-white bg-white rounded-full p-[5px] absolute h-[130px] w-[135px]  left-[50%] translate-x-[-50%] -top-16">
        <Avatar
          name={user?.fullName}
          imgUrl={`${url}/userImages/${user?.profilePicture}`}
          width={120}
          img={user?.profilePicture}
        />
      </div>
      <div className="flex justify-center items-center  flex-col">
        <h1 className="font-bold text-[1.1rem]"> {user?.fullName}</h1>
        <h4 className="text-[0.9rem]"> {user?.jobTitle}</h4>
      </div>

      <div className="flex gap-1 mt-3 items-end ">
        <div className=" text-[0.8rem] mb-10">
          <p className={`${!all ? "line-clamp-4" : ""} `} ref={bioRef}>
            {user?.bio}
          </p>
          {isClamped ? (
            <span
              className="font-bold  left-0 text-[0.8rem] cursor-pointer"
              onClick={() => setAll((e) => !e)}
            >
              {!all ? "عرض المزيد" : "عرض اقل"}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <button
        className="bg-NavbarBackground p-2 rounded-md text-white font-bold w-[90%] mt-3 absolute bottom-1 left-[50%] translate-x-[-50%] "
        onClick={() => {
          setValueCv(user?.cv);
          setOpenIframeCv(true);
        }}
      >
        السيرة الذاتية
      </button>
      {openIframeCv && (
        <IframCv linkCv={`${url}/userImages/${valueCv}`} cv={valueCv} />
      )}
    </div>
  );
}
