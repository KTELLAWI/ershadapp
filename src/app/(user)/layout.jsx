"use client";
import { ToastContainer, toast } from "react-toastify";
import ProtectedRoutedAuth from "./ProtectedRoutedAuth";
export default function RootLayout({ children }) {
  return (
    <div>
      <ProtectedRoutedAuth>
        <ToastContainer position="top-center" />
        {children}
      </ProtectedRoutedAuth>
    </div>
  );
}
