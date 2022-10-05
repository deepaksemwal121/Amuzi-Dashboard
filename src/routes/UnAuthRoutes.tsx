import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnAuthLayout from "../core-ui/UnAuthLayout";
import Login from "../screens/Auth/Login";

const UnAuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnAuthLayout />} path="/">
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default UnAuthRoutes;
