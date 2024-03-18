import React from "react";

import "./Inputgroup.css";

export default function Inputgroup({
  hideLabel,
  inputTitle,
  inputLabel,
  inputTabIndex,
  isInputRequired,
  isInputInvalid,
  isInputReadOnly,
  isAutoFocus,
  inputID,
  textfieldType,
  inputSize,
  textfieldMin,
  textfieldMax,
  textfieldMinLength,
  textfieldMaxLength,
  inputPlaceholder,
  inputValue,
  inputHelperText,
  hasPrependIcon,
  inputPPIconStyle,
  inputPPIcon,
  inputPPIconColor,
  hasAppend,
  inputAppend,
  inputDisabled,
  validateText,
  onChange,
  radioID,
  radioName,
  radioValue,
  isChecked,
}) {

    return (
        <div className="form-group" title={inputTitle}>
            <label htmlFor={inputID} className={` ${hideLabel ? "d-none" : ""}`}>
              {inputLabel}
              {isInputRequired && <sup className="text-danger">*</sup>}
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div
                  className={`input-group-text ${
                    isInputInvalid ? "border-danger text-danger" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={radioID}
                    name={radioName}
                    radioValue={radioValue}
                    checked={isChecked}
                  />
                </div>
              </div>
              {
                // Optional Prepended Icon
                hasPrependIcon && (
                  <div
                      className={`input-group-prepend`}>
                    <div
                      className={`input-group-text border-right-0 ${
                        isInputInvalid ? "border-danger text-danger" : ""
                      } ${
                        inputDisabled ? "bg-light" : "bg-white"
                      }`}
                    >
                      <i class={` 
                        ${inputPPIconStyle}
                        ${inputPPIcon}
                        ${inputPPIconColor}
                        fa-fw
                      `}
                      />
                    </div>
                  </div>
                )
              }
              {
                <input
                  type={textfieldType}
                  className={`form-control 
                        ${inputSize}
                        ${isInputInvalid ? "is-invalid" : "valid"}
                        ${hasPrependIcon ? "border-left-0" : ""}
                        `}
                  id={inputID}
                  min={textfieldMin}
                  max={textfieldMax}
                  minLength={textfieldMinLength}
                  maxLength={textfieldMaxLength}
                  placeholder={inputPlaceholder}
                  value={inputValue}
                  required={isInputRequired}
                  tabIndex={inputTabIndex}
                  autoFocus={isAutoFocus}
                  readOnly={isInputReadOnly}
                  disabled={inputDisabled ? inputDisabled : false}
                  onChange={onChange}
                />
              }
              {
                // Optional Appended Text
                hasAppend && (
                  <div className="input-group-append">
                    <div
                      className={`input-group-text ${
                        isInputInvalid ? "border-danger text-danger" : ""
                      }`}
                    >
                      {inputAppend}
                    </div>
                  </div>
                )
              }
            </div>
            {
            // Validation Text
            }
            <div className={`small ${isInputInvalid ? "d-block" : "d-none"}`}>
              <span className="text-danger">
                <i className="fas fa-exclamation-triangle fa-fw" />{' '}
                <span className="darker">{validateText}</span>
              </span>
            </div>
            {
            // Helper Text
            }
            <small className="form-text">{inputHelperText}</small>
        </div>
    );
}