import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../../componant/UI/Navbar/Navbar";
import Footer from "../../componant/UI/Footer";
import { ContextProvider } from "../../context/simpleContext";
import StoreProvider from "./StoreProvider";
import { cookies } from "next/headers";
import ReactQueryProvider from "./ReactQueryProvider";
import "react-toastify/dist/ReactToastify.css";
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata = {
  title: "Ershad",
  description: "موقع توظيف وتقديم علي وظائف",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const token = cookies().get("jwtErshad")?.value || "";
  return (
    <html lang="en">
      <body className={cairo.className}>
        <StoreProvider token={token}>
          <ContextProvider>
            <Navbar />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Footer />
          </ContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
