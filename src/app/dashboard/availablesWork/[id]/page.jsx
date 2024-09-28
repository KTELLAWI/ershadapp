"use client";
import React, { useEffect, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import InputOpenWork from "../../../../../componant/inputs/InputOpenWork";
import { useRouter } from "next/navigation";
import Success from "../../../../../componant/BlocksBobab/Success";
import cities from "../../../../../helpers/cities";
import jobTitles from "../../../../../helpers/jobTitles";
import { useForm } from "react-hook-form";
import LoadingButton from "../../../../../componant/Buttons/LoadingButton";
import educations from "../../../../../helpers/educations";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../axios/axios";

export default function OpenWorkDynaminDashboard({ params }) {
  const router = useRouter();
  const [successUpdate, setSuccessUpdate] = useState(false);
  // get single
  function getAvailableWorkSingle() {
    return request.get(`/api/work/singleJoinRequest/${params.id}`);
  }
  let { data } = useQuery({
    queryKey: ["getAvailableWorkSingle"],
    queryFn: getAvailableWorkSingle,
  });
  useEffect(() => {
    reset(data?.data?.data);
  }, [data]);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      jobTitle: "",
      idNumber: "",
      englishLevel: "",
      title: "",
      maritalStatus: "",
      degree: "",
      graduationYear: "",
      bio: "",
      canWorkRemotely: "",
      willingToRelocate: "",
    },
  });
  // update
  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("idNumber", data.idNumber);
    formData.append("city", data.city);
    formData.append("englishLevel", data.englishLevel);
    formData.append("maritalStatus", data.maritalStatus);
    formData.append("title", data.title);
    formData.append("jobTitle", data.jobTitle);
    formData.append("degree", data.degree);
    formData.append("graduationYear", data.graduationYear);
    formData.append("willingToRelocate", data.willingToRelocate);
    formData.append("canWorkRemotely", data.canWorkRemotely);
    formData.append("bio", data.bio);
    await request
      .put(`/api/work/updateJoinRequest/${params.id}`, formData)
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "Join request updated successfully") {
          setSuccessUpdate(true);
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.message);
      });
  }
  return (
    <div className="lg:mt-10 mt-14 lg:p-5 p-2">
      <div className="flex items-center gap-2">
        <FaUserCog size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          المتاحين للعمل / عرض البيانات
        </h4>
      </div>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="   mt-7  grid grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] gap-3">
          <div className="w-full relative">
            <InputOpenWork
              text={" الاسم كامل"}
              type={"text"}
              name={"fullName"}
              validation={{
                required: " الاسم مطلوب",
              }}
              register={register}
            />
            {errors.fullName && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <InputOpenWork
              type={"email"}
              text={" البريد الالكتروني"}
              name={"email"}
              validation={{
                required: " البريد الالكتروني  مطلوب",
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
              text={"  رقم الجوال"}
              name={"phoneNumber"}
              validation={{
                required: " رقم الجوال  مطلوب",
              }}
              register={register}
            />
            {errors.phoneNumber && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"city"}
              label={"    المدينة"}
              type={"select"}
              option={cities}
              validation={{
                required: "   المدينة  مطلوب",
              }}
              register={register}
            />

            {errors.city && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <InputOpenWork
              name={"jobTitle"}
              label={"   المسمي الوظيفي "}
              option={jobTitles}
              type={"select"}
              validation={{
                required: "  المسمي الوظيفي مطلوب",
              }}
              register={register}
            />
            {errors.jobTitle && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <InputOpenWork
              name={"idNumber"}
              text={"  رقم  الهوية"}
              type={"number"}
              validation={{
                required: "  رقم الهوية مطلوب",
              }}
              register={register}
            />

            {errors.idNumber && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.idNumber.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <InputOpenWork
              name={"englishLevel"}
              label={"اللغة الانجليزية"}
              option={["ضعيف", "متوسط", "ممتاز", "جيد", "جيد جدا"]}
              type={"select"}
              validation={{
                required: "اللغة الانجليزية مطلوبة",
              }}
              register={register}
            />

            {errors.englishLevel && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.englishLevel.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <InputOpenWork
              name={"title"}
              label={"اللقب"}
              option={["سيد", "سيدة"]}
              type={"select"}
              validation={{
                required: "  اللقب مطلوب",
              }}
              register={register}
            />
            {errors.title && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"maritalStatus"}
              label={"   الحالة"}
              type={"select"}
              option={["اعزب", "متزوج", "مطلق", "ارمله"]}
              validation={{
                required: "    الحالة مطلوبة",
              }}
              register={register}
            />

            {errors.maritalStatus && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.maritalStatus.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"degree"}
              label={"    المؤهل الدراسي "}
              option={educations}
              type={"select"}
              validation={{
                required: "  المؤهل الدراسي مطلوب",
              }}
              register={register}
            />
            {errors.degree && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.degree.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"graduationYear"}
              text={"سنة التخرج"}
              type={"number"}
              validation={{
                required: "    سنة التخرج مطلوبة",
              }}
              register={register}
            />
            {errors.graduationYear && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.graduationYear.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"canWorkRemotely"}
              label={" هل تستطيع العمل في غير مكان اقامتك"}
              type={"select"}
              option={["نعم", "لا"]}
              register={register}
              validation={{
                required: "هذا الحقل مطلوب",
              }}
            />
            {errors.canWorkRemotely && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.canWorkRemotely.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"willingToRelocate"}
              label={"    المباشرة في العمل"}
              type={"select"}
              option={["بعد ثلاثة شهور", "بعد شهرين", "بعد شهر", "فورا "]}
              register={register}
              validation={{
                required: "هذا الحقل مطلوب",
              }}
            />
            {errors.willingToRelocate && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.willingToRelocate.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full relative mt-10">
          <InputOpenWork
            name={"bio"}
            text={"نبذة تعريفية"}
            type={"textarea"}
            register={register}
            validation={{
              required: "النبذة التعريفية مطلوبة",
              minLength: {
                value: 100,
                message: "يجب الا يقل عن 100 حرف",
              },
            }}
          />
          {errors.bio && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.bio.message}
            </p>
          )}
        </div>
        <div className="flex justify-end items-center mt-4">
          <div className="flex items-center gap-2">
            <button
              className="bg-green border border-gray-300  rounded-md text-white py-2 px-5 text-[0.9rem]"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard/availablesWork");
              }}
            >
              رجوع
            </button>
            <button className="bg-NavbarBackground border border-gray-300  rounded-md text-white py-2 px-5 text-[0.9rem]">
              {isSubmitting ? <LoadingButton /> : "تعديل"}
            </button>
          </div>
        </div>
      </form>
      {successUpdate && <Success setSuccessUpdate={setSuccessUpdate} />}
    </div>
  );
}
