import React from "react";
import ServiceBlock from "./ServiceBlock";
import serviceOne from "../../../public/images/service1.jpeg";
import serviceTwo from "../../../public/images/service2.jpeg";
import serviceThree from "../../../public/images/service3.jpeg";

export default function Services() {
  return (
    <div className="mt-20 lg:w-[90%] w-[90%] mx-auto" id="services">
      <div className="flex justify-center font-bold text-[1.6rem]">
        <h1> خدماتنا</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_300px))] smm:grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] mt-10 gap-10 justify-between items-center">
        <ServiceBlock
          image={serviceOne}
          alt={"serviceAlt"}
          header={"التوظيف"}
          paragraph={
            "تقدم شركتنا خدمات التوظيف الشاملة التي تشمل جميع مراحل عملية التوظيف. نساعد الشركات في إجراء المقابلات، وفحص المرشحين، وتقديم التوصيات بناء على احتياجاتهم الخاصة. نحن نضمن أن يتم اختيار أفضل المرشحين من خلال تقييم شامل لمهاراتهم وخبراتهم، مما يسهل على عملائنا اتخاذ قرارات توظيف مدروسة وفعالة."
          }
        />
        <ServiceBlock
          image={serviceTwo}
          alt={"serviceAlt"}
          header={"استقطاب المواهب"}
          paragraph={
            "تخصص شركتنا فريقاً محترفاً لاستقطاب المواهب من ذوي الكفاءات العالية. نحن نعمل على تحديد المرشحين المثاليين من خلال البحث والتحليل المستمر للسير الذاتية. استراتيجيتنا تضمن أفضل النتائج لعملائنا في استقطاب المرشحين الذين يتناسبون مع ثقافة الشركة واحتياجاتها."
          }
        />
        <ServiceBlock
          image={serviceThree}
          alt={"serviceAlt"}
          header={"نشر الوظائف "}
          paragraph={
            "تقدم شركتنا خدمة نشر الوظائف التي تتضمن عملية الإعلان عن الفرص الوظيفية المتاحة. نحن نستخدم وسائل متقدمة بما في ذلك مواقع التوظيف الشهيرة ووسائل التواصل الاجتماعي، لضمان وصول إعلانات الوظائف إلى أكبر عدد ممكن من المتقدمين المؤهلين. هذه الخدمة تساعد الشركات على جذب مجموعة متنوعة من المتقدمين وتزويدهم بالمرشح المناسب للوظيفة."
          }
        />
      </div>
    </div>
  );
}
