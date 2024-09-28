import React from "react";
import BlockSavedOffers from "./BlockSavedOffers";
import { useSelector } from "react-redux";
import savedGreen from "../../../public/images/savedGreen.png";
import Image from "next/image";
export default function SavedOffers() {
  const jopSaved = useSelector((state) => state?.jopSaves?.jops);
  return (
    <div className="bg-bgPop py-5 px-3 rounded-lg">
      <div className="flex items-center mr-1 gap-2">
        <Image src={savedGreen} alt="savedIcon1" className="w-[30px]" />
        <h1 className="text-oneTextHeader font-bold">العروض المحفوظة</h1>
      </div>
      {jopSaved?.length > 0 ? (
        <div className="overflow-auto flex flex-col gap-3 max-h-[85vh] scrollbar">
          {jopSaved?.map((saved, i) => (
            <BlockSavedOffers key={i} saved={saved} />
          ))}
        </div>
      ) : (
        <div className="overflow-auto flex justify-center items-center gap-3 min-h-[50vh] max-h-[85vh] scrollbar">
          <h4 className="font-semibold"> لا توجد عروض محفوظة لك حتي الان</h4>
        </div>
      )}
    </div>
  );
}
