"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import IframCv from "../../../../componant/BlocksBobab/IframCv";
import { url } from "../../../../axios/axios";
import { ContextSimple } from "../../../../context/simpleContext";
import Delete from "../../../../componant/BlocksBobab/Delete";
export default function TableDisplayEmployee({
  mySidebar,
  setOpenDisplay,
  applications,
  page,
}) {
  const router = useRouter();
  const {
    openIframeCv,
    setOpenIframeCv,
    openDelete,
    setOpenDelete,
    userCurrentId,
    setUserCurrentId,
    valueCv,
    setValueCv,
  } = useContext(ContextSimple);
  return (
    <div
      className={`bg-bgTable rounded-lg p-5 mt-5  ${
        mySidebar ? "fixed top-32" : ""
      }`}
    >
      {mySidebar ? (
        <div className="absolute left-10 cursor-pointer">
          <IoMdClose size={25} onClick={() => setOpenDisplay(false)} />
        </div>
      ) : (
        ""
      )}
      <div className="containerTable min-h-[200px] scrollbar px-2">
        <table>
          <thead>
            <tr>
              <th className="thEmployeeUser">الاسم كامل</th>
              <th className="thEmployeeUser">رقم الجوال</th>
              <th className="thEmployeeUser">السيرة الذاتية</th>
              <th className="thEmployeeUser"> اجراءات</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((apply, i) => (
              <tr
                key={i}
                onClick={() =>
                  router.push(`/profileEmployee/${apply?.freelancer}`)
                }
                className="cursor-pointer"
              >
                <td> {apply?.fullName}</td>
                <td>{apply.phone}</td>
                <td
                  onClick={(e) => {
                    e.stopPropagation();
                    setValueCv(apply?.cv);
                    setOpenIframeCv(true);
                  }}
                >
                  <p className="bg-white py-1 px-2 w-fit cursor-pointer">
                    معاينة
                  </p>
                </td>
                <td
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserCurrentId(apply?._id);
                    setOpenDelete(true);
                  }}
                >
                  <p className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer">
                    حذف
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openIframeCv && (
        <IframCv linkCv={`${url}/userImages/${valueCv}`} cv={valueCv} />
      )}
      {openDelete && (
        <Delete
          header={"حذف هذا التقديم"}
          text={"هل أنت متأكد من حذف التقديم ؟!"}
          textButton={"حذف التقديم"}
          state={"deleteOneApplayDash"}
          api={`/api/application/deleteApplicationForFriendJop/${userCurrentId}`}
          keyFunction={"getJopsMyClientInMyDashboard"}
          page={page}
        />
      )}
    </div>
  );
}
