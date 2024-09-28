import React from "react";
import Image from "next/image";
import header from "../../public/images/header.png";
export default function Header() {
  return (
    <div className="bg-bgHeader min-h-[80vh] flex justify-center items-center mt-3">
      <div className="flex justify-between items-center w-[70%]">
        <div className="flex flex-col gap-5 lg:w-[40%] w-[100%]">
          <h1 className="font-bold text-oneTextHeader text-[2rem]">
            ارشاد للموارد البشرية
          </h1>
          <p className="text-twoTextHeader">
            نواصل السعی لإضافة قیمة إلى المواهب البشریة ومساعدتهم على جلب أفضل
            مهاراتهم وسلوکیاتهم إلى العالم المهنی. نسعى الى بناء الثقة فی قدرة
            الفرد على القیام بعمله.
          </p>
          <button className="bg-bgButtonHeader rounded-md text-white mt-1 py-2 px-12 w-fit">
            تعرف علينا
          </button>
        </div>
        <div className="w-[40%] hidden lg:block">
          <Image src={header} alt="header" />
        </div>
      </div>
    </div>
  );
}
