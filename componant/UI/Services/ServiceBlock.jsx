import Image from "next/image";
import React from "react";

export default function ServiceBlock({image,alt,header,paragraph}) {
  return (

    <div className="relative flex flex-col items-center rounded-lg overflow-hidden shadow-lg group hover:scale-105 transform transition-all duration-500 ease-in-out min-h-full max-h-full">
  {/* Image Section */}
  <div className="relative w-full h-[250px]">
    <Image
      src={image}
      alt={alt}
      className="object-cover w-full h-full rounded-t-lg group-hover:opacity-80 transition-opacity duration-500"
    />
  </div>

  {/* Content Section */}
  <div className="p-6 flex flex-col items-center bg-white rounded-b-lg">
    <h1 className="text-2xl z-[300] font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">
      {header}
    </h1>
    <p className="text-sm z-[30] text-gray-600 group-hover:text-white transition-colors duration-300">
      {paragraph}
    </p>
  </div>

  {/* Animated Overlay for Gradient & Shadow Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D3B472] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
</div>


//     <div className="relative flex flex-col items-center max-w-sm bg-gray-100 rounded-lg shadow-md overflow-hidden group hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 transition-all duration-500">
//   {/* Image Section */}
//   <div className="relative w-full h-[200px] overflow-hidden">
//     <Image
//       src={image}
//       alt={alt}
//       className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
//     />
//   </div>

//   {/* Text Section */}
//   <div className="p-6 text-center">
//     <h1 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
//       {header}
//     </h1>
//     <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors duration-500 mt-2">
//       {paragraph}
//     </p>
//   </div>

//   {/* Animated Overlay */}
//   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
// </div>

    // <div className="flex flex-col gap-3 items-center max-h-full min-h-full bg-red">
    //   <div className="w-[130px] h-[130px]">
    //     <Image src={image} alt={alt} className="rounded-[50%] h-full" />
    //   </div>
    //   <div>
    //     <h1 className="font-bold text-[1.2rem]">{header}</h1>
    //   </div>
    //   <div>
    //     <p className="text-justify">
    //       {paragraph}
    //     </p>
    //   </div>
    // </div>
  );
}
