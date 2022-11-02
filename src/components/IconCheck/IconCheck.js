import PropTypes from "prop-types";
import React, {useState} from "react";
import Icon from "../Icon";

import "./IconCheck.css";

export default function IconCheck({
  checkID,
  checkName,
  checkValue,
  checkSize,
  checkClass,
  checkIcon,
  hasIcon,
  children,
  isChecked,
  checkDisabled,
}) {

  const [checkIsChecked, setIsChecked] = useState(isChecked);

  return(
    <span className="btn-group-toggle" data-toggle="buttons">
      <label className={`btn btn-outline-primary ${checkSize} ${checkIsChecked ? "active" : ""} ${checkDisabled ? "disabled" : ""} ${checkClass}`}>
        <input
          type="checkbox"
          id={checkID}
          name={checkName}
          value={checkValue}
          onChange={() => setIsChecked((prev) => !prev)}
          checked={isChecked}
          disabled={checkDisabled ? checkDisabled : false}
        />
        {
          hasIcon && (
            <span><Icon iconStyle={`${checkIsChecked ? "fas" : "far"}`} iconName={checkIcon} /> </span>
          )
        }
        {children}
      </label>
    </span>
  )
}