import React, { useState } from "react";
import { MdSatellite } from "react-icons/md";
import TableDisplayEmployee from "./TableDisplayEmployee";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../axios/axios";
export default function OfferWorkMyCompany() {
  const [page, setPage] = useState(1);
  function getJopsMyClientInMyDashboard() {
    return request.get(`/api/job/getJobsForClientDash?page=${page}&limit=${2}`);
  }
  let { data } = useQuery({
    queryKey: ["getJopsMyClientInMyDashboard", page],
    queryFn: () => getJopsMyClientInMyDashboard(page),
    keepPreviousData: true,
  });
  return (
    <div className="flex flex-col gap-10">
      {data?.data?.data?.map((jop, i) => (
        <div key={i}>
          <div className="flex items-center gap-2">
            <MdSatellite size={25} />
            <h1 className="text-textHeadOfferWork font-semibold text-[0.8rem]">
              عرض العمل رقم {i + 1}
            </h1>
          </div>
          <div className="flex flex-col gap-3 mt-4 mr-2">
            <p className="line-clamp-3">{jop?.description}</p>
          </div>
          {jop?.applications?.length > 0 ? (
            <TableDisplayEmployee applications={ jop?.applications } page={ page }/>
          ) : (
            <div className="flex justify-center w-full mt-10 text-red mr-2">
              <h4>لا توجد طلبات تقديم لهذة الوظيفة حتي </h4>
            </div>
          )}
        </div>
      ))}
      <ButtonPagination page={page} setPage={setPage} meta={data?.data?.meta} />
    </div>
  );
}
