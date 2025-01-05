import React from "react";
export default function InputFilterInDashboard({
  name,
  onChange,
  label,
  option,
//   setSelectNameJop,
//   setSelectEducation,
//   setSelectCity,
//   setSelectWorkNow,
//   setWorkInRemotly,
//   setSelectLevelEnglish,
}) {
  return (
    <div className="flex flex-col ">
      <select
      // key={name}

        className="border border-gray-400 rounded-md p-1 outline-none scrollbar"
        onChange={ onChange
          // console.log("hhhhh")
          // name === "jobTitle" ? setSelectNameJop(e.target.value) : "";
          // name === "degree" ? setSelectEducation(e.target.value) : "";
          // name === "city" ? setSelectCity(e.target.value) : "";
          // name === "currentlyEmployed" ? setSelectWorkNow(e.target.value) : "";
          // name === "canWorkRemotely" ? setWorkInRemotly(e.target.value) : "";
          // name === "englishLevel" ? setSelectLevelEnglish(e.target.value) : "";
        
      }
      // value={label}
      >
        <option value="">{label}</option>
        {option?.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}
