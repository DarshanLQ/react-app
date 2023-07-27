import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sideBar.css";
import SidebarContent from "./sidebarContent";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <aside style={{ height: "100%" }}>
      {/* Sidebar */}
      <motion.div
        className={`sidebar ${isVisible ? "visible" : ""}`}
        initial={{ x: isVisible ? 0 : -250 }}
        animate={{ x: isVisible ? 0 : -250 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        <motion.button
          className="toggle-button"
          onClick={toggleSidebar}
          initial={{ x: 0 }}
          animate={{ x: isVisible ? 0 : 30 }}
        >
          {isVisible ? "<" : ">"}
        </motion.button>

        {/* Sidebar content */}
        <SidebarContent />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
