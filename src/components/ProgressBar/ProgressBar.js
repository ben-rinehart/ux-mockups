import PropTypes from "prop-types";
import React from "react";

import "./ProgressBar.css";

export default function Progress({
  progressID,
  progressTitle,
  progressType,
  progressWidth,
  progressLabel,
}) {
  const styleObj = {
    width: `${progressWidth}%`,
  };
  return (
    <div className="progress" id={progressID} title={progressTitle}>
      <div
        className={`progress-bar bg-${progressType}`}
        role="progressbar"
        style={styleObj}
        aria-valuenow={progressWidth}
      >
        {progressLabel}
      </div>
    </div>
  );
}

Progress.propTypes = {
  progressID: PropTypes.string,
  progressLabel: PropTypes.string,
  progressTitle: PropTypes.string,
  progressWidth: PropTypes.number,
  progressType: PropTypes.oneOf([
    "primary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ]),
};
