"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import { IoMdHome } from "react-icons/io";
import { MdBusiness } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
export default function SidebarDashboard({ openSidebar }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={`lg:flex smml:fixed z-10 ${
        openSidebar ? "right-0" : "-right-[100%]"
      } lg:right-[0] min-w-[300px] w-[25%] bg-NavbarBackground min-h-screen  flex-col lg:gap-10 items-center py-7 text-white transition-all duration-200`}
    >
      <div className="flex justify-center">
        <Image src={logo} alt="logo" className="w-[120px] mb-10 " />
      </div>

      <ul className="flex flex-col gap-3 w-full">
        <div
          className={`${
            pathname === "/dashboard/mainDashboard" ? "bg-bgHover" : ""
          } cursor-pointer  p-3`}
          onClick={() => {
            router.push("/dashboard/mainDashboard");
          }}
        >
          <li className="flex items-center gap-2 translate-x-[-20%]">
            <IoMdHome />
            <h4> الرئيسية</h4>
          </li>
        </div>
        <div
          className={`${
            pathname === "/dashboard/accountsCompany" ? "bg-bgHover" : ""
          } cursor-pointer  p-3`}
          onClick={() => {
            router.push("/dashboard/accountsCompany");
          }}
        >
          {" "}
          <li className="flex items-center gap-2  translate-x-[-20%]">
            <MdBusiness />
            <h4> حسابات الشركات</h4>
          </li>
        </div>
        <div
          className={`${
            pathname === "/dashboard/accountsUser" ? "bg-bgHover" : ""
          } cursor-pointer  p-3`}
          onClick={() => {
            router.push("/dashboard/accountsUser");
          }}
        >
          <li className="flex items-center gap-2 translate-x-[-20%]">
            <FaUserCog />
            <h4> حسابات المستخدمين</h4>
          </li>
        </div>
        <div
          className={`${
            pathname === "/dashboard/offersWorkDashboard" ? "bg-bgHover" : ""
          } cursor-pointer  p-3`}
          onClick={() => {
            router.push("/dashboard/offersWorkDashboard");
          }}
        >
          <li className="flex items-center gap-2 translate-x-[-20%]">
            <MdOutlineLocalOffer />
            <h4> عروض العمل</h4>
          </li>
        </div>
        <div
          className={`${
            pathname === "/dashboard/availablesWork" ? "bg-bgHover" : ""
          } cursor-pointer  p-3`}
          onClick={() => {
            router.push("/dashboard/availablesWork");
          }}
        >
          <li className="flex items-center gap-2 translate-x-[-20%]">
            <MdOutlineEventAvailable />
            <h4> المتاحين للعمل</h4>
          </li>
        </div>
        <div
          className=" cursor-pointer  p-3 "
          onClick={() => {
            router.push("/");
          }}
        >
          <li className="flex items-center gap-2 translate-x-[-20%]">
            <CgWebsite />
            <h4> الرجوع للموقع</h4>
          </li>
        </div>
      </ul>
    </div>
  );
}
