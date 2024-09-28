"use client";
import React, { useContext, useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../../context/simpleContext";
import { useRouter } from "next/navigation";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { request } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function OfferWorksDashboard() {
  const { openDelete, setOpenDelete, setUserCurrentId, userCurrentId } =
    useContext(ContextSimple);
  const router = useRouter();
  const [page, setPage] = useState(1);
  /////////function getAccount Company/////////////
  function getOfferWorkAdmin() {
    return request.get(`/api/job?page=${page}&limit=${5}`);
  }
  let { data } = useQuery({
    queryKey: ["getOfferWorkAdmin", page],
    queryFn: () => getOfferWorkAdmin(page),
    keepPreviousData: true,
  });

  return (
    <div className="lg:mt-10 mt-14">
      <div className="flex items-center gap-2">
        <MdOutlineLocalOffer size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground"> عروض العمل</h4>
      </div>
      <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
        <div className="containerTableDashboard scrollbar px-2">
          <table>
            <thead>
              <tr>
                <th className="thDashboard"> اسم الشركة</th>
                <th className="thDashboard"> نص الوظيفة</th>
                <th className="thDashboard"> المتقدمين</th>
                <th className="thDashboard"> تاريخ النشر</th>
                <th className="thDashboard"> العنوان</th>
                <th className="thDashboard"> حالة العرض</th>
                <th className="thDashboard"> اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data.map((jop, i) => (
                <tr key={i} className="cursor-pointer">
                  <td> {jop?.createdBy?.companyName}</td>
                  <td className="max-w-[20px] p-1 line-clamp-2">
                    {" "}
                    {jop?.description}{" "}
                  </td>
                  <td>{jop?.applications?.length}</td>
                  <td> {jop?.createdAt?.slice(0, 10)}</td>
                  <td>{jop?.createdBy?.address}</td>
                  <td> {jop?.status}</td>
                  <td className="flex items-center gap-2">
                    <p
                      className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/dashboard/offersWorkDashboard/${jop?._id}`
                        )
                      }
                    >
                      عرض
                    </p>
                    <p
                      className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setOpenDelete(true);
                        setUserCurrentId(jop?._id);
                      }}
                    >
                      حذف
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ButtonPagination
          page={page}
          setPage={setPage}
          meta={data?.data?.meta}
        />
      </div>
      {openDelete && (
        <Delete
          header={"حذف عرض العمل"}
          text={"هل أنت متأكد من حذف عرض العمل؟!"}
          textButton={"حذف العرض"}
          state={"deleteOfferWorkAdmin"}
          api={`/api/job/delete-job/${userCurrentId}`}
          keyFunction={"getOfferWorkAdmin"}
          page={page}
        />
      )}
    </div>
  );
}
