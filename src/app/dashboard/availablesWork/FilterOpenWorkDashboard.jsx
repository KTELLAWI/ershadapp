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
  currentJobTitleAr,
  setCurrentJobTitleAr,
  specialtyNameAr,
  setSpecialtyNameAr,
  qualification,
  setQualification,
  totalExperience,
  setTotalExperience,
  nationality,
  setNationality,
  gender,
  setGender,
  currentlyEmployed,
  setCurrentlyEmployed,
}) {

  const [key, setKey] = useState(0);
  const handleChange = (setter, event) => {
    // setAll(false);
    setter(event?.target.value);
    console.log(event?.target.value)
  };
  // const handleChange = (event) => {
  //   setAll(false);
  //  // setSelectNameJop(event.target.value); // Update state on input change
  // };
  const handleResetFilters = () => {
    // setAll(true);
    setKey((prevKey) => prevKey + 1);

    setCurrentJobTitleAr("");
    setSpecialtyNameAr("");
    setQualification("");
    setTotalExperience("");
    setNationality("");
    setGender(null);
    setCurrentlyEmployed("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center w-[95%] lg:w-[90%] mx-auto mt-2">
      {/* Job Title Input */}
      <div className="w-full">
        <input
          className="border border-gray-400 w-full rounded-md p-1 outline-none"
          type="text"
          value={currentJobTitleAr}
          onChange={(event) => handleChange(setCurrentJobTitleAr, event)}
          placeholder="ادخل المسمي الوظيفي"
        />
      </div>

      {/* Specialty Name Input */}
      <div className="w-full">
        <input
          className="border border-gray-400 w-full rounded-md p-1 outline-none"
          type="text"
          value={specialtyNameAr}
          onChange={(event) => handleChange(setSpecialtyNameAr, event)}
          placeholder="ادخل اسم التخصص باللغة العربية"
        />
      </div>

      {/* Total Experience Input */}
      <div className="w-full">
        <input
          className="border border-gray-400 w-full rounded-md p-1 outline-none"
          type="number"
          value={totalExperience}
          onChange={(event) => handleChange(setTotalExperience, event)}
          placeholder="ادخل سنوات الخبرة"
        />
      </div>

      {/* Qualification Filter */}
      <div className="w-full">
        <InputFilterInDashboard
          key={key}
          name={qualification}
          label="المؤهل العلمي"
          option={["الثانوية العامة", "بكالريوس", "ماجستير", "دكتوراة"]}
          onChange={(event) => handleChange(setQualification, event)}
        />
      </div>

      {/* Nationality Filter */}
      <div className="w-full">
        <input
          className="border border-gray-400 w-full rounded-md p-1 outline-none"
          type="text"
          value={specialtyNameAr}
          onChange={(event) => handleChange(setNationality, event)}
          placeholder="المدينة"
        />
        {/* <InputFilterInDashboard
          key={key}
          name="currentlyEmployed"
          label="الجنسية"
          option={["سعودي", "وافد"]}
          onChange={(event) => handleChange(setNationality, event)}
        /> */}
      </div>

      {/* Employment Status Filter */}
      <div className="w-full">
        <InputFilterInDashboard
          key={key}
          name=""
          label="هل أنت حاليا على رأس العمل؟"
          option={["نعم", "لا"]}
          onChange={(event) => handleChange(setCurrentlyEmployed, event)}
        />
      </div>

      {/* Gender Filter */}
      <div className="w-full">
        <InputFilterInDashboard
          key={key}
          name="الجنس"
          label="الجنس"
          option={["انثى", "ذكر"]}
          onChange={(event) => handleChange(setGender, event)}
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 justify-center w-full col-span-full">
        <button
          className="bg-bgButtonNavbar px-3 py-1 text-white rounded-md font-bold"
          onClick={() => {
            handleResetFilters();
            setOpenComponantSearch(false);
          }}
        >
          الكل
        </button>

        <button
          className="bg-NavbarBackground px-3 py-1 text-white rounded-md font-bold"
          onClick={() => {
            currentJobTitleAr ||
              specialtyNameAr ||
              qualification ||
              gender ||
              nationality ||
              currentlyEmployed ||
              totalExperience
              ? setOpenComponantSearch(true)
              : alert("يجب اختيار بعض القيم للبحث");
          }}
        >
          بحث
        </button>
      </div>
    </div>
  );



  // return (
  //   <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] items-center lg:w-[90%] w-[95%] gap-1 mt-1">
  //     <div className="w-full relative">
  //     <input
  //           className="border border-gray-400 w-full rounded-md p-2 outline-none scrollbar"
  //           type="text"
  //           value={currentJobTitleAr} // Bind the input value to selectNameJop
  //           onChange={(event)=>handleChange(setCurrentJobTitleAr,event)} // Update the state on input change
  //           placeholder="ادخل المسمي الوظيفي" // Placeholder text
  //         />

  //     </div>
  //     <div className="w-full relative">
  //     <input
  //           className="border border-gray-400 rounded-md w-[110%] text-md p-2 outline-none scrollbar"
  //           type="text"
  //           value={specialtyNameAr} // Bind the input value to selectNameJop
  //           onChange={(event)=>handleChange(setSpecialtyNameAr,event)} // Update the state on input change
  //           placeholder="ادخل اسم التخصص باللغة العربية" // Placeholder text
  //         />
  //     </div>
  //       <div className="w-full relative mr-4">
  //       <input
  //           className="border border-gray-400 w-full mr-2 rounded-md p-2 outline-none scrollbar"
  //           type="number"
  //           value={totalExperience} // Bind the input value to selectNameJop
  //           onChange={(event)=>handleChange(setTotalExperience,event)} // Update the state on input change
  //           placeholder="ادخل سنوات الخبرة " // Placeholder text
  //         />
  //     </div>
  //     <div className="w-full relative mr-6  " >
  //       <InputFilterInDashboard
  //         name={"city"}
  //         label={"المؤهل العلمي"}
  //         option={ ["الثانوية العامة", "بكالريوس", "ماجستير", "دكتوراة"]}
  //         onChange={(event)=>handleChange(setQualification,event)} // Update the state on input change
  //         />
  //     </div>
  //     <div className="w-full relative mt-3 mt-3">
  //       <InputFilterInDashboard
  //         name={"currentlyEmployed"}
  //         label={" الجنسية"}
  //         option={["سعودي", "وافد"]}
  //         // setSelectWorkNow={setSelectWorkNow}
  //         onChange={(event)=>handleChange(setNationality,event)}
  //       />
  //     </div>
  //     <div className="w-[105%]  mr-2 relative mt-3">
  //       <InputFilterInDashboard
  //         name={""}
  //         label={"هل أنت حاليا على رأس العمل؟"}
  //         option={["نعم", "لا"]}
  //         onChange={(event)=>handleChange(setCurrentlyEmployed,event)} // Update the state on input change

  //         // setWorkInRemotly={setWorkInRemotly}
  //       />
  //     </div>
  //     <div className="w-full relative mr-5 mt-3">
  //     <InputFilterInDashboard
  //         name={"الجنس"}
  //         label={"الجنس"}
  //         option={[ "انثى", "ذكر"]}
  //         // setGender={setGender}
  //         onChange={(event)=>handleChange(setGender,event)}

  //       />
  //     </div>
  //     <div className="flex items-center mr-5 justify-center gap-2">
  //       <button
  //         className="bg-bgButtonNavbar  px-2 py-[9px] mt-[18px] text-white rounded-md font-bold h-fit w-full"
  //         onClick={() => {
  //           handleResetFilters(); 
  //           setOpenComponantSearch(false);
  //         }}
  //       >
  //         الكل
  //       </button>

  //       <button
  //         className="bg-NavbarBackground px-2 py-[9px] mt-[18px] text-white rounded-md font-bold h-fit w-full"
  //         onClick={() => {
  //           currentJobTitleAr !== null ||
  //           specialtyNameAr !== null ||
  //           qualification !== null ||
  //           gender !== null ||
  //           nationality !== null ||
  //           currentlyEmployed !== null ||
  //           totalExperience !== null
  //             ? setOpenComponantSearch(true)
  //             : alert("يجب اختيار بعض القيم للبحث");
  //         }}
  //       >
  //         بحث
  //       </button>
  //     </div>
  //   </div>
  // );
}
