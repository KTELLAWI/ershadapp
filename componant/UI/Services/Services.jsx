import React from "react";
import ServiceBlock from "./ServiceBlock";
import serviceOne from "../../../public/images/service1.jpeg";
import serviceTwo from "../../../public/images/service2.jpeg";
import serviceThree from "../../../public/images/service3.jpeg";

export default function Services() {
  return (
    <div className="mt-20 lg:w-[75%] w-[90%] mx-auto" id="services">
      <div className="flex justify-center font-bold text-[1.6rem]">
        <h1> خدماتنا</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_220px))] smm:grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] mt-10 gap-10 justify-between items-center">
        <ServiceBlock
          image={serviceOne}
          alt={"serviceAlt"}
          header={"مسار التوظيف"}
          paragraph={
            "مسار التوظيف هو دليلك للنجاح المهني، من إعداد السيرة الذاتية والتحضير للمقابلات إلى التطوير المهني. انضم إلينا لبناء مستقبل واعد."
          }
        />
        <ServiceBlock
          image={serviceTwo}
          alt={"serviceAlt"}
          header={"مسار التوظيف"}
          paragraph={
            "مسار التوظيف هو دليلك للنجاح المهني، من إعداد السيرة الذاتية والتحضير للمقابلات إلى التطوير المهني. انضم إلينا لبناء مستقبل واعد."
          }
        />
        <ServiceBlock
          image={serviceThree}
          alt={"serviceAlt"}
          header={"مسار التوظيف"}
          paragraph={
            "مسار التوظيف هو دليلك للنجاح المهني، من إعداد السيرة الذاتية والتحضير للمقابلات إلى التطوير المهني. انضم إلينا لبناء مستقبل واعد."
          }
        />
      </div>
    </div>
  );
}
