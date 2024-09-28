"use client";
import React, { useContext, useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import { ContextSimple } from "../../../../../context/simpleContext";
import { useRouter } from "next/navigation";
import { request, url } from "../../../../../axios/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import IframCv from "../../../../../componant/BlocksBobab/IframCv";
import ButtonPagination from "../../../../../componant/Buttons/ButtonPagination";
//
export default function RequestsJoin() {
  const { openIframeCv, setOpenIframeCv } = useContext(ContextSimple);
  const [valueCv, setValueCv] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const queryClient = useQueryClient();
  /////////function getAvailableWork/////////////
  function getAvailableWorkPendding() {
    return request.get(`/api/work/pending-freelancers?page=${page}&limit=${5}`);
  }
  let { data } = useQuery({
    queryKey: ["getAvailableWorkPendding", page],
    queryFn: () => getAvailableWorkPendding(page),
    keepPreviousData: true,
  });
  // update status
  async function updateStatus(statusType, id) {
    await request
      .put("/api/work/update-work-status", {
        workId: id,
        status: statusType,
      })
      .then((result) => {
          console.log( 'new',result );
          if (
            result?.data?.message === "work status updated to تم الموافقة" ||
            result?.data?.message === "work status updated to تم رفضه"
          ) {
                  queryClient.setQueryData(
                    ["getAvailableWorkPendding", page],
                      ( oldData ) => {
                        console.log('old',oldData)
                      const newData = oldData?.data?.data.filter(
                        (user) => user._id !== id
                      );
                      return {
                        ...oldData,
                        data: { ...oldData.data, data: newData },
                      };
                    }
                  );
          }
        
      })
      .catch((error) => alert(error?.response?.data?.message));
  }
  return (
    <div className="lg:mt-10 mt-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineEventAvailable size={35} />
          <h4 className="text-[1.1rem]  text-NavbarBackground">
            {" "}
            المتاحين للعمل / طلبات الانضمام
          </h4>
        </div>
      </div>

      <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
        <div className="containerTableDashboard scrollbar px-2">
          <table>
            <thead>
              <tr>
                <th className="thDashboard"> الاسم كامل</th>
                <th className="thDashboard"> المسمى الوظيفى</th>
                <th className="thDashboard">رقم الجوال </th>
                <th className="thDashboard">البريد الالكترونى </th>
                <th className="thDashboard">رقم الهويه </th>
                <th className="thDashboard"> اللقب</th>
                <th className="thDashboard"> المدينة</th>
                <th className="thDashboard">السيرة الذاتية </th>
                <th className="thDashboard">اللغة الانجليزية </th>
                <th className="thDashboard"> المؤهل الدراسي</th>
                <th className="thDashboard"> سنة التخرج</th>
                <th className="thDashboard"> الحالة</th>

                <th className="thDashboard"> المباشرة في العمل</th>
                <th className="thDashboard">العمل فى غير مكان الاقامة </th>
                <th className="thDashboard"> اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data?.map((e, i) => (
                <tr key={i} className="cursor-pointer">
                  <td> {e?.fullName}</td>
                  <td> {e?.jobTitle}</td>
                  <td>{e?.phoneNumber}</td>
                  <td> {e?.email}</td>
                  <td>{e?.idNumber}</td>
                  <td> {e?.title}</td>
                  <td>{e?.city}</td>
                  <td
                    onClick={() => {
                      setValueCv(e?.cv);
                      setOpenIframeCv(true);
                    }}
                  >
                    {" "}
                    فتح
                  </td>
                  <td> {e?.englishLevel}</td>
                  <td> {e?.degree}</td>
                  <td> {e?.graduationYear}</td>
                  <td> {e?.maritalStatus}</td>
                  <td> {e?.willingToRelocate}</td>
                  <td> {e?.canWorkRemotely}</td>
                  <td className="flex items-center gap-2">
                    <p
                      className="text-white bg-green w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() => updateStatus("تم الموافقة", e?._id)}
                    >
                      قبول
                    </p>
                    <p
                      className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() => updateStatus("تم رفضه", e?._id)}
                    >
                      رفض
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <ButtonPagination
            page={page}
            setPage={setPage}
            meta={data?.data?.meta}
          />
          <button
            className="bg-green border border-gray-300  rounded-md text-white py-2 px-5 text-[0.9rem]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard/availablesWork");
            }}
          >
            رجوع
          </button>
        </div>
      </div>
      {openIframeCv && (
        <IframCv linkCv={`${url}/userImages/${valueCv}`} cv={valueCv} />
      )}
    </div>
  );
}
