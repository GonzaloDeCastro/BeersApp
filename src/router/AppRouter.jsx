import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LogiPage } from "../auth/pages/LogiPage";
import { BlackBeerPage } from "../beers/pages/BlackBeerPage";
import { BlondBeerPage } from "../beers/pages/BlondBeerPage";

export const AppRouter = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="blondbeer" element={<BlondBeerPage />} />
        <Route path="blackbeer" element={<BlackBeerPage />} />

        <Route path="login" element={<LogiPage />} />

        <Route path="/" element={<Navigate to="/blondbeer" />} />
      </Routes>
    </>
  );
};
