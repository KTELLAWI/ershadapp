"use client";
import React, { useContext, useState } from "react";
import { MdBusiness } from "react-icons/md";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { ContextSimple } from "../../../../context/simpleContext";
import { useRouter } from "next/navigation";
import ButtonPagination from "../../../../componant/Buttons/ButtonPagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../axios/axios";

export default function AccountsCompany() {
  const { openDelete, setOpenDelete, setUserCurrentId, userCurrentId } =
    useContext(ContextSimple);

  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const router = useRouter();
  /////////function getAccount Company/////////////
  function getAccountsCompany() {
    return request.get(`/api/user/clients?page=${page}&limit=${5}`);
  }
  let { data } = useQuery({
    queryKey: ["getAccountsCompany", page],
    queryFn: () => getAccountsCompany(page),
    keepPreviousData: true,
  });
  ////////////function Active,deactive//////////////
  async function activeAndDeactive(id) {
    await request
      .put(`/api/user/update-account-status`, {
        userId: id,
      })
      .then(() => {
        queryClient.setQueryData(["getAccountsCompany", page], (oldData) => {
          const newData = oldData?.data?.data.map((company) =>
            company._id === id
              ? { ...company, accountStatus: !company.accountStatus }
              : company
          );
          return { ...oldData, data: { ...oldData.data, data: newData } };
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="lg:mt-10 mt-14">
      <div className="flex items-center gap-2">
        <MdBusiness size={35} />
        <h4 className="text-[1.3rem] text-NavbarBackground"> حسابات الشركة</h4>
      </div>
      <div className="bg-bgTableDashboard rounded-md p-5 mt-10">
        <div className="containerTableDashboard scrollbar px-2">
          <table>
            <thead>
              <tr>
                <th className="thDashboard"> اسم الشركة</th>
                <th className="thDashboard"> البريد الالكتروني</th>
                <th className="thDashboard"> وسيلة التواصل</th>
                <th className="thDashboard"> العنوان</th>
                <th className="thDashboard"> حالة الحساب</th>
                <th className="thDashboard"> اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data.map((company, i) => (
                <tr key={i} className="cursor-pointer">
                  <td>{company?.companyName} </td>
                  <td>{company?.email}</td>
                  <td>{company?.contact}</td>
                  <td>{company?.address}</td>

                  <td>
                    {" "}
                    <p
                      className={`border ${
                        company?.accountStatus
                          ? "bg-green"
                          : "bg-bgButtonHeader"
                      } text-white w-fit py-1 px-2 rounded-md cursor-pointer`}
                      onClick={() => activeAndDeactive(company?._id)}
                    >
                      {company?.accountStatus ? "مفعل" : "معطل"}
                    </p>
                  </td>
                  <td className="flex items-center gap-2">
                    <p
                      className="border border-NavbarBackground w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/dashboard/accountsCompany/${company?._id}`
                        )
                      }
                    >
                      عرض
                    </p>
                    <p
                      className="border border-rose-700 w-fit py-1 px-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setOpenDelete(true);
                        setUserCurrentId(company?._id);
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
          header={"حذف الشركة"}
          text={"هل أنت متأكد من حذف الشركة ؟!"}
          textButton={"حذف الشركة"}
          state={"deleteAccountAdmin"}
          api={`/api/user/delete/${userCurrentId}`}
         
          keyFunction={ "getAccountsCompany" }
          userCurrentId={userCurrentId}
          page={page}
        />
      )}
    </div>
  );
}
