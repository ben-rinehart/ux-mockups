import PropTypes from "prop-types";
import React from "react";
import "./ButtonGroup.css";

export default function ButtonGroup({
  btnGroupID,
  btnGroupLayout,
  btnGroupSize,
  children,
}) {
  return (
    <div
      id={btnGroupID}
      className={`${btnGroupLayout} ${btnGroupSize}`}
      role="group"
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  btnGroupID: PropTypes.string,
  btnGroupLayout: PropTypes.oneOf(["btn-group", "btn-group-vertical"]),
  btnGroupSize: PropTypes.oneOf(["", "btn-group-sm", "btn-group-lg"]),
};
