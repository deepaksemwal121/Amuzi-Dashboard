import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../core-ui/AuthLayout";
import Community from "../screens/ProtectedPages/Community/Community";
import CommunityDashboard from "../screens/ProtectedPages/Community/CommunityDashboard";
import ManagePlaylists from "../screens/ProtectedPages/ScreenController/ManagePlaylists";
import ScreenController from "../screens/ProtectedPages/ScreenController/ScreenController";
import CreateTeam from "../screens/ProtectedPages/Teams/CreateTeam";
import Teams from "../screens/ProtectedPages/Teams/Teams";
import TeamsDashboard from "../screens/ProtectedPages/Teams/TeamsDashboard";
import Tournaments from "../screens/ProtectedPages/Tournaments/Tournaments";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} path="/">
          <Route element={<Tournaments />} path="tournaments" />
          <Route element={<Teams />} path="teams">
            <Route element={<TeamsDashboard />} path="all" />
            <Route element={<CreateTeam />} path="createTeam" />
          </Route>
          <Route element={<Community />} path="community">
            <Route element={<CommunityDashboard />} path="all" />
          </Route>
          <Route element={<ScreenController />} path="screenController">
            <Route element={<ManagePlaylists />} path="managePlaylist" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
