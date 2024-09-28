"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import { setToken, setUser } from "@/redux/features/userSlice";
import { jwtDecode } from "jwt-decode";
export default function StoreProvider({ children, token }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded?.exp > currentTime) {
        storeRef.current.dispatch(setToken(token));
        const informUser = localStorage.getItem("informUser");
        if (informUser) {
          storeRef.current.dispatch(setUser(JSON.parse(informUser)));
        }
      } else {
        localStorage.removeItem("informUser");
      }
    } else {
      localStorage.removeItem("informUser");
    }
  }, [token]);
  return <Provider store={storeRef.current}>{children}</Provider>;
}
