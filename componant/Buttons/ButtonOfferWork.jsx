"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function ButtonOfferWork() {
    const router = useRouter()
  return (
    <button className="bg-bgButtonNavbar rounded-md text-white py-2 px-10 w-fit" onClick={()=>router.push("/pageOfferWork")}>
      عروض العمل
    </button>
  );
}
