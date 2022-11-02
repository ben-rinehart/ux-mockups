import PropTypes from "prop-types";
import React from "react";

import "./Spinner.css";

export default function Spinner({
  spinnerID,
  spinnerTitle,
  isSmall,
}) {
  return (
    <div className={`loading ${isSmall ? "loading-sm" : ""}`} id={spinnerID} title={spinnerTitle}></div>
  );
}

Spinner.propTypes = {
  spinnerID: PropTypes.string,
  spinnerTitle: PropTypes.string,
  isSmall: PropTypes.bool,
};
