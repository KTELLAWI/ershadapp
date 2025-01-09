// "use client";
import React, { useContext, useState } from "react";
import { request, url } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";
import IframCv from "../../../../componant/BlocksBobab/IframCv";
import ButtonsLast from "./ButtonsLast";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../../context/simpleContext";
import LoadingButton from "../../../../componant/Buttons/LoadingButton";
import { useRouter } from "next/navigation";
export default function DataOpenWorkFromFilter({
  currentJobTitleAr,
  currentlyEmployed,
  gender,
  qualification,
  nationality,
  specialtyNameAr,
  totalExperience,
  location
}) {
  const {
    openDelete,
    setOpenDelete,
    openIframeCv,
    setOpenIframeCv,
    setUserCurrentId,
    userCurrentId,
  } = useContext(ContextSimple);
  const router = useRouter();
 
  const [valueCv, setValueCv] = useState(null);
  const [page, setPage] = useState(1);
  /////////function getAvailableWork  Filter in dashboard/////////////
  function getAvailableWorkFilterInDashboard() {
    return request.get(
      `/api/work/approved-freelancers?currentJobTitleAr=${currentJobTitleAr}&specialtyNameAr=${specialtyNameAr}&qualification=${qualification}&currentlyEmployed=${currentlyEmployed}&gender=${gender}&nationality=${nationality}&totalExperience=${totalExperience}&page=${page}&limit=${100}`
    );
  }
  let { data, isLoading } = useQuery({
    queryKey: [
      "getAvailableWorkFilterInDashboard",
      page,
      currentJobTitleAr,
  currentlyEmployed,
  gender,
  qualification,
  nationality,
  specialtyNameAr,
  totalExperience,
    ],
    queryFn: () => getAvailableWorkFilterInDashboard(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="w-full flex min-h-[40vh] justify-center items-center">
        <LoadingButton />
      </div>
    );
  if (!isLoading && data?.data?.data?.length === 0)
    return (
      <div className="w-full flex min-h-[40vh] justify-center items-center text-[1.3rem] ">
        لا توجد نتائج بحث متطابقة
      </div>
    );
  return (
    <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
      <div className="containerTableDashboard scrollbar px-2">
        {/* <table>
          <thead>
            <tr>
              <th className="thDashboard"> الاسم كامل</th>
              <th className="thDashboard"> المسمى الوظيفى</th>
              <th className="thDashboard">رقم الجوال </th>
              <th className="thDashboard">البريد الالكترونى </th>
              <th className="thDashboard">رقم الهويه </th>
              <th className="thDashboard"> اللقب</th>
              <th className="thDashboard"> المدينة</th>
              <th className="thDashboard">السيرة الذاتية </th>
              <th className="thDashboard">اللغة الانجليزية </th>
              <th className="thDashboard"> المؤهل الدراسي</th>
              <th className="thDashboard"> سنة التخرج</th>
              <th className="thDashboard"> الحالة</th>

              <th className="thDashboard"> المباشرة في العمل</th>
              <th className="thDashboard">العمل فى غير مكان الاقامة </th>
              <th className="thDashboard"> اجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data?.map((e, i) => (
              <tr key={i} className="cursor-pointer">
                <td> {e?.fullName}</td>
                <td> {e?.jobTitle}</td>
                <td>{e?.phoneNumber}</td>
                <td> {e?.email}</td>
                <td>{e?.idNumber}</td>
                <td> {e?.title}</td>
                <td>{e?.city}</td>
                <td
                  onClick={() => {
                    setValueCv(e?.cv);
                    setOpenIframeCv(true);
                  }}
                >
                  {" "}
                  فتح
                </td>
                <td> {e?.englishLevel}</td>
                <td> {e?.degree}</td>
                <td> {e?.graduationYear}</td>
                <td> {e?.maritalStatus}</td>
                <td> {e?.willingToRelocate}</td>
                <td> {e?.canWorkRemotely}</td>
                <td className="flex items-center gap-2">
                  <p
                    className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/availablesWork/${e?._id}`)
                    }
                  >
                    عرض
                  </p>
                  <p
                    className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setUserCurrentId(e?._id);
                      setOpenDelete(true);
                    }}
                  >
                    حذف
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <table>
          <thead>
            <tr>
              <th className="thDashboard"> الاسم كامل</th>
              <th className="thDashboard">المسمى الوظيفي الحالي باللغة الانجليزية</th>
              <th className="thDashboard">المسمى الوظيفي الحالي باللغة العربية</th>
              <th className="thDashboard">اسم التخصص باللغة العربية</th>
              <th className="thDashboard">المؤهل</th>
              <th className="thDashboard">اسم الجامعة</th>
              <th className="thDashboard"> سنوات الخبرة في مجال التخصص</th>
              <th className="thDashboard"> سنوات الخبرة بشكل عام وإجمالي</th>
              <th className="thDashboard">الجنسية</th>
              <th className="thDashboard">بريدالإلكتروني </th>
              <th className="thDashboard">الجوال</th>
              <th className="thDashboard">  الجنس</th>
              <th className="thDashboard"> هل أنت حاليا على رأس العمل</th>
              {/* <th className="thDashboard"> أبرز مهاراتك ومجال خبراتك في العمل</th> */}
              <th className="thDashboard">السيرة الذاتية </th>
              {  location!== "company" && (<th className="thDashboard"> اجراءات</th>)}            </tr>
          </thead>
          <tbody>
            {data?.data?.data?.map((e, i) => (
              <tr key={i} className="cursor-pointer">
                <td className="thDashboard1" > {e?.fullName}</td>
                <td className="thDashboard1" > {e?.currentJobTitleEn}</td>
                <td className="thDashboard1" >{e?.currentJobTitleAr}</td>
                <td className="thDashboard1" > {e?.specialtyNameAr}</td>
                <td className="thDashboard1" > {e?.qualification}</td>
                <td className="thDashboard1"> {e?.universityName}</td>
                <td className="thDashboard1">{e?.specialtyExperience}</td>
                <td className="thDashboard1">{e?.totalExperience}</td>
                <td className="thDashboard1">{e?.nationality}</td>

                <td className="thDashboard1">{e?.email}</td>

                <td className="thDashboard1">{e?.phoneNumber}</td>

                <td className="thDashboard1">{e?.gender}</td>
                
                <td className="thDashboard1">{e?.currentlyEmployed}</td>
                
                {/* <td>{e?.skills}</td> */}
                {/* <td>{e?.resume}</td> */}

                

                <td className="thDashboard1"
                  // onClick={() => {
                  //   // setValueCv(e?.resume);
                  //   // setOpenIframeCv(true);
                  // }}
                >
                  <a href={e.resume} target="true">فتح</a>
                  {/* {" "}
                  فتح */}
                </td>
                {  location!== "company" && (
                <td className="flex items-center justify-center gap-2">
                  {/* <p
                    className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/availablesWork/${e?._id}`)
                    }
                  >
                    عرض
                  </p> */}
                  <p
                    className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                    onClick={() => {
                      setUserCurrentId(e?._id);
                      setOpenDelete(true);
                    }}
                  >
                    حذف
                  </p>
                </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonsLast page={page} setPage={setPage} meta={data?.data?.meta}  location={location}
 />
      {openDelete && (
        <Delete
          header={"حذف المستخدم"}
          text={"هل أنت متأكد من حذف المستخدم ؟!"}
          textButton={"حذف المستخدم"}
          state={"deleteOpenWorkDashboard"}
          api={`/api/work/delete-join/${userCurrentId}`}
          keyFunction={[
            "getAvailableWorkFilterInDashboard",
            page,
            selectLevelEnglish,
            selectNameJop,
            selectCity,
            setectEducation,
            selectWorkNow,
            workInRemotly,
            selectedYear,
          ]}
        />
      )}
      {openIframeCv && (
        <IframCv
          linkCv={
            valueCv?.includes("https")
              ? valueCv
              : `${url}/userImages/${valueCv}`
          }
          cv={valueCv}
        />
      )}
    </div>
  );
}