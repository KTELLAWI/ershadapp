"use client";
import { useState } from "react";
import SidebarDashboard from "./SidebarDashboard";
import { FaBars } from "react-icons/fa";
import ProtectedRoutedMyDashboard from "./ProtectedRoutedDashboard";

export default function RootLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex gap-5 lg:pl-5  smml:px-5">
      <ProtectedRoutedMyDashboard>
        <div
          className="fixed left-7 top-5 lg:hidden cursor-pointer z-20"
          onClick={() => setOpenSidebar((e) => !e)}
        >
          <FaBars size={30} />
        </div>

        <SidebarDashboard openSidebar={openSidebar} />
        <div className="lg:w-[75%] w-full">{children}</div>
      </ProtectedRoutedMyDashboard>
    </div>
  );
}
