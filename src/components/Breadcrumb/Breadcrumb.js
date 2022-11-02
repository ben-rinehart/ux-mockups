import PropTypes from "prop-types";
import React from "react";
import "./Breadcrumb.css";

export default function Breadcrumb({
  breadcrumbID,
  breadcrumbClass,
  children,
}) {
  return (
    <nav aria-label="breadcrumb">
      <ul id={breadcrumbID} className={`breadcrumb ${breadcrumbClass}`}>
        {children}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  breadcrumbID: PropTypes.string,
  breadcrumbClass: PropTypes.string,
};
