import React from "react";

export default function CheckBox({
  text,
  setAll,
  setSelectNameJop,
  type,
  selectNameJop,
  setectEducation,
  setSelectEducation,
  setSelectCity,
  selectCity,
  selectLevelEnglish,
  setSelectLevelEnglish,
  selectWorkNow,
  setSelectWorkNow,
  workInRemotly,
  setWorkInRemotly,
}) {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => {
        setAll(false);
        type === "nameJop" ? setSelectNameJop(text) : "";
        type === "education" ? setSelectEducation(text) : "";
        type === "city" ? setSelectCity(text) : "";
        type === "levelEnglish" ? setSelectLevelEnglish(text) : "";
        type === "workNow" ? setSelectWorkNow(text) : "";
        type === "workRemotly" ? setWorkInRemotly(text) : "";
      }}
    >
      <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
        {selectNameJop === text ||
        setectEducation === text ||
        selectCity === text ||
        selectLevelEnglish === text ||
        selectWorkNow === text ||
        workInRemotly === text ? (
          <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-textFilter"></div>
        ) : (
          ""
        )}
      </div>
      <label>{text}</label>
    </div>
  );
}
