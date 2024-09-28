import React from "react";
import { TagsInput } from "react-tag-input-component";

export default function App({ selected, setSelected }) {
  return (
    <div className="relative">
      <h1 className=" absolute -top-[13px] bg-white right-3 px-2 text-[0.8rem] text-NavbarBackground">
        المهارات{" "}
      </h1>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="skills"
        placeHolder="اضف مهاراتك"
      />
      <em className="text-[0.7rem] mt-2">اضغط على Enter لإضافة مهارة جديدة</em>
    </div>
  );
}
