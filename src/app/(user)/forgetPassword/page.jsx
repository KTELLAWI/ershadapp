"use client";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { MdQuestionMark } from "react-icons/md";
import Input from "../../../../componant/inputs/Input";
import { useForm } from "react-hook-form";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
export default function ForgetPassword() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await request
      .post("/api/user/forgot-password", data)
      .then((result) => {
        console.log(result);
        if (
          result?.data?.message === "Password reset link sent to your email"
        ) {
          toast.success( "تم ارسال ايميل لك لاعادة تعيين كلمة المرور" );
        }
      })
      .catch((error) => {
        if (error?.response?.data?.message === "User not found") {
          return toast.error("  هذا الايميل غير موجود");
        } else {
          return toast.error(error?.response?.data?.message);
        }
      });
  }

  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="lg:w-[35%] w-[90%] bg-bgPop rounded-lg lg:p-0 p-2   flex gap-10 items-center justify-center ">
        <div className="flex flex-col  gap-5 items-center w-[90%] rounded-lg lg:p-10 p-2 ">
          <div className="flex flex-col gap-3 items-center ">
            <div className="bg-bgIconQuestion p-2 rounded-full">
              <MdQuestionMark size={50} color="white" />
            </div>
            <h1 className="font-bold  text-[1.2rem]"> هل نسيت كلمة المرور؟</h1>
          </div>
          <form
            className="flex flex-col gap-5 w-full"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full relative">
              <Input
                type={"email"}
                name={"email"}
                placeholder={"البريد الألكتروني"}
                validation={{
                  required: "البريد الألكتروني مطلوب",
                }}
                register={register}
              />
              {errors.email && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button className="bg-bgButtonNavbar rounded-md flex justify-center items-center text-white py-2 px-3 w-full">
              {isSubmitting ? <LoadingButton /> : "التالي"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
