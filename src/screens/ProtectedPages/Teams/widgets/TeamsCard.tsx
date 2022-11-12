import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import icon from "../../../../assets/team.png";

const TeamsCard = () => {
  return (
    <div className="flex items-center w-full font-semibold  space-x-[56px] px-[24px] py-[22px] mt-[24px] bg-white shadow-sm rounded-[4px] text-[#141414]">
      <div className="w-1/12">
        <input type="checkbox" className="w-[20px] h-[20px] rounded-[4px]" />
      </div>
      <div className="w-4/12 font-medium flex items-center space-x-[24px]">
        <img
          src={icon}
          className="w-[50px] h-[50px] rounded-full object-cover"
          alt="tournament"
        />
        <p>Real Kashmir FC</p>
      </div>
      <div className="w-1/12 text-[#A6A6A6]">Football </div>
      <div className="w-2/12 text-[#A6A6A6]">10-Oct-2022</div>
      <div className="w-1/12 text-[#A6A6A6]">16 Players</div>
      <div className="w-2/12">
        <button className=" bg-[#4ADE80] text-white font-medium rounded-[25px] px-[24px] py-[8px]">
          Published
        </button>
      </div>
      <div className="w-1/12">
        <MdMoreHoriz />
      </div>
    </div>
  );
};

export default TeamsCard;
