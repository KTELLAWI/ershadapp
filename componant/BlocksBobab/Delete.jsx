import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { ContextSimple } from "../../context/simpleContext";
import LoadingButton from "../Buttons/LoadingButton";
import { request } from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/redux/features/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
export default function Delete({
  header,
  text,
  textButton,
  state,
  api,
  keyFunction,
  page,
}) {
  const { setOpenDelete, setUserCurrentId, userCurrentId } =
    useContext(ContextSimple);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const pathname = usePathname();
  async function handleLogout() {
    setLoading(true);
    await request
      .post("/api/user/logout")
      .then((result) => {
        if (result?.data?.message === "Logged out successfully") {
          dispatch(setLogout());
          localStorage.removeItem("informUser");
          setOpenDelete(false);
          router.replace("/");
        }
      })
      .catch((error) => alert(error?.response?.message))
      .finally(() => setLoading(false));
  }

  // handleDelete
  async function handleDelete() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        if (result?.data?.message === "User deleted successfully") {
          dispatch(setLogout());
          localStorage.removeItem("informUser");
          router.replace("/");
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }
  // handleDeleteAdmin
  async function handleDeleteAdmin() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        if (result?.data?.message === "User deleted successfully") {
          queryClient.setQueryData([keyFunction, page], (oldData) => {
            const newData = oldData?.data?.data.filter(
              (company) => company._id !== userCurrentId
            );
            return {
              ...oldData,
              data: { ...oldData.data, data: newData },
            };
          });
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }
  // handle Delete jop Admin
  async function handleDeleteJopAdmin() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "Job deleted successfully") {
          queryClient.setQueryData([keyFunction, page], (oldData) => {
            const newData = oldData?.data?.data.filter(
              (jop) => jop._id !== userCurrentId
            );
            return {
              ...oldData,
              data: { ...oldData.data, data: newData },
            };
          });
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }
  // handle deleteOneMyApplay
  async function handledeleteOneMyApplay() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        if (result?.data?.message === "Application deleted successfully") {
          queryClient.setQueryData(
            [keyFunction, page, user?._id],
            (oldData) => {
              const newData = oldData?.data?.data.filter(
                (jop) => jop._id !== userCurrentId
              );
              return {
                ...oldData,
                data: { ...oldData.data, data: newData },
              };
            }
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }
  // handle DeleteOneApplayDash
  async function handleDeleteOneApplayDash() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "Application deleted successfully") {
          queryClient.setQueryData([keyFunction, page], (oldData) => {
            const newData = oldData?.data?.data?.map((e) => {
              return {
                ...e,
                applications: e?.applications?.filter(
                  (jop) => jop._id !== userCurrentId
                ),
              };
            });
            return {
              ...oldData,
              data: { ...oldData.data, data: newData },
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }
  // handle DeleteOpenWorkDashboard
  async function handleDeleteOpenWorkDashboard() {
    setLoading(true);
    await request
      .delete(api)
      .then((result) => {
        console.log(result);
        if (result?.data?.message === "Join request deleted successfully") {
          queryClient.setQueryData(keyFunction, (oldData) => {
            const newData = oldData?.data?.data.filter(
              (user) => user._id !== userCurrentId
            );
            return {
              ...oldData,
              data: { ...oldData.data, data: newData },
            };
          });
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.error);
      })
      .finally(() => setOpenDelete(false));
    setLoading(false);
  }

  return (
    <div className=" fixed  top-0 left-0 w-full flex justify-center items-center h-screen bg-bgwhite z-10">
      <div className="flex flex-col items-center p-3  gap-3 sm:w-[50%] lg:w-[35%] w-[90%] bg-white rounded-lg z-20">
        {header === "تسجيل الخروج" ? (
          <MdLogout color={"#ED5A46"} size={60} />
        ) : (
          <MdDelete color={"#ED5A46"} size={60} />
        )}

        <h1 className="text-NavbarBackground font-bold"> {header}</h1>
        <p className="text-textFilter"> {text} </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            className="py-2 px-5 text-white bg-green rounded-md"
            onClick={() => {
              setUserCurrentId(null);
              setOpenDelete(false);
            }}
          >
            رجوع
          </button>
          <button
            className="py-2 px-5 text-white bg-red rounded-md"
            onClick={
              state === "deleteAccount"
                ? handleDelete
                : state === "logout"
                ? handleLogout
                : state === "deleteAccountAdmin"
                ? handleDeleteAdmin
                : state === "deleteOfferWorkAdmin"
                ? handleDeleteJopAdmin
                : state === "deleteOneMyApplay"
                ? handledeleteOneMyApplay
                : state === "deleteOneApplayDash"
                ? handleDeleteOneApplayDash
                : state === "deleteOpenWorkDashboard"
                ? handleDeleteOpenWorkDashboard
                : state === "deleteOfferWork"
                ? handleDeleteJopAdmin
                : ""
            }
          >
            {loading ? <LoadingButton /> : textButton}
          </button>
        </div>
      </div>
    </div>
  );
}
