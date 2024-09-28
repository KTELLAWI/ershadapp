"use client";
import React from "react";
import BlockUserInform from "./BlockUserInform";
import SidebarPersonalDynamic from "./SidebarPersonalDynamic";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../axios/axios";
export default function ProfileEmployeeDynamic( { params } ) {
    function getProfileCompanyDynamic() {
      return request.get(`/api/user/profile/${params.id}`);
    }
    let { data } = useQuery({
      queryKey: ["getProfileCompanyDynamic"],
      queryFn: getProfileCompanyDynamic,
    });
  return (
    <div className="mt-20 w-[90%] flex lg:flex-row flex-col gap-5 mx-auto">
      <div className="lg:w-[25%]">
        <SidebarPersonalDynamic data={data} />
      </div>
      <div className="lg:w-[75%] w-[100%]">
        <BlockUserInform data={ data} />
      </div>
    </div>
  );
}
