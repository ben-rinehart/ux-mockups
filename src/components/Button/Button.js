import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export default function Button({
  btnID,
  children,
  btnStyle,
  btnType,
  btnSize,
  isFullWidth,
  isDropdown,
  hasDataBadge,
  dataBadgeStyle,
  btnData,
  btnClass,
  btnTitle,
  btnDisabled,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn 
                ${btnStyle} 
                ${btnSize} 
                ${isFullWidth ? "btn-block" : ""}
                ${isDropdown ? "dropdown-toggle" : ""}
                ${btnClass}
                ${hasDataBadge ? "csg-data-badge" : ""}
                ${dataBadgeStyle}
                `}
      type={btnType}
      id={btnID}
      title={btnTitle}
      disabled={btnDisabled ? btnDisabled : false}
      data-badge={btnData}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  btnID: PropTypes.string,
  btnStyle: PropTypes.oneOf([
    "btn-primary",
    "btn-secondary",
    "btn-danger",
    "btn-link",
    "btn-link text-danger",
  ]),
  btnType: PropTypes.oneOf(["button", "submit", "reset"]),
  btnSize: PropTypes.oneOf(["", "btn-sm", "btn-lg"]),
  isFullWidth: PropTypes.bool,
  isDropdown: PropTypes.bool,
  hasDataBadge: PropTypes.bool,
  dataBadgeStyle: PropTypes.oneOf([
      "csg-data-badge-dark",
      "csg-data-badge-primary",
      "csg-data-badge-secondary",
      "csg-data-badge-danger",
      "csg-data-badge-warning",
      "csg-data-badge-info",
      "csg-data-badge-success",
  ]),
  btnData: PropTypes.string,
  btnClass: PropTypes.string,
  btnTitle: PropTypes.string,
  btnDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
