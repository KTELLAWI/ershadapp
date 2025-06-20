"use client";
import { useEffect } from "react";
import BenefitsWebsits from "../../../componant/UI/BenefitsWebsite/BenefitsWebsits";
import Services from "../../../componant/UI/Services/Services";


import KnowUs from "../../../componant/UI/KnowUs/KnowUs";
import { scroller } from "react-scroll";


// const ShaderGradient = dynamic(() => import('@shadergradient/react').then((mod) => mod.ShaderGradient), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='w-96 h-96 flex items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })

export default function Page() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo);
    }
  }, []);
  return (
    <>
    
   

      <KnowUs /> 
     <Services /> 
     <BenefitsWebsits />
 
    </>
  );
}
