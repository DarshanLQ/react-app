import React from "react";
import "./sideBar.css";
import { NavLink } from "react-router-dom";

const SidebarContent = () => {
  const routes = {
    "/inventory_report": "Inventory Report",
    "/sale_report": "Sales Report",
    "/aging_report": "Aging Report",
    "/price_co-pilot": "Pricing Co-Pilot",
  };
  return (
    <>
      {Object.entries(routes).map(([k, v]) => (
        <NavLink to={k} style={{ textDecoration: "none" }}>
          <div className="side-nav-item">{v}</div>
        </NavLink>
      ))}
    </>
  );
};

export default SidebarContent;
