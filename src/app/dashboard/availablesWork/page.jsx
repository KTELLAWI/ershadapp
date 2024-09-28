"use client";
import React, { useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";

import { useRouter } from "next/navigation";
import FilterOpenWorkDashboard from "./FilterOpenWorkDashboard";

import AllDataApproveOpenWork from "./AllDataApproveOpenWork";
import DataOpenWorkFromFilter from "./DataOpenWorkFromFilter";
//
export default function AvailablsWork() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectNameJop, setSelectNameJop] = useState(null);
  const [setectEducation, setSelectEducation] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectLevelEnglish, setSelectLevelEnglish] = useState(null);
  const [selectWorkNow, setSelectWorkNow] = useState(null);
  const [workInRemotly, setWorkInRemotly] = useState(null);
  const [openComponantSearch, setOpenComponantSearch] = useState(false);
  return (
    <div className="lg:mt-10 mt-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineEventAvailable size={35} />
          <h4 className="text-[1.1rem]  text-NavbarBackground">
            {" "}
            المتاحين للعمل
          </h4>
        </div>
        <div
          className="border border-black rounded-md py-2 px-4 text-[0.9rem] cursor-pointer"
          onClick={() => router.push("/dashboard/availablesWork/requestsJoin")}
        >
          عرض طلبات الانضمام
        </div>
      </div>
      <FilterOpenWorkDashboard
        setOpenComponantSearch={setOpenComponantSearch}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectNameJop={selectNameJop}
        setSelectNameJop={setSelectNameJop}
        setectEducation={setectEducation}
        setSelectEducation={setSelectEducation}
        selectCity={selectCity}
        setSelectCity={setSelectCity}
        selectLevelEnglish={selectLevelEnglish}
        setSelectLevelEnglish={setSelectLevelEnglish}
        selectWorkNow={selectWorkNow}
        setSelectWorkNow={setSelectWorkNow}
        workInRemotly={workInRemotly}
        setWorkInRemotly={setWorkInRemotly}
      />
      {openComponantSearch ? (
        <DataOpenWorkFromFilter
          selectLevelEnglish={selectLevelEnglish}
          selectedYear={selectedYear}
          selectNameJop={selectNameJop}
          setectEducation={setectEducation}
          selectCity={selectCity}
          selectWorkNow={selectWorkNow}
          workInRemotly={workInRemotly}
        />
      ) : (
        <AllDataApproveOpenWork />
      )}
    </div>
  );
}
