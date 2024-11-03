"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/logo.png";
import { FaBars } from "react-icons/fa6";
import LoginAndRegisterButton from "./LoginAndRegisterButton";
import { usePathname, useRouter } from "next/navigation";
import { scroller } from "react-scroll";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state?.user);

  const pathname = usePathname();
  const router = useRouter();
  ///////////function handleScrollTo//////////////
  function handleScrollTo(sectionTo) {
    if (pathname === "/") {
      scroller.scrollTo(sectionTo);
    } else {
      router.push(`/?scrollTo=${sectionTo}`);
    }
  }
  return (
    <div
      className={
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
      }
    >

      <div className="flex justify-between items-center px-[40px] w-[100%] h-[70px] bg-NavbarBackground">
        <div>
          <Image src={logo} alt="logo" className="w-[100px]" />
        </div>
        <ul className="lg:flex gap-7 font-normal text-white items-center cursor-pointer hidden">
          <li className="font-semibold" onClick={() => router.push("/")}>
            الصفحة الرئيسية
          </li>
          <li onClick={() => handleScrollTo("knowUs")}>تعرف علينا</li>
          <li onClick={() => handleScrollTo("services")}> خدماتنا</li>
          <li className="bg-white  font-bold rounded-md text-bgButtonNavbar py-2 px-3" onClick={() => router.push("/pageOfferWork")}> تبحث عن وظيفة</li>
          <li onClick={() => handleScrollTo("benefits")}> المميزات</li>

          <li onClick={() => handleScrollTo("contactUs")}>اتصل بنا</li>
          { user?.role === "Client" && user?.accountStatus === true ? 
  <li 
    className="bg-bgButtonNavbar font-bold rounded-md text-black shadow-md shadow-amber-200 py-2 px-3" 
    onClick={() => router.push("/openWork")}
  >
    المتاحين للعمل
  </li>
  : <></>
}

        </ul>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setOpen((e) => !e)}
        >
          <FaBars color="white" size={30} />
        </div>
        <div className="lg:flex hidden ">
          <LoginAndRegisterButton />
        </div>
      </div>
      <ul
        className={`lg:hidden flex flex-col absolute w-full mt-[1px]  gap-5 font-normal text-white cursor-pointer bg-NavbarBackground z-10 transition-all duration-500 ${open ? "max-h-[500px]" : "max-h-0  overflow-hidden"
          }`}
      >
        <li
          className="font-semibold mt-5 mr-10 cursor-pointer"
          onClick={() => router.push("/")}
        >
          الصفحة الرئيسية
        </li>
        <li
          className="mr-10 cursor-pointer"
          onClick={() => handleScrollTo("knowUs")}
        >
          تعرف علينا
        </li>
        <li
          className="mr-10 cursor-pointer"
          onClick={() => handleScrollTo("services")}
        >
          {" "}
          خدماتنا
        </li>
        <li
          className="mr-10 rounded-md py-2 px-3"
          onClick={() => router.push("/pageOfferWork")}
        >
          {" "}
          <span className=" py-1 px-2 bg-bgButtonNavbar rounded-md text-white">تبحث عن وظيفة</span>
          
        </li>
        {/* <li
          className="mr-10 cursor-pointer"
          onClick={() => router.push("/openWork")}
        >
          {" "}
          المتاحين للعمل
        </li> */}

        <li
          className="mr-10 cursor-pointer"
          onClick={() => handleScrollTo("benefits")}
        >
          {" "}
          المميزات
        </li>
        <li
          className="mr-10 cursor-pointer"
          onClick={() => handleScrollTo("contactUs")}
        >
          اتصل بنا
        </li>
        <li className="flex -mt-3 mb-5 mr-10">
          <LoginAndRegisterButton />
        </li>
      </ul>
    </div>
  );
}
