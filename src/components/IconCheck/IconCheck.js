import PropTypes from "prop-types";
import React, { useState } from "react";
import Icon from "../Icon";

import "./IconCheck.css";

export default function IconCheck({
  checkID,
  dataTID,
  checkTitle,
  checkName,
  checkValue,
  checkSize,
  checkClass,
  checkIcon,
  hasIcon,
  children,
  isChecked,
  checkDisabled,
  onChange
}) {
  const [checkIsChecked, setIsChecked] = useState(isChecked);

  return (
      <label
        className={`btn 
          ${checkSize} ${checkIsChecked ? "btn-primary active" : "btn-outline-primary"} 
          ${checkDisabled ? "disabled" : ""} 
          ${checkClass}
        `}
        title={checkTitle}
      >
        <input
          type="checkbox"
          id={checkID}
          data-tid={dataTID}
          name={checkName}
          value={checkValue}
          onChange={() => {
            const newValue = !checkIsChecked;
            setIsChecked(newValue);

            if(onChange){
              onChange(newValue);
            }
          }}
          checked={isChecked}
          disabled={checkDisabled ? checkDisabled : false}
          className="d-none"
        />
        {hasIcon && (
          <span>
            <Icon
              iconStyle={`${checkIsChecked ? "fas" : "far"}`}
              iconName={checkIcon}
            />{" "}
          </span>
        )}
        {children}
      </label>
  );
}

IconCheck.propTypes = {
  checkID: PropTypes.string,
  dataTID: PropTypes.string,
  checkTitle: PropTypes.string,
  checkName: PropTypes.string,
  checkValue: PropTypes.string,
  checkSize: PropTypes.oneOf([
    "btn-sm",
    "btn-lg",
  ]),
  checkClass: PropTypes.string,
  checkIcon: PropTypes.string,
  hasIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  isChecked: PropTypes.bool,
  checkDisabled: PropTypes.bool,
  onChange: PropTypes.func
}