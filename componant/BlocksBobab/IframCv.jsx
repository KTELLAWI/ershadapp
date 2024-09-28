import React, { useContext } from "react";
import { ContextSimple } from "../../context/simpleContext";

export default function IframCv({ linkCv, cv }) {
  const { setOpenIframeCv, setValueCv } = useContext(ContextSimple);

  return (
    <div className="fixed top-0 left-0 w-full flex flex-col gap-1 justify-center items-center h-screen bg-bgwhite z-30">
      {cv ? (
        <iframe src={linkCv} height={"90%"} width={"90%"} />
      ) : (
        <div className="w-[90%] h-[90%] flex justify-center items-center font-bold text-white text-[1.2rem]">
          <h4>لم يقم برفع سيرة ذاتية لة</h4>
        </div>
      )}

      <div className="flex justify-end items-center  w-[90%]">
        <button
          onClick={() => {
            setValueCv(null);
            setOpenIframeCv(false);
          }}
          className="text-white font-bold bg-black  py-2 px-10  rounded-md cursor-pointer"
        >
          اغلاق
        </button>
      </div>
    </div>
  );
}
