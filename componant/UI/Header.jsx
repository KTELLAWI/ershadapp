"use client"
import React, { useState } from "react";
import Image from "next/image";
import header from "../../public/images/header.png";
import header2 from "../../public/images/header2.png";

export default function Header() {
const [play,setPlay] = useState(false)
  return (


    <div className="bg-bgHeader bg-[url('/images/header2.png')] bg-cover bg-center min-h-[80vh] flex justify-center items-center mt-0">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] gap-8 lg:gap-0">
        {/* Text Section */}
        <div className="flex flex-col gap-5 lg:w-[40%] w-full text-center lg:text-left">
          <h1 className="text-black text-center bg-white bg-opacity-40 font-bold text-[1.8rem] lg:text-[2rem]">
            ارشاد للموارد البشرية
          </h1>
          <p className="bg-white text-right  bg-opacity-40 text-black font-bold p-4 rounded-lg">
            نواصل السعی لإضافة قیمة إلى المواهب البشریة ومساعدتهم على جلب أفضل
            مهاراتهم وسلوکیاتهم إلى العالم المهنی. نسعى الى بناء الثقة فی قدرة
            الفرد على القیام بعمله.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full lg:w-[45%] h-auto flex justify-center items-center">
  <video
    id="videoElement"
    className="w-full h-auto max-h-[300px] lg:max-h-[400px] object-cover rounded-lg shadow-lg"
    src="/images/ershadclip.mp4"
    poster="/images/thumbnail.png"
    loop
  ></video>
  
  <div
    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 cursor-pointer rounded-lg"
    onClick={() => {
      const video = document.getElementById("videoElement");
      if (video) {
        if (video.paused) {
          video.play();
          setPlay(true)
          video.muted = false; // Unmute the video
        } else {
          video.pause();
          setPlay(false);
        }
      }
    }}
  >
    <button className="bg-white opacity-25 text-black rounded-full w-12 h-12 flex items-center justify-center">
{   
 !play ? "▶" : "| |"
}     

</button>
  </div>
</div>

      </div>
    </div>
  );

  // <div className="bg-bgHeader bg-red bg-[url('/images/header2.jpg')] bg-cover bg-center min-h-[80vh] flex justify-center items-center mt-0">
  //   <div className="flex justify-between items-center w-[90%]">
  //     {/* Text Section */}
  //     <div className="flex flex-col gap-5 lg:w-[40%] w-[100%] mx-[100px]">
  //       <h1 className="text-black bg-white bg-opacity-40 font-bold z-5 text-[2rem]">
  //         ارشاد للموارد البشرية
  //       </h1>
  //       <div>
  //         <p className="bg-white bg-opacity-40 text-black font-bold z-5 p-2">
  //           نواصل السعی لإضافة قیمة إلى المواهب البشریة ومساعدتهم على جلب أفضل
  //           مهاراتهم وسلوکیاتهم إلى العالم المهنی. نسعى الى بناء الثقة فی قدرة
  //           الفرد على القیام بعمله.
  //         </p>
  //       </div>
  //     </div>

  //     {/* Video Section */}
  //     <div className="relative lg:h-full lg:w-[50%] w-full mx-auto">
  //       <video
  //         id="videoElement"
  //         className="w-full lg:h-[90%] object-cover rounded-lg shadow-lg"
  //         src="/video/sample-video.mp4" // Replace with your video path
  //         muted
  //         loop
  //       ></video>
  //       <div
  //         className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer rounded-lg"
  //         onClick={() => {
  //           const video = document.getElementById("videoElement");
  //           if (video.paused) {
  //             video.play();
  //           } else {
  //             video.pause();
  //           }
  //         }}
  //       >
  //         <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
  //           ▶
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //);

}
