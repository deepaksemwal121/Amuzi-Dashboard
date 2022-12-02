import React from "react";
import { MdBadge } from "react-icons/md";
import Modal from "../../../components/Modal";
import Utility from "../../../components/Utility";
import Pagination from "../../../core-ui/Pagination";
import HeaderTeams from "./widgets/HeaderTeams";
import RegisterTeam from "./widgets/RegisterTeam";
import TeamsCard from "./widgets/TeamsCard";

const TeamsDashboard = () => {
  return (
    <div className="p-[32px] overflow-y-hidden">
      <div className=" flex justify-between items-center">
        <h2 className="text-[24px] font-[700] flex space-x-4 items-center">
          <MdBadge size={26} />
          <span>Teams</span>
        </h2>
        <Modal
          title="Create Team"
          headTitle="Register New Team"
          component={<RegisterTeam />}
        />
        {/* <div className="bg-[#246BFD] text-white flex p-3 rounded-[16px] drop-shadow text-[16px] font-[600] space-x-3 items-center">
          <MdAddToQueue size={20} /> <span>Create New Screen</span>
        </div> */}
      </div>
      <Utility />
      <HeaderTeams />
      <div className="space-y-[12px]">
        <TeamsCard />
        <TeamsCard />
        <TeamsCard />
      </div>
      <Pagination />
    </div>
  );
};

export default TeamsDashboard;
