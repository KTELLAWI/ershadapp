"use client";
import React from "react";
import { MdBusiness } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../axios/axios";
import InputDisplayOnly from "../../../../../componant/inputs/InputDisplayOnly";

export default function AccountCompanyDaynamicDashboard({ params }) {
  const router = useRouter();
  function getAccountCompanySingle() {
    return request.get(`/api/user/${params.id}`);
  }
  let { data } = useQuery({
    queryKey: ["getAccountCompanySingle"],
    queryFn: getAccountCompanySingle,
  });
  return (
    <div className="lg:mt-10 mt-14 lg:p-5 p-2">
      <div className="flex items-center gap-2">
        <MdBusiness size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          حسابات الشركات / بيانات الشركة
        </h4>
      </div>
      <div className="   mt-7 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"CompanyName"}
            text={"اسم الشركة"}
            type={"text"}
            value={data?.data?.data?.companyName}
          />
          <InputDisplayOnly
            name={"email"}
            text={"البريد الالكتروني"}
            type={"email"}
            value={data?.data?.data?.email}
          />
        </div>
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"address"}
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
        <InputDisplayOnly
          name={"bio"}
          text={"  نبذة تعريفية"}
          type={"textarea"}
          value={data?.data?.data?.bio}
        />
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="bg-bgButtonNavbar rounded-md text-white py-2 px-3"
          onClick={() => router.push("/dashboard/accountsCompany")}
        >
          رجوع
        </button>
      </div>
    </div>
  );
}
