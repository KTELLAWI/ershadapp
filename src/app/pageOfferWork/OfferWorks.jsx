"use client";
import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import BlockOfferWork from "./BlockOfferWork";
import AddOfferWork from "../../../componant/BlocksBobab/AddOfferWork";
import { useSelector } from "react-redux";
import ButtonPagination from "../../../componant/Buttons/ButtonPagination";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../axios/axios";
import LoadingButton from "../../../componant/Buttons/LoadingButton";
export default function OfferWorks() {
  const [openAddOffer, setOpenAddOffer] = useState(false);
  const user = useSelector((state) => state?.user);
  const [page, setPage] = useState(1);
  // getAllJopsForUser
  function getAllJopsForUser() {
    return request.get(`/api/job/activated?page=${page}&limit=${5}`);
  }
  let { data, isLoading } = useQuery({
    queryKey: ["getAllJopsForUser", page],
    queryFn: () => getAllJopsForUser(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="w-full flex max-h-screen justify-center items-center">
        <LoadingButton />
      </div>
    );
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-oneTextHeader text-[1.2rem]">
            عروض العمل
          </h1>
          {user?.role === "Client" ? (
            <div
              className="flex lg:p-2 p-1 gap-3 items-center w-fit border border-NavbarBackground rounded-lg cursor-pointer"
              onClick={() => setOpenAddOffer(true)}
            >
              <CiSquarePlus />
              <p className="text-[0.8rem] lg:text-[1rem]">اضافة عرض عمل</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-5 mt-7">
          {data?.data?.data?.map((offer, i) => (
            <BlockOfferWork key={i} offer={offer} />
          ))}
        </div>

        <ButtonPagination
          page={page}
          setPage={setPage}
          meta={data?.data?.meta}
        />
      </div>
      {openAddOffer && <AddOfferWork setOpenAddOffer={setOpenAddOffer} />}
    </>
  );
}
