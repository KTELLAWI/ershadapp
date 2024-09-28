"use client";
import React, { useContext, useState } from "react";
import Filter from "./Filter";
import OpenWork from "./OpenWork";
import ApplayOpenWork from "../../../componant/BlocksBobab/ApplayOpenWork";
import { ContextSimple } from "../../../context/simpleContext";
import OpenWorkFilter from "./OpenWorkFilter";

export default function OpenWorks() {
  const [openFilter, setOpenFilter] = useState(false);
  const { openApplayOpenWork } = useContext(ContextSimple);

  //
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectNameJop, setSelectNameJop] = useState(null);
  const [setectEducation, setSelectEducation] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectLevelEnglish, setSelectLevelEnglish] = useState(null);
  const [selectWorkNow, setSelectWorkNow] = useState(null);
  const [workInRemotly, setWorkInRemotly] = useState(null);
  const [all, setAll] = useState(true);
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-5 w-[90%] mx-auto mt-20">
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
          </div>
        )}
        <div className="lg:w-[25%] lg:block hidden">
          <Filter
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
          />
        </div>
        {all ? (
          <OpenWork />
        ) : (
          <OpenWorkFilter
            selectLevelEnglish={selectLevelEnglish}
            selectedYear={selectedYear}
            selectNameJop={selectNameJop}
            setectEducation={setectEducation}
            selectCity={selectCity}
            selectWorkNow={selectWorkNow}
            workInRemotly={workInRemotly}
          />
        )}
      </div>
      {openApplayOpenWork && <ApplayOpenWork />}
    </>
  );
}
