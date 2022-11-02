import PropTypes from "prop-types";
import React from "react";

import "./Switch.css";

export default function Switch({
  switchLabel,
  switchID,
  switchName,
  switchValue,
  switchTitle,
  isInputInvalid,
  isSwitchRequired,
  isSwitchReadOnly,
  switchDisabled,
  onChange,
  isChecked,
}) {
  return (
    <div className="custom-control custom-switch" title={switchTitle}>
      <input
        type="checkbox"
        className={`custom-control-input ${
          isInputInvalid ? "is-invalid" : "valid"
        }`}
        id={switchID}
        name={switchName}
        value={switchValue}
        required={isSwitchRequired}
        readOnly={isSwitchReadOnly}
        disabled={switchDisabled ? switchDisabled : false}
        onChange={onChange}
        checked={isChecked}
      />
      <label className="custom-control-label" htmlFor={switchID}>
        {switchLabel}
      </label>
    </div>
  );
}

Switch.propTypes = {
  switchLabel: PropTypes.string,
  switchID: PropTypes.string,
  switchName: PropTypes.string,
  switchValue: PropTypes.string,
  switchTitle: PropTypes.string,
  isInputInvalid: PropTypes.bool,
  switchDisabled: PropTypes.bool,
  isSwitchRequired: PropTypes.bool,
  isSwitchReadOnly: PropTypes.bool,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};
