import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import icon from "../../../../assets/team.png";

interface CommunityCardType {
  name: string;
  category: string;
  image: string;
  approvalStatus: boolean | null;
}

const CommunityCard = ({
  name,
  category,
  image,
  approvalStatus,
}: CommunityCardType) => {
  return (
    <div className="flex items-center w-full font-semibold  space-x-[56px] px-[24px] py-[22px] mt-[24px] bg-white shadow-sm rounded-[4px] text-[#141414]">
      <div className="w-1/12">
        <input type="checkbox" className="w-[20px] h-[20px] rounded-[4px]" />
      </div>
      <div className="w-4/12 font-medium flex items-center space-x-[24px]">
        <img
          src={image}
          className=" w-[50px] h-[50px] rounded-full object-cover"
          alt="tournament"
        />
        <p>{name}</p>
      </div>
      <div className="w-1/12 text-[#A6A6A6]">{category} </div>
      <div className="w-1/12 text-[#A6A6A6]">16 Members</div>
      <div className="w-2/12 text-[#A6A6A6]">10-Oct-2022</div>
      <div className="w-2/12 text-[#A6A6A6]">08-Oct-2022</div>
      <div className="w-2/12">
        <button
          className={`${
            approvalStatus
              ? "bg-[#4ADE80]"
              : approvalStatus === null
              ? "bg-yellow-300"
              : "bg-red-500 "
          } text-white font-medium rounded-[25px] px-[24px] py-[8px]`}
        >
          {approvalStatus
            ? "Published"
            : approvalStatus === null
            ? "Pending"
            : "Disapproved"}
        </button>
      </div>
      <div className="w-1/12">
        <MdMoreHoriz />
      </div>
    </div>
  );
};

export default CommunityCard;
