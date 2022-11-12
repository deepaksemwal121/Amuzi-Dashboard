import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full relative">
      <Sidebar />
      <div className="relative w-full h-screen bg-[#f1f5f8] ">
        <Topbar />
        <Outlet />
        <ToastContainer
          autoClose={1000}
          className="bg-gray-200 border-t-4 border-green-400 rounded m-3 w-1/4 p-4 absolute z-10 bottom-4 left-[70%]"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
