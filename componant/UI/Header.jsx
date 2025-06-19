"use client"
import React, { useState } from "react";
import Image from "next/image";
import header from "../../public/images/header.png";
import header2 from "../../public/images/header2.png";
import { AnimatedList } from "@/components/magicui/animated-list";
import HeroVideoDialog  from "@/components/magicui/hero-video-dialog";
// import v2 from "../../public/images/employmentDay.mp4";

// export default function Header() {
// // const [play,setPlay] = useState(false)
// //   return (


// //     <div className="bg-bgHeader  min-h-[80vh] flex justify-center items-center mt-0">
     
// //     </div>
// //   );


// }


const videos = [
  { title: 'مقابلات التوظيف', color: 'bg-[#c5b68b]', src:'/images/employmentDay.mp4' },
  { title: 'معرض النجاحات', color: 'bg-[#091a45]' ,src:'/images/exhibtion.mp4'},
  { title: 'خدمات الشركات', color: 'bg-[#c5b68b]',src:'/images/companiesOffer.mp4' },
  // { title: 'عنوان آخر', color: 'bg-[#091a45]' },
  // Add more items or generate dynamically up to 34
];

const Header = () => {
 return (
  <div
    className="
      max-w-md mx-auto p-4 space-y-6 
      lg:space-y-0 lg:flex lg:flex-wrap lg:gap-6
      lg:max-w-full lg:w-full lg:mx-auto lg:justify-center lg:overflow-x-auto
    "
    dir="rtl"
  >
    <AnimatedList className="lg:flex lg:gap-6 lg:overflow-x-auto">
 {videos.map((video, index) => (
      <div
        key={index}
        className="
          relative 
          w-full 
          lg:w-[280px] 
          flex-shrink-0
        "
      >
        {/* Video Placeholder */}
        {/* <div className="w-full bg-gray-300 aspect-video rounded-lg shadow" /> */}
        <HeroVideoDialog
        className=""
 
  animationStyle="from-center"
  videoSrc={video?.src}
  thumbnailSrc="/images/header2.png"
/>
        {/* Tab-style Header Positioned to the Right */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-0 transform ${video.color} text-white text-sm font-bold px-4 py-1 rounded-l-full shadow`}
        >
          {video.title}
        </div>
      </div>
    ))}
    
</AnimatedList>
   
  </div>
);

    // <div className="max-w-md mx-auto p-4 space-y-6" dir="rtl">
    //   {videos.map((video, index) => (
    //     <div key={index} className="relative">
    //       {/* Video Placeholder */}
    //       <div className="w-full bg-gray-300 aspect-video rounded-lg shadow" />

    //       {/* Tab-style Header Positioned to the Right */}
    //       <div
    //         className={`absolute top-1/2 -translate-y-1/2 right-0 transform ${video.color} text-white text-sm font-bold px-4 py-1 rounded-l-full shadow`}
    //       >
    //         {video.title}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  
  //   <div className="max-w-md mx-auto p-4 space-y-4" dir="rtl">
  //     {videos.map((video, index) => (
  //       <div
  //         key={index}
  //         className="flex items-center border rounded-lg overflow-hidden shadow-md"
  //       >
  //         <div className="flex-1 bg-gray-300 aspect-video" />
  //         <div
  //           className={`${video.color} text-white px-4 py-2 text-sm font-bold whitespace-nowrap`}
  //         >
  //           {video.title}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Header;
