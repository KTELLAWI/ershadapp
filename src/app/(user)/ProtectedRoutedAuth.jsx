import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutedAuth({ children }) {
  const user = useSelector((state) => state?.user);
  const router = useRouter();
  useEffect(() => {
    if (user?._id) {
      router.push("/");
    }
  }, [user]);

  return !user?._id ? children : null;
}
