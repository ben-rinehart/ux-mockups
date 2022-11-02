import PropTypes from "prop-types";
import React from "react";

import "./Checkbox.css";

export default function Checkbox({
  isInline,
  checkboxClass,
  checkboxLabel,
  isInputInvalid,
  isCheckboxRequired,
  isCheckboxReadOnly,
  checkboxID,
  checkboxName,
  checkboxValue,
  checkboxTitle,
  checkboxDisabled,
  onChange,
  isChecked
}) {
  return (
    <div
      className={`form-check ${isInline ? "form-check-inline" : ""} ${checkboxClass}`}
      title={checkboxTitle}
    >
      <input
        className={`form-check-input ${
          isInputInvalid ? "is-invalid" : "valid"
        }`}
        type="checkbox"
        id={checkboxID}
        name={checkboxName}
        value={checkboxValue}
        required={isCheckboxRequired}
        readOnly={isCheckboxReadOnly}
        disabled={checkboxDisabled ? checkboxDisabled : false}
        onChange={onChange}
        checked={isChecked}
      />
      <label className="form-check-label" htmlFor={checkboxID}>
        {checkboxLabel}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  isInline: PropTypes.bool,
  checkboxLabel: PropTypes.string,
  checkboxID: PropTypes.string,
  checkboxName: PropTypes.string,
  checkboxValue: PropTypes.string,
  checkboxTitle: PropTypes.string,
  checkboxDisabled: PropTypes.bool,
  isInputInvalid: PropTypes.bool,
  isCheckboxRequired: PropTypes.bool,
  isCheckboxReadOnly: PropTypes.bool,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};
