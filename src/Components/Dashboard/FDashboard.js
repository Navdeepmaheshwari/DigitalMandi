import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fdashboard.css";
export const FDashboard = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="main_div">
      <div className="dashboard_main">
        <div id="one">
          <Link
            className={`Link ${
              location.pathname === "/addcrop" ? "active" : " "
            }`}
            to="/addcrop"
          >
            Add Crop
          </Link>
        </div>
        <div id="two">
          {" "}
          <Link className={`Link ${
              location.pathname === "/current" ? "active" : " "
            }`} to="/current">
            Current{" "}
          </Link>{" "}
        </div>
        <div id="three">
          {" "}
          <Link className={`Link ${
              location.pathname === "/fdashboard" ? "active" : " "
            }`} to="/fdashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};
