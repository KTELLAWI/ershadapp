import React, {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../axios/axios";
import ButtonPagination from "../../../componant/Buttons/ButtonPagination";
import BlockMyOfferToApplay from "./BlockMyOfferToApplay";
import { useSelector } from "react-redux";

export default function MyOffersToApplay() {
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state?.user);
  function getJopsMyFreelancerToAppay() {
    return request.get(
      `/api/application/myAppliedJobs?page=${page}&limit=${5}`
    );
  }
  let { data } = useQuery({
    queryKey: ["getJopsMyFreelancerToAppay", page, user?._id],
    queryFn: () => getJopsMyFreelancerToAppay(page),
    keepPreviousData: true,
  });


  return (
    <div className="bg-bgPop py-5 px-3 rounded-lg">
      <h1 className="text-oneTextHeader font-bold mr-2">العروض المقدم لها</h1>
      {data?.data?.data?.length > 0 ? (
        <>
          <div className="overflow-auto flex flex-col gap-3 min-h-[50vh] max-h-[85vh] scrollbar">
            {data?.data?.data.map((myOfferIsAppayied, i) => (
              <BlockMyOfferToApplay
                key={i}
                myOfferIsAppayied={myOfferIsAppayied}
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
          <h4 className="font-semibold"> لا توجد عروض قدمت لها حتي الان</h4>
        </div>
      )}
    </div>
  );
}
