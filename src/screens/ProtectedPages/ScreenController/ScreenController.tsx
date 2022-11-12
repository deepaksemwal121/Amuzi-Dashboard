import React from "react";
import { MdAddToQueue, MdSubscriptions } from "react-icons/md";
import Utility from "../../../components/Utility";
import Pagination from "../../../core-ui/Pagination";
import AllScreensHeader from "./widgets/AllScreensHeader";

const ScreenController = () => {
  return (
    <div className="p-[32px] overflow-y-hidden">
      <div className=" flex justify-between items-center">
        <h2 className="text-[24px] font-[700] flex space-x-4 items-center">
          <MdSubscriptions size={26} />
          <span>Screen Manager</span>
        </h2>
        <div className="bg-[#246BFD] text-white flex p-3 rounded-[16px] drop-shadow text-[16px] font-[600] space-x-3 items-center">
          <MdAddToQueue size={20} /> <span>Create New Screen</span>
        </div>
      </div>
      <Utility />
      <div>
        <AllScreensHeader />
      </div>
      <Pagination />
    </div>
  );
};

export default ScreenController;
