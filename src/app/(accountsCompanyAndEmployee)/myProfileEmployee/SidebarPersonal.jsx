import React, { useContext, useState } from "react";
import Avatar from "../../../../componant/Avatar";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import { ContextSimple } from "../../../../context/simpleContext";
import Delete from "../../../../componant/BlocksBobab/Delete";
import { url } from "../../../../axios/axios";
export default function SidebarPersonal({ setDisplayBlock }) {
  const { setOpenDelete, openDelete } = useContext(ContextSimple);
  const user = useSelector((state) => state?.user);
  const [chooseTwo, setChooseTwo] = useState("");
  return (
    <div className="p-5 rounded-lg bg-bgPop">
      <div className="flex  items-center flex-col gap-3">
        <Avatar
          width={100}
          name={user?.name}
          imgUrl={`${url}/userImages/${user?.profilePicture}`}
          img={user?.profilePicture}
        />
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-oneTextHeader font-bold ">{user?.name}</h1>
          <p>{user?.jopTitle} </p>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="font-bold">الأعدادات العامة</h1>
        <ul className="flex flex-col gap-4 mt-5">
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("information")}
          >
            <FaUserEdit color="#EDC165EB" size={25} />
            <h4 className="font-semibold cursor-pointer">البيانات الشخصية </h4>
          </li>
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("security")}
          >
            <MdOutlineSecurity color="#61CE70" size={25} />
            <h4 className="font-semibold cursor-pointer"> الحماية والأمان</h4>
          </li>

          <li
            className="flex items-center gap-2"
            onClick={() => {
              setOpenDelete(true);
              setChooseTwo("delete");
            }}
          >
            <MdDelete color="#ED5A46" size={25} />
            <h4 className="font-semibold cursor-pointer"> حذف الحساب</h4>
          </li>
          <li
            className="flex items-center gap-2"
            onClick={() => {
              setOpenDelete(true);
              setChooseTwo("logout");
            }}
          >
            <MdLogout color="blue" size={21} />
            <h4 className="font-semibold cursor-pointer"> تسجيل الخروج</h4>
          </li>
        </ul>
      </div>
      {openDelete && chooseTwo === "delete" && (
        <Delete
          header={"حذف  الحساب"}
          text={"هل أنت متأكد من   رغبتك بحذف الحساب ؟!"}
          textButton={"حذف الحساب"}
          state={"deleteAccount"}
          api={ `/api/user/delete/${user?._id}` }
        />
      )}
      {openDelete && chooseTwo === "logout" && (
        <Delete
          header={"تسجيل الخروج"}
          text={"هل أنت متأكد من تسجيل الخروج ؟! "}
          textButton={"  تسجيل الخروج"}
          state={"logout"}
        />
      )}
    </div>
  );
}
