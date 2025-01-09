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
  const local = token || (typeof window !== "undefined" && window.localStorage.getItem("token")) || "";
  useEffect(() => {
    console.log("Token on refresh:", token);

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
      const token2 = localStorage.getItem("token");
      if (token2) {
        const decoded = jwtDecode(token2);

        const currentTime = Date.now() / 1000;
      if (decoded?.exp > currentTime) {
        storeRef.current.dispatch(setToken(token2));
        const informUser = localStorage.getItem("informUser");
        if (informUser) {
          storeRef.current.dispatch(setUser(JSON.parse(informUser)));
        }
      } else {
       localStorage.removeItem("informUser");
      }
        
      } else {
        console.error("Invalid or missing token:", token2);
         localStorage.removeItem("informUser");
      }
      

      // const informUser = localStorage.getItem("informUser");
      // if (informUser) {
      //   storeRef.current.dispatch(setUser(JSON.parse(informUser)));
      // }
   
    }
  }, [token,local]);
  return <Provider store={storeRef.current}>{children}</Provider>;
}
