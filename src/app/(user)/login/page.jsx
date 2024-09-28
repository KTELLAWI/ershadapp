"use client";
import React from "react";
import chooseImage from "../../../../public/images/chooseAccount.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../../componant/inputs/Input";
import logo from "../../../../public/images/logo.png";
import { useForm } from "react-hook-form";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await request
      .post("/api/user/login", data)
      .then((result) => {
        if (result?.data?.message === "Login successfully") {
          localStorage.setItem(
            "informUser",
            JSON.stringify(result?.data?.user)
          );
          dispatch(setUser(result?.data?.user));
          toast.success("تم   تسجيل الدخول بنجاح");
          router.replace("/");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.message === "Invalid email or password") {
          return toast.error("    الايميل او كلمة المرور غير صالحة");
        } else {
          return toast.error(error?.response?.data?.message);
        }
      });
  }
  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="lg:w-[80%] w-[90%] bg-bgPop rounded-lg p-5 lg:p-10 flex gap-10 items-center relative">
        <Image
          src={logo}
          alt="logo"
          className="w-[100px] absolute left-5 top-5 lg:block hidden"
        />
        <div className="flex flex-col gap-5 items-center lg:w-[50%] w-full pt-5 bg-NavbarBackground rounded-lg p-10">
          <h1 className="font-bold text-white text-[1.2rem]"> مرحبا مجددا</h1>
          <form
            className="flex flex-col gap-5 w-full"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full relative">
              <Input
                type={"email"}
                name={"email"}
                placeholder={"    البريد الالكتروني"}
                validation={{
                  required: "البريد الإلكتروني مطلوب",
                }}
                register={register}
              />
              {errors.email && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-full relative">
              <Input
                type={"password"}
                name={"password"}
                placeholder={"  كلمة المرور"}
                validation={{
                  required: "كلمة المرور مطلوبة",
                }}
                register={register}
              />
              {errors.password && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.password.message}
                </p>
              )}
            </div>
            <span
              onClick={() => router.push("/forgetPassword")}
              className="text-forgetPasswordText text-[0.8rem] -mt-1 cursor-pointer"
            >
              هل نسيت كلمة المرور ؟
            </span>
            <button className="bg-bgButtonNavbar rounded-md flex justify-center items-center text-white py-2 px-3 w-full -mt-1">
              {isSubmitting ? <LoadingButton /> : "التالي"}
            </button>
          </form>

          <div className="text-white">
            ليس لديك حساب ؟{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => router.push("/chooseAccount")}
            >
              انشاء حساب
            </span>
          </div>
        </div>
        <div className="w-[50%] lg:block hidden">
          <Image src={chooseImage} alt="chooseAccount" />
        </div>
      </div>
    </div>
  );
}
