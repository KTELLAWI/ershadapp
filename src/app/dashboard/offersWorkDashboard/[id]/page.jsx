"use client";
import React, { useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import InputDisplayOnly from "../../../../../componant/inputs/InputDisplayOnly";
import { useRouter } from "next/navigation";
import { request } from "../../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";
import LoadingButton from "../../../../../componant/Buttons/LoadingButton";
import { toast, ToastContainer } from "react-toastify";

export default function OfferWorkDynaminDashboard({ params }) {
  const router = useRouter();
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  function getOfferWorkSingle() {
    return request.get(`/api/job/${params.id}`);
  }
  let { data } = useQuery({
    queryKey: ["getOfferWorkSingle"],
    queryFn: getOfferWorkSingle,
  });
  // handleAccepted
  async function handleAcceptedAndRejected(paramState) {
    setLoading(true);
    await request
      .put(`/api/job/update-job-status`, {
        jobId: params.id,
        status: paramState,
      })
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "Job status updated to تم الموافقة")
          return toast.success("تم قبول العرض بنجاح");
        if (result?.data?.message === "Job status updated to تم رفضه")
          return toast.success("تم رفض العرض بنجاح");
      })
      .catch((error) => alert(error?.response?.data?.message))
      .finally(() => setLoading(false));
  }

  return (
    <div className="lg:mt-10 mt-14 lg:p-5 p-2">
      <ToastContainer position="top-center" />
      <div className="flex items-center gap-2">
        <MdOutlineLocalOffer size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          عروض العمل / بيانات عرض العمل
        </h4>
      </div>
      <div className="   mt-7 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"companyName"}
            text={"اسم الشركة"}
            type={"text"}
            value={data?.data?.data?.createdBy?.companyName}
          />
          <InputDisplayOnly
            name={"email"}
            text={"البريد الالكتروني"}
            type={"email"}
            value={data?.data?.data?.createdBy?.email}
          />
        </div>

        <div className="flex gap-3 items-center">
          <InputDisplayOnly
            name={"address"}
            text={" العنوان"}
            type={"text"}
            value={data?.data?.data?.createdBy?.address}
          />
          <InputDisplayOnly
            name={"contact"}
            text={" وسيلة التواصل"}
            type={"text"}
            value={data?.data?.data?.createdBy?.contact}
          />
        </div>
        <InputDisplayOnly
          name={"description"}
          text={"   نص الوظيفة"}
          type={"textarea"}
          value={data?.data?.data?.description}
        />
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-2">
          <button
            className="bg-green rounded-md text-white py-2 px-3"
            onClick={() => {
              setState("تم الموافقة");
              handleAcceptedAndRejected("تم الموافقة");
            }}
          >
            {loading && state === "تم الموافقة" ? <LoadingButton /> : "قبول"}
          </button>
          <button
            className="bg-red rounded-md text-white py-2 px-3"
            onClick={() => {
              setState("تم رفضه");
              handleAcceptedAndRejected("تم رفضه");
            }}
          >
            {loading && state === "تم رفضه" ? <LoadingButton /> : "رفض"}
          </button>
        </div>
        <button
          className="bg-bgButtonNavbar rounded-md text-white py-2 px-3"
          onClick={() => router.push("/dashboard/offersWorkDashboard")}
        >
          رجوع
        </button>
      </div>
    </div>
  );
}
