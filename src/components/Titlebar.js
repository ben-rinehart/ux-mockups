import PropTypes from "prop-types";
import React from "react";

export default function Titlebar({ children }) {
  return (
    <div className="titlebar-container">
      <div className="titlebar titlebar-default d-flex d-print-none">
        {children}
      </div>
    </div>
  );
}

Titlebar.propTypes = {
  sidebarToggleID: PropTypes.string,
  sidebarToggleType: PropTypes.string,
  sidebarToggleTitle: PropTypes.string,
  sidebarToggleDisabled: PropTypes.bool,
  sidebarToggleOnClick: PropTypes.func,
  dropdownText: PropTypes.string,
  dropdownOptions: PropTypes.array,
  options: PropTypes.array,
};
