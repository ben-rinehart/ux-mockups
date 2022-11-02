import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";

export default function LeadersItem({ leaderLabel, labelClass, hasLabelIcon, labelIconStyle, labelIcon, labelIconColor, leaderData, dataClass, hasDataIcon, dataIconStyle, dataIcon, dataIconColor }) {
  return (
    <li>
      <span className={labelClass}>
        {
          // Optional Icon
          hasLabelIcon && (
            <Icon
              iconStyle={labelIconStyle}
              iconName={labelIcon}
              iconColor={labelIconColor}
              isFixedWidth={true}
            />
          )
        }{" "}
        {leaderLabel}
      </span>
      <span className={dataClass}>
        {
          // Optional Icon
          hasDataIcon && (
            <Icon
              iconStyle={dataIconStyle}
              iconName={dataIcon}
              iconColor={dataIconColor}
              isFixedWidth={true}
            />
          )
        }{" "}
        {leaderData}</span>
    </li>
  );
}

LeadersItem.propTypes = {
  leaderLabel: PropTypes.string,
  labelClass: PropTypes.string,
  hasLabelIcon: PropTypes.bool,
  labelIconStyle: PropTypes.oneOf(["fas", "far", "fab"]),
  labelIcon: PropTypes.string,
  labelIconColor: PropTypes.oneOf([
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
  leaderData: PropTypes.string,
  dataClass: PropTypes.string,
  hasDataIcon: PropTypes.bool,
  dataIconStyle: PropTypes.oneOf(["fas", "far", "fab"]),
  dataIcon: PropTypes.string,
  dataIconColor: PropTypes.oneOf([
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
  ])
}