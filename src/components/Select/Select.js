import PropTypes from "prop-types";
import React from "react";

export default function Select({
  selectID,
  selectSize,
  isSelectRequired,
  isSelectInvalid,
  hasPrependIcon,
  selectMultiple,
  selectTabIndex,
  isAutoFocus,
  selectDisabled,
  selectOptions,
  onChange,
}) {
  return (
    <select
      className={`form-control 
                ${selectSize}
                ${isSelectInvalid ? "is-invalid" : "valid"}
                ${hasPrependIcon ? "border-left-0" : ""}
                `}
      id={selectID}
      required={isSelectRequired}
      multiple={selectMultiple ? selectMultiple : false}
      tabIndex={selectTabIndex}
      autoFocus={isAutoFocus}
      disabled={selectDisabled ? selectDisabled : false}
      onChange={onChange}
    >
      {selectOptions.map((item, i) => {
        return (
          <option
            key={i}
            value={item.value}
            disabled={item.disabled ? item.disabled : false}
          >
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  isSelectInvalid: PropTypes.bool,
  hasPrependIcon: PropTypes.bool,
  selectID: PropTypes.string,
  selectSize: PropTypes.oneOf(["", "form-control-sm", "form-control-lg"]),
  isSelectRequired: PropTypes.bool,
  selectMultiple: PropTypes.bool,
  selectTabIndex: PropTypes.number,
  isAutoFocus: PropTypes.bool,
  selectDisabled: PropTypes.bool,
  selectOptions: PropTypes.array,
  selectHelperText: PropTypes.string,
  onChange: PropTypes.func,
};
