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
   const [currentJobTitleAr, setCurrentJobTitleAr] = useState(null);
   const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
   const [specialtyNameAr, setSpecialtyNameAr] = useState(null);
   const [qualification, setQualification] = useState(null);
   const [totalExperience, setTotalExperience] = useState(null);
   const [nationality, setNationality] = useState(null);
   const [gender, setGender] = useState(null);
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
        {/* <div
          className="border border-black rounded-md py-2 px-4 text-[0.9rem] cursor-pointer"
          onClick={() => router.push("/dashboard/availablesWork/requestsJoin")}
        >
          عرض طلبات الانضمام
        </div> */}
      </div>
      <FilterOpenWorkDashboard
        setOpenComponantSearch={setOpenComponantSearch}
        currentJobTitleAr={currentJobTitleAr}
        setCurrentJobTitleAr={setCurrentJobTitleAr}
        currentlyEmployed={currentlyEmployed}
        setCurrentlyEmployed={setCurrentlyEmployed}
        specialtyNameAr={specialtyNameAr}
        setSpecialtyNameAr={setSpecialtyNameAr}
        qualification={qualification}
        setQualification={setQualification}
        totalExperience={totalExperience}
        setTotalExperience={setTotalExperience}
        nationality={nationality}
        setNationality={setNationality}
        gender={gender}
        setGender={setGender}
    
      />
      {openComponantSearch ? (
       <DataOpenWorkFromFilter
                     currentJobTitleAr={currentJobTitleAr}
                     currentlyEmployed={currentlyEmployed}
                     specialtyNameAr={specialtyNameAr}
                     qualification={qualification}
                     totalExperience={totalExperience}
                     nationality={nationality}
                     gender={gender}
                     location=""
                   />
      ) : (
        <AllDataApproveOpenWork />
      )}
    </div>
  );
}
