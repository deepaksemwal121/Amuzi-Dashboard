import axios from "axios";
import React, { useState } from "react";
import { MdEdit, MdEditNote, MdOutlineDragIndicator } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../../../../components/ToggleButton";

interface ScreenType {
  screenName: string;
  icon: string;
  playlistCount: string[];
  status: boolean;
  colorScheme: string;
  screenId: string;
}

const ScreenCard = ({
  screenId,
  screenName,
  icon,
  playlistCount,
  status,
  colorScheme,
}: ScreenType) => {
  const [live, setLive] = useState(status);
  const navigate = useNavigate();

  const changeLiveStatus = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/v1/screen/set-live",
        {
          screenId,
          live: !live,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
            "Content-Type": "application/json",
          },
        },
      );
      setLive(!live);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      draggable
      className="flex cursor-move items-center w-full font-semibold  space-x-[56px] px-[24px] py-[22px] mt-[10px] bg-white shadow-sm rounded-[4px] text-[#141414]"
    >
      <div className="w-1/12">
        <MdOutlineDragIndicator />
      </div>
      <div className="w-4/12 font-medium flex items-center space-x-[24px]">
        <img
          style={{ background: colorScheme }}
          src={icon}
          className="w-[50px] h-[50px] p-1 border-black border-[2px] rounded-full object-cover"
          alt="tournament"
        />
        <p>{screenName}</p>
      </div>
      <div className={`w-2/12  `}>
        <div
          style={{ background: colorScheme }}
          className={`w-24 h-8 border-black border-[2px] rounded-full p-2 uppercase  text-center`}
        ></div>
      </div>
      <div className="w-2/12 text-[#A6A6A6]">{playlistCount.length}</div>
      <div className="w-2/12 flex justify-start">
        <ToggleButton checked={live} onChange={changeLiveStatus} />
      </div>
      <div
        className="w-2/12 cursor-pointer"
        onClick={() => navigate(`managePlaylist/${screenId}`)}
      >
        <MdEdit />
      </div>
    </div>
  );
};

export default ScreenCard;
