import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full relative">
      <Sidebar />
      <div className="relative w-full h-screen bg-[#f1f5f8] overflow-y-hidden">
        <Topbar />
        <Outlet />
        <Pagination />
      </div>
    </div>
  );
};

export default AuthLayout;
