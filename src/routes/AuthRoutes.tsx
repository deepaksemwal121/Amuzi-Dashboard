import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../core-ui/AuthLayout";
import Tournaments from "../screens/ProtectedPages/Tournaments/Tournaments";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} path="/">
          <Route element={<Tournaments />} path="tournaments" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
