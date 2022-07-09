import React from "react";
import ReactDOM from "react-dom/client";
import { BeersApp } from "./BeersApp";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BeersApp />
  </React.StrictMode>
);
