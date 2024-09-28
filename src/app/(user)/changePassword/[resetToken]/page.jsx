"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdQuestionMark } from "react-icons/md";
import Input from "../../../../../componant/inputs/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { request } from "../../../../../axios/axios";
import LoadingButton from "../../../../../componant/Buttons/LoadingButton";
export default function ChangePassword({ params }) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");
  async function onSubmit(data) {
    await request
      .post(`/api/user/reset-password/${params.resetToken}`, data)
      .then((result) => {
        if (result?.data?.message === "Password has been reset successfully") {
          router.replace("/successChangePassword");
        }
      })
      .catch((error) => {
        if (
          error?.response?.data?.message === "Token is invalid or has expired"
        ) {
          return toast.error(
            " تم انتهاء صلاحية الجلسة قم باعدة ارسال الايميل مرة اخري"
          );
        } else {
          return toast.error(error?.response?.data?.message);
        }
      });
  }
  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="lg:w-[35%] w-[90%] bg-bgPop rounded-lg lg:p-0 p-2  flex gap-10 items-center justify-center ">
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
                type={"password"}
                name={"password"}
                placeholder={" كلمة المرور الجديدة"}
                validation={{
                  required: "  كلمة المرور الجديدة مطلوبة",
                  minLength: {
                    value: 8,
                    message: "كلمة المرور ضعيفة",
                  },
                }}
                register={register}
              />
              {errors.password && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-full relative">
              <Input
                type={"password"}
                name={"confirmPassword"}
                placeholder={" تاكيد كلمة المرور الجديدة"}
                validation={{
                  required: " تاكيد كلمة المرور الجديدة مطلوبة",
                  validate: (value) =>
                    value === password || "التاكيد غير متطابق",
                }}
                register={register}
              />
              {errors.confirmPassword && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.confirmPassword.message}
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
