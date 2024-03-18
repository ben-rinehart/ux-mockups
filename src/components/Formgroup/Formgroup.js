import PropTypes from "prop-types";
import Select from "../Select";
import Textarea from "../Textarea";
import Textfield from "../Textfield";
import MultiSelect from "../MultiSelect";
import Icon from "../Icon";
import Button from "../Button";
import Note from "../Note";
import React from "react";

export default function Formgroup({
  formElement,
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
  textareaRows,
  selectMultiple,
  selectOptions,
  inputPlaceholder,
  inputValue,
  inputHelperText,
  hasPrepend,
  inputPrepend,
  hasPrependIcon,
  inputPPIconStyle,
  inputPPIcon,
  inputPPIconColor,
  hasAppend,
  hasAppendButton,
  btnID,
  btnStyle,
  btnType,
  btnTitle,
  btnText,
  btnOnClick,
  inputAppend,
  inputDisabled,
  validateText,
  onChange,
  selectLoading,
  isMulti,
  isOpen,
  isLoading,
  onInputChange,
  selectValue,
  selectKey,
  selectFilterOption
}) {
  function renderSwitch(formElementType) {
    switch (formElementType) {
      case "input":
        return (
          <Textfield
            textfieldSize={inputSize}
            isTextfieldInvalid={isInputInvalid}
            hasPrependIcon={hasPrependIcon}
            textfieldType={textfieldType}
            textfieldID={inputID}
            textfieldMin={textfieldMin}
            textfieldMax={textfieldMax}
            textfieldMinLength={textfieldMinLength}
            textfieldMaxLength={textfieldMaxLength}
            textfieldPlaceholder={inputPlaceholder}
            textfieldValue={inputValue}
            textfieldDisabled={inputDisabled}
            isTextfieldRequired={isInputRequired}
            textfieldTabIndex={inputTabIndex}
            isAutoFocus={isAutoFocus}
            isTextfieldReadOnly={isInputReadOnly}
            onChange={onChange}
          />
        );
      case "textarea":
        return (
          <Textarea
            textareaID={inputID}
            textareaRows={textareaRows}
            textareaDisabled={inputDisabled}
            isTextareaInvalid={isInputInvalid}
            hasPrependIcon={hasPrependIcon}
            isTextareaRequired={isInputRequired}
            textareaTabIndex={inputTabIndex}
            isAutoFocus={isAutoFocus}
            isTextareaReadOnly={isInputReadOnly}
            onChange={onChange}
          />
        );
      case "select":
        return (
          <Select
            selectSize={inputSize}
            isSelectInvalid={isInputInvalid}
            hasPrependIcon={hasPrependIcon}
            selectID={inputID}
            selectMultiple={selectMultiple}
            isSelectRequired={isInputRequired}
            selectTabIndex={inputTabIndex}
            isAutoFocus={isAutoFocus}
            selectDisabled={inputDisabled}
            selectOptions={selectOptions}
            onChange={onChange}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
            selectSize={inputSize}
            isSelectInvalid={isInputInvalid}
            hasPrependIcon={hasPrependIcon}
            selectID={inputID}
            selectMultiple={selectMultiple}
            selectDisabled={inputDisabled}
            selectOptions={selectOptions}
            isMulti={isMulti}
            selectLoading={selectLoading}
            isOpen={isOpen}
            isLoading={isLoading}
            onInputChange={onInputChange}
            selectValue={selectValue}
            selectKey={selectKey}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="form-group" title={inputTitle}>
      <label htmlFor={inputID} className={` ${hideLabel ? "d-none" : ""}`}>
        {inputLabel}
        {isInputRequired && <sup className="text-danger">*</sup>}
      </label>
      <div className="input-group">
        {
          // Optional Prepended Text
          hasPrepend && (
            <div className="input-group-prepend">
              <div
                className={`input-group-text ${
                  isInputInvalid ? "border-danger text-danger" : ""
                }`}
              >
                {inputPrepend}
              </div>
            </div>
          )
        }
        {
          // Optional Prepended Icon
          hasPrependIcon && (
            <div className="input-group-prepend">
              <div
                className={`input-group-text bg-white border-right-0 ${
                  isInputInvalid ? "border-danger text-danger" : ""
                }`}
              >
                <Icon
                  iconStyle={inputPPIconStyle}
                  iconName={inputPPIcon}
                  iconColor={inputPPIconColor}
                  isFixedWidth={true}
                />
              </div>
            </div>
          )
        }

        {
          // The input, textarea, select, or multiselect field
          renderSwitch(formElement)
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
        {
          // Optional Appended Button
          hasAppendButton && (
            <div className="input-group-append">
              <Button
                btnID={btnID}
                btnStyle={btnStyle}
                btnType={btnType}
                btnTitle={btnTitle}
                btnDisabled={inputDisabled}
                btnOnClick={btnOnClick}
              >
                {btnText}
              </Button>
            </div>
          )
        }
      </div>
      {
        // Validation Text
      }
      <div className={`small ${isInputInvalid ? "d-block" : "d-none"}`}>
        <Note
          noteType="danger"
          noteIcon="fa-exclamation-triangle"
          noteText={validateText}
        />
      </div>
      {
        // Helper Text
      }
      <small className="form-text">{inputHelperText}</small>
    </div>
  );
}

Formgroup.propTypes = {
  formElement: PropTypes.oneOf(["input", "textarea", "select", "multiselect"])
    .isRequired,
  inputLabel: PropTypes.string,
  inputTitle: PropTypes.string,
  hideLabel: PropTypes.bool,
  isInputRequired: PropTypes.bool,
  isInputReadOnly: PropTypes.bool,
  isInputInvalid: PropTypes.bool,
  inputID: PropTypes.string,
  textfieldType: PropTypes.oneOf([
    "text",
    "email",
    "tel",
    "date",
    "number",
    "password",
    "file",
  ]),
  inputSize: PropTypes.oneOf(["", "form-control-sm", "form-control-lg"]),
  textfieldMin: PropTypes.number,
  textfieldMax: PropTypes.number,
  textfieldMinLength: PropTypes.number,
  textfieldMaxLength: PropTypes.number,
  textareaRows: PropTypes.number,
  selectMultiple: PropTypes.bool,
  selectOptions: PropTypes.array,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  inputDisabled: PropTypes.bool,
  hasPrepend: PropTypes.bool,
  inputPrepend: PropTypes.string,
  hasPrependIcon: PropTypes.bool,
  inputPPIconStyle: PropTypes.oneOf(["fas", "far", "fab"]),
  inputPPIcon: PropTypes.string,
  inputPPIconColor: PropTypes.oneOf([
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
  hasAppend: PropTypes.bool,
  inputAppend: PropTypes.string,
  hasAppendButton: PropTypes.bool,
  btnText: PropTypes.string,
  btnID: PropTypes.string,
  btnType: PropTypes.oneOf(["btn-primary", "btn-secondary", "btn-danger"]),
  btnSize: PropTypes.oneOf(["", "btn-sm", "btn-lg"]),
  isDropdown: PropTypes.bool,
  btnTitle: PropTypes.string,
  hasBtnIcon: PropTypes.bool,
  btnIconStyle: PropTypes.oneOf(["fas", "far", "fab"]),
  btnIconColor: PropTypes.oneOf([
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
  btnIcon: PropTypes.string,
  btnDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  validateText: PropTypes.string,
  inputHelperText: PropTypes.string,
};
