import PropTypes from "prop-types";
import React from "react";
import Note from "../Note";
import IconCheck from "../IconCheck";

import "./IconCheckGroup.css";

export default function IconCheckGroup({
  options,
  isInputInvalid,
  validateText,
}) {
  return (
      <div className="form-group">
        <div
          className="btn-group"
        >
          {options.map((option, i) => {
            return (
              <IconCheck
                iconCheckID={option.id}
                dataTID={option.dataTID}
                hasIcon={true}
                checkIcon={option.checkIcon}
                checkValue={option.checkValue}
                checkName={option.checkName}
                isChecked={option.isChecked}
                checkTitle={option.checkTitle}
                checkSize={option.checkSize}
                checkDisabled={option.checkDisabled}
                onChange={option.onChange}
                children={option.children}
              />
            );
          })}
        </div>
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

IconCheckGroup.propTypes = {
  options: PropTypes.array,
  isInputInvalid: PropTypes.bool,
  validateText: PropTypes.string,
}