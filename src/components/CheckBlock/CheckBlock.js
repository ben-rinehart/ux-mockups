import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import Checkbox from "../Checkbox";

import "./CheckBlock.css";

export default function CheckBlock({
  checkblockID,
  checkblockValue,
  checkblockName,
  checkblockLabel,
  ischeckblockRequired,
  ischeckblockisReadOnly,
  checkblockDisabled,
   isChecked,
}) {

  const [checkIsChecked, setIsChecked] = useState(isChecked);
  return (
    <Checkbox
      checkboxID={checkblockID}
      checkboxValue={checkblockValue}
      checkboxName={checkblockName}
      checkboxLabel={checkblockLabel}
      checkboxClass={`list-group-item checkblock ${checkIsChecked ? "checked" : ""}`}
      onChange={() => setIsChecked((prev) => !prev)}
      ischeckboxRequired={ischeckblockRequired}
      ischeckboxReadOnly={ischeckblockisReadOnly}
      isChecked={isChecked}
      checkboxDisabled={checkblockDisabled}
    />
  )
}