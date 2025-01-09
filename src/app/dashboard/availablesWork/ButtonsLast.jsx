// "use client";
import React, { useState } from "react";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useRouter } from "next/navigation";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useToast } from "@/hooks/use-toast"

export default function ButtonsLast({ page, setPage, meta, refetch, location }) {
  const router = useRouter();
  const [viweLink, setViewLink] = useState(false);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const { toast } = useToast()

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
        if (result?.data?.message === "Data processed successfully") {
          // alert("تمت الاضافة بنجاح");
          toast({
            title: "تم الرفع بنجاح",
            description:  `تم اضافة ${result?.data?.count} سجل`,
            position: "bottom-left",
            status: "success",
            className: " absolute top-[-130px] bg-[#D3B472] text-black border-none",
            duration: 5000, // Auto-dismiss after 5 seconds

          });
          setFile(null);
          setLoading2(false)
          refetch();
        }
      })
      .catch((error) => 
        //alert(error?.response?.data?.message)
      toast({
        title: "خطأ في الرفع",
        description: error?.response?.data?.message || "An unexpected error occurred",
        status: "error",
        className: " absolute top-[-130px] bg-red text-white border-none z-[3000]",
        duration: 15000, // Auto-dismiss after 5 
        position: "bottom-left",

      })
 
      )
      .finally(() => setLoading2(false));
  }
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center text-white">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <ButtonPagination page={page} setPage={setPage} meta={meta} />
        {location !== 'company' && (
          <button
            className=" bg-blue-800 w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            onClick={handleConvertExcel}
          >
            {loading ? <LoadingButton /> : "تصدير الي ملف cvs"}
          </button>
        )
        }
        {viweLink && (
          <a
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            href={link}
          >
            اضغط هنا للتحميل
          </a>
        )}
        {location !== 'company' && (
          <><label
            htmlFor="cvs"
            className=" bg-orange-600 w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
          >
            استيراد من ملف cvs
          </label><input
              type="file"
              hidden
              id="cvs"
              onChange={(e) => setFile(e.target.files[0])} /></>
        )}
        {file && (
          <button
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            onClick={handleAddFile}
          >
            {loading2 ? <LoadingButton /> : " اضغط هنا لرفع الملف"}
          </button>
        )}
      </div>
      {/* <button
        className=" bg-bgButtonHeader w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
        onClick={() =>
          router.push("/dashboard/availablesWork/addAvailableWork")
        }
      >
        اضافة
      </button> */}
    </div>
  );
}