import PropTypes from "prop-types";
import React from "react";

import "./Avatar.css";

export default function Avatar({
  avatarID,
  children,
  avatarTxtColor,
  avatarBgColor,
  avatarSize,
  avatarShape,
  avatarTitle,
  hasBorder,
  avatarBorderColor,
}) {
  return (
    <div
      className={`
        csg-avatar 
        ${avatarSize} 
        ${avatarShape} 
        ${avatarBgColor}
        ${avatarTxtColor}
        ${hasBorder ? "csg-avatar-border" : ""}
        ${avatarBorderColor}
      `}
      id={avatarID}
      title={avatarTitle}
    >
      {children}
    </div>
  );
}

Avatar.propTypes = {
  avatarID: PropTypes.string,
  avatarTxtColor: PropTypes.oneOf(["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-light", "text-dark", "text-body", "text-muted", "text-white", "text-black-50", "text-white-50"]),
  avatarBgColor: PropTypes.oneOf(["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark", "bg-white", "bg-transparent"]),
  avatarTitle: PropTypes.string,
  avatarSize: PropTypes.oneOf(["", "csg-avatar-sm", "csg-avatar-lg"]),
  avatarShape: PropTypes.oneOf(["", "rounded", "rounded-circle"]),
  hasBorder: PropTypes.bool,
  avatarBorderColor: PropTypes.oneOf(["","border-primary", "border-secondary", "border-success", "border-danger", "border-warning", "border-info", "border-light", "border-dark", "border-white"]),
};
