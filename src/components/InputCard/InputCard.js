import PropTypes from "prop-types";
import React from "react";

export default function InputCard({
  children,
}) {
  return(
    <>
        {children}
    </>
  );
};

InputCard.propTypes = {
    children: PropTypes.element,
}

