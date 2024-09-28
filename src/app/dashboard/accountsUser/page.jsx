"use client";
import React, { useContext, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../../context/simpleContext";
import { useRouter } from "next/navigation";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../axios/axios";

export default function AccountsUserDashboard() {
  const { openDelete, setOpenDelete, setUserCurrentId, userCurrentId } =
    useContext(ContextSimple);

  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const router = useRouter();
  /////////function getAccount Company/////////////
  function getAccountsEmployee() {
    return request.get(`/api/user/freelancers?page=${page}&limit=${5}`);
  }
  let { data } = useQuery({
    queryKey: ["getAccountsEmployee", page],
    queryFn: () => getAccountsEmployee(page),
    keepPreviousData: true,
  } );
  ////////////function Active,deactive//////////////
  async function activeAndDeactive(id) {
    await request
      .put(`/api/user/update-account-status`, {
        userId: id,
      })
      .then(() => {
        queryClient.setQueryData(["getAccountsEmployee", page], (oldData) => {
          const newData = oldData?.data?.data.map((employee) =>
            employee._id === id
              ? { ...employee, accountStatus: !employee.accountStatus }
              : employee
          );
          return { ...oldData, data: { ...oldData.data, data: newData } };
        });
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="lg:mt-10 mt-14">
      <div className="flex items-center gap-2">
        <FaUserCog size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground">
          {" "}
          حسابات المستخدمين
        </h4>
      </div>
      <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
        <div className="containerTableDashboard scrollbar px-2">
          <table>
            <thead>
              <tr>
                <th className="thDashboard"> اسم المستخدم</th>
                <th className="thDashboard"> البريد الالكتروني</th>
                <th className="thDashboard"> وسيلة التواصل</th>
                <th className="thDashboard"> المسمي الوظيفي</th>
                <th className="thDashboard"> العنوان</th>
                <th className="thDashboard"> حالة الحساب</th>
                <th className="thDashboard"> اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data.map((employee, i) => (
                <tr key={i} className="cursor-pointer">
                  <td> {employee?.name}</td>
                  <td> {employee?.email}</td>
                  <td>{employee?.contact}</td>
                  <td> {employee?.jobTitle}</td>
                  <td>{employee?.address}</td>
                  <td>
                    {" "}
                    <p
                      className={`border ${
                        employee?.accountStatus
                          ? "bg-green"
                          : "bg-bgButtonHeader"
                      } text-white w-fit py-1 px-2 rounded-md cursor-pointer`}
                      onClick={() => activeAndDeactive(employee?._id)}
                    >
                      {employee?.accountStatus ? "مفعل" : "معطل"}
                    </p>
                  </td>
                  <td className="flex items-center gap-2">
                    <p
                      className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() =>
                        router.push(`/dashboard/accountsUser/${employee?._id}`)
                      }
                    >
                      عرض
                    </p>
                    <p
                      className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setOpenDelete(true);
                        setUserCurrentId(employee?._id);
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
        <ButtonPagination
          page={page}
          setPage={setPage}
          meta={data?.data?.meta}
        />
      </div>
      {openDelete && (
        <Delete
          header={"حذف المستخدم"}
          text={"هل أنت متأكد من حذف المستخدم ؟!"}
          textButton={"حذف المستخدم"}
          state={"deleteAccountAdmin"}
          api={`/api/user/delete/${userCurrentId}`}
      
          keyFunction={"getAccountsEmployee"}
          userCurrentId={userCurrentId}
          page={page}
        />
      )}
    </div>
  );
}
