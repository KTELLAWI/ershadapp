import React, { useContext, useState } from "react";
import OpenWorkBlock from "./OpenWorkBlock";
import { CiSquarePlus } from "react-icons/ci";

import ButtonPagination from "../../../componant/Buttons/ButtonPagination";
import { ContextSimple } from "../../../context/simpleContext";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../axios/axios";
import LoadingButton from "../../../componant/Buttons/LoadingButton";
export default function OpenWork() {
  const { setOpenApplayOpenWork } = useContext(ContextSimple);
  const user = useSelector((state) => state?.user);
  const [page, setPage] = useState(1);
  /////////function getAvailableWork/////////////
  function getAvailableWorkInUser() {
    return request.get(
      `/api/work/approved-freelancers?page=${page}&limit=${10}`
    );
  }
  let { data, isLoading } = useQuery({
    queryKey: ["getAvailableWorkInUser", page],
    queryFn: () => getAvailableWorkInUser(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="w-full flex max-h-screen justify-center items-center">
        <LoadingButton />
      </div>
    );
  return (
    <div className=" lg:w-[75%] w-[100%]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-textFilter text-[1.2rem]">
          المتاحين للعمل
        </h1>
        {user?.role === "Freelancer" ? (
          <div
            className="flex lg:p-2 p-1 gap-3 items-center w-fit border border-NavbarBackground rounded-lg cursor-pointer"
            onClick={() => setOpenApplayOpenWork(true)}
          >
            <CiSquarePlus />
            <p className="text-[0.8rem] lg:text-[1rem]">
              طلب انضمام متاحين للعمل
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_265px))] smm:grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] mt-24 justify-between gapx-3 gap-y-24">
        {data?.data?.data?.map((user, i) => (
          <OpenWorkBlock key={i} user={user} />
        ))}
      </div>
      <ButtonPagination page={page} setPage={setPage} meta={data?.data?.meta} />
    </div>
  );
}
