import React from "react";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import BlockOfferWork from "@/app/pageOfferWork/BlockOfferWork";

export default function BlockOfferCompany({ jobs, meta, page, setPage }) {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="text-textHeadOfferWork font-bold"> عروض عمل الشركة</h1>
        <div className="flex flex-col gap-3">
          {jobs?.map((offer, i) => (
            <BlockOfferWork key={i} offer={offer} />
          ))}
          <ButtonPagination meta={meta} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
}
