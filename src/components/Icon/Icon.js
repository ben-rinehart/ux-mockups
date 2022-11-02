import PropTypes from "prop-types";
import React from "react";
import "../../static/fonts/font-awesome-6/css/all.css";

export default function Icon({
  iconID,
  iconStyle,
  iconName,
  iconColor,
  iconSize,
  isFixedWidth,
  iconClass,
}) {
  return (
    <i
      id={iconID}
      className={`
                ${iconStyle}
                ${iconName}
                ${iconColor}
                ${iconSize}
                ${isFixedWidth ? "fa-fw" : ""}
                ${iconClass}
        `}
    />
  );
}

Icon.propTypes = {
  iconID: PropTypes.string,
  iconStyle: PropTypes.oneOf(["fas", "far", "fab"]).isRequired,
  iconName: PropTypes.string,
  iconColor: PropTypes.oneOf([
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light",
    "text-dark",
    "text-body",
    "text-muted",
    "text-white",
    "text-black-50",
    "text-white-50",
  ]),
  iconSize: PropTypes.oneOf([
    "fa-xs",
    "fa-sm",
    "fa-lg",
    "fa-2x",
    "fa-3x",
    "fa-5x",
    "fa-7x",
    "fa-10x",
  ]),
  isFixedWidth: PropTypes.bool,
  iconClass: PropTypes.string,
};
