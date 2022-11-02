import PropTypes from "prop-types";
import React from "react";

export default function Image({ imgSrc, imgAlt, imgID, imgClass }) {
  return <img src={imgSrc} alt={imgAlt} id={imgID} className={imgClass} />;
}

Image.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgID: PropTypes.string,
  imgClass: PropTypes.string,
};
