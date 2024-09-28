import Image from "next/image";
import React from "react";
import offerWork from "../../public/images/offerwork.png";
import ButtonOfferWork from "../Buttons/ButtonOfferWork";
export default function OffersWork() {
  return (
    <div className=" mt-20 bg-bgOfferWork w-[95%] mx-auto pb-10 pt-5 lg:px-20 px-5 rounded-lg">
      <div className="flex justify-center">
        <h1 className="font-bold text-[1.2rem]">عروض العمل</h1>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="lg:w-[45%] flex flex-col gap-4">
          <h1 className="font-bold text-[1.2rem]">العنوان</h1>
          <p>
            اكتشف مجموعة متنوعة من فرص العمل المميزة التي نقدمها. نحن نوفر لكم
            عروض عمل تناسب جميع المؤهلات والتخصصات، مع تفاصيل شاملة حول
            المتطلبات والمزايا لكل وظيفة. انضم إلينا لتعزيز مسيرتك المهنية
            وتحقيق طموحاتك.
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
