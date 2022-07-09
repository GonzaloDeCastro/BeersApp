import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Beer } from "../pages/Beer";
import { BlackBeerPage } from "../pages/BlackBeerPage";
import { BlondBeerPage } from "../pages/BlondBeerPage";
import { SearchPage } from "../pages/SearchPage";

export const BeersRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="blondbeer" element={<BlondBeerPage />} />
          <Route path="blackbeer" element={<BlackBeerPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="beer" element={<Beer />} />

          <Route path="/" element={<Navigate to="/blondbeer" />} />
        </Routes>
      </div>
    </>
  );
};
