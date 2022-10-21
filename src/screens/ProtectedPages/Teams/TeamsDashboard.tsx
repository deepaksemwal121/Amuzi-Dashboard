import React from "react";
import Utility from "../../../components/Utility";
import Pagination from "../../../core-ui/Pagination";
import HeaderTeams from "./widgets/HeaderTeams";
import TeamsCard from "./widgets/TeamsCard";

const TeamsDashboard = () => {
  return (
    <div className="p-[32px] overflow-y-hidden">
      <h2 className="text-[24px] font-[700]">Teams</h2>
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
