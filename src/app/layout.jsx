// "use client";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../../componant/UI/Navbar/Navbar";
import ShaderBackground from "../../componant/UI/ShaderBackground";

import WhatsAppButton from "../../componant/Watsapp";
import Footer from "../../componant/UI/Footer";
import { ContextProvider } from "../../context/simpleContext";
import StoreProvider from "./StoreProvider";
import { cookies } from "next/headers";
import ReactQueryProvider from "./ReactQueryProvider";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/toaster"
// import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
// import * as reactSpring from '@react-spring/three'
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata = {
  title: "ارشاد للتوظيف",
  description: "موقع توظيف وتقديم علي وظائف",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const token = cookies().get("jwtErshad")?.value  || "";
  return (
    <html lang="en">
      <body className={cairo.className}>
        <StoreProvider token={token}>
          <ContextProvider>
         <ShaderBackground />

            <Navbar />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster />

            <WhatsAppButton />
            <Footer />
          </ContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
