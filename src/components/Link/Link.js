import PropTypes from "prop-types";
import React from "react";

export default function Link({
  linkHref,
  linkType,
  isActive,
  linkClass,
  onClick,
  linkTitle,
  hasDataBadge,
  isDropdown,
  dataBadgeStyle,
  linkData,
  children,
}) {
  return (
    <a
      href={linkHref}
      className={`
                ${linkType} 
                ${isActive ? "active" : ""}
                ${linkClass}
                ${hasDataBadge ? "csg-data-badge" : ""}
                ${isDropdown ? "dropdown-toggle" : ""}
                ${dataBadgeStyle}
                `}
      onClick={onClick}
      title={linkTitle}
      data-badge={linkData}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  linkHref: PropTypes.string,
  linkType: PropTypes.string,
  linkClass: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  linkTitle: PropTypes.string,
  hasDataBadge: PropTypes.bool,
  isDropdown: PropTypes.bool,
  dataBadgeStyle: PropTypes.oneOf([
      "csg-data-badge-dark",
      "csg-data-badge-primary",
      "csg-data-badge-secondary",
      "csg-data-badge-danger",
      "csg-data-badge-warning",
      "csg-data-badge-info",
      "csg-data-badge-success",
  ]),
  linkData: PropTypes.string,
};
