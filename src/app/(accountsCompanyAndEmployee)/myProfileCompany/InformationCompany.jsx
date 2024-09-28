import React, { useEffect } from "react";
import { SiInformatica } from "react-icons/si";
import InputOpenWork from "../../../../componant/inputs/InputOpenWork";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { request } from "../../../../axios/axios";
import { toast } from "react-toastify";
import { setUser } from "@/redux/features/userSlice";
export default function InformationCompany() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      companyName: "",
      email: "",
      contact: "",
      address: "",
      bio: "",
      logoCompany: "",
    },
  });
  useEffect(() => {
    if (user?._id) {
      reset(user);
    }
  }, [reset, user]);
  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("contact", data.contact);
    formData.append("email", data.email);
    formData.append("companyName", data.companyName);
    formData.append("address", data.address);
    formData.append("bio", data.bio);
    if (data.companyLogo && data.companyLogo.length === 1) {
      formData.append("companyLogo", data.companyLogo[0]);
    }

    await request
      .put("/api/user/update-client", formData)
      .then((result) => {
        console.log(result);

        if (result?.data?.message === "Client updated successfully") {
          localStorage.setItem(
            "informUser",
            JSON.stringify(result?.data?.updatedClient)
          );
          dispatch(setUser(result?.data?.updatedClient));
          toast.success("تم تحديث بياناتك بنجاح");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error?.codeName === "DuplicateKey") {
          toast.error("هذا الايميل موجود من قبل");
        } else {
          toast.error(error?.message);
        }
        console.log(error);
      });
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <SiInformatica color="#EDC165EB" size={25} />
        <h1 className="font-semibold cursor-pointer">بيانات الشركة</h1>
      </div>
      <form
        className="flex flex-col gap-5 w-full"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-5 items-center  mt-5 ">
          <div className="w-full relative">
            <InputOpenWork
              type={"text"}
              text={"اسم الشركة"}
              name={"companyName"}
              validation={{
                required: "اسم الشركة مطلوب ",
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
            <InputOpenWork
              type={"text"}
              text={" وسيلة التواصل"}
              name={"contact"}
              validation={{
                required: "وسيلة التواصل مطلوبة ",
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
        <div className="flex items-center gap-5 mt-5">
          <div className="w-full relative">
            <InputOpenWork
              type={"email"}
              text={" البريد الالكتروني"}
              name={"email"}
              validation={{
                required: "البريد الالكتروني مطلوب ",
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
            <InputOpenWork
              type={"text"}
              text={"  العنوان"}
              name={"address"}
              validation={{
                required: " العنوان مطلوب ",
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
        <div className="w-[49%]">
          <div className="w-full relative">
            <InputOpenWork
              type={"file"}
              text={"شعار الشركة"}
              name={"companyLogo"}
              register={register}
            />
          </div>
        </div>
        <div className="w-full relative">
          <InputOpenWork
            type={"textarea"}
            text={"نبذة تعريفية"}
            name={"bio"}
            register={register}
          />
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
