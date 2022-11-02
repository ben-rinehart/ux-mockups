import PropTypes from "prop-types";
import React from "react";

export default function Sidebar({ children, ...props }) {
  return (
    <div
      className={`sidebar 
                    ${props.sidebarType} 
                    ${props.isSidebarDark ? "sidebar-dark" : ""} 
                    ${props.isSidebarWide ? "sidebar-wide" : ""} 
                    ${props.isSidebarOpen ? "open" : ""}`}
    >
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  sidebarID: PropTypes.string,
  sidebarType: PropTypes.oneOf(["sidebar-left", "sidebar-right"]).isRequired,
  isSidebarWide: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  isSidebarDark: PropTypes.bool,
  options: PropTypes.array,
};
