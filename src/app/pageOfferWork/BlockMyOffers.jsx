"use client";
import React, { useContext, useState } from "react";
import Avatar from "../../../componant/Avatar";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import TableDisplayEmployee from "../(accountsCompanyAndEmployee)/myProfileCompany/TableDisplayEmployee";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { url } from "../../../axios/axios";
import { ContextSimple } from "../../../context/simpleContext";
import Delete from "../../../componant/BlocksBobab/Delete";
export default function BlockMyOffers({ myOffer, page }) {
  const router = useRouter();
  // const [openDisplay, setOpenDisplay] = useState(false);
  const user = useSelector((state) => state?.user);
  const [openMore, setOpenMore] = useState(false);
  const { openDelete, setOpenDelete, userCurrentId, setUserCurrentId } =
    useContext(ContextSimple);

  return (
    <>
      <div className="bg-bgPop mt-5 rounded-lg px-[5px] ">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => router.push(`/myProfileCompany`)}
        >
          <Avatar
            width={40}
            name={user?.companyName}
            imgUrl={`${url}/userImages/${user?.companyLogo}`}
          />
          <div>
            <h1 className="text-textHeadOfferWork font-semibold text-[0.8rem]">
              {user?.companyName}
            </h1>
            <p className="text-textFilter text-[0.7rem] -mt-[2px]">
              {user?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 mr-2">
          <p className={`${!openMore ? "line-clamp-2" : ""}`}>
            {myOffer?.description}
          </p>
          <button
            className="font-bold text-[0.8rem] text-start -mt-3"
            onClick={() => setOpenMore((e) => !e)}
          >
            {!openMore ? " عرض المزيد" : "عرض اقل"}
          </button>
        </div>
        <div className="flex justify-between items-center mt-7 text-textFilter mr-2">
          <div
            className="flex items-center gap-2 cursor-pointer"
            // onClick={() => setOpenDisplay(true)}
          >
            <FaUser />
            <p>{myOffer?.applications?.length}</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setUserCurrentId(myOffer?._id);
              setOpenDelete(true);
            }}
          >
            <MdDelete size={20} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      </div>
      {/* {openDisplay && (
        <TableDisplayEmployee
          mySidebar={true}
          setOpenDisplay={setOpenDisplay}
        />
      )} */}
      {openDelete && (
        <Delete
          header={"حذف العرض"}
          text={"هل أنت متأكد من حذف العرض ؟!"}
          textButton={"حذف العرض"}
          state={"deleteOfferWork"}
          api={`/api/job/delete-job/${userCurrentId}`}
          keyFunction={"getJopsMyClient"}
          userCurrentId={userCurrentId}
          page={page}
        />
      )}
    </>
  );
}
