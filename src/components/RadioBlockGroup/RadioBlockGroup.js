import React from "react";
import { useState } from "react";
import Radio from "../Radio";

import "./RadioBlockGroup.css";

export default function RadioBlockGroup({
  options,
  radioName,
  isInline,
  isChecked
}){
  const [radioIsChecked, setIsChecked] = useState(isChecked);
  return(
    <div className={`list-group ${isInline ? "list-group-horizontal-lg" : ""}`}>
      {options.map((option, i) => {

        return (
          <Radio
            key={i}
            radioID={option.radioID}
            radioValue={option.radioValue}
            radioName={radioName}
            radioLabel={option.radioLabel}
            radioClass={`list-group-item px-5 py-4 ${(radioIsChecked === option.radioID) ? "checked" : ""} ${isInline ? "flex-fill" : ""}`}
            onChange={() => setIsChecked(option.radioID)}
            isRadioRequired={option.isRadioRequired}
            isRadioReadOnly={option.isRadioReadOnly}
            isChecked={radioIsChecked === option.radioID}
            radioDisabled={option.radioDisabled ? option.radioDisabled : false}
          />
        )
      })}
    </div>
  );
}