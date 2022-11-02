import PropTypes from "prop-types";
import React from "react";

import "./Header.css";

export default function Header({
  headerID,
  headerSize,
  headerClass,
  children,
}) {
  return (
    <div
      id={headerID}
      className={`
            ${headerSize}
            ${headerClass}
        `}
    >
      {children}
    </div>
  );
}

Header.propTypes = {
  headerID: PropTypes.string,
  headerSize: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  headerClass: PropTypes.string,
};
