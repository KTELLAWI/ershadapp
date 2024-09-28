"use client";
import React, { useContext } from "react";
import Avatar from "../../../componant/Avatar";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ContextSimple } from "../../../context/simpleContext";
import ApplayOnWork from "../../../componant/BlocksBobab/ApplayOnWork";
import Saved from "../../../public/images/savedGreen.png";
import unSaved from "../../../public/images/un.png";
import { url } from "../../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { addNewJop, removeSavedJop } from "@/redux/features/savedJopsSlice";
import Image from "next/image";
export default function BlockOfferWork({ offer }) {
  const router = useRouter();
  const user = useSelector((state) => state?.user);
  const idJops = useSelector((state) => state?.jopSaves.idAllJops);
  const dispatch = useDispatch();
  const {
    openApplayOnWork,
    setOpenApplayOnWork,
    savedApplay,
    setSavedApplay,
    setInformationCompanyToApplay,
  } = useContext(ContextSimple);
  // handle Add Jop
  async function handleAddSaved(id) {
    dispatch(addNewJop(id));
  }
  // handle remove Jop
  async function handleRemoveSaved(id) {
    dispatch(removeSavedJop(id));
  }
  //
  return (
    <div className="bg-bgPop p-5 rounded-lg">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push(`/profileCompany/${offer?.createdBy?._id}`)}
      >
        <Avatar
          width={60}
          name={offer?.createdBy?.companyName}
          imgUrl={`${url}/userImages/${offer?.createdBy?.companyLogo}`}
          img={offer?.createdBy?.companyLogo}
        />
        <div>
          <h1 className="text-textHeadOfferWork font-semibold">
            {offer?.createdBy?.companyName}
          </h1>
          <p className="text-textFilter text-[0.9rem] -mt-1">
            {offer?.createdBy?.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4 mr-2">
        <p>{offer?.description}</p>
        <p className="text-[0.9rem]">
          📧 أرسل سيرتك الذاتية الآن إلى {offer?.createdBy?.email} لا تفوت فرصة
          أن تكون جزءًا من فريقنا الرائع!
        </p>
      </div>
      <div className="flex justify-between items-center mt-7 text-textFilter mr-2">
        <div className="flex gap-5">
          {idJops?.includes(offer?._id) ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleRemoveSaved(offer?._id)}
            >
              <Image src={Saved} alt="savedIcon" className="w-[30px]" />
              <p>الغاء الحفظ</p>
            </div>
          ) : (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleAddSaved(offer?._id)}
            >
              <Image src={unSaved} alt="savedIcon" className="w-[30px]" />
              <p> حفظ</p>
            </div>
          )}

          <div className="flex items-center gap-2">
            <FaUser />
            <p>{offer?.applications?.length}</p>
          </div>
        </div>
        {user?.role === "Freelancer" ? (
          <div
            className="p-2 bg-NavbarBackground rounded-md font-bold text-[0.9rem] cursor-pointer text-white"
            onClick={() => {
              setInformationCompanyToApplay({
                idJop: offer?._id,
                companyName: offer?.createdBy?.companyName,
                companyLogo: offer?.createdBy?.companyLogo,
                companyEmail: offer?.createdBy?.email,
                descriptionJop: offer?.description,
              });
              setSavedApplay("offer");
              setOpenApplayOnWork(true);
            }}
          >
            قدم الان
          </div>
        ) : (
          ""
        )}
      </div>
      {openApplayOnWork && savedApplay === "offer" && <ApplayOnWork />}
    </div>
  );
}
