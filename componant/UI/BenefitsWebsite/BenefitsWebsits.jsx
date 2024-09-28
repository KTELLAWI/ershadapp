import React from "react";
import Employeer from "./Employeer/Employeer";
import Company from "./Company/Company";

export default function BenefitsWebsits() {
  return (
    <div className="mt-20 lg:w-[80%] w-[90%] mx-auto flex flex-col gap-20" id="benefits">
      <Employeer />
      <Company />
    </div>
  );
}
