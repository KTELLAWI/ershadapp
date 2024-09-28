"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.png";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      className={`bg-NavbarBackground mt-20 pb-10 ${
        pathname === "/chooseAccount" ||
        pathname === "/login" ||
        pathname === "/registerEmployee" ||
        pathname === "/registerCompany" ||
        pathname === "/forgetPassword" ||
        pathname.includes("/changePassword") ||
        pathname.includes("/dashboard") ||
        pathname === "/successChangePassword"
          ? "hidden"
          : ""
      }`}
    >
      <div className="w-[90%] mx-auto flex flex-col gap-5">
        <div>
          <Image src={logo} alt="logo" className="w-[100px]" />
        </div>

        <p className="lg:w-[45%] text-white">
          نحن إرشاد للموارد البشرية متخصـــصـــون فی مجال التوظیف والتدریب
          والإرشاد المهنی، کما نتمیز بتقدیم الخدمات الممیزة عبر منصـتنا
          للشــرکات لمســاعدتهم على المواصلة والنمو فی سوق العمل
          الســـــــــعودي تماشیآ مع رؤية المملكة 2030
        </p>
        <div className="flex lg:flex-row flex-col gap-5 justify-between lg:items-center text-white mt-10">
          <div className="flex flex-col lg:w-[45%] gap-2">
            <h1 className="font-bold">روابط الوصول السريع</h1>
            <ul className="flex justify-between items-center smm:text-[0.7rem] lg:text-[1rem]">
              {" "}
              <li>الصفحة الرئيسية</li>
              <li> تعرف علينا</li>
              <li>خدماتنا </li>
              <li> عروض العمل</li>
              <li> المتاحين للعمل</li>
            </ul>
          </div>
          <div className="lg:w-[40%] flex flex-col  gap-2">
            <h1 className="font-bold"> تابعنا</h1>
            <ul className="flex gap-3">
              <li className="bg-blue-400 h-fit p-1 rounded-md cursor-pointer">
                <IoLogoTwitter size={22} color="white" />
              </li>
              <li className="cursor-pointer">
                <FaLinkedin size={30} color="white" />
              </li>

              <li className="cursor-pointer">
                <FaWhatsapp size={35} color="green" />
              </li>

              <li className="bg-blue-400 h-fit p-[4px] rounded-full">
                <FaFacebookF size={25} />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 w-full h-[1px] bg-gray-700"></div>
        <p className="text-center text-white -mt-3 text-[0.8rem]">
          جميع الحقوق محفوظة ارشاد @2024
        </p>
      </div>
    </div>
  );
}
