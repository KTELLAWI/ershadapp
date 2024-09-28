"use client";
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import InputOpenWork from "../../../../componant/inputs/InputOpenWork";
import MySkills from "./MySkills";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { request } from "../../../../axios/axios";
import { setUser } from "@/redux/features/userSlice";
import { TagsInput } from "react-tag-input-component";
import { toast } from "react-toastify";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";

export default function InformationPersonal() {
  const user = useSelector((state) => state?.user);
  const [selected, setSelected] = useState([]);
  const [education, setEducation] = useState([]);

  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      jobTitle: "",
      contact: "",
      address: "",
      education: "",
      bio: "",
      profilePicture: "",
      skills: "",
    },
  });
  useEffect(() => {
    if (user?._id) {
      reset(user);
      setSelected(user?.skills || []);
      setEducation(user?.education || []);
    }
  }, [reset, user]);
  async function onSubmit(data) {
    console.log( data?.profilePicture );
    console.log(data?.profilePicture?.length);
    
    const formData = new FormData();
    formData.append("contact", data.contact);
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("jopTitle", data.jopTitle);
    formData.append("address", data.address);
    formData.append("bio", data.bio);
    formData.append("education", JSON.stringify(education));
    formData.append("skills", JSON.stringify(selected));
    if (data.profilePicture && data.profilePicture.length === 1) {
      formData.append("profilePicture", data.profilePicture[0]);
    }

    await request
      .put("/api/user/update-freelancer", formData)
      .then((result) => {
        console.log(result);

        if (result?.data?.message === "Freelancer updated successfully") {
          localStorage.setItem(
            "informUser",
            JSON.stringify(result?.data?.freelancer)
          );
          dispatch(setUser(result?.data?.freelancer));
          toast.success("تم تحديث بياناتك بنجاح");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error?.codeName === "DuplicateKey") {
          toast.error("هذا الايميل موجود من قبل");
        } else {
          toast.error(error?.message);
        }
      });
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <FaUserEdit color="#EDC165EB" size={25} />
        <h1 className="font-semibold cursor-pointer"> البيانات الشخصية</h1>
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
              text={"الاسم "}
              name={"name"}
              validation={{
                required: " الاسم مطلوب",
              }}
              register={register}
            />
            {errors.name && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              type={"text"}
              text={"المسمي الوظيفي"}
              name={"jobTitle"}
              validation={{
                required: " المسمي الوظيفي  مطلوب",
              }}
              register={register}
            />
            {errors.jobTitle && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.jobTitle.message}
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
              text={" وسيلة التواصل"}
              name={"contact"}
              validation={{
                required: "  وسيلة التواصل  مطلوبة",
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
              type={"text"}
              text={"   العنوان"}
              name={"address"}
              validation={{
                required: "   العنوان  مطلوب",
              }}
              register={register}
            />
            {errors.address && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <InputOpenWork
              type={"file"}
              text={"  الصورة الشخصية"}
              name={"profilePicture"}
              register={register}
            />
          </div>
        </div>
        <div className="w-full relative">
          <h1 className=" absolute -top-[13px] bg-white right-3 px-2 text-[0.8rem] text-NavbarBackground">
            التعليم{" "}
          </h1>
          <TagsInput
            value={education}
            onChange={setEducation}
            name="education"
            placeHolder=" التعليم"
          />
        </div>
        <div className="w-full relative">
          <InputOpenWork
            type={"textarea"}
            text={"نبذة تعريفية"}
            name={"bio"}
            register={register}
          />
        </div>

        <MySkills selected={selected} setSelected={setSelected} />

        <div className="flex justify-end mt-5">
          <button className="p-2 rounded-lg flex justify-center items-center bg-bgButtonNavbar text-white">
            {isSubmitting ? <LoadingButton /> : "حفظ التغييرات"}
          </button>
        </div>
      </form>
    </div>
  );
}
