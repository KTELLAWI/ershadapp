"use client";
import { useEffect } from "react";
import BenefitsWebsits from "../../componant/UI/BenefitsWebsite/BenefitsWebsits";
import Header from "../../componant/UI/Header";
import NewHeader  from "../../componant/UI/NewHeader";

import KnowUs from "../../componant/UI/KnowUs/KnowUs";
import OffersWork from "../../componant/UI/OffersWork";
import Services from "../../componant/UI/Services/Services";
import { scroller } from "react-scroll";
import ContectUs from "../../componant/UI/ContactUs/ContectUs";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'
// import { ShaderGradient } from '@shadergradient/react'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import ZigZagSteps from "../../componant/UI/ZigZagSteps";
import OurPartenrs from "../../componant/UI/Forms/OurPartenrs";
import UploadYourCv from "../../componant/UI/UploadYourCv";
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

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo);
    }
  }, []);
  return (
    <>

   
       {/* <View className='w-96 h-96'> */}
      {/* <Suspense fallback={null}>
        <ShaderGradient cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' />
      </Suspense> */}
    {/* </View> */}
    <NewHeader />
      <Header />
      <ZigZagSteps/>
      <UploadYourCv />
      <OurPartenrs />
      {/* <KnowUs /> */}
      {/* {/* <Services /> */}
      {/* <OffersWork /> */} 
      {/* <BenefitsWebsits /> */}
      <ContectUs />
    </>
  );
}
