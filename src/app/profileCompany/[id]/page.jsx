"use client";
import React, { useState } from "react";
import SidebarCompanyDynamin from "./SidebarCompanyDynamic";
import BlockOfferCompany from "./BlockOfferCompany";
import { request } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function ProfileEmployeeDynamic({ params }) {
  const [page, setPage] = useState(1);
  // get Profile Company Dynamic
  function getProfileCompanyDynamic() {
    return request.get(`/api/user/profile/${params.id}`);
  }
  let { data } = useQuery({
    queryKey: ["getProfileCompanyDynamic"],
    queryFn: getProfileCompanyDynamic,
  });
  // get Profile Company of Jops
  function getProfileCompanyOfJopsDynamic() {
    return request.get(
      `/api/job/jobs/client/${params.id}?page=${page}&limit=${5}`
    );
  }
  let { data: jobs } = useQuery({
    queryKey: ["getProfileCompanyOfJopsDynamic", page],
    queryFn: () => getProfileCompanyOfJopsDynamic(page),
  });

  return (
    <div className="mt-20 w-[90%] flex lg:flex-row flex-col gap-5 mx-auto">
      <div className="lg:w-[25%]">
        <SidebarCompanyDynamin data={data} />
      </div>
      <div className="lg:w-[75%] w-[100%]">
        <BlockOfferCompany
          jobs={jobs?.data?.data}
          meta={jobs?.data?.meta}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
