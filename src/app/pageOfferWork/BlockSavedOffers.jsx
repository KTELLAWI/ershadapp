"use client";
import React, { useContext, useState } from "react";
import Avatar from "../../../componant/Avatar";
import { useRouter } from "next/navigation";
import savedGreen from '../../../public/images/savedGreen.png'
import { ContextSimple } from "../../../context/simpleContext";
import ApplayOnWork from "../../../componant/BlocksBobab/ApplayOnWork";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedJop } from "@/redux/features/savedJopsSlice";
import Image from "next/image";
export default function BlockSavedOffers({ saved }) {
  const router = useRouter();
  const dispatch = useDispatch()
  const {
    openApplayOnWork,
    setOpenApplayOnWork,
    savedApplay,
    setSavedApplay,
    setInformationCompanyToApplay,
  } = useContext(ContextSimple);
  const [openMore, setOpenMore] = useState(false);
  const user = useSelector((state) => state?.user);
  // handle remove Jop
  async function handleRemoveSaved(id) {
    dispatch(removeSavedJop(id));
  }
  //
  return (
    <div className="bg-bgPop mt-5 rounded-lg px-[5px]">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() =>
          user?.role === "Freelancer"
            ? router.push("/myProfileEmployee")
            : user?.role === "Client"
            ? router.push("/myProfileCompany")
            : ""
        }
      >
        <Avatar
          width={40}
          name={saved?.createdBy?.companyName}
          imgUrl={saved?.createdBy?.companyLogo}
        />
        <div>
          <h1 className="text-textHeadOfferWork font-semibold text-[0.8rem]">
            {saved?.createdBy?.companyName}
          </h1>
          <p className="text-textFilter text-[0.7rem] -mt-[2px]">
            {saved?.createdBy?.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4 mr-2">
        <p className={!openMore ? "line-clamp-2" : ""}>{saved?.description}</p>
        <button
          className="font-bold text-[0.8rem] text-start -mt-3"
          onClick={() => setOpenMore((e) => !e)}
        >
          {!openMore ? " عرض المزيد" : "عرض اقل"}
        </button>
      </div>
      <div className="flex justify-between items-center mt-7 text-textFilter mr-2">
        {user?.role === "Freelancer" ? (
          <div
            className="p-2 bg-NavbarBackground rounded-md font-bold text-[0.9rem] cursor-pointer text-white"
            onClick={ () => {
                setInformationCompanyToApplay({
                  idJop: saved?._id,
                  companyName: saved?.createdBy?.companyName,
                  companyLogo: saved?.createdBy?.companyLogo,
                  companyEmail: saved?.createdBy?.email,
                  descriptionJop: saved?.description,
                });
              setSavedApplay("save");
              setOpenApplayOnWork(true);
            }}
          >
            قدم الان
          </div>
        ) : (
          ""
        )}
        <div
          className="cursor-pointer"
          onClick={() => handleRemoveSaved(saved?._id)}
        >
          <Image src={savedGreen} alt="savedIcon" className="w-[30px]"/>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      {openApplayOnWork && savedApplay === "save" && <ApplayOnWork />}
    </div>
  );
}
