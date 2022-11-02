import Checkbox from "../Checkbox";
import Radio from "../Radio";
import Note from "../Note";
import React from "react";

import "./CheckGroup.css";

export default function CheckGroup(props) {
  return (
    <div id={props.checkGroupID} className="form-group">
      <div>
        {props.checkGroupHeader}
        {props.isCheckGroupRequired && <sup className="text-danger">*</sup>}
        <small className="form-text">{props.inputHelperText}</small>
      </div>
      {props.options.map((item, i) => {
        if (props.useCheckboxes) {
          return (
            <Checkbox
              key={i}
              isInline={props.isInline}
              checkboxLabel={item.label}
              checkboxID={item.id}
              checkboxName={props.checkGroupName}
              checkboxValue={item.value}
              isInputInvalid={props.isInputInvalid}
              isCheckboxRequired={item.isInputRequired}
              isCheckboxReadOnly={item.isInputReadOnly}
              checkboxDisabled={item.disabled}
              onChange={item.onChange}
            />
          );
        }
        return (
          <Radio
            key={i}
            isInline={props.isInline}
            radioLabel={item.label}
            radioID={item.id}
            radioName={props.checkGroupName}
            radioValue={item.value}
            isInputInvalid={props.isInputInvalid}
            isRadioRequired={item.isInputRequired}
            isRadioReadOnly={item.isInputReadOnly}
            radioDisabled={item.disabled}
            onChange={item.onChange}
          />
        );
      })}
      {
        // Validation Text
      }
      <div className={`small ${props.isInputInvalid ? "d-block" : "d-none"}`}>
        <Note
          noteType="danger"
          noteIcon="fa-exclamation-triangle"
          noteText={props.validateText}
        />
      </div>
    </div>
  );
}
