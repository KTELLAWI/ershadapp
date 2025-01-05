import React from "react";

export default function CheckBox({
  text,
  type,
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
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => {
        setAll(false);
        type === "gender" ? setGender(text) : "";
        type === "nationality" ? setNationality(text) : "";
        type === "qualification" ? setQualification(text) : "";
        type === "currentlyEmployed" ? setCurrentlyEmployed(text) : "";
        // type === "workNow" ? setSelectWorkNow(text) : "";
        // type === "workRemotly" ? setWorkInRemotly(text) : "";
      }}
    >
      <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
        {gender === text ||
        currentlyEmployed === text ||
        qualification === text ||
        nationality === text 
        // selectWorkNow === text ||
        // workInRemotly === text
         ? (
          <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-black"></div>
        ) : (
          ""
        )}
      </div>
      <label>{text}</label>
    </div>
  );
}
