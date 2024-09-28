"use client";
import React, { useContext, useState } from "react";
import Avatar from "../../../componant/Avatar";
import { useRouter } from "next/navigation";
import { url } from "../../../axios/axios";
import { MdDelete } from "react-icons/md";
import Delete from "../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../context/simpleContext";
export default function BlockMyOfferToApplay({ myOfferIsAppayied,page }) {
  const router = useRouter();
  const [openMore, setOpenMore] = useState(false);
 const { openDelete,setOpenDelete } = useContext(ContextSimple);
  const [userCurrentId, setUserCurrentId] = useState(null);
  return (
    <>
      <div className="bg-bgPop mt-5 rounded-lg px-[5px] ">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => router.push(`/myProfileCompany`)}
        >
          <Avatar
            width={40}
            name={myOfferIsAppayied?.job?.createdBy?.companyName}
            imgUrl={`${url}/userImages/${myOfferIsAppayied?.job?.createdBy?.companyLogo}`}
          />
          <div>
            <h1 className="text-textHeadOfferWork font-semibold text-[0.8rem]">
              {myOfferIsAppayied?.job?.createdBy?.companyName}
            </h1>
            <p className="text-textFilter text-[0.7rem] -mt-[2px]">
              {myOfferIsAppayied?.job?.createdBy?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 mr-2">
          <p className={`${!openMore ? "line-clamp-2" : ""}`}>
            {myOfferIsAppayied?.job?.description}
          </p>
          <div className="flex justify-between items-center">
            <button
              className="font-bold text-[0.8rem] text-start -mt-3"
              onClick={() => setOpenMore((e) => !e)}
            >
              {!openMore ? " عرض المزيد" : "عرض اقل"}
            </button>
            <div
              className="cursor-pointer translate-y-[-5px]"
              onClick={() => {
                setUserCurrentId(myOfferIsAppayied?._id);
                setOpenDelete(true);
              }}
            >
              <MdDelete color="gray" size={20} />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
        {openDelete && (
          <Delete
            header={"حذف التقديم"}
            text={"هل أنت متأكد من حذف التقديم ؟!"}
            textButton={"حذف التقديم"}
            state={"deleteOneMyApplay"}
            api={`/api/application/deleteApplicationForFriendApplication/${userCurrentId}`}
            setUserCurrentId={setUserCurrentId}
            keyFunction={"getJopsMyFreelancerToAppay"}
            userCurrentId={userCurrentId}
            page={page}
          />
        )}
      </div>
    </>
  );
}
