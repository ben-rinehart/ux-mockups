import PropTypes from "prop-types";
import React from "react";
import "./Nav.css";

export default function Nav({
  navID,
  isNavTabs,
  isNavVertical,
  navClass,
  children,
}) {
  return (
    <nav
      id={navID}
      className={`nav
                ${isNavTabs ? "nav-tabs" : "nav-pills"}
                ${isNavVertical ? "flex-column" : ""}
                ${navClass}
            `}
    >
      {children}
    </nav>
  );
}

Nav.propTypes = {
  navID: PropTypes.string,
  isNavTabs: PropTypes.bool,
  isNavVertical: PropTypes.bool,
  navClass: PropTypes.string,
};
