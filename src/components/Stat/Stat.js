import PropTypes from "prop-types";
import React from "react";

import "./Stat.css";

export default function Stat({
  statID,
  statTitle,
  statType,
  statData,
  statText,
  isSmall,
}) {
  return (
    <div className="text-center" id={statID} title={statTitle}>
      <span className={`
        ${isSmall ? "display-6" : "display-5"}
        text-${statType}`}>{statData}</span>
      <br />
      <span className={`
        ${isSmall ? "small" : ""}
        text-uppercase
        `}>{statText}</span>
    </div>
  );
}

Stat.propTypes = {
  statID: PropTypes.string,
  statTitle: PropTypes.string,
  statType: PropTypes.oneOf([
    "",
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ]),
  statData: PropTypes.string,
  statText: PropTypes.string,
};
