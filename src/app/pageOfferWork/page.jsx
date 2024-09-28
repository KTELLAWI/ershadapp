"use client";
import React, { useEffect, useState } from "react";
import OfferWorks from "./OfferWorks";
import MyOffers from "./MyOffers";
import SavedOffers from "./SavedOffers";
import { useDispatch, useSelector } from "react-redux";
import { getJopSaved } from "@/redux/features/savedJopsSlice";
import MyOffersToApplay from "./MyOffersToApplay";

export default function PageOfferWork() {
  const [openMyOffers, setOpenMyOffers] = useState(false);
  const [ openMySaves, setOpenMySaves ] = useState( false );
  const [openMyOffersToApplay, setOpenMyOffersToApplay] = useState(false);
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const { error, state: jopState } = useSelector((state) => state?.jopSaves);

  useEffect(() => {
    if (user?._id !== "" && jopState === "idle") {
      dispatch(getJopSaved(user?._id));
    }
  }, [dispatch, jopState, user?._id]);
  return (
    <>
      {jopState === "faild" && alert(error)}
      <div className="flex lg:flex-row flex-col gap-5 w-[90%] mx-auto mt-20">
        <div className="flex items-center gap-3">
          {user?.role === "Client" ? (
            <div
              className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
              onClick={() => setOpenMyOffers((e) => !e)}
            >
              عروضي
            </div>
          ) : (
            ""
          )}
          {user?.role === "Freelancer" ? (
            <div
              className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
              onClick={() => setOpenMyOffersToApplay((e) => !e)}
            >
              العروض المقدم لها
            </div>
          ) : (
            ""
          )}

          <div
            className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
            onClick={() => setOpenMySaves((e) => !e)}
          >
            العناصر المحفوظة
          </div>
        </div>
        {user?.role === "Client" && openMyOffers ? (
          <div className="lg:hidden block">
            <MyOffers />
          </div>
        ) : (
          ""
        )}
        {user?.role === "Freelancer" && openMyOffersToApplay ? (
          <div className="lg:hidden block">
            <MyOffersToApplay />
          </div>
        ) : (
          ""
        )}
        {openMySaves && (
          <div className="lg:hidden block">
            <SavedOffers />
          </div>
        )}
        <div className="lg:flex flex-col gap-5 lg:w-[25%] hidden ">
          {user?.role === "Client" ? (
            <div>
              <MyOffers />
            </div>
          ) : (
            ""
          )}
          {user?.role === "Freelancer" ? (
            <div>
              <MyOffersToApplay />
            </div>
          ) : (
            ""
          )}

          <div>
            <SavedOffers />
          </div>
        </div>
        <div className="lg:w-[75%]  w-[100%]">
          <OfferWorks />
        </div>
      </div>
    </>
  );
}
