"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../axios/axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
export default function LinesControl() {
  const router = useRouter();
  function getCountLogin() {
    return request.get(`/api/user/loginStats/byMonth`);
  }
  let { data } = useQuery({
    queryKey: ["getCountLogin"],
    queryFn: getCountLogin,
  });
  const defaultData = Array(12).fill(0);
  const companyData = [...defaultData];
  const employeeData = [...defaultData];
  data?.data?.data?.forEach((item) => {
    const index = item.month - 1;
    if (item.role === "Client") {
      companyData[index] = item.count;
    } else if (item.role === "Freelancer") {
      employeeData[index] = item.count;
    }
  });
  const allInformations = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "ابريل",
      "مايو",
      "يونيو",
      "يوليو",
      "اغسطس",
      "سبتمبر",
      "اكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: "company",
        data: companyData,
        borderColor: "#d3b472",
        tension: 0.5,
        borderWidth: 1,
      },
      {
        label: "employee",
        data: employeeData,
        borderColor: " #4b5563 ",
        tension: 0.5,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-3 lg:w-[48%] w-[100%]">
      <div className=" bg-bgPop p-5 rounded-md flex flex-col items-center gap-5 h-[50vh]">
        <Line data={allInformations} />
        <div className="flex gap-10 items-center">
          <div className="flex  gap-2 items-center">
            <div className="bg-bgButtonNavbar px-5 h-fit py-1"></div>
            <p>شركات</p>
          </div>
          <div className="flex  gap-2 items-center">
            <div className="bg-gray-600 px-5 h-fit py-1"></div>
            <p>مستخدمين</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <div
          className="flex p-2   items-center justify-center w-full border border-NavbarBackground  rounded-lg cursor-pointer"
          onClick={() => router.push("/dashboard/accountsUser")}
        >
          <p className="text-[0.8rem] lg:text-[1rem]"> حسابات المستخدمين</p>
        </div>
        <div
          className="flex p-2  items-center justify-center w-full  border border-NavbarBackground rounded-lg cursor-pointer"
          onClick={() => router.push("/dashboard/offersWorkDashboard")}
        >
          <p className="text-[0.8rem] lg:text-[1rem]"> عروض العمل</p>
        </div>
      </div>
    </div>
  );
}
