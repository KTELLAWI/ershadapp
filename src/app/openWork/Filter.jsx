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
  const [allNameJop, setAllNameJop] = useState(false);
  const [allCity, setAllCity] = useState(false);
  const handleChange = (setter, event) => {
    setAll(false);
    setter(event?.target.value);
  };
  // const handleChange = (event) => {
  //   setAll(false);
  //  // setSelectNameJop(event.target.value); // Update state on input change
  // };
  const handleResetFilters = () => {
    setAll(true);
    setCurrentJobTitleAr("");
    setSpecialtyNameAr("");
    setQualification(null);
    setTotalExperience("");
    setNationality("");
    setGender(null);
    setCurrentlyEmployed(null);
  };

  return (
    <div className="bg-bgPop w-[100%]  rounded-md p-5 text-textFilter">
      <h1 className="font-bold">التصنيفات</h1>
      <div
        onClick={() => {
          handleResetFilters();
          // console.log(currentJobTitleAr)
          // setCurrentJobTitleAr(null);
          // console.log(currentJobTitleAr)

          // setAll(true);
          // setSelectNameJop(null);
          // setSelectedYear(null);
          // setSelectEducation(null);
          // setSelectCity(null);
          // setSelectLevelEnglish(null);
          // setSelectWorkNow(null);
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

          <input
            className="border-1 rounded-sm outline-none p-1 text-md"
            type="text"
            value={currentJobTitleAr} // Bind the input value to selectNameJop
            onChange={(event) => handleChange(setCurrentJobTitleAr, event)} // Update the state on input change
            placeholder="ادخل المسمي الوظيفي" // Placeholder text
          />
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
              type={"qualification"}
              text={education}
              qualification={qualification}
              setQualification={setQualification}
            />
          ))}
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">اسم التخصص باللغة العربية</h1>
        <div className="flex flex-col gap-4 mt-3">

          <input
            className="border-1 rounded-sm outline-none p-1 text-md"
            type="text"
            value={specialtyNameAr} // Bind the input value to selectNameJop
            onChange={(event) => handleChange(setSpecialtyNameAr, event)} // Update the state on input change
            placeholder="ادخل اسم التخصص باللغة العربية" // Placeholder text
          />
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">سنوات الخبرة بشكل عام وإجمالي</h1>
        <div className="flex flex-col gap-4 mt-3">

          <input
            className="border-1 rounded-sm outline-none p-1 text-md"
            type="number"
            value={totalExperience} // Bind the input value to selectNameJop
            onChange={(event) => handleChange(setTotalExperience, event)} // Update the state on input change
            placeholder="ادخل سنوات الخبرة " // Placeholder text
          />
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          ادخل المنطقة

        </h1>
        <div className="flex flex-col gap-4 mt-3">
          <input
            className="border-1 rounded-sm outline-none p-1 text-md"
            type="text"
            value={currentJobTitleAr} // Bind the input value to selectNameJop
            onChange={(event) => handleChange(setNationality, event)} // Update the state on input change
            placeholder="المنطقة" // Placeholder text
          />
          {/* {["سعودي", "وافد"]?.map((level, index) => (
            <CheckBox
              text={level}
              key={index}
              setAll={setAll}
              type={"nationality"}
              nationality={nationality}
              setNationality={setNationality}
            />
          ))} */}

          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          {" "}
          هل أنت حاليا على رأس العمل؟
        </h1>
        <div className="flex flex-col gap-4 mt-3">
          {["لا", "نعم"]?.map(
            (ques, index) => (
              <CheckBox
                text={ques}
                key={index}
                setAll={setAll}
                type={"currentlyEmployed"}
                currentlyEmployed={currentlyEmployed}
                setCurrentlyEmployed={setCurrentlyEmployed}
              />
            )
          )}

          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter">
          {" "}
          الجنس
        </h1>
        <div className="flex flex-col gap-4 mt-3">
          {["ذكر", "انثى"]?.map((ques, index) => (
            <CheckBox
              text={ques}
              key={index}
              setAll={setAll}
              type={"gender"}
              gender={gender}
              setGender={setGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Filter({
//   all,
//   setAll,
//   currentJobTitleAr,
//   setCurrentJobTitleAr,
//   specialtyNameAr,
//   setSpecialtyNameAr,
//   qualification,
//   setQualification,
//   totalExperience,
//   setTotalExperience,
//   nationality,
//   setNationality,
//   gender,
//   setGender,
//   currentlyEmployed,
//   setCurrentlyEmployed,
// }) {
//   const handleResetFilters = () => {
//     setAll(true);
//     setCurrentJobTitleAr(null);
//     setSpecialtyNameAr(null);
//     setQualification(null);
//     setTotalExperience(null);
//     setNationality(null);
//     setGender(null);
//     setCurrentlyEmployed(null);
//   };

//   const handleChange = (setter) => (event) => {
//     setAll(false);
//     setter(event.target.value);
//   };

//   return (
//     <div className="bg-bgPop w-[100%] rounded-md p-5 text-textFilter">
//       <h1 className="font-bold">التصنيفات</h1>
//       <div
//         onClick={handleResetFilters}
//         className="flex items-center gap-2 mt-5 cursor-pointer"
//       >
//         <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
//           {all && (
//             <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-textFilter"></div>
//           )}
//         </div>
//         <label htmlFor="">الكل</label>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter">المسمي الوظيفي</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           <input
//             className="border-1 rounded-sm outline-none p-1 text-md"
//             type="text"
//             value={currentJobTitleAr}
//             onChange={handleChange(setCurrentJobTitleAr)}
//             placeholder="ادخل المسمي الوظيفي"
//           />
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter">اسم التخصص باللغة العربية</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           <input
//             className="border-1 rounded-sm outline-none p-1 text-md"
//             type="text"
//             value={specialtyNameAr}
//             onChange={handleChange(setSpecialtyNameAr)}
//             placeholder="ادخل اسم التخصص باللغة العربية"
//           />
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter"> المؤهل العلمي</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           {qualification?.map((item, index) => (
//             <CheckBox
//               key={index}
//               setAll={setAll}
//               type="qualification"
//               text={item}
//               setSelection={setQualification}
//             />
//           ))}
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter">سنوات الخبرة</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           <input
//             className="border-1 rounded-sm outline-none p-1 text-md"
//             type="number"
//             value={totalExperience}
//             onChange={handleChange(setTotalExperience)}
//             placeholder="ادخل سنوات الخبرة"
//           />
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter"> المنطقة</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           {["سعودي", "وافد"].map((item, index) => (
//             <CheckBox
//               key={index}
//               setAll={setAll}
//               type="nationality"
//               text={item}
//               setSelection={setNationality}
//             />
//           ))}
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter"> هل أنت حاليا على رأس العمل؟</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           {["لا", "نعم"].map((item, index) => (
//             <CheckBox
//               key={index}
//               setAll={setAll}
//               type="currentlyEmployed"
//               text={item}
//               setSelection={setCurrentlyEmployed}
//             />
//           ))}
//           <div className="w-full h-[1px] bg-gray-300"></div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold mt-5 text-insideTextFilter"> الجنس</h1>
//         <div className="flex flex-col gap-4 mt-3">
//           {["ذكر", "انثى"].map((item, index) => (
//             <CheckBox
//               key={index}
//               setAll={setAll}
//               type={"gender"}
//               text={item}
//               setGender={setGender}
//               gender={gender}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
