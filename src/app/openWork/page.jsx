"use client";
import React, { useContext, useState, useEffect } from "react";
import Filter from "./Filter";
import OpenWork from "./OpenWork";
import ApplayOpenWork from "../../../componant/BlocksBobab/ApplayOpenWork";
import { ContextSimple } from "../../../context/simpleContext";
import OpenWorkFilter from "./OpenWorkFilter";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import AllDataApproveOpenWork from "../dashboard/availablesWork/AllDataApproveOpenWork";
import DataOpenWorkFromFilter from "../dashboard/availablesWork/DataOpenWorkFromFilter";


export default function OpenWorks() {
  const [openFilter, setOpenFilter] = useState(false);
  const { openApplayOpenWork } = useContext(ContextSimple);

  //
  const [currentJobTitleAr, setCurrentJobTitleAr] = useState(null);
  const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
  const [specialtyNameAr, setSpecialtyNameAr] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [totalExperience, setTotalExperience] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [gender, setGender] = useState(null);
  const [all, setAll] = useState(true);
  const user = useSelector((state) => state?.user);
  const router = useRouter();

  // useEffect(() => {
  //   //todo: endpoint to return status of client 
  //   if (user?.role === "Client" && user?.accountStatus === false || user?.role != "Client") {
  //     console.log("User detected, redirecting to /disabledaccount");
  //     router.push("/disabledaccount");
  //   }
  // }, [user, router]);


  return (
    <>
      <div className="flex lg:flex-row flex-col gap-3 w-[100%] mx-auto mt-20">
        <div
          className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
          onClick={() => setOpenFilter((e) => !e)}
        >
          التصنيفات
        </div>
        {openFilter && (
          <div className="lg:w-[25%] lg:hidden block">
                   <Filter
          all={all}
          setAll={setAll}
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
          </div>
        )}
        <div className="lg:w-[25%] lg:block hidden mr-2">
          {/* <Filter
            all={all}
            setAll={setAll}
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
          /> */}
          <Filter
          all={all}
          setAll={setAll}
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

        </div>
        {all ?

          (
            // <OpenWork />
            <div className="lg:w-[75%] mx-3 lg:max-h-[100%] ">
              <AllDataApproveOpenWork location="company" />
            </div>
          ) : (
            <div className="lg:w-[75%] mx-3 lg:max-h-[100%] ">
              <DataOpenWorkFromFilter
                currentJobTitleAr={currentJobTitleAr}
                currentlyEmployed={currentlyEmployed}
                specialtyNameAr={specialtyNameAr}
                qualification={qualification}
                totalExperience={totalExperience}
                nationality={nationality}
                gender={gender}
                location="company"
              />

            </div>
            // <OpenWorkFilter
            //   selectLevelEnglish={selectLevelEnglish}
            //   selectedYear={selectedYear}
            //   selectNameJop={selectNameJop}
            //   setectEducation={setectEducation}
            //   selectCity={selectCity}
            //   selectWorkNow={selectWorkNow}
            //   workInRemotly={workInRemotly}
            // />
          )}
      </div>
      {openApplayOpenWork && <ApplayOpenWork />}
    </>
  );
}
