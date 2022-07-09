import React from "react";
import ReactDOM from "react-dom/client";
import { BeersApp } from "./BeersApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BeersApp />
    </BrowserRouter>
  </React.StrictMode>
);
