"use client";
import React, { useContext } from "react";
import { MdGroups2 } from "react-icons/md";
import InputOpenWork from "../../../../../componant/inputs/InputOpenWork";
import LoadingButton from "../../../../../componant/Buttons/LoadingButton";
import { useForm } from "react-hook-form";
import { ContextSimple } from "../../../../../context/simpleContext";
import { useRouter } from "next/navigation";
import { request } from "../../../../../axios/axios";
import educations from "../../../../../helpers/educations";
import cities from "../../../../../helpers/cities";
import jobTitles from "../../../../../helpers/jobTitles";
//
export default function AddAvailableWork() {
  const { setOpenApplayOpenWork } = useContext(ContextSimple);
  const router = useRouter();
  //
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

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
    formData.append("profilePicture", data.profilePicture[0]);
    formData.append("cv", data.cv[0]);
    await request
      .post("/api/work/applyToWork", formData)
      .then((result) => {
        if (result?.data?.message === "Application submitted successfully") {
          setOpenApplayOpenWork(false);
          router.push("/dashboard/availablesWork");
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.message);
      });
  }
  return (
    <div className="lg:mt-10 mt-14 lg:p-5 p-2">
      <div className="flex items-center gap-2">
        <MdGroups2 size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          المتاحين للعمل / اضافة متاح للعمل
        </h4>
      </div>
      <form
        className="flex flex-col gap-5 w-full"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] mt-7  gap-3">
          <div className="w-full relative">
            <InputOpenWork
              name={"fullName"}
              text={"الاسم كامل"}
              type={"text"}
              validation={{
                required: "الاسم مطلوب",
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
              name={"email"}
              text={" البريد الالكتروني مطلوب"}
              type={"email"}
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
            <InputOpenWork
              name={"phoneNumber"}
              text={"  رقم الهاتف "}
              type={"tel"}
              validation={{
                required: "  رقم الهاتف مطلوب",
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

          {/* //////////////// */}
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

          {/* ///////// */}
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
          {/* ///////////// */}
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
          <div className="w-full relative">
            <InputOpenWork
              name={"cv"}
              text={"السيرة الذاتية"}
              type={"file"}
              register={register}
              validation={{
                required: "السيرة الذاتية مطلوبة",
              }}
            />
            {errors.cv && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.cv.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              name={"profilePicture"}
              text={" الصورة الشخصية"}
              type={"file"}
              register={register}
              validation={{
                required: "الصورة الشخصية مطلوبة",
              }}
            />
            {errors.profilePicture && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.profilePicture.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full relative">
          <InputOpenWork
            name={"bio"}
            text={"  نبذة تعريفية"}
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
        <div className="flex justify-end mt-5 items-center">
          <div className="flex items-center gap-3 ">
            <button
              className="bg-blue-400 rounded-md px-3 py-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard/availablesWork");
              }}
            >
              رجوع
            </button>
            <button className="bg-NavbarBackground rounded-md px-3 py-2 text-white">
              {isSubmitting ? <LoadingButton /> : " ارسال الطلب"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
