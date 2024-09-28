"use client";
import React, { useContext, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { useRouter } from "next/navigation";
import InputDisplayOnly from "../../../../../componant/inputs/InputDisplayOnly";
import { useQuery } from "@tanstack/react-query";
import { request, url } from "../../../../../axios/axios";
import IframCv from "../../../../../componant/BlocksBobab/IframCv";
import { ContextSimple } from "../../../../../context/simpleContext";

export default function AccountsUserDaynamicDashboard({ params }) {
  const router = useRouter();
  
  const {openIframeCv,setOpenIframeCv}  =useContext(ContextSimple)
  function getAccountEmployeeSingle() {
    return request.get(`/api/user/${params.id}`);
  }
  let { data } = useQuery({
    queryKey: ["getAccountEmployeeSingle"],
    queryFn: getAccountEmployeeSingle,
  });
  return (
    <div className="lg:mt-10 mt-14 lg:p-5 p-2">
      <div className="flex items-center gap-2">
        <FaUserCog size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          حسابات المستخدمين / بيانات المستخدم
        </h4>
      </div>
      <div className="   mt-7 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"nameCompany"}
            text={"اسم المستخدم"}
            type={"text"}
            value={data?.data?.data?.name}
          />
          <InputDisplayOnly
            name={"email"}
            text={"البريد الالكتروني"}
            type={"email"}
            value={data?.data?.data?.name}
          />
        </div>
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"location"}
            text={" العنوان"}
            type={"text"}
            value={data?.data?.data?.address}
          />
          <InputDisplayOnly
            name={"contact"}
            text={" وسيلة التواصل"}
            type={"text"}
            value={data?.data?.data?.contact}
          />
        </div>
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"jobTitle"}
            text={" المسمي الوظيفي"}
            type={"text"}
            value={data?.data?.data?.jobTitle}
          />
          <InputDisplayOnly
            name={"education"}
            value={data?.data?.data?.education}
            text={"التعليم"}
            type={"text"}
          />
        </div>
        <InputDisplayOnly
          name={"bio"}
          text={"نبذة تعريفية"}
          value={data?.data?.data?.bio}
          type={"textarea"}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="border border-gray-300 rounded-md text-[0.9rem] py-2 px-5"
          onClick={() => setOpenIframeCv(true)}
        >
          السيرة الذاتية
        </button>
        <button
          className="bg-bgButtonNavbar border border-gray-300  rounded-md text-white py-2 px-5 text-[0.9rem]"
          onClick={() => router.push("/dashboard/accountsUser")}
        >
          رجوع
        </button>
      </div>
      {openIframeCv && (
        <IframCv
          linkCv={`${url}/userImages/${data?.data?.data?.cv}`}
          cv={data?.data?.data?.cv}
        />
      )}
    </div>
  );
}
