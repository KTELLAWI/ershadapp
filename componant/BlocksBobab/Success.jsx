import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Success({ setSuccessUpdate }) {
  return (
    <div className=" fixed top-0 left-0 w-full flex justify-center items-center h-screen bg-bgwhite z-20">
      <div className="lg:w-[35%] w-[90%] bg-bgPop rounded-lg   flex gap-10 items-center justify-center ">
        <div className="flex flex-col  gap-5 items-center w-[90%] rounded-lg p-7 ">
          <div className="flex flex-col gap-3 items-center ">
            <div className="bg-bgButtonPagination p-2 rounded-full">
              <FaCheck size={50} color="white" />
            </div>
            <h1 className="font-bold  text-[1.2rem]">
              {" "}
              تم تعديل البيانات بنجاح
            </h1>
          </div>

          <button
            className="bg-green rounded-md text-white py-2 px-3 w-52 mt-3"
            onClick={() => setSuccessUpdate(false)}
          >
            حسنا
          </button>
        </div>
      </div>
    </div>
  );
}
