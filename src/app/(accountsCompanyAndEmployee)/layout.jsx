"use client";
import { ToastContainer } from "react-toastify";
export default function RootLayout({ children }) {
  return (
    <div>
      <ToastContainer position="top-center" />
      {children}
    </div>
  );
}
