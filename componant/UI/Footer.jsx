"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/ershadarabiclogow.png";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaSquareInstagram, FaWhatsapp, FaX, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
// import x from "../../public/images/x.svg"
import "./footer.css"
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`bg-NavbarBackground footer  px-4 py-4 ${pathname === "/chooseAccount" ||
      pathname === "/login" ||
      pathname === "/registerEmployee" ||
      pathname === "/registerCompany" ||
      pathname === "/forgetPassword" ||
      pathname.includes("/changePassword") ||
      pathname.includes("/dashboard") ||
      pathname === "/successChangePassword"
      ? "hidden"
      : ""
      }`}
    >

      {/* Waves (optional - can be positioned absolutely if needed) */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Two-column layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-[200px] items-start mt-2 border-b border-gray-700">

        {/* Column 1: Logo and Address */}
        <div className="flex flex-col gap-2">
          <Image src={logo} alt="logo" className="w-[50px] object-contain" />
          <p className="text-white text-sm leading-relaxed">
            نحن إرشاد للموارد البشرية متخصـــصـــون فی مجال التوظیف والتدریب
            والإرشاد المهنی، کما نتمیز بتقدیم الخدمات الممیزة عبر منصـتنا
            للشــرکات لمســاعدتهم على المواصلة والنمو فی سوق العمل
            الســـــــــعودي تماشیآ مع رؤية المملكة 2030
          </p>
         <p className="text-white text-sm leading-relaxed mt-1 text-right flex items-center justify-end gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
     className="h-8 w-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
  المملكة العربية السعودية - الخبر 31952 - ص.ب 32348 - حي الندية - طريق الملك عبدالعزيز 9199 - برج الشيخ، الطابق 21
</p>


        </div>

        {/* Column 2: Social Media */}
        <div className="flex flex-col gap-2 p-8">
          <h2 className="text-white font-bold text-lg">تابعنا</h2>
          <ul className="flex gap-5">
            <li>
              <a
                href="https://www.instagram.com/ershad_career?igsh=dnJyd2pvb29la2xu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaInstagram size={24} color="white" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ershadcareer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={24} color="white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ershad-co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      {/* <div className="mt-10 border-t border-gray-700 pt-4">
      <p className="text-center text-white text-sm">
        جميع الحقوق محفوظة ارشاد @2024
      </p>
    </div> */}
    </footer>
  );

  // return (

  //   <footer className={`bg-NavbarBackground footer  ${pathname === "/chooseAccount" ||
  //     pathname === "/login" ||
  //     pathname === "/registerEmployee" ||
  //     pathname === "/registerCompany" ||
  //     pathname === "/forgetPassword" ||
  //     pathname.includes("/changePassword") ||
  //     pathname.includes("/dashboard") ||
  //     pathname === "/successChangePassword"
  //     ? "hidden"
  //     : ""
  //     }`}
  //   >

  //     <div className="waves">
  //       <div className="wave" id="wave1"></div>
  //       <div className="wave" id="wave2"></div>
  //       <div className="wave" id="wave3"></div>
  //       <div className="wave" id="wave4"></div>
  //     </div>

  //           <Image src={logo} alt="logo" className="w-[150px] mt-0" />

  //          <p className="lg:w-[45%] text-white">
  //          نحن إرشاد للموارد البشرية متخصـــصـــون فی مجال التوظیف والتدریب
  //          والإرشاد المهنی، کما نتمیز بتقدیم الخدمات الممیزة عبر منصـتنا
  //          للشــرکات لمســاعدتهم على المواصلة والنمو فی سوق العمل
  //          الســـــــــعودي تماشیآ مع رؤية المملكة 2030
  //        </p>
  //        <ul className="social-icon ">
  //       <li className="social-icon__item">
  //         <a
  //           href="https://www.instagram.com/ershad_career?igsh=dnJyd2pvb29la2xu" // Replace with your Facebook profile link
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="flex items-center justify-center"
  //         >
  //           <FaInstagram size={24} color="white" />
  //         </a>
  //       </li>
  //       <li className="social-icon__item">
  //       <a
  //                 href="https://twitter.com/ershadcareer" // Replace with your Twitter (X) profile link
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <FaXTwitter size={24} color="white" />
  //                 {/* <img width={50} height={50} src={x}></img> */}

  //               </a>
  //       </li>
  //       <li className="social-icon__item">
  //       <a href="https://www.linkedin.com/company/ershad-co/" target="_blank" rel="noopener noreferrer">
  //                <FaLinkedinIn size={24} color="white" />
  //           </a>
  //       </li>
  //       <li className="social-icon__item">
  //         <a className="social-icon__link" href="#">
  //           {/* <IonIcon name="logo-instagram" /> */}
  //         </a>
  //       </li>
  //     </ul>
  //     <ul className="menu">
  //       <li className="menu__item">
  //         {/* <Link href="/">
  //         <a className="menu__link">Home</a>
  //       </Link> */}
  //       </li>
  //       <li className="menu__item">
  //         {/* <Link href="/about">
  //         <a className="menu__link">About</a>
  //       </Link> */}
  //       </li>
  //       <li className="menu__item">
  //         {/* <Link href="/services">
  //         <a className="menu__link">Services</a>
  //       </Link> */}
  //       </li>
  //       <li className="menu__item">
  //         {/* <Link href="/team">
  //         <a className="menu__link">Team</a>
  //       </Link> */}
  //       </li>
  //       <li className="menu__item">
  //         {/* <Link href="/contact">
  //         <a className="menu__link">Contact</a>
  //       </Link> */}
  //       </li>
  //     </ul>
  //     <p className="text-center text-white -mt-3 text-[0.8rem]">
  //          جميع الحقوق محفوظة ارشاد @2024
  //        </p>
  //   </footer>
  //   // <div
  //   //   className={`bg-NavbarBackground mt-20 pb-10 ${pathname === "/chooseAccount" ||
  //   //     pathname === "/login" ||
  //   //     pathname === "/registerEmployee" ||
  //   //     pathname === "/registerCompany" ||
  //   //     pathname === "/forgetPassword" ||
  //   //     pathname.includes("/changePassword") ||
  //   //     pathname.includes("/dashboard") ||
  //   //     pathname === "/successChangePassword"
  //   //     ? "hidden"
  //   //     : ""
  //   //     }`}
  //   // >
  //   //   <div className="w-[90%] mx-auto flex flex-col gap-5">
  //   //     <div>
  //   //       <Image src={logo} alt="logo" className="w-[100px]" />
  //   //     </div>

  //   //     <p className="lg:w-[45%] text-white">
  //   //       نحن إرشاد للموارد البشرية متخصـــصـــون فی مجال التوظیف والتدریب
  //   //       والإرشاد المهنی، کما نتمیز بتقدیم الخدمات الممیزة عبر منصـتنا
  //   //       للشــرکات لمســاعدتهم على المواصلة والنمو فی سوق العمل
  //   //       الســـــــــعودي تماشیآ مع رؤية المملكة 2030
  //   //     </p>
  //   //     <div className="flex lg:flex-row flex-col gap-5 justify-between lg:items-center text-white mt-10">
  //   //       {/* <div className="flex flex-col lg:w-[45%] gap-2">
  //   //         <h1 className="font-bold">روابط الوصول السريع</h1>
  //   //         <ul className="flex justify-between items-center smm:text-[0.7rem] lg:text-[1rem]">
  //   //           {" "}
  //   //           <li>الصفحة الرئيسية</li>
  //   //           <li> تعرف علينا</li>
  //   //           <li>خدماتنا </li>
  //   //           <li> عروض العمل</li>
  //   //           <li> المتاحين للعمل</li>
  //   //         </ul>
  //   //       </div> */}
  //   //       <div className="lg:w-[40%] flex flex-col  gap-2">
  //   //         <h1 className="font-bold"> تابعنا</h1>
  //   //         <ul className="flex gap-3">
  //   //           <li className=" h-fit p-1 rounded-md cursor-pointer">
  //   //             <a
  //   //               href="https://twitter.com/ershadcareer" // Replace with your Twitter (X) profile link
  //   //               target="_blank"
  //   //               rel="noopener noreferrer"
  //   //             >
  //   //               <FaXTwitter size={24} color="white" />
  //   //               {/* <img width={50} height={50} src={x}></img> */}

  //   //             </a>
  //   //           </li>
  //   //           <li className="cursor-pointer">
  //   //             <a href="https://www.linkedin.com/company/ershad-co/" target="_blank" rel="noopener noreferrer">
  //   //               <FaLinkedinIn size={24} color="white" />
  //   //             </a>
  //   //           </li>
  //   //           <li className=" h-fit p-[4px] rounded-full">
  //   //             <a
  //   //               href="https://www.instagram.com/ershad_career?igsh=dnJyd2pvb29la2xu" // Replace with your Facebook profile link
  //   //               target="_blank"
  //   //               rel="noopener noreferrer"
  //   //               className="flex items-center justify-center"
  //   //             >
  //   //               <FaInstagram size={24} color="white" />
  //   //             </a>
  //   //           </li>

  //   //         </ul>
  //   //       </div>
  //   //     </div>
  //   //     <div className="mt-10 w-full h-[1px] bg-gray-700"></div>
  //   //     <p className="text-center text-white -mt-3 text-[0.8rem]">
  //   //       جميع الحقوق محفوظة ارشاد @2024
  //   //     </p>
  //   //   </div>
  //   // </div>
  // );
}

