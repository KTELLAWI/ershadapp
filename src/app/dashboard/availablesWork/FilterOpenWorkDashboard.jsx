"use client";
import React, { useState } from "react";

import jobTitles from "../../../../helpers/jobTitles";
import educations from "../../../../helpers/educations";
import cities from "../../../../helpers/cities";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputFilterInDashboard from "../../../../componant/inputs/InputFilterInDashboard";

export default function FilterOpenWorkDashboard({
  setOpenComponantSearch,
  selectedYear,
  setSelectedYear,
  selectNameJop,
  setSelectNameJop,
  setectEducation,
  setSelectEducation,
  selectCity,
  setSelectCity,
  selectLevelEnglish,
  setSelectLevelEnglish,
  selectWorkNow,
  setSelectWorkNow,
  workInRemotly,
  setWorkInRemotly,
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] items-center lg:w-[90%] w-[95%] gap-3 mt-3">
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"jobTitle"}
          label={"المسمي الوظيفي "}
          option={jobTitles}
          setSelectNameJop={setSelectNameJop}
        />
      </div>
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"degree"}
          label={"    المؤهل الدراسي "}
          option={educations}
          setSelectEducation={setSelectEducation}
        />
      </div>
      <div>
        <div className="flex flex-col gap-4 mt-3">
          <DatePicker
            selected={selectedYear}
            onChange={(date) => setSelectedYear(date)}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="اختر سنة التخرج"
            className="custom-input1"
          />
        </div>
      </div>
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"city"}
          label={"المدينة"}
          option={cities}
          setSelectCity={setSelectCity}
        />
      </div>
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"willingToRelocate"}
          label={" المباشرة في العمل"}
          option={["بعد ثلاثة شهور", "بعد شهرين", "بعد شهر", "فورا "]}
          setSelectWorkNow={setSelectWorkNow}
        />
      </div>
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"canWorkRemotely"}
          label={" هل تستطيع العمل في غير مكان اقامتك"}
          option={["نعم", "لا"]}
          setWorkInRemotly={setWorkInRemotly}
        />
      </div>
      <div className="w-full relative">
        <InputFilterInDashboard
          name={"englishLevel"}
          label={"اللغة الانجليزية"}
          option={["ضعيف", "متوسط", "ممتاز", "جيد", "جيد جدا"]}
          setSelectLevelEnglish={setSelectLevelEnglish}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-bgButtonNavbar px-2 py-[9px] mt-[18px] text-white rounded-md font-bold h-fit w-full"
          onClick={() => {
            setOpenComponantSearch(false);
          }}
        >
          الكل
        </button>

        <button
          className="bg-NavbarBackground px-2 py-[9px] mt-[18px] text-white rounded-md font-bold h-fit w-full"
          onClick={() => {
            selectedYear !== null ||
            selectNameJop !== null ||
            setectEducation !== null ||
            selectCity !== null ||
            selectLevelEnglish !== null ||
            selectWorkNow !== null ||
            workInRemotly !== null
              ? setOpenComponantSearch(true)
              : alert("يجب اختيار بعض القيم للبحث");
          }}
        >
          بحث
        </button>
      </div>
    </div>
  );
}
