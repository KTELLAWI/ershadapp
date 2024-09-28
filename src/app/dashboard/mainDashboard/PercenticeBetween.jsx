"use client";
import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/navigation";
import ApplayOpenWork from "../../../../componant/BlocksBobab/ApplayOpenWork";
import { request } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";
export default function PercenticeBetween() {
  const router = useRouter();
  const [openWork, setOpenWork] = useState(false);
  function getBetweenPercentage() {
    return request.get("/api/user/stats/ratio");
  }
  let { data } = useQuery({
    queryKey: ["getBetweenPercentage"],
    queryFn: getBetweenPercentage,
  });
  return (
    <div className="flex flex-col gap-3 lg:w-[48%] w-[100%] ">
      <div className=" bg-bgPop p-5 rounded-md flex flex-col items-center gap-5 h-[50vh]">
        <div style={{ width: "150px", height: "150" }}>
          <CircularProgressbar
            value={Number(data?.data?.clientRatio?.slice(0, 5))}
            styles={buildStyles({
              pathColor: "#d3b472",
              trailColor: "#4b5563",
            })}
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex  gap-2">
            <div className="bg-bgButtonNavbar px-3 py-5 h-fit translate-y-[15%]"></div>
            <div className="flex flex-col ">
              <h4 className="font-bold text-[1.2rem] ">
                {data?.data?.clientRatio}
              </h4>
              <p>شركات</p>
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="bg-gray-600 px-3 py-5 h-fit translate-y-[15%]"></div>
            <div className="flex flex-col ">
              <h4 className="font-bold text-[1.2rem]">
                {data?.data?.freelancerRatio}
              </h4>
              <p>مستخدمين</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <div
          className="flex p-2  gap-3 items-center w-full border border-NavbarBackground  rounded-lg cursor-pointer"
          onClick={() => router.push("/dashboard/availablesWork/addAvailableWork")}
        >
          <CiSquarePlus />
          <p className="text-[0.8rem] lg:text-[1rem]">اضافة متاح للعمل</p>
        </div>
        <div
          className="flex p-2 gap-3 items-center justify-center w-full  border border-NavbarBackground rounded-lg cursor-pointer"
          onClick={() => router.push("/dashboard/accountsCompany")}
        >
          <p className="text-[0.8rem] lg:text-[1rem]"> حسابات الشركات</p>
        </div>
      </div>
      {openWork && <ApplayOpenWork setOpenWork={setOpenWork} />}
    </div>
  );
}
