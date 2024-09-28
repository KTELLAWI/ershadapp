import React from "react";
import Avatar from "../../../../componant/Avatar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { url } from "../../../../axios/axios";
export default function SidebarCompanyDynamin({ data }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-5 rounded-lg bg-bgPop">
        <div className="flex  items-center flex-col gap-3">
          <Avatar
            width={100}
            imgUrl={`${url}/userImages/${data?.data?.data?.companyLogo}`}
            name={data?.data?.data?.companyName}
            img={data?.data?.data?.companyLogo}
          />

          <h1 className="text-oneTextHeader font-bold ">
            {" "}
            {data?.data?.data?.companyName}
          </h1>
        </div>
        <div className="mt-7">
          <ul className="flex flex-col gap-2 mt-5">
            <li className="flex items-center gap-2">
              <IoLocation color="#ED5A46" size={20} />
              <h4 className="font-semibold cursor-pointer  text-[0.8rem]">
                {" "}
                {data?.data?.data?.address}
              </h4>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt color="#61CE70" size={20} />
              <h4 className="font-semibold cursor-pointer  text-[0.8rem]">
                {" "}
                {data?.data?.data?.contact}
              </h4>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={20} />
              <h4 className="font-semibold cursor-pointer text-[0.8rem]">
                {" "}
                {data?.data?.data?.email}
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* ////////////////// */}
      <div className="p-5 rounded-lg bg-bgPop">
        <div className="flex flex-col gap-3">
          <h1 className="text-oneTextHeader font-bold "> نبذة تعريفية</h1>
          <p>{data?.data?.data?.bio}</p>
        </div>
      </div>
    </div>
  );
}
