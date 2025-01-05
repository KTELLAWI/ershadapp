// "use client";
import React, { useState } from "react";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useRouter } from "next/navigation";
import { request } from "../../../../axios/axios";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
export default function DownloadButton({ jobId }) {
  const router = useRouter();
  const [viweLink, setViewLink] = useState(false);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [file, setFile] = useState(null);

  async function handleConvertExcel() {
    const jobId1 = jobId;//jobid;//'67208c7680f4b01fced2eecb'; // Replace with the actual job ID you need
    const downloadUrl = `https://backend.ershad-sa.com/api/application/export-applications/${jobId1}`;

    // Create an invisible anchor element and set it up to download the file
    const anchor = document.createElement('a');
    anchor.href = downloadUrl;
    anchor.download = `job_${jobId1}_applications.csv`;

    // Append to the document, trigger the click, and then remove it
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    // try {
    //   // Make the API request to get the file as a Blob
    //   const response = await axios.get(`/api/application/export-applications/67208c7680f4b01fced2eecb`, {
    //   //  responseType: 'blob', // Important for file downloadss
    //   });

    //   // Create a Blob URL for the downloaded file
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', `job_${jobId}_applications.csv`);

    //   // Append to the document and trigger the download
    //   document.body.appendChild(link);
    //   link.click();

    //   // Cleanup the link and revoke the Blob URL
    //   document.body.removeChild(link);
    //   window.URL.revokeObjectURL(url);
    // } catch (error) {
    //   console.error("Error downloading file:", error);
    //   alert("Failed to download the file. Please try again.");
    // }
  }


  // async function handleConvertExcel() {
  //   setLoading(true);
  //   await request
  //     .get("/api/application/export-applications/:jobId")
  //     .then((result) => {
  //       if (result?.data?.message === "CSV file created successfully") {
  //         setLink(result?.data?.downloadLink);
  //         setViewLink(true);
  //       }
  //     })
  //     .catch((error) => alert(error?.response?.data?.message))
  //     .finally(() => setLoading(false));
  // }
  // async function handleAddFile() {
  //   setLoading2(true);
  //   const formDate = new FormData();
  //   formDate.append("file", file);
  //   await request
  //     .post("/api/work/add/csv", formDate)
  //     .then((result) => {
  //       if (result?.data?.message === "success") {
  //         alert("تمت الاضافة بنجاح");
  //         setFile(null);
  //         refetch();
  //       }
  //     })
  //     .catch((error) => alert(error?.response?.data?.message))
  //     .finally(() => setLoading2(false));
  // }
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center text-white">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        {!loading ?
          //(
          <button
            className=" bg-blue-800 w-fit py-[2px] px-2 text-xs rounded-md cursor-pointer mt-4"
            // onClick={handleConvertExcel(jobId)}
            onClick={() => handleConvertExcel()}
          >
            تصدير الي ملف cvs
            {/* {loading ? <LoadingButton /> : " c"} */}
          </button>
          //   )

          //}
          : viweLink && (
            <a
              className=" bg-red w-fit py-[2px] px-2 rounded-md cursor-pointer mt-4 text-xs"
              href={link}
            >
              اضغط هنا للتحميل
            </a>
          )}
        {/* <label
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
        /> */}
        {/* {file && (
          <button
            className=" bg-red w-fit py-[6px] px-3 rounded-md cursor-pointer mt-4"
            onClick={handleAddFile}
          >
            {loading2 ? <LoadingButton /> : " اضغط هنا لرفع الملف"}
          </button>
        )} */}
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