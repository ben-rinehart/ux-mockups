import PropTypes from "prop-types";
import React, { useState } from "react";
import Icon from "../Icon";

import "./IconRadio.css";

export default function IconRadio({
  radioID,
  dataTID,
  radioTitle,
  radioName,
  radioValue,
  radioSize,
  radioClass,
  radioIcon,
  hasIcon,
  children,
  isChecked,
  radioDisabled,
  onChange
}) {
  const [radioIsChecked, setIsChecked] = useState(isChecked);

  return (
      <label
        className={`btn 
          ${radioSize} ${radioIsChecked ? "btn-primary active" : "btn-outline-primary"} 
          ${radioDisabled ? "disabled" : ""} 
          ${radioClass}
        `}
        title={radioTitle}
        for={radioID}
      >
        <input
          type="radio"
          id={radioID}
          data-tid={dataTID}
          name={radioName}
          value={radioValue}
          onChange={() => {
            const newValue = !radioIsChecked;
            setIsChecked(newValue);

            if(onChange){
              onChange(newValue);
            }
          }}
          Checked={isChecked}
          disabled={radioDisabled ? radioDisabled : false}
          // className="d-none"
        />
        {hasIcon && (
          <span>
            <Icon
              iconStyle={`${radioIsChecked ? "fas" : "far"}`}
              iconName={radioIcon}
            />{" "}
          </span>
        )}
        {children}
      </label>
  );
}

IconRadio.propTypes = {
  radioID: PropTypes.string,
  dataTID: PropTypes.string,
  radioTitle: PropTypes.string,
  radioName: PropTypes.string,
  radioValue: PropTypes.string,
  radioSize: PropTypes.oneOf([
    "btn-sm",
    "btn-lg",
  ]),
  radioClass: PropTypes.string,
  radioIcon: PropTypes.string,
  hasIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  isChecked: PropTypes.bool,
  radioDisabled: PropTypes.bool,
  onChange: PropTypes.func
}