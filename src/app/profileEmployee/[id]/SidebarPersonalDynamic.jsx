import React, { useContext } from "react";
import Avatar from "../../../../componant/Avatar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { url } from "../../../../axios/axios";
import { ContextSimple } from "../../../../context/simpleContext";
import IframCv from "../../../../componant/BlocksBobab/IframCv";
export default function SidebarPersonalDynamic({ data }) {
  const { openIframeCv, setOpenIframeCv, setValueCv } =
    useContext(ContextSimple);
  return (
    <div className="p-5 rounded-lg bg-bgPop">
      <div className="flex  items-center flex-col gap-3">
        <Avatar
          width={100}
          imgUrl={`${url}/userImages/${data?.data?.data?.profilePicture}`}
          img={data?.data?.data?.profilePicture}
          name={data?.data?.data?.name}
        />
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-oneTextHeader font-bold ">
            {" "}
            {data?.data?.data?.name}
          </h1>
          <p> {data?.data?.data?.jopTitle} </p>
        </div>
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
        <button
          className="border border-NavbarBackground rounded-md w-full p-2 mt-3 font-bold text-oneTextHeader"
          onClick={() => setOpenIframeCv(true)}
        >
          السيرة الذاتية
        </button>
      </div>
      {openIframeCv && (
        <IframCv
          linkCv={`${url}/userImages/${data?.data?.data?.cv}`}
          cv={ data?.data?.data?.cv }
        />
      )}
    </div>
  );
}
