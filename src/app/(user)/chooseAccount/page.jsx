"use client";
import React, { useContext } from "react";
import chooseImage from "../../../../public/images/chooseAccount.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContextSimple } from "../../../../context/simpleContext";
import { IoMdHome } from "react-icons/io";

export default function ChooseAccount() {
  const router = useRouter();
  const { chooseAccount, setChooseAccount } = useContext(ContextSimple);
  return (
    <div className="bg-blue-900 h-screen flex flex-col  justify-center items-center">
      <div className="flex items-center gap-2 cursor-pointer group"
      onClick={() => router.push("/")}>
        <IoMdHome color="d3b472" size={35} 
        
        />
        <h4 className="text-[1.5rem] text-bgButtonNavbar "> الرئيسية</h4>
      </div>
      <div className="lg:w-[80%] w-[90%] bg-bgPop mt-8 rounded-lg p-5 lg:p-10 flex justify-between items-center">
        <div className="flex flex-col gap-5 items-center lg:w-[59%]">
          <h1 className="font-bold text-[1.3rem]">اهلا بك في موقع ارشاد</h1>
          <p className="text-center leading-normal">
            موقع &quot;إرشاد&quot; هو منصة توظيف تربط بين الشركات والباحثين عن
            عمل. يمكن للشركات نشر عروض وظيفية، بينما يمكن للأفراد إنشاء ملفات
            تعريف شخصية لعرض مهاراتهم وخبراتهم. يسعى &quot;إرشاد&quot; لتبسيط
            عملية التوظيف وتسهيل التواصل بين الطرفين.
          </p>
          {/* <div className="flex flex-col md:flex-row  justify-center gap-3 lg:gap-12 lg:items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setChooseAccount("company")}
            >
              <div className="w-[22px] h-[22px] rounded-full border border-black flex justify-center items-center">
                {chooseAccount === "company" && (
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                )}
              </div>
              <h4 className="text-[1.1rem] font-semibold">
                {" "}
                ابحث عن موظفين &quot;شركة&quot;
              </h4>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setChooseAccount("employee")}
            >
              <div className="w-[22px] h-[22px] rounded-full border border-black flex justify-center items-center">
                {chooseAccount === "employee" && (
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                )}
              </div>
              <h4 className="text-[1.1rem] font-semibold"> ابحث عن فرصة عمل</h4>
            </div>
          </div> */}
          <button
            className="bg-bgButtonNavbar rounded-md text-white py-2 px-3 w-full"
            onClick={() => router.push("/registerCompany")

             // chooseAccount === "employee"
               //</div> ? router.push("/registerEmployee")
                //: chooseAccount === "company"
                //? 
                //: ""
            }
          >
            التالي
          </button>
          <div>
            هل لديك حساب ؟{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              تسجيل الدخول
            </span>
          </div>
        </div>
        <div className="w-[40%] lg:block hidden">
          <Image src={chooseImage} alt="chooseAccount" />
        </div>
      </div>
    </div>
  );
}
