import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogiPage } from "../auth/pages/LogiPage";
import { BeersRoutes } from "../beers/routes/BeersRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LogiPage />} />
        <Route path="/*" element={<BeersRoutes />} />
      </Routes>
    </>
  );
};
