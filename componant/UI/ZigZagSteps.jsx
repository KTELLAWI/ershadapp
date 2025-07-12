"use client";

import React, { forwardRef, useRef } from "react";

import { er1 } from "../../public/images/er1.png";
import er2 from "../../public/images/er2.png";
import er3 from "../../public/images/er3.png";
import er4 from "../../public/images/er4.png";
import er5 from "../../public/images/er5.png";
import er6 from "../../public/images/er6.png";
import robort from "../../public/images/robot1.png"
import logo from "../../public/images/logo.png"

import r0 from "../../public/images/r0.png";
import r1 from "../../public/images/r1.png";
import r2 from "../../public/images/r2.png";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex size-20 items-center justify-center rounded-full border-2 bg-bgButtonNavbar   shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const div5Ref = useRef(null);
  const div6Ref = useRef(null);


  return (
    <div
      className="relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden p-8 mt-8"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">

        {/* div1Ref + header/text */}
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between">
            <Circle ref={div1Ref}>
              {/* <Icons.user /> */}
              <img src="/images/er1.png" alt="Your description" className="absolute w-[70%] h-[70%] object-contain" />

            </Circle>
          </div>
          <h3 className="text-sm font-semibold mt-2">املأ النموذج وارفع<br /> سيرتك الذاتية</h3>
          <p
            dir="rtl"
            className="text-xs  text-right  text-[#D3B472] sm:block"
          >
            ابدأ رحلتك عبر تعبئة بياناتك الأساسية<br />ورفع السيرة الذاتية على منصتنا
          </p>
        </div>

        {/* Robot image between div1Ref and div2Ref */}
        <div className="flex justify-center  transform -translate-x-1/4 -translate-y-1/2">
          <img src="/images/r0.png" alt="Robot" className="w-[100px] h-[100px]" />
        </div>

        {/* div2Ref + header/text */}
        <div className="flex flex-col items-end">
          <div className="flex flex-row justify-end">
            <Circle ref={div2Ref}>
              {/* <Icons.openai /> */}
              <img src="/images/er2.png" alt="Your description" className=" absolute w-[70%] h-[70%] object-contain" />

            </Circle>
          </div>
          <h3 className="text-sm font-semibold mt-2 text-right">الذكاء الاصطناعي <br /> يبدأ التحليل</h3>
          <p
            dir=""
            className="text-xs  text-center text-justify  mt-2 text-[#D3B472] sm:block max-w-[150px]  "
          >
            يقوم نظامنا الذكي بتحليل سيرتك الذاتية باستخدام خوارزميات خاصة طورها فريق إنجاز وفقًا لسوق العمل السعودي.
          </p>
        </div>

        {/* div3Ref + header/text */}
        <div className="flex flex-col items-end px-5 ">
          <div className="flex flex-row justify-end">
            <Circle ref={div3Ref} className="mt-[40px]">
              {/* <Icons.openai /> */}
              <img src="/images/er3.png" alt="Your description" className=" absolute w-[70%] h-[70%] object-contain" />

            </Circle>
          </div>
          <div dir="ltr" className="w-[50%] items-end ">
            <h3 className="text-sm font-semibold mt-2 text-left ">عرض سيرتك على الشركات المتعاقدة معنا</h3>
            <p
              dir="ltr"
              className="text-xs  text-left   mt-2 text-[#D3B472] sm:block max-w-[100px] lg:max-w-[150px]  "
            >
              بتم إرسال سيرتك إلى الشركات التي تبحث عن مرشحين بخبرتك، من خلال شبكة شراكاتنا الواسعة </p>          </div>
        </div>
        {/* Robot image between div3Ref and div4Ref */}
        <div className=" hidden flex justify-center transform  translate-y-[-1/1]">
          <img src="/images/r1.png" alt="Robot" className="w-[50px] h-[50px]" />
        </div>

        {/* div4Ref + header/text */}
        <div className="flex flex-col items-start px-5">
          <div className="flex flex-row justify-start mt-[-250px]">
            <Circle ref={div4Ref} className="">
              {/* <Icons.openai /> */}
              <img src="/images/er4.png" alt="Your description" className=" absolute w-[90%] h-[90%] object-contain" />

            </Circle>
          </div>
          <div className="flex flex-col w-[50%] items-start">
            <h3 className="text-sm font-semibold mt-2 break-normal">تصنيف سيرتك ضمن  <br />المسارات   المهنية </h3>
            <p
              dir="rtl"
              className="text-xs text-right   mt-2 text-[#D3B472] sm:block max-w-[100px] lg:max-w-[150px]  "
            >
              السيرة تُصنف تلقائيًا حسب المجالات، المهارات، سنوات الخبرة، والمستوى الوظيفي.
            </p>
          </div>
        </div>
        <div className="flex justify-center transform -translate-x-1/5 translate-y-1/2">
          <img src="/images/r2.png" alt="Robot" className="w-[90px] h-[90px]" />
        </div>

        {/* div5Ref + header/text */}
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-start">
            <Circle ref={div5Ref} className="mt-[-50px]">
              {/* <Icons.openai /> */}
              <img src="/images/er5.png" alt="Your description" className=" absolute w-[90%] h-[90%] object-contain" />

            </Circle>
          </div>
          <h3 className="text-sm font-semibold mt-2 whitespace-normal ">تحديث مستمر وربط ذكي <br /> مع الوظائف الجديدة</h3>
          <p
            dir=""
            className="text-xs  text-center text-justify  mt-2 text-[#D3B472] sm:block max-w-[150px]  "
          >
            عند كل تحديث في خوارزميات الذكاء أو توفر وظائف جديدة، يعيد النظام التحقق من سيرتك وإعادة عرضها للفرص المناسبة الجديدة. </p>
        </div>

        {/* div6Ref - unchanged */}
        <div className="flex flex-col items-end  px-5 text-right whitespace-normal ">
          <div className="flex flex-row justify-end px-5">
            <Circle ref={div6Ref}>
              {/* <Icons.openai /> */}
              <img src="/images/er6.png" alt="Your description" className=" absolute w-[90%] h-[90%] object-contain" />

            </Circle>
          </div>
          <div className="flex flex-col w-[50%] items-start">
            <h3 className="text-sm font-semibold mt-2 text-right break-words whitespace-normal">فرص اكثر ظهور اوسع بدون مجهود إضافي منك</h3>
            <p
              dir=""
              className="text-xs  text-center text-justify  mt-2 text-[#D3B472] sm:block max-w-[220px] "
            >
              أنت لا تحتاج إلى متابعة... نحن نقوم بذلك نيابة عنك، لنضمن لك الوصول لأفضل الفرص. </p>           </div>
        </div>
      </div>




      <AnimatedBeam
        containerRef={containerRef}
        pathWidth={5}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={90}
        reverse={true} // Reverse the direction of the beam
      />
      <AnimatedBeam
        containerRef={containerRef}
        pathWidth={5}
        fromRef={div2Ref}
        toRef={div3Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        pathWidth={5}
        fromRef={div3Ref}
        toRef={div4Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        pathWidth={5}
        toRef={div5Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        pathWidth={5}
        toRef={div6Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={210}
        reverse
      />

    </div>
  );
}

const Icons = {
  openai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
