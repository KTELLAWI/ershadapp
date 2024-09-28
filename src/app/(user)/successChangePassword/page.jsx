"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa6";
export default function SuccessChangePassword() {
  const router = useRouter();

  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="lg:w-[35%] w-[90%] bg-bgPop rounded-lg   flex gap-10 items-center justify-center ">
        <div className="flex flex-col  gap-5 items-center w-[90%] rounded-lg p-7 ">
          <div className="flex flex-col gap-3 items-center ">
            <div className="bg-bgIconSuccess p-2 rounded-full">
              <FaCheck size={50} color="white" />
            </div>
            <h1 className="font-bold  text-[1.2rem]"> تهانينا !</h1>
            <p>تمت اعادة تعيين كلمة المرور بنجاح</p>
          </div>

          <button
            className="bg-bgButtonNavbar rounded-md text-white py-2 px-3 w-52 mt-3"
            onClick={() => router.push("/")}
          >
            حسنا
          </button>
        </div>
      </div>
    </div>
  );
}
