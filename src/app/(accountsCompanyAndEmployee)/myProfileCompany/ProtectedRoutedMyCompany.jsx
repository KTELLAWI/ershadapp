"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutedMyCompany({ children }) {
  const user = useSelector((state) => state?.user);
  const router = useRouter();
  // useEffect(() => {
  //   if (user?._id !== "" && user?.role !== "Client") {
  //     router.push("/");
  //   }
  //   if (user?._id !== "" && user?.role === "Client"  && user?.accountStatus === false ) {
  //     router.push("/disabledaccount");
  //   }
  // }, [user, router]);
  useEffect(() => {
    if (!user || user._id === "")      {  router.push("/disabledaccount");
    //return; // Exit early if user is undefined or empty
    }
    if (user.role !== "Client") {
      router.push("/disabledaccount");
    } else if (user.role === "Client" && user.accountStatus === false) {
      router.push("/disabledaccount");
    }
  }, [user, router]);
  
  console.log("Role:", user?.role, "Account Status:", user?.accountStatus);

//todo : send to decativation page in case account is disable and send email when it is activeated
  return user?.role === "Client" && user?.accountStatus === true ? children : null;
}
