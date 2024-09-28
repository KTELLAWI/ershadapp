import Image from "next/image";
import React from "react";
import ImageContact from "../../../public/images/contactus.png";
import Input from "../../inputs/Input";
import LoadingButton from "../../Buttons/LoadingButton";
import { useForm } from "react-hook-form";
import { request } from "../../../axios/axios";
export default function ContectUs() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await request
      .post("/api/contact", data)
      .then((result) => {
        if (result?.data?.message === "Message sent successfully!") {
          alert("تم ارسال رسالتك بنجاح");
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.message);
      });
  }
  return (
    <div className="bg-bgContactUs py-10 mt-20" id="contactUs">
      <div className="flex justify-between lg:w-[80%] w-[90%] mx-auto items-center">
        <div className="flex flex-col gap-7 lg:w-[55%]">
          <div>
            <h1 className="font-bold text-[1.2rem]">تواصل معنا</h1>
            <p>
              يسرنا دائماً الاستماع إلى آرائكم وملاحظاتكم. لا تترددوا في التواصل
              معنا في أي وقت للحصول على المزيد من المعلومات أو لطرح أي
              استفسارات. نحن هنا لخدمتكم ونحرص على تقديم أفضل ما لدينا.
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center gap-5">
              <div className="w-full relative">
                <Input
                  type={"text"}
                  placeholder={" الاسم"}
                  name={"name"}
                  register={register}
                  validation={{
                    required: "الاسم مطلوب",
                  }}
                />
                {errors.name && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full relative">
                <Input
                  type={"text"}
                  placeholder={"البريد الالكتروني"}
                  name={"email"}
                  register={register}
                  validation={{
                    required: "البريد الالكتروني  مطلوب",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "البريد الإلكتروني غير صالح",
                    },
                  }}
                />
                {errors.email && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full relative">
              <textarea
                className="w-full rounded-md p-[7px] px-2 outline-none border mt-1 border-gray-400 min-h-48"
                placeholder="الرسالة"
                name={"message"}
                {...register("message", {
                  required: "يجب ملء هذا الحقل",
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red text-[0.7rem] absolute -bottom-[10px]">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button className="bg-bgButtonNavbar rounded-md text-white py-2 px-10 w-fit -mt-1">
              {isSubmitting ? <LoadingButton /> : " ارسال الرسالة"}
            </button>
          </form>
        </div>
        <div className="lg:block hidden">
          <Image src={ImageContact} alt="contactUs" />
        </div>
      </div>
    </div>
  );
}
