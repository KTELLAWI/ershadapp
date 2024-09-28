import React, { useState } from "react";
import BlockMyOffers from "./BlockMyOffers";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../axios/axios";
import ButtonPagination from "../../../componant/Buttons/ButtonPagination";

export default function MyOffers() {
  const [page, setPage] = useState(1);
  function getJopsMyClient() {
    return request.get(
      `/api/job/getJobsForClientPublic?page=${page}&limit=${5}`
    );
  }
  let { data } = useQuery({
    queryKey: ["getJopsMyClient", page],
    queryFn: () => getJopsMyClient(page),
    keepPreviousData: true,
  });

  return (
    <div className="bg-bgPop py-5 px-3 rounded-lg">
      <h1 className="text-oneTextHeader font-bold mr-2">عروضي</h1>
      {data?.data?.data?.length > 0 ? (
        <>
          <div className="overflow-auto flex flex-col gap-3 min-h-[50vh] max-h-[85vh] scrollbar">
            {data?.data?.data.map((myOffer, i) => (
              <BlockMyOffers
                key={i}
                myOffer={myOffer}
                page={page}
                setPage={setPage}
              />
            ))}
          </div>
          <ButtonPagination
            page={page}
            setPage={setPage}
            meta={data?.data?.meta}
          />{" "}
        </>
      ) : (
        <div className="overflow-auto flex justify-center items-center gap-3 min-h-[50vh] max-h-[85vh] scrollbar">
          <h4 className="font-semibold"> لا توجد عروض لك حتي الان</h4>
        </div>
      )}
    </div>
  );
}
