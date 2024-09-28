"use client";
import React from "react";
import InputOpenWork from "../inputs/InputOpenWork";
import Avatar from "../Avatar";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import LoadingButton from "../Buttons/LoadingButton";
import { useRouter } from "next/navigation";
export default function AddOfferWork({ setOpenAddOffer }) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await request
      .post("/api/job/create", data)
      .then((result) => {
        if (result?.data?.message === "Job added successfully") {
          setOpenAddOffer(false);
          router.push("/statusOrder");
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.mesage);
      });
  }
  return (
    <div className=" fixed  top-0 left-0 w-full flex justify-center items-center h-screen bg-bgwhite">
      <div className="lg:w-[50%] w-[90%] bg-white rounded-md p-7 overflow-auto max-h-[90vh]">
        <div className="flex items-center gap-3">
          <Avatar width={"60px"} />
          <div>
            <h1 className="text-textHeadOfferWork font-semibold">
              الشركة الوطنية السعودية
            </h1>
            <p className="text-textFilter text-[0.9rem] -mt-1">
              ahmedrashad@gmail.com
            </p>
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full relative">
            <InputOpenWork
              text={"أكتب عرض العمل هنا"}
              name={"description"}
              type={"textarea"}
              register={register}
              validation={{
                required: "يجب اضافة عرض العمل",
                minLength: {
                  value: 100,
                  message: "عرض العمل يجب الا يقل عن 100 حرف",
                },
              }}
            />
            {errors.description && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex justify-end mt-5 items-center">
            <div className="flex items-center gap-3 ">
              <button
                className="bg-white rounded-md px-3 py-2 text-black"
                onClick={() => setOpenAddOffer(false)}
              >
                الغاء
              </button>
              <button className="bg-bgButtonNavbar rounded-md px-3 py-2 text-white">
                {isSubmitting ? <LoadingButton /> : " نشر الان"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
