// "use client";
import React, { useState } from "react";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useRouter } from "next/navigation";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
export default function ButtonsLast({ page, setPage, meta, refetch }) {
  const router = useRouter();
  const [viweLink, setViewLink] = useState(false);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [file, setFile] = useState(null);
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
  async function handleAddFile() {
    setLoading2(true);
    const formDate = new FormData();
    formDate.append("file", file);
    await request
      .post("/api/work/add/csv", formDate)
      .then((result) => {
        if (result?.data?.message === "success") {
          alert("تمت الاضافة بنجاح");
          setFile(null);
          refetch();
        }
      })
      .catch((error) => alert(error?.response?.data?.message))
      .finally(() => setLoading2(false));
  }
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center text-white">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <ButtonPagination page={page} setPage={setPage} meta={meta} />
        <button
          className=" bg-blue-800 w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
          onClick={handleConvertExcel}
        >
          {loading ? <LoadingButton /> : "تصدير الي ملف cvs"}
        </button>
        {viweLink && (
          <a
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            href={link}
          >
            اضغط هنا للتحميل
          </a>
        )}
        <label
          htmlFor="cvs"
          className=" bg-orange-600 w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
        >
          استيراد من ملف cvs
        </label>
        <input
          type="file"
          hidden
          id="cvs"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file && (
          <button
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            onClick={handleAddFile}
          >
            {loading2 ? <LoadingButton /> : " اضغط هنا لرفع الملف"}
          </button>
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