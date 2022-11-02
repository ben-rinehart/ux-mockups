import PropTypes from "prop-types";
import Icon from "../Icon";
import React from "react";
import "./Rating.css";

export default function Rating({
  ratingID,
  ratingTitle,
  ratingClass,
  ratingLabel,
  ratingMax,
  ratingValue,
  ratingIconStyle,
  ratingIcon,
  ratingHalfIconStyle,
  ratingHalfIcon,
  ratingEmptyIconStyle,
  ratingEmptyIcon,
  ratingColor,
  ratingSecondaryColor,
}) {
  let ratingItems = [];

  for (let i = 0; i < ratingValue; i++) {
    if (i < ratingValue && i + 1 > ratingValue) {
      ratingItems.push(
        <Icon
          iconStyle={ratingHalfIconStyle}
          iconName={`${ratingHalfIcon}`}
          iconColor={ratingColor}
          key={i}
        />
      );
    } else if (i < ratingValue) {
      ratingItems.push(
        <Icon
          iconStyle={ratingIconStyle}
          iconName={ratingIcon}
          iconColor={ratingColor}
          key={i}
        />
      );
    }
  }
  for (let k = ratingValue + 0.5; k < ratingMax; k++) {
    ratingItems.push(
      <Icon
        iconStyle={ratingEmptyIconStyle}
        iconName={ratingEmptyIcon}
        iconColor={ratingSecondaryColor}
        key={k}
      />
    );
  }
  return (
    <div id={ratingID} title={ratingTitle} className={ratingClass}>
      <span className="rating-text">{ratingLabel}</span>
      {ratingItems}
    </div>
  );
}

Rating.propTypes = {
  ratingID: PropTypes.string,
  ratingTitle: PropTypes.string,
  ratingClass: PropTypes.string,
  ratingLabel: PropTypes.string,
  ratingMax: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
  ratingIconStyle: PropTypes.string.isRequired,
  ratingIcon: PropTypes.string.isRequired,
  ratingHalfIconStyle: PropTypes.string.isRequired,
  ratingHalfIcon: PropTypes.string.isRequired,
  ratingEmptyIconStyle: PropTypes.string.isRequired,
  ratingEmptyIcon: PropTypes.string.isRequired,
  ratingColor: PropTypes.oneOf([
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light",
    "text-dark",
    "text-body",
    "text-muted",
    "text-white",
    "text-black-50",
    "text-white-50",
  ]),
  ratingSecondaryColor: PropTypes.oneOf([
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light",
    "text-dark",
    "text-body",
    "text-muted",
    "text-white",
    "text-black-50",
    "text-white-50",
  ]),
};
