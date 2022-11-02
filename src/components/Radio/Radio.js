import PropTypes from "prop-types";
import React from "react";

import "./Radio.css";

export default function Radio({
  isInline,
  radioClass,
  radioLabel,
  radioID,
  radioName,
  radioValue,
  isInputInvalid,
  isRadioRequired,
  isRadioReadOnly,
  radioTitle,
  radioDisabled,
  onChange,
  isChecked,
}) {
  return (
    <div
      className={`form-check ${isInline ? "form-check-inline" : ""} ${radioClass}`}
      title={radioTitle}
    >
      <input
        className={`form-check-input ${
          isInputInvalid ? "is-invalid" : "valid"
        }`}
        type="radio"
        id={radioID}
        name={radioName}
        value={radioValue}
        required={isRadioRequired}
        readOnly={isRadioReadOnly}
        disabled={radioDisabled ? radioDisabled : false}
        onChange={onChange}
        checked={isChecked}
      />
      <label className="form-check-label" htmlFor={radioID}>
        {radioLabel}
      </label>
    </div>
  );
}

Radio.propTypes = {
  isInline: PropTypes.bool,
  radioLabel: PropTypes.string,
  radioID: PropTypes.string,
  radioName: PropTypes.string,
  radioValue: PropTypes.string,
  radioTitle: PropTypes.string,
  radioDisabled: PropTypes.bool,
  isInputInvalid: PropTypes.bool,
  isRadioRequired: PropTypes.bool,
  isRadioReadOnly: PropTypes.bool,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};
