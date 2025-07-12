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
import "./../../../src/app/globals.css";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state?.user);

  const pathname = usePathname();
  const router = useRouter();
  ///////////function handleScrollTo//////////////
  function handleScrollTo(sectionTo) {
    if (pathname === "/") {
      setOpen((e) => !e)
      scroller.scrollTo(sectionTo);
      
    } else {
        setOpen((e) => !e);
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

      <div className="flex justify-between items-center px-[40px] w-[100%] h-[70px] bg-transparent">
        <div id="tv" className="flex items-center p-0 align-center z-100">
          
          <Link href="/" className="" prefetch={false}> 
          <Image  onClick={() =>{ router.push("/ourservice");
          setOpen((e) => !e);
         } } src={logo} alt="logo" className="w-[100px] " />
         </Link>
        </div>
        <ul className="lg:flex gap-7 font-normal text-black items-center cursor-pointer hidden">
         {
          user?.role !="Client" && ( 
          <>
            <li className="font-semibold" onClick={() => router.push("/")}>
            الصفحة الرئيسية
          </li>
          {/* <li onClick={() => handleScrollTo("knowUs")}>تعرف علينا</li> */}
          <li onClick={() => {router.push("/ourservice");
            setOpen((e) => !e);
          }}> Service</li>
          {/* <li className="bg-white  font-bold rounded-md text-bgButtonNavbar py-2 px-3" onClick={() => router.push("/pageOfferWork")}> تبحث عن وظيفة</li> */}
          <li onClick={() => router.push("/sendyourcv")} > أرسل سيرتك الذاتية لجهات التوظيف</li>
          </>
          )
         }

          {/* <li onClick={() => handleScrollTo("contactUs")}>اتصل بنا</li> */}
          {user?.role === "Client" &&
            <li
              className="bg-bgButtonNavbar font-bold rounded-md text-black shadow-md shadow-amber-200 py-2 px-3"
              onClick={() => router.push("/openWork")}
            >
              المتاحين للعمل
            </li>

          }

        </ul>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setOpen((e) => !e)}
        >
          <FaBars color="bgButtonNavbar" size={30} />
        </div>
        <div className="lg:flex hidden ">
          <LoginAndRegisterButton />
        </div>
      </div>
      <ul
        className={`lg:hidden flex flex-col   absolute w-[95%] mt-[1px] shadow-md gap-6 rounded-md font-normal text-black  cursor-pointer left-1/2 transform -translate-x-1/2 bg-white z-[1000] transition-all duration-500 ${open ? "max-h-[500px]" : "max-h-0  overflow-hidden"
          }`}
      >
        <li
          className="font-semibold mt-5 mr-10 cursor-pointer"
          onClick={() => {
            setOpen((e) => !e);
            router.push("/");
          }}
        >
          الصفحة الرئيسية
        </li>
      
        <li
          className="mr-10 cursor-pointer"
         onClick={() =>{ router.push("/ourservice");
          setOpen((e) => !e);
         }}
        >
          {" "}
          Service
        </li>
        {/* <li
          className="mr-10 rounded-md py-2 "
          onClick={() => {
            setOpen((e) => !e);
            router.push("/pageOfferWork")
          }}
        >
          {" "}
          تبحث عن وظيفة
          <span className=" py-1 px-2 bg-bgButtonNavbar rounded-md text-white">تبحث عن وظيفة</span>

        </li> */}
        {/* <li
          className="mr-10 cursor-pointer"
          onClick={() => router.push("/openWork")}
        >
          {" "}
          المتاحين للعمل
        </li> */}

        <li
          className="mr-10 cursor-pointer"
          onClick={() => {setOpen((e) => !e);
            router.push("/sendyourcv")}}
        >
          {" "}
          أرسل سيرتك الذاتية لجهات التوظيف
        </li>
        <li
          className="mr-10 cursor-pointer mb-2"
           onClick={() => {setOpen((e) => !e);
            router.push("/chooseAccount")}}
        >
          تبحث عن موظفين
        </li>
        {/* <li className="flex -mt-3 mb-5 mr-10 ">

          <LoginAndRegisterButton />
        </li> */}
      </ul>
    </div>
  );
}
