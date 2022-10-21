import React from "react";
import Utility from "../../../components/Utility";
import HeaderTeams from "./widgets/HeaderTeams";
import TeamsCard from "./widgets/TeamsCard";
import "./teams.module.css";
import { Outlet } from "react-router-dom";

const Teams = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Teams;
