"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Avatar";
import { request, url } from "../../../axios/axios";
import { toast } from "react-toastify";
import { setLogout } from "@/redux/features/userSlice";
import { resetJopSaved } from "@/redux/features/savedJopsSlice";
import dashboardIcon from "../../../public/images/dashboardIcon.png"

export default function LoginAndRegisterButton() {
  const router = useRouter();
  const user = useSelector((state) => state?.user);
  const [text, setText] = useState("تبحث عن موظفين");

  const dispatch = useDispatch();
  async function handleLogout() {
    await request
      .post("/api/user/logout")
      .then((result) => {
        if (result?.data?.message === "Logged out successfully") {
          dispatch(setLogout());
          router.replace("/");
          dispatch(resetJopSaved());
          localStorage.removeItem("informUser");
          localStorage.removeItem("token");
          queryClient.clear();
        }
      })
      .catch((error) => toast.error(error?.response?.message));
  }
  if (user?._id)
    return (
      <div className="flex gap-3 rounded-full  border-1 border-white bg-bgButtonNavbar ">
        <div className=""
          onClick={() =>
            user?.role === "Freelancer"
              ? router.push("/myProfileEmployee")
              : user?.role === "Client"
                ? router.push("/myProfileCompany")
                : user?.role === "Admin"
                  ? router.push("/dashboard/mainDashboard")
                  : ""
          }
        >
          {user?.profilePicture !== "" || user?.companyLogo !== "" ? (
            <Avatar

              width={45}
              imgUrl={dashboardIcon
                // user?.role === "Freelancer"
                //   ? `${url}/userImages/${user?.profilePicture}`
                //   : `${url}/userImages/${user?.companyLogo}`
              }
              name={user?.role === "Client" ? user?.companyName : user?.name}
              img={dashboardIcon
                // user?.role === "Freelancer"
                //   ? user?.profilePicture
                //   : user?.companyLogo
              }
            />
          ) : (
            <Avatar

              width={45}
              imgUrl={dashboardIcon
                // user?.role === "Freelancer"
                //   ? `${url}/userImages/${user?.profilePicture}`
                //   : `${url}/userImages/${user?.companyLogo}`
              }
              name={user?.role === "Client" ? user?.companyName : user?.name}
              img={dashboardIcon
                // user?.role === "Freelancer"
                //   ? user?.profilePicture
                //   : user?.companyLogo
              }
            />
          )}
        </div>
        <button className="text-white px-1" onClick={handleLogout}>
          تسجيل الخروج
        </button>
      </div>
    );

  return (
    <div className="flex gap-3 ">
      <button
        onClick={() => router.push("/chooseAccount")}
        onMouseEnter={() => setText("انضم الينا")} // Replace with your hover text
        onMouseLeave={() => setText("تبحث عن موظفين")}
        className=" relative overflow-hidden text-white bg-bgButtonNavbar rounded-md py-2 px-2 group w-[145px] text-center "
      >
        <span className=" relative z-10 transition-colors duration-300 ease-in-out font-semibold group-hover:text-bgButtonNavbar">
          {text}
        </span>
        <div className="absolute  inset-0 group-hover:bg-white transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0" />
      </button>

      {/* <button
        className="bg-bgButtonNavbar rounded-md text-white py-2 px-3"
        onClick={() => router.push("/chooseAccount")}
      >
        انضم الينا
      </button> */}
    </div>
  );
}
