"use client";
import React from "react";
import registerImage from "../../../../public/images/registerCompany.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "../../../../componant/inputs/Input";
import { useForm } from "react-hook-form";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
export default function RegisterCompany() {
  const router = useRouter();
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch( "password" );
  const dispatch = useDispatch()
  async function onSubmit(data) {
    
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("contact", data.contact);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("address", data.address);
    formData.append("bio", data.bio);
    formData.append("companyLogo", data.companyLogo[0]);
    formData.append("role", "Client");

    await request
      .post("/api/user/register", formData)
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "User registered successfully") {
          localStorage.setItem(
            "informUser",
            JSON.stringify(result?.data?.user)
          );
          dispatch(setUser(result?.data?.user));
          toast.success("تم انشاء الحساب بنجاح");
          router.replace("/");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.message === "Email is already registered") {
          return toast.error("هذا الايميل موجود من قبل");
        } else {
          return toast.error(error?.response?.data?.message);
        }
      });
  }
  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="lg:w-[80%] w-[95%] bg-bgPop rounded-lg p-5 lg:p-7 max-h-[98vh] flex gap-10 items-center relative">
        <div className="flex flex-col gap-5 items-center lg:w-[65%] w-full pt-5  lg:p-10 p-0">
          <h1 className="font-bold text-[1.2rem]"> انشاء حساب</h1>
          <form
            className="flex flex-col gap-5 w-full"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-3 w-full">
              <div className="w-full relative">
                <Input
                  type={"text"}
                  name={"companyName"}
                  placeholder={"   اسم الشركة"}
                  validation={{
                    required: "اسم الشركة مطلوب",
                  }}
                  register={register}
                />
                {errors.companyName && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="w-full relative">
                <Input
                  type={"file"}
                  name={"companyLogo"}
                  placeholder={" رفع شعار الشركة "}
                  register={register}
                />
                {errors.companyLogo && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.companyLogo.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-full relative">
                <Input
                  type={"email"}
                  name={"email"}
                  placeholder={"  البريد الالكتروني"}
                  validation={{
                    required: " البريد الالكتروني مطلوب",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "البريد الإلكتروني غير صالح",
                    },
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
                  type={"text"}
                  name={"address"}
                  placeholder={"   العنوان"}
                  validation={{
                    required: "  العنوان مطلوب",
                  }}
                  register={register}
                />
                {errors.address && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-full relative">
                <Input
                  type={"password"}
                  name={"password"}
                  placeholder={"   كلمة المرور"}
                  validation={{
                    required: "   كلمة المرور مطلوبة",
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
                  type={"text"}
                  name={"contact"}
                  placeholder={"   وسيلة التواصل "}
                  validation={{
                    required: "   وسيلة التواصل مطلوبة",
                  }}
                  register={register}
                />
                {errors.contact && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-full relative">
                <Input
                  type={"password"}
                  name={"confirmPassword"}
                  placeholder={" تاكيد كلمة المرور"}
                  validation={{
                    required: "  تاكيد كلمة المرور مطلوبة",
                    validate: (value) =>
                      value === password || "التاكيد ليس متطابق ",
                  }}
                  register={register}
                />
                {errors.confirmPassword && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="w-full relative">
                <Input
                  type={"text"}
                  name={"bio"}
                  placeholder={"    نبذة تعريفية (اختياري) "}
                  register={register}
                />
                {errors.bio && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.bio.message}
                  </p>
                )}
              </div>
            </div>
            <button className="bg-bgButtonNavbar rounded-sm flex justify-center items-center text-white py-2 px-3 w-full">
              {isSubmitting ? <LoadingButton /> : "التالي"}
            </button>
          </form>

          <div className="">
            هل لديك حساب ؟{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              تسجيل الدخول
            </span>
          </div>
        </div>
        <div className="w-[35%] lg:block hidden">
          <Image src={registerImage} alt="register" />
        </div>
      </div>
    </div>
  );
}
