import PropTypes from "prop-types";
import Icon from "../Icon";
import Card from "../Card";
import React from "react";

import "./Toast.css";

export default function Toast({
  toastID,
  toastType,
  toastIcon,
  toastHeader,
  children,
  isOpen,
}) {
  return (
    <Card cardClass={`toast fade border-top border-${toastType} ${isOpen ? "show" : ""}`} cardID={toastID}>
      <div className="d-flex align-items-center">
        <div className="pr-2"><Icon iconStyle="fas" iconName={toastIcon} iconSize="fa-2x" iconColor={`text-${toastType}`} isFixedWidth={true} /></div>
        <div className="px-1">
          <h5 className={`lead mb-0 text-${toastType}`}>{toastHeader}</h5>
          {children}
        </div>
      </div>
    </Card>
  );
}

Toast.propTypes = {
  toastType: PropTypes.oneOf(["info", "success", "danger", "warning"]),
  toastID: PropTypes.string,
  toastIcon: PropTypes.oneOf([
    "fa-info-circle",
    "fa-check-circle",
    "fa-exclamation-triangle",
    "fa-exclamation-circle",
  ]),
  toastHeader: PropTypes.string,
};
