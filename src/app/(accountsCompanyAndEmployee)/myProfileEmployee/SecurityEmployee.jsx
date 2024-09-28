import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import InputOpenWork from "../../../../componant/inputs/InputOpenWork";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function SecurityEmployee() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const newPassword = watch("newPassword");
  async function onSubmit(data) {
    await request
      .put("/api/user/changepassword", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      })
      .then((result) => {
        if (result?.data?.message === "Password changed successfully") {
          toast.success("تم تغيير كلمة المرور بنجاح");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error === "Incorrect old password") {
          toast.error("كلمة المرور القديمة غير صحيحة");
        } else {
          toast.error(error?.response?.data?.error);
        }
      });
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <MdOutlineSecurity color="#61CE70" size={25} />
        <h1 className="font-semibold cursor-pointer"> الحماية والامان</h1>
      </div>
      <form
        className="flex flex-col gap-5 w-full"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-5 items-center  mt-5 w-[49%]">
          <div className="w-full relative">
            <InputOpenWork
              type={"password"}
              text={" كلمة المرور الحالية"}
              name={"currentPassword"}
              validation={{
                required: "كلمة المرور الحالية مطلوبة",
              }}
              register={register}
            />
            {errors.currentPassword && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div className="w-full relative">
            <InputOpenWork
              type={"password"}
              text={" كلمة المرور الجديدة"}
              name={"newPassword"}
              validation={{
                required: "كلمة المرور الجديدة مطلوبة",
                minLength: {
                  value: 8,
                  message: "كلمة المرور ضعيفة",
                },
              }}
              register={register}
            />
            {errors.newPassword && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              type={"password"}
              text={" تاكيد كلمة الجديدة"}
              name={"confirmNewPassord"}
              validation={{
                required: "تاكيد كلمة المرور الجديدة مطلوبة",
                validate: (value) =>
                  value === newPassword || "  التاكيد ليس متطابق",
              }}
              register={register}
            />
            {errors.confirmNewPassord && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.confirmNewPassord.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button className="p-2 rounded-lg bg-bgButtonNavbar text-white">
            {isSubmitting ? <LoadingButton /> : " حفظ التغييرات"}
          </button>
        </div>
      </form>
    </div>
  );
}
