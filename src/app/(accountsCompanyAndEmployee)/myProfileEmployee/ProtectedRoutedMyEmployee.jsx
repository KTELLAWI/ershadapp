"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutedMyEmployee({ children }) {
  const user = useSelector((state) => state?.user);
  const router = useRouter();
  useEffect(() => {
    if (user?._id !== "" && user?.role !== "Freelancer") {
      router.push("/");
    }
  }, [user, router]);

  return user?.role === "Freelancer" ? children : null;
}
