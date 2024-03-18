import PropTypes from "prop-types";
import React from "react";

import "./Multifield.css";

export default function Multifield({multifieldLabel, multifieldOptions}) {
  return (
    <div className="form-group">
      <label>{multifieldLabel}</label>
      <div className="csg-multifield">
      {multifieldOptions.map((item, i) => {
        return (
          <input
            key={i}
            type={item.type}
            name={item.name}
            id={item.id}
            className="form-control"
            placeholder={item.placeholder}
            min={item.min}
            max={item.max}
            minLength={item.minLength}
            maxLength={item.maxLength}
            value={item.value}
            required={item.required}
            tabIndex={item.tabIndex}
            autoFocus={item.autoFocus}
            readOnly={item.readOnly}
            disabled={item.textfieldDisabled ? item.textfieldDisabled : false}
            onChange={item.onChange}
          />
        );
      })}
      </div>
    </div>
  );
}

Multifield.propTypes = {
    multifieldLabel: PropTypes.string,
    multifieldOptions: PropTypes.array,
};