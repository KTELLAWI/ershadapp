"use client";
import React, { useContext } from "react";
import Avatar from "../Avatar";
import Input from "../inputs/Input";
import { ContextSimple } from "../../context/simpleContext";
import { request, url } from "../../axios/axios";
import { useForm } from "react-hook-form";
import LoadingButton from "../Buttons/LoadingButton";
import { useRouter } from "next/navigation";
import logo from "../../public/images/ershadarabiclogo.png";

import ApplicationsForm from "../UI/Forms/JobApplicationForm.jsx"
export default function ApplayOnWork() {
  const {
    setOpenApplayOnWork,
    setInformationCompanyToApplay,
    informationCompanyToApplay,

  } = useContext(ContextSimple);
  const router = useRouter();
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm();
  // async function onSubmit(data) {

  //   const formData = new FormData();
  //   formData.append("fullName", data.fullName);
  //   formData.append("phone", data.phone);
  //   formData.append("jobId", informationCompanyToApplay.idJop);
  //   formData.append("cv", data.cv[0]);

  //   await request
  //     .post("/api/application/apply", formData)
  //     .then((result) => {
  //       if (result?.data?.message === "Application submitted successfully") {
  //         setOpenApplayOnWork(false);
  //         setInformationCompanyToApplay(null);
  //         router.push("/statusOrder");
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error?.response?.data?.message);
  //     });
  // }

  return (
    <div className=" fixed top-0 left-0 w-full flex justify-center items-center h-screen bg-bgwhite">
      <div className="lg:w-[50%] w-[95%] bg-white rounded-md lg:p-7 px-2 py-5 overflow-auto max-h-[90vh]">
        <div className="flex items-cener justify-between js gap-3">
          <div className="flex flex-1 items-center gap-3">
            <Avatar
              width={60}
              name={informationCompanyToApplay?.companyName}
              imgUrl={logo}
              img={informationCompanyToApplay?.companyLogo}
            />

            <div>
              <h1 className="text-textHeadOfferWork font-semibold">
              ارشاد للتوظيف
              </h1>
              <p className="text-textFilter text-[0.9rem] -mt-1">
                info@ershad-sa.com
              </p>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center bg-bgButtonNavbar text-white rounded-md px-2 py-0 w-6 h-6"
            onClick={() => {
              setOpenApplayOnWork(false);
              setInformationCompanyToApplay(null);
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-4 mr-2">
          <p className="line-clamp-2">
            {informationCompanyToApplay?.descriptionJop}
          </p>
        </div>
        <ApplicationsForm endpoint="company" />

        {/* <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 mr-1">
            <h4 className="font-bold text-NavbarBackground">قدم الان</h4>
            <div className="flex gap-3 mt-3 w-full">
              <div className="w-full relative min-w-[49%]">
                <Input
                  placeholder={"   الاسم ثلاثي"}
                  name={"fullName"}
                  type={"text"}
                  validation={{
                    required: "الاسم ثلاثي مطلوب",
                    validate: (value) => {
                      const nameParts = value.trim().split(" ");
                      return nameParts.length >= 3 || "يجب ادخال الرقم ثلاثي";
                    },
                  }}
                  register={register}
                />
                {errors.fullName && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="w-full relative min-w-[49%] max-w-[50%]">
                <input
                  type="file"
                  name="cv"
                  {...register("cv", {
                    required: "السيرة الذاتية مطلوبة",
                  })}
                />
                {errors.cv && (
                  <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                    {errors.cv.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full relative mt-5">
              <Input
                placeholder={"   رقم الهاتف  (.....5xxx)"}
                name={"phone"}
                type={"text"}
                validation={{
                  required: "رقم الهاتف مطلوب",
                  minLength: {
                    value: 9,
                    message: "رقم الهاتف يجب أن يتكون من 9 أرقام",
                  },
                  maxLength: {
                    value: 9,
                    message: "رقم الهاتف يجب ألا يتجاوز 9 أرقام",
                  },
                  pattern: {
                    value: /^(5|6|7|8|9)\d{8}$/, // Matches Saudi phone numbers starting with 5-9 and followed by 8 digits
                    message: "رقم الهاتف يجب أن يبدأ بأرقام من 5 إلى 9 ويحتوي على 9 أرقام",
                  },
                }}
                register={register}
              />
              {errors.phone && (
                <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-5 items-center">
            <div className="flex items-center gap-3 ">
              <button
                className="bg-white rounded-md px-3 py-2 text-black"
                onClick={() => {
                  setOpenApplayOnWork(false);
                  setInformationCompanyToApplay(null);
                }}
              >
                الغاء
              </button>
              <button className="bg-bgButtonNavbar rounded-md px-3 py-2 text-white">
                {isSubmitting ? <LoadingButton /> : "  قدم الان"}
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  );
}
