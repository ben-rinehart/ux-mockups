import PropTypes from "prop-types";
import React from "react";
import "./Scrollbox.css";

export default function Scrollbox({ children, scrollboxHeight }) {
  return (
    <div className={`
      overflow-auto
      ${scrollboxHeight}
    `}>
      {children}
    </div>
  );
}

Scrollbox.propTypes = {
  scrollboxHeight: PropTypes.oneOf([
    "csg-scrollbox-sm",
    "csg-scrollbox-md",
    "csg-scrollbox-lg",
    "csg-scrollbox-xl",
  ]),
};
