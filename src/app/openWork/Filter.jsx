"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckBox from "../../../componant/inputs/CheckBox";
import jobTitles from "../../../helpers/jobTitles";
import educations from "../../../helpers/educations";
import cities from "../../../helpers/cities";
export default function Filter({
  all,
  setAll,
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
  const [allNameJop, setAllNameJop] = useState(false);
  const [allCity, setAllCity] = useState(false);

  return (
    <div className="bg-bgPop w-[100%]  rounded-md p-5 text-textFilter">
      <h1 className="font-bold">التصنيفات</h1>
      <div
        onClick={() => {
          setAll(true);
          setSelectNameJop(null);
          setSelectedYear(null);
          setSelectEducation(null);
          setSelectCity(null);
          setSelectLevelEnglish(null);
          setSelectWorkNow(null);
        }}
        className="flex items-center gap-2 mt-5 cursor-pointer"
      >
        <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
          {all && (
            <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-textFilter"></div>
          )}
        </div>
        <label htmlFor="">الكل</label>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">المسمي الوظيفي</h1>
        <div className="flex flex-col gap-4 mt-3">
          {allNameJop
            ? jobTitles?.map((title, index) => (
                <CheckBox
                  key={index}
                  text={title}
                  setSelectNameJop={setSelectNameJop}
                  selectNameJop={selectNameJop}
                  setAll={setAll}
                  type={"nameJop"}
                />
              ))
            : jobTitles
                ?.slice(0, 2)
                .map((title, index) => (
                  <CheckBox
                    key={index}
                    setAll={setAll}
                    text={title}
                    setSelectNameJop={setSelectNameJop}
                    selectNameJop={selectNameJop}
                    type={"nameJop"}
                  />
                ))}

          <h1
            className="font-bold -mt-2 text-insideTextFilter cursor-pointer"
            onClick={() => setAllNameJop((e) => !e)}
          >
            {allNameJop ? "عرض اقل" : "عرض المزيد"}
          </h1>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter"> المؤهل العلمي</h1>
        <div className="flex flex-col gap-4 mt-3">
          {educations?.map((education, index) => (
            <CheckBox
              key={index}
              setAll={setAll}
              type={"education"}
              text={education}
              setectEducation={setectEducation}
              setSelectEducation={setSelectEducation}
            />
          ))}
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter"> سنة التخرج</h1>
        <div className="flex flex-col gap-4 mt-3">
          <DatePicker
            selected={selectedYear}
            onChange={(date) => {
              setSelectedYear(date);
              setAll(false);
            }}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="اختر سنة التخرج"
            className="custom-input"
          />
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter"> المدينة</h1>
        <div className="flex flex-col gap-4 mt-3">
          {allCity
            ? cities?.map((city, index) => (
                <CheckBox
                  key={index}
                  text={city}
                  setAll={setAll}
                  setSelectCity={setSelectCity}
                  selectCity={selectCity}
                  type={"city"}
                />
              ))
            : cities
                ?.slice(0, 2)
                ?.map((city, index) => (
                  <CheckBox
                    key={index}
                    text={city}
                    setAll={setAll}
                    setSelectCity={setSelectCity}
                    selectCity={selectCity}
                    type={"city"}
                  />
                ))}

          <h1
            className="font-bold -mt-2 text-insideTextFilter cursor-pointer"
            onClick={() => setAllCity((e) => !e)}
          >
            عرض المزيد
          </h1>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          {" "}
          اللغة الانجليزية
        </h1>
        <div className="flex flex-col gap-4 mt-3">
          {["ضعيف", "متوسط", "ممتاز", "جيد", "جيد جدا"]?.map((level, index) => (
            <CheckBox
              text={level}
              key={index}
              setAll={setAll}
              type={"levelEnglish"}
              selectLevelEnglish={selectLevelEnglish}
              setSelectLevelEnglish={setSelectLevelEnglish}
            />
          ))}

          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          {" "}
          المباشرة في العمل
        </h1>
        <div className="flex flex-col gap-4 mt-3">
          {["فورا ", "بعد شهر", "بعد شهرين", "بعد ثلاثة شهور"]?.map(
            (ques, index) => (
              <CheckBox
                text={ques}
                key={index}
                setAll={setAll}
                type={"workNow"}
                selectWorkNow={selectWorkNow}
                setSelectWorkNow={setSelectWorkNow}
              />
            )
          )}

          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          {" "}
          العمل في غير مكان اقامتك
        </h1>
        <div className="flex flex-col gap-4 mt-3">
          {["نعم", "لا"]?.map((ques, index) => (
            <CheckBox
              text={ques}
              key={index}
              setAll={setAll}
              type={"workRemotly"}
              workInRemotly={workInRemotly}
              setWorkInRemotly={setWorkInRemotly}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
