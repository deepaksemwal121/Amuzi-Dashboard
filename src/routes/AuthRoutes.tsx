import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../core-ui/AuthLayout";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
