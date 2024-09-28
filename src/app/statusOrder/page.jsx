import React from "react";

export default function StatusOrder() {
  return (
    <div className="flex justify-center items-center w-full h-[60vh]">
      <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <div className="min-w-[230px] min-h-[230px] bg-bgButtonHeader flex justify-center items-center rounded-full">
          <div className="w-1 h-[30%] bg-white relative -mt-10">
            <div className="absolute -bottom-[77%] left-7  w-1 h-[100%] bg-white route"></div>
          </div>
        </div>
        <h4 className="font-bold text-[1.3rem]">طلبك قيد المراجعة</h4>
      </div>
    </div>
  );
}
