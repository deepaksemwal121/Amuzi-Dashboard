import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import icon from "../../../assets/tournament.png";

const TournamentInfoCard = () => {
  return (
    <div className="flex items-center w-full font-semibold  space-x-[56px] px-[24px] py-[22px] mt-[24px] bg-white shadow-sm rounded-[4px] text-[#141414]">
      <div className="w-1/12">
        <input type="checkbox" className="w-[20px] h-[20px] rounded-[4px]" />
      </div>
      <div className="w-3/12 font-medium flex items-center space-x-[24px]">
        <img src={icon} width={40} height={40} alt="tournament" />
        <p>Indian Futsal Championship</p>
      </div>
      <div className="w-1/12 text-[#A6A6A6]">Football </div>
      <div className="w-2/12 text-[#A6A6A6]">12-September-2022</div>
      <div className="w-2/12 text-[#A6A6A6]">04-October-2022</div>
      <div className="w-1/12 text-[#A6A6A6]">8 Teams</div>
      <div className="w-1/12 text-[#A6A6A6]">24 Matchs</div>
      <div className="w-1/12">
        <button className=" bg-[#4ADE80] text-white font-medium rounded-[25px] px-[24px] py-[8px]">
          Published
        </button>
      </div>
      <div className="w-auto">
        <MdMoreHoriz />
      </div>
    </div>
  );
};

export default TournamentInfoCard;
