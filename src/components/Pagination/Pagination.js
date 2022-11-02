import PropTypes from "prop-types";
import React from "react";
import "./Pagination.css";

export default function Pagination({
  paginationID,
  paginationClass,
  children,
}) {
  return (
    <nav aria-label="pagination">
      <ul id={paginationID} className={`pagination ${paginationClass}`}>
        {children}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  paginationID: PropTypes.string,
  paginationClass: PropTypes.string,
};
