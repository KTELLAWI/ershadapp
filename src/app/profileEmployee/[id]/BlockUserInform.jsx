import React from "react";

export default function BlockUserInform({ data }) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex  flex-col gap-2">
        <h1 className="text-textHeadOfferWork font-semibold ">نبذة تعريفية</h1>
        <p>{data?.data?.data?.bio}</p>
      </div>
      <div className="flex  flex-col gap-2">
        <h1 className="text-textHeadOfferWork font-semibold ">التعليم</h1>
        <ul className="p-1 list-disc mr-4 ">
          {data?.data?.data?.education.map((e, i) => (
            <li key={i}> {e}</li>
          ))}
        </ul>
      </div>
      <div className="flex  flex-col gap-2">
        <h1 className="text-textHeadOfferWork font-semibold ">المهارات</h1>
        <div className="flex items-center gap-3 flex-wrap">
          {data?.data?.data?.skills.map((e, i) => (
            <div
              key={i}
              className="relative rounded-md p-2 text-white text-[0.9rem] bg-bgButtonNavbar"
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
