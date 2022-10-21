import React from "react";

const HeaderTeams = () => {
  return (
    <div className="flex w-full  space-x-[56px] mt-[48px] font-medium px-[24px] text-[#141414]">
      <div className="w-1/12">
        <input type="checkbox" className="w-[20px] h-[20px] rounded-[4px]" />
      </div>
      <div className="w-4/12">Teams</div>
      <div className="w-1/12">Sports </div>
      <div className="w-2/12">Last Updated</div>
      <div className="w-1/12">Players</div>
      <div className="w-2/12">Status</div>
      <div className="w-1/12">Edit</div>
    </div>
  );
};

export default HeaderTeams;
