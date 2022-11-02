import PropTypes from "prop-types";
import React from "react";
import "./Badge.css";

export default function Badge({
  badgeType,
  isBadgeRound,
  badgeClass,
  badgeTitle,
  children,
}) {
  return (
    <span
      className={`
            badge
            ${isBadgeRound ? "badge-pill" : ""}
            ${badgeType} 
            ${badgeClass}`}
      title={badgeTitle}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  badgeText: PropTypes.string,
  badgeTitle: PropTypes.string,
  badgeType: PropTypes.oneOf([
    "badge-primary",
    "badge-secondary",
    "badge-success",
    "badge-danger",
    "badge-warning",
    "badge-info",
    "badge-light",
    "badge-dark",
  ]),
  isBadgeRound: PropTypes.bool,
  badgeClass: PropTypes.string,
};
