import React from "react";
import PropTypes from "prop-types";
import "./Leaders.css";

export default function Leaders({ leadersID, leadersType, leadersClass, children }) {
  return (
    <ul id={leadersID} className={`leaders
      ${leadersType}
      ${leadersClass}
    `}>
      {children}
    </ul>
  )
}
Leaders.propTypes = {
 leadersID: PropTypes.string,
 leadersType: PropTypes.oneOf(['none', 'dotted', 'lined', 'striped']),
}