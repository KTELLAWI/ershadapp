import Image from "next/image";
import React from "react";
import imageCompany from "../../../../public/images/benefitsCompany.png";
import BenefitBlock from "../BenefitBlock";
export default function Company() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[1.2rem]">مميزات الموقع لقطاع الشركات</h1>
        <p>
          هل تبحث عن مرشحين مؤهلين بسرعة وفعالية؟ ميزة &quot;البحث الفوري عن
          الباحثين عن العمل&quot; في تطبيقنا تتيح لك الوصول إلى قائمة واسعة من
          الباحثين عن العمل دون الحاجة لنشر عروض وظائف أو الانتظار لردود
          المتقدمين.
        </p>
      </div>
      <div className="flex justify-between items-center relative ">
        <div className=" mt-10 lg:mt-5">
          <h1 className="font-bold text-[1.2rem]">الفوائد</h1>
          <div className="flex flex-col gap-5">
            <BenefitBlock
              number={"01"}
              header={" توفير الوقت:"}
              text={"لا حاجة لانتظار المتقدمين أو إدارة إعلانات الوظائف."}
            />
            <BenefitBlock
              number={"02"}
              header={"  سهولة البحث:"}
              text={
                "قم بتصفية الباحثين عن العمل وفقًا لمؤهلاتهم، خبراتهم، ومهاراتهم."
              }
            />
            <BenefitBlock
              number={"03"}
              header={" قاعدة بيانات محدثة:"}
              text={
                "نحن نحرص على تحديث قائمة الباحثين عن العمل بانتظام لضمان الحصول على أحدث وأفضل المرشحين."
              }
            />
          </div>
        </div>
        <div className="lg:block hidden absolute left-20 bottom-5 w-[35%]">
          <Image src={ imageCompany} alt="imageEmployee" />
        </div>
      </div>
    </div>
  );
}
