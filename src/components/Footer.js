import PropTypes from "prop-types";
import React from "react";

export default function Footer({ isFooterFixed, children }) {
  return (
    <footer
      className={`d-print-none 
                ${isFooterFixed ? "fixed" : ""} 
                `}
    >
      {children}
    </footer>
  );
}

Footer.propTypes = {
  isFooterFixed: PropTypes.bool,
};
