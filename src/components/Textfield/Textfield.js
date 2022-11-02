import PropTypes from "prop-types";
import React from "react";

export default function Textfield({
  isTextfieldInvalid,
  textfieldID,
  textfieldType,
  textfieldSize,
  textfieldMin,
  textfieldMax,
  textfieldMinLength,
  textfieldMaxLength,
  textfieldPlaceholder,
  textfieldValue,
  hasPrependIcon,
  isTextfieldRequired,
  textfieldTabIndex,
  isAutoFocus,
  isTextfieldReadOnly,
  textfieldDisabled,
  onChange,
}) {
  return (
    <input
      className={`form-control 
            ${textfieldSize}
            ${isTextfieldInvalid ? "is-invalid" : "valid"}
            ${hasPrependIcon ? "border-left-0" : ""}
            `}
      type={textfieldType}
      id={textfieldID}
      min={textfieldMin}
      max={textfieldMax}
      minLength={textfieldMinLength}
      maxLength={textfieldMaxLength}
      placeholder={textfieldPlaceholder}
      value={textfieldValue}
      required={isTextfieldRequired}
      tabIndex={textfieldTabIndex}
      autoFocus={isAutoFocus}
      readOnly={isTextfieldReadOnly}
      disabled={textfieldDisabled ? textfieldDisabled : false}
      onChange={onChange}
    />
  );
}

Textfield.propTypes = {
  textfieldTitle: PropTypes.string,
  isTextfieldInvalid: PropTypes.bool,
  textfieldID: PropTypes.string,
  textfieldType: PropTypes.oneOf([
    "text",
    "email",
    "tel",
    "date",
    "number",
    "password",
    "file",
  ]),
  textfieldSize: PropTypes.oneOf(["", "form-control-sm", "form-control-lg"]),
  textfieldMin: PropTypes.number,
  textfieldMax: PropTypes.number,
  textfieldMinLength: PropTypes.number,
  textfieldMaxLength: PropTypes.number,
  textfieldPlaceholder: PropTypes.string,
  textfieldValue: PropTypes.string,
  textfieldTabIndex: PropTypes.number,
  isAutoFocus: PropTypes.bool,
  isTextfieldRequired: PropTypes.bool,
  isTextfieldReadOnly: PropTypes.bool,
  textfieldDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};
