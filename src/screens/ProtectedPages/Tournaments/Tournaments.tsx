import React from "react";
import Utility from "../../../components/Utility";
import Header from "./Header";
import "./tournament.css";
import TournamentInfoCard from "./TournamentInfoCard";

const Tournaments = () => {
  return (
    <div className="p-[32px] overflow-y-hidden">
      <h2 className="text-[24px] font-[700]">Tournaments</h2>
      <Utility />
      <Header />
      <div className="space-y-[12px]">
        <TournamentInfoCard />
        <TournamentInfoCard />
      </div>
    </div>
  );
};

export default Tournaments;
