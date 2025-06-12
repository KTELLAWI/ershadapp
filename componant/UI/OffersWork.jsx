import Image from "next/image";
import React from "react";
import offerWork from "../../public/images/offerwork.png";
import ButtonOfferWork from "../Buttons/ButtonOfferWork";
export default function OffersWork() {
  return (
    <div className=" mt-20 bg-bgOfferWork w-[95%] mx-auto pb-10 pt-5 lg:px-20 px-5 rounded-lg">
      <div className="flex justify-center">
        <h1 className="font-bold text-[1.2rem]">عروض الوظائف المتاحة</h1>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="lg:w-[45%] flex flex-col gap-4">
          <h1 className="font-bold text-[1.2rem]"></h1>
          <p className="text-[1.7rem]">
          شارك سيرتك الذاتبة حتى تصل الى اكبر عدد من الشركات <a className="text-blue-700 underline cursor-pointer" href = "/sendyourcv"> انقر هنا..</a>
          </p>
          <ButtonOfferWork />
        </div>
        <div className="w-[45%] lg:block hidden">
          <Image src={offerWork} alt="offerWork" />
        </div>
      </div>
    </div>
  );
}
