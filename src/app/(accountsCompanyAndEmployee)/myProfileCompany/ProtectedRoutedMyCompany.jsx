"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutedMyCompany({ children }) {
  const user = useSelector((state) => state?.user);
  const router = useRouter();
  useEffect(() => {
    if (user?._id !== "" && user?.role !== "Client") {
      router.push("/");
    }
  }, [user, router]);

  return user?.role === "Client" ? children : null;
}
