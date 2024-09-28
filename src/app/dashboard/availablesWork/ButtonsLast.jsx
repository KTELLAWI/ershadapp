"use client";
import React, { useState } from "react";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useRouter } from "next/navigation";
import { request } from "../../../../axios/axios";
import axios from "axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
export default function ButtonsLast({ page, setPage, meta }) {
  const router = useRouter();
  const [viweLink, setViewLink] = useState(false);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleConvertExcel() {
    setLoading(true);
    await request
      .get("/api/work/export-csv")
      .then((result) => {
        if (result?.data?.message === "CSV file created successfully") {
          setLink(result?.data?.downloadLink);
          setViewLink(true);
        }
      })
      .catch((error) => alert(error?.response?.data?.message))
      .finally(() => setLoading(false));
  }
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center text-white">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <ButtonPagination page={page} setPage={setPage} meta={meta} />
        <button
          className=" bg-blue-800 w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
          onClick={handleConvertExcel}
        >
          {loading ? <LoadingButton /> : " تصدير الي ملف cvs"}
        </button>
        {viweLink && (
          <a
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            href={link}
          >
            اضغط هنا للتحميل
          </a>
        )}
      </div>
      <button
        className=" bg-bgButtonHeader w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
        onClick={() =>
          router.push("/dashboard/availablesWork/addAvailableWork")
        }
      >
        اضافة
      </button>
    </div>
  );
}
