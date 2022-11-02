import PropTypes from "prop-types";
import React from "react";

export default function Textarea({
  isTextareaInvalid,
  isTextareaReadOnly,
  isTextareaRequired,
  hasPrependIcon,
  textareaID,
  textareaRows,
  TextareaTabIndex,
  isAutoFocus,
  textareaDisabled,
  onChange,
}) {
  return (
    <textarea
      className={`form-control
            ${isTextareaInvalid ? "is-invalid" : "valid"}
            ${hasPrependIcon ? "border-left-0" : ""}
            `}
      id={textareaID}
      rows={textareaRows}
      required={isTextareaRequired}
      tabIndex={TextareaTabIndex}
      autoFocus={isAutoFocus}
      readOnly={isTextareaReadOnly}
      disabled={textareaDisabled ? textareaDisabled : false}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  textareaLabel: PropTypes.string,
  textareaTitle: PropTypes.string,
  isTextareaInvalid: PropTypes.bool,
  isTextareaRequired: PropTypes.bool,
  isTextareaReadOnly: PropTypes.bool,
  hasPrependIcon: PropTypes.bool,
  textareaID: PropTypes.string,
  textareaRows: PropTypes.number,
  textareaHelperText: PropTypes.string,
  textareaDisabled: PropTypes.bool,
  TextareaTabIndex: PropTypes.number,
  isAutoFocus: PropTypes.bool,
  onChange: PropTypes.func,
};
