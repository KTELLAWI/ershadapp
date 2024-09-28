import Image from "next/image";
import React from "react";

export default function ServiceBlock({image,alt,header,paragraph}) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-[130px] h-[130px]">
        <Image src={image} alt={alt} className="rounded-[50%] h-full" />
      </div>
      <div>
        <h1 className="font-bold text-[1.2rem]">مسار التوظيف</h1>
      </div>
      <div>
        <p className="text-center">
          مسار التوظيف هو دليلك للنجاح المهني، من إعداد السيرة الذاتية والتحضير
          للمقابلات إلى التطوير المهني. انضم إلينا لبناء مستقبل واعد.
        </p>
      </div>
    </div>
  );
}
