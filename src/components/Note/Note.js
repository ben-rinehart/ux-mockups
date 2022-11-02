import PropTypes from "prop-types";
import Icon from "../Icon";
import React from "react";

export default function Note({
  noteType,
  noteID,
  noteIcon,
  noteText,
  noteTitle,
}) {
  return (
    <span className={`text-${noteType}`} id={noteID} title={noteTitle}>
      <Icon iconStyle="fas" iconName={noteIcon} isFixedWidth={true} />{" "}
      {noteText}
    </span>
  );
}

Note.propTypes = {
  noteType: PropTypes.oneOf(["info", "success", "danger", "warning"]),
  noteID: PropTypes.string,
  noteTitle: PropTypes.string,
  noteIcon: PropTypes.oneOf([
    "fa-info-circle",
    "fa-check-circle",
    "fa-exclamation-triangle",
    "fa-exclamation-circle",
  ]),
  noteText: PropTypes.string,
};
