"use client";
import React, { useState } from "react";
import SidebarCompany from "./SidebarCompany";
import InformationCompany from "./InformationCompany";
import SecurityCompany from "./SecurityCompany";
import OfferWorkMyCompany from "./OfferWorkMyCompany";
export default function MyProfileCompany() {
  const [displayBlock, setDisplayBlock] = useState("information");
  const [ openControl, setOpenControl ] = useState( false );
  
  return (
    <div className="mt-20 w-[90%] flex lg:flex-row flex-col gap-5 mx-auto">
      <div
        className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
        onClick={() => setOpenControl((e) => !e)}
      >
        لوحة التحكم
      </div>

      {openControl && (
        <div className="lg:hidden block">
          <SidebarCompany setDisplayBlock={setDisplayBlock} />
        </div>
      )}
      <div className="lg:w-[25%] hidden lg:block">
        <SidebarCompany setDisplayBlock={setDisplayBlock} />
      </div>
      <div className="lg:w-[75%] w-[100%]">
        {displayBlock === "information" && <InformationCompany />}
        {displayBlock === "security" && <SecurityCompany />}
        {displayBlock === "offerWork" && <OfferWorkMyCompany />}
      </div>
    </div>
  );
}
