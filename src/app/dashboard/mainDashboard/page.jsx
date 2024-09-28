"use client";
import React from "react";
import { MdBusiness } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import ItemBlock from "./ItemBlock";
import PercenticeBetween from "./PercenticeBetween";
import LinesControl from "./LinesControl";
import { request } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";
export default function MainDashboard() {
  function getCounts() {
    return request.get("/api/user/stats/counts");
  }
  let { data } = useQuery({
    queryKey: ["getAllCounts"],
    queryFn: getCounts,
  });
  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <IoMdHome size={35} />
        <h4 className="text-[1.5rem] text-NavbarBackground"> الرئيسية</h4>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))]  items-center gap-5 flex-wrap w-full mt-5">
        <ItemBlock
          MdBusiness={<MdBusiness size={45} color="gray" />}
          text={" شركة "}
          num={data?.data?.clientsCount}
        />
        <ItemBlock
          MdBusiness={<FaUserCog size={45} color="gray" num={40} />}
          text={" مستخدم "}
          num={data?.data?.freelancersCount}
        />
        <ItemBlock
          MdBusiness={<MdOutlineLocalOffer size={45} color="gray" num={40} />}
          text={" عروض عمل "}
          num={data?.data?.jobsCount}
        />
        <ItemBlock
          MdBusiness={<MdGroups2 size={45} color="gray" num={40} />}
          text={" متاح للعمل "}
          num={data?.data?.JoinFreelaners}
        />
      </div>
      <div className="flex items-center gap-5 lg:flex-row flex-col mt-5 w-full">
        <PercenticeBetween />
        <LinesControl />
      </div>
    </div>
  );
}
