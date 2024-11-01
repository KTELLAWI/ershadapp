// import React, { useContext, useState } from "react";
// import { request, url } from "../../../../axios/axios";
// import { useQuery } from "@tanstack/react-query";
// import IframCv from "../../../../componant/BlocksBobab/IframCv";
// import ButtonsLast from "./ButtonsLast";
// import Delete from "../../../../componant/BlocksBobab/Delete";
// import { ContextSimple } from "../../../../context/simpleContext";
// import { useRouter } from "next/navigation";

// export default function AllDataApproveOpenWork() {
//   const {
//     openDelete,
//     setOpenDelete,
//     openIframeCv,
//     setOpenIframeCv,
//     setUserCurrentId,
//     userCurrentId,
//   } = useContext(ContextSimple);
  
//   const router = useRouter();
//   const [valueCv, setValueCv] = useState(null);
//   const [page, setPage] = useState(1);
//   /////////function getAvailableWork/////////////
//   function getAvailableWorkِApprove() {
//     return request.get(
//       `/api/work/approved-freelancers?page=${page}&limit=${5}`
//     );
//   }
//   let { data } = useQuery({
//     queryKey: ["getAvailableWorkِApprove", page],
//     queryFn: () => getAvailableWorkِApprove(page),
//     keepPreviousData: true,
//   });
//   return (
//     <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
//       <div className="containerTableDashboard scrollbar px-2">
//         <table>
//           <thead>
//             <tr>
//               <th className="thDashboard"> الاسم كامل</th>
//               <th className="thDashboard"> المسمى الوظيفى</th>
//               <th className="thDashboard">رقم الجوال </th>
//               <th className="thDashboard">البريد الالكترونى </th>
//               <th className="thDashboard">رقم الهويه </th>
//               <th className="thDashboard"> اللقب</th>
//               <th className="thDashboard"> المدينة</th>
//               <th className="thDashboard">السيرة الذاتية </th>
//               <th className="thDashboard">اللغة الانجليزية </th>
//               <th className="thDashboard"> المؤهل الدراسي</th>
//               <th className="thDashboard"> سنة التخرج</th>
//               <th className="thDashboard"> الحالة</th>

//               <th className="thDashboard"> المباشرة في العمل</th>
//               <th className="thDashboard">العمل فى غير مكان الاقامة </th>
//               <th className="thDashboard"> اجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.data?.data?.map((e, i) => (
//               <tr key={i} className="cursor-pointer">
//                 <td> {e?.fullName}</td>
//                 <td> {e?.jobTitle}</td>
//                 <td>{e?.phoneNumber}</td>
//                 <td> {e?.email}</td>
//                 <td>{e?.idNumber}</td>
//                 <td> {e?.title}</td>
//                 <td>{e?.city}</td>
//                 <td
//                   onClick={() => {
//                     setValueCv(e?.cv);
//                     setOpenIframeCv(true);
//                   }}
//                 >
//                   {" "}
//                   فتح
//                 </td>
//                 <td> {e?.englishLevel}</td>
//                 <td> {e?.degree}</td>
//                 <td> {e?.graduationYear}</td>
//                 <td> {e?.maritalStatus}</td>
//                 <td> {e?.willingToRelocate}</td>
//                 <td> {e?.canWorkRemotely}</td>
//                 <td className="flex items-center gap-2">
//                   <p
//                     className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
//                     onClick={() =>
//                       router.push(`/dashboard/availablesWork/${e?._id}`)
//                     }
//                   >
//                     عرض
//                   </p>
//                   <p
//                     className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
//                     onClick={() => {
//                       setUserCurrentId(e?._id);
//                       setOpenDelete(true);
//                     }}
//                   >
//                     حذف
//                   </p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <ButtonsLast page={page} setPage={setPage} meta={data?.data?.meta} />
//       {openDelete && (
//         <Delete
//           header={"حذف المستخدم"}
//           text={"هل أنت متأكد من حذف المستخدم ؟!"}
//           textButton={"حذف المستخدم"}
//           state={"deleteOpenWorkDashboard"}
//           api={`/api/work/delete-join/${userCurrentId}`}
          
//           keyFunction={["getAvailableWorkِApprove", page]}
       
//         />
//       )}
//       {openIframeCv && (
//         <IframCv linkCv={`${url}/userImages/${valueCv}`} cv={valueCv} />
//       )}
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import { request, url } from "../../../../axios/axios";
import { useQuery } from "@tanstack/react-query";
import IframCv from "../../../../componant/BlocksBobab/IframCv";
import ButtonsLast from "./ButtonsLast";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../../context/simpleContext";
import { useRouter } from "next/navigation";

export default function AllDataApproveOpenWork() {
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
  /////////function getAvailableWork/////////////
  function getAvailableWorkِApprove() {
    return request.get(
      `/api/work/approved-freelancers?page=${page}&limit=${5}`
    );
  }
  let { data, refetch } = useQuery({
    queryKey: ["getAvailableWorkِApprove", page],
    queryFn: () => getAvailableWorkِApprove(page),
    keepPreviousData: true,
  });
  return (
    <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
      <div className="containerTableDashboard scrollbar px-2">
        <table>
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
        </table>
      </div>
      <ButtonsLast
        page={page}
        setPage={setPage}
        meta={data?.data?.meta}
        refetch={refetch}
      />
      {openDelete && (
        <Delete
          header={"حذف المستخدم"}
          text={"هل أنت متأكد من حذف المستخدم ؟!"}
          textButton={"حذف المستخدم"}
          state={"deleteOpenWorkDashboard"}
          api={`/api/work/delete-join/${userCurrentId}`}
          keyFunction={["getAvailableWorkِApprove", page]}
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