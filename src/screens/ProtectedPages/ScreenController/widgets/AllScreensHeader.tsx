import React from "react";

const AllScreensHeader = () => {
  return (
    <div className="flex w-full  space-x-[56px] mt-[48px] font-medium px-[24px] text-[#141414]">
      <div className="w-1/12"></div>
      <div className="w-4/12">Screen Name</div>
      <div className="w-2/12">Color Scheme</div>
      <div className="w-2/12">Playlist Count</div>
      <div className="w-2/12">Status</div>
      <div className="w-2/12">Edit</div>
    </div>
  );
};

export default AllScreensHeader;
