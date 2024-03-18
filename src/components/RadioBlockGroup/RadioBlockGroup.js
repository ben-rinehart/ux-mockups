import React from "react";
import { useState } from "react";
import Radio from "../Radio";
import Note from "../Note";

import "./RadioBlockGroup.css";

export default function RadioBlockGroup({
  options,
  radioName,
  isInline,
  isChecked,
  groupHeader,
  isGroupRequired,
  inputHelperText,
  isInputInvalid,
  validateText,
  hideHeader
}){
  const [radioIsChecked, setIsChecked] = useState(isChecked);
  return(
    <div className="form-group">
      <label className={` ${hideHeader ? "d-none" : ""}`}>
        {groupHeader}
        {isGroupRequired && <sup className="text-danger">*</sup>}
      </label>
      <div className={`list-group ${isInline ? "list-group-horizontal-lg" : ""}`}>
        {options.map((option, i) => {
          return (
            <Radio
              key={i}
              radioID={option.radioID}
              radioValue={option.radioValue}
              radioName={radioName}
              radioLabel={option.radioLabel}
              radioClass={`list-group-item radioblock ${isInputInvalid ? "is-invalid" : "valid"} ${(radioIsChecked === option.radioID) ? "checked" : ""} ${isInline ? "flex-fill" : ""}`}
              onChange={() => setIsChecked(option.radioID)}
              isRadioRequired={option.isRadioRequired}
              isRadioReadOnly={option.isRadioReadOnly}
              isChecked={radioIsChecked === option.radioID}
              radioDisabled={option.radioDisabled ? option.radioDisabled : false}
            />
          )
        })}
      </div>
      <small className="form-text">{inputHelperText}</small>
      <div className={`small ${isInputInvalid ? "d-block" : "d-none"}`}>
        <Note
          noteType="danger"
          noteIcon="fa-exclamation-triangle"
          noteText={validateText}
        />
      </div>
    </div>
  );
}