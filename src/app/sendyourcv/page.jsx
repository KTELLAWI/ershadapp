import React from 'react'
import ApplicationsForm from '../../../componant/UI/Forms/JobApplicationForm'
import Image from "next/image";
import ershadtopbanner from "../../../public/images/ershadtopbanner.jpg";


function page() {
  return (
    <div className="flex flex-col  w-full ">
      <div className="flex relative items-center h-[250px]  ">
        <Image objectFit="contain" src={ershadtopbanner} alt="" className="w-[100%] h-[100%] " />

      </div>
      <div>
        <ApplicationsForm endpoint={email}/>
      </div>
    </div>
  )
}

export default page