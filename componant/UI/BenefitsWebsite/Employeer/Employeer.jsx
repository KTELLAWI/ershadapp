import Image from "next/image";
import React from "react";
import imageEmployee from "../../../../public/images/benefitsEmployeer.png";
import BenefitBlock from "../BenefitBlock";
export default function Employeer() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[1.2rem]">
          مميزات الموقع لقطاع الباحثين عن عمل
        </h1>
        <p>
          بمجرد انضمامك لتطبيقنا، سيكون ملفك الشخصي متاحًا للعديد من الشركات
          التي تبحث عن موظفين مؤهلين. ميزة &quot;البحث الفوري&quot; تمنحك فرصة
          لتكون في مرمى نظر الشركات الرائدة دون الحاجة للتقدم للوظائف بشكل فردي.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="lg:w-[50%] mt-10 lg:mt-0">
          <h1 className="font-bold text-[1.2rem]">الفوائد</h1>
          <div className="flex flex-col gap-5">
            <BenefitBlock
              number={"01"}
              header={"فرص أكثر:"}
              text={
                "احصل على فرص وظيفية متعددة دون عناء البحث المستمر والتقديم."
              }
            />
            <BenefitBlock
              number={"02"}
              header={" ظهور فوري:"}
              text={
                "بمجرد إنشاء حسابك، يمكن للشركات الاطلاع على ملفك الشخصي ومهاراتك."
              }
            />
            <BenefitBlock
              number={"03"}
              header={"  تواصل سريع:"}
              text={
                "تلقي اتصالات وعروض وظيفية مباشرة من الشركات المهتمة بخبراتك"
              }
            />
            <BenefitBlock
              number={"04"}
              header={"التحديث المستمر:"}
              text={"حافظ على تحديث ملفك الشخصي لضمان ظهوره في نتائج البحث."}
            />
          </div>
        </div>
        <div className="lg:block hidden">
          <Image src={imageEmployee} alt="imageEmployee" />
        </div>
      </div>
    </div>
  );
}
